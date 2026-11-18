'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/lib/config'

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [subject, setSubject] = useState('General Inquiry')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const handleClose = useCallback(() => setIsOpen(false), [])

  // Listen to global open event
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail?.subject) {
        setSubject(customEvent.detail.subject)
      } else {
        setSubject('General Inquiry')
      }
      setSubmitted(false)
      setError('')
      setIsOpen(true)
    }

    window.addEventListener('open-contact-modal', handleOpen)
    return () => window.removeEventListener('open-contact-modal', handleOpen)
  }, [])

  // Keep keyboard and scroll interaction inside the modal while it is open.
  useEffect(() => {
    if (!isOpen) return

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        handleClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement
      if (event.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !dialogRef.current?.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [handleClose, isOpen])

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = (await res.json().catch(() => null)) as { message?: string } | null

      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(result?.message ?? 'Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setError('Failed to reach submission service. Please check connection or email us.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-hub-text placeholder:text-hub-muted/40 outline-none transition-all duration-300 focus:border-hub-teal/70 focus:shadow-[0_0_15px_rgba(67,206,162,0.15)] focus:ring-1 focus:ring-hub-teal/50'

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="hub-panel-strong relative z-10 my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-hub-dark p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 sm:p-8">
        {/* Glow ambient lines */}
        <div className="absolute right-[-4rem] top-[-4rem] h-32 w-32 rounded-full bg-hub-teal/[0.12] blur-2xl pointer-events-none" />
        <div className="absolute bottom-[-4rem] left-[-4rem] h-32 w-32 rounded-full bg-hub-pink/[0.12] blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-hub-muted hover:bg-white/5 hover:text-hub-text transition-all duration-200"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-hub-gradient font-mono text-xl font-black text-black">
              OK
            </div>
            <h3 className="text-2xl font-black text-hub-text">Message Sent</h3>
            <p className="mx-auto mt-3 max-w-sm text-sm text-hub-muted leading-relaxed">
              Thanks for getting in touch! We&apos;ll check it out and get back to you soon.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                handleClose()
              }}
              className="mt-8 btn-sheen rounded-lg border border-white/10 bg-white/[0.045] px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-hub-text hover:bg-white/[0.07] transition-all duration-200"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-teal">
                {'// CONTACT_CHANNEL'}
              </p>
              <h2 id="contact-modal-title" className="mt-2 text-2xl font-black text-hub-text">Get in Touch</h2>
              <p id="contact-modal-description" className="mt-1.5 text-xs text-hub-muted">
                Drop us a line and we will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {error ? (
                <div className="rounded-lg border border-hub-pink/30 bg-hub-pink/10 p-3 text-xs font-semibold leading-relaxed text-hub-text">
                  {error}{' '}
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-hub-teal underline decoration-hub-teal/40">
                    Email directly
                  </a>
                </div>
              ) : null}

              <div>
                <label htmlFor="contact-name" className="mb-1 block text-[10px] font-mono uppercase tracking-widest text-hub-muted">
                  [FIELD: NAME] *
                </label>
                <input id="contact-name" name="name" required placeholder="Alex Mercer" className={inputClass} />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1 block text-[10px] font-mono uppercase tracking-widest text-hub-muted">
                  [FIELD: EMAIL] *
                </label>
                <input id="contact-email" name="email" type="email" required placeholder="alex@example.com" className={inputClass} />
              </div>

              <div>
                <label htmlFor="contact-subject" className="mb-1 block text-[10px] font-mono uppercase tracking-widest text-hub-muted">
                  [FIELD: PURPOSE] *
                </label>
                <select id="contact-subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass}>
                  <option value="General Inquiry" className="bg-hub-card text-hub-text">General Inquiry</option>
                  <option value="Partnership Inquiry - The DMV Hub" className="bg-hub-card text-hub-text">Local Partnership</option>
                  <option value="Organizer/Team Application - The DMV Hub" className="bg-hub-card text-hub-text">Join the Team</option>
                  <option value="Sponsor / Donate" className="bg-hub-card text-hub-text">Sponsor / Donate</option>
                  <option value="Volunteering Inquiry" className="bg-hub-card text-hub-text">Volunteering</option>
                  <option value="Event Hosting" className="bg-hub-card text-hub-text">Host an Event</option>
                  <option value="Support & Feedback" className="bg-hub-card text-hub-text">Feedback / Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1 block text-[10px] font-mono uppercase tracking-widest text-hub-muted">
                  [FIELD: MESSAGE] *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-1/3 rounded-lg border border-white/5 bg-white/[0.02] py-3 text-sm font-bold uppercase tracking-wider text-hub-muted hover:bg-white/5 hover:text-hub-text transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-2/3 btn-sheen rounded-lg bg-hub-gradient py-3 text-sm font-black uppercase tracking-wider text-black hover:opacity-90 disabled:opacity-50 transition-all duration-200"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
