import { NextResponse } from 'next/server'
import { isFormspreeConfigured } from '@/lib/server/formspree'

export const dynamic = 'force-dynamic'

export function GET() {
  return NextResponse.json({
    ok: true,
    app: 'dmv-hub',
    phase: 'phase-1',
    services: {
      contactForm: isFormspreeConfigured('contact') ? 'configured' : 'placeholder',
      eventForm: isFormspreeConfigured('event') ? 'configured' : 'placeholder',
    },
    checkedAt: new Date().toISOString(),
  })
}
