import { siteConfig } from '@/lib/config'

type SubmissionTarget = 'contact' | 'event'

const fallbackFormId = siteConfig.formspreeId.startsWith('REPLACE_WITH_')
  ? ''
  : siteConfig.formspreeId

export function getFormspreeId(target: SubmissionTarget) {
  // Browser tests exercise the full API/UI path without sending synthetic mail.
  if (process.env.DISABLE_FORM_FORWARDING === 'true') return ''

  if (target === 'contact') {
    return process.env.FORMSPREE_CONTACT_FORM_ID || process.env.FORMSPREE_FORM_ID || fallbackFormId
  }

  return process.env.FORMSPREE_EVENT_FORM_ID || process.env.FORMSPREE_FORM_ID || fallbackFormId
}

export function isFormspreeConfigured(target: SubmissionTarget) {
  return getFormspreeId(target).length > 0
}

export async function forwardToFormspree(target: SubmissionTarget, data: FormData) {
  const formId = getFormspreeId(target)

  if (!formId) {
    return {
      ok: false,
      status: 503,
      message:
        target === 'contact'
          ? `Contact form submissions are not connected yet. Please email us directly at ${siteConfig.contactEmail}.`
          : `Event submissions are not connected yet. Email ${siteConfig.contactEmail} with your event idea for now.`,
    }
  }

  try {
    const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(8_000),
    })

    return {
      ok: response.ok,
      status: response.status,
      message: response.ok
        ? 'Submission received.'
        : 'Something blocked the submission. Try again, or email us directly.',
    }
  } catch {
    return {
      ok: false,
      status: 502,
      message: 'The submission service is unavailable. Try again, or email us directly.',
    }
  }
}
