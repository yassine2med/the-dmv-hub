import { NextResponse } from 'next/server'
import { forwardToFormspree } from '@/lib/server/formspree'
import { checkRateLimit, isRequestTooLarge, oversizedResponse, rateLimitResponse } from '@/lib/server/security'
import { validateContactSubmission } from '@/lib/server/validation'

export async function POST(request: Request) {
  if (isRequestTooLarge(request)) {
    return oversizedResponse()
  }

  const rateLimit = checkRateLimit(request, 'contact')
  if (!rateLimit.ok) {
    return rateLimitResponse(rateLimit.resetAt)
  }

  const formData = await request.formData().catch(() => null)
  if (!formData) {
    return NextResponse.json({ ok: false, message: 'Invalid form payload.' }, { status: 400 })
  }

  const validation = validateContactSubmission(formData)

  if (!validation.ok) {
    return NextResponse.json({ ok: false, message: validation.message }, { status: validation.status })
  }

  const result = await forwardToFormspree('contact', validation.data)
  return NextResponse.json({ ok: result.ok, message: result.message }, { status: result.status })
}
