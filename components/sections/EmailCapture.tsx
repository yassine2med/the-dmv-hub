'use client'

/**
 * EmailCapture — a soft-conversion path for people not ready to click into
 * Discord yet. Reuses the existing /api/contact → Formspree pipeline (sends a
 * fixed name/subject/message), so no new backend is required. Signups land in
 * the same Formspree inbox tagged "Weekly Drop Signup".
 */

import { useState } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GradientText } from '@/components/ui/GradientText'
import { siteConfig } from '@/lib/config'

type Status = 'idle' | 'loading' | 'done' | 'error'

export function EmailCapture() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    const form = e.currentTarget
    const raw = new FormData(form)

    const data = new FormData()
    data.set('name', 'Weekly Drop Subscriber')
    data.set('email', String(raw.get('email') ?? ''))
    data.set('subject', 'Email List Signup')
    data.set('message', 'Joined the DMV Hub email list from the website.')
    data.set('website', String(raw.get('website') ?? '')) // honeypot passthrough

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = (await res.json().catch(() => null)) as { message?: string } | null
      if (res.ok) {
        setStatus('done')
        form.reset()
      } else {
        setStatus('error')
        setError(result?.message ?? 'Could not sign you up. Try again in a moment.')
      }
    } catch {
      setStatus('error')
      setError('Could not reach the server. Try again, or just join the Discord.')
    }
  }

  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <ScrollReveal direction="up">
        <div className="hub-panel-strong relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-8 text-center sm:p-10">
          <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-44 w-44 rounded-full bg-hub-amber/[0.12] blur-3xl" />

          <p className="section-label justify-center">Occasional updates</p>
          <h2 className="mx-auto mt-5 max-w-xl text-balance font-display text-3xl font-black leading-tight text-hub-text sm:text-4xl">
            Not ready for the Discord yet? <GradientText>Stay in the loop.</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-hub-muted">
            Leave your email and we&apos;ll give you a heads-up when something worth your weekend is happening across
            DC, MD, and VA. No set schedule. You can opt out anytime by emailing us.
          </p>

          {status === 'done' ? (
            <div className="mx-auto mt-8 max-w-md rounded-xl border border-hub-teal/40 bg-hub-teal/[0.12] p-5">
              <p className="font-black text-hub-text">You&apos;re on the list.</p>
              <p className="mt-1 text-sm text-hub-muted">
                We&apos;ll reach out when something good is coming up. See you out there.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              {/* honeypot */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <label htmlFor="weekly-drop-email" className="sr-only">
                Email address
              </label>
              <input
                id="weekly-drop-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-lg border border-hub-border bg-hub-paper px-4 py-3 text-hub-text outline-none transition-all duration-300 placeholder:text-hub-muted/50 focus:border-hub-terracotta focus:ring-1 focus:ring-hub-terracotta/40"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-sheen shrink-0 rounded-lg bg-hub-gradient px-6 py-3 text-sm font-black uppercase tracking-wider text-black transition-opacity duration-200 hover:opacity-90 disabled:opacity-50"
              >
                {status === 'loading' ? 'Joining…' : 'Keep me posted'}
              </button>
            </form>
          )}

          {status === 'error' ? (
            <p className="mx-auto mt-4 max-w-md text-sm text-hub-terracotta">
              {error}{' '}
              <a href={siteConfig.discordInvite} className="text-hub-text underline decoration-hub-terracotta/50">
                Join the Discord instead
              </a>
            </p>
          ) : null}
        </div>
      </ScrollReveal>
    </section>
  )
}
