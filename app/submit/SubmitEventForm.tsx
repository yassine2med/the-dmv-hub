'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/config'
import type { LocationArea, VibeCategory } from '@/lib/types'

const vibeOptions: VibeCategory[] = [
  'Gaming',
  'Food',
  'Outdoors',
  'Nightlife',
  'Fitness',
  'Dating Mixers',
  'Speed Friending',
  'Day Trips',
  'Movies',
  'Volunteering',
]

const locationOptions: LocationArea[] = ['DC', 'MD', 'VA', 'Virtual']

const inputClass =
  'w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-hub-text placeholder:text-hub-muted/50 outline-none transition-all duration-300 focus:border-hub-teal/70 focus:shadow-[0_0_15px_rgba(67,206,162,0.15)] focus:ring-1 focus:ring-hub-teal/50'

export function SubmitEventForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/submit-event', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = (await res.json().catch(() => null)) as { message?: string } | null

      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError(result?.message ?? 'Something blocked the submission. Try again, or email the event idea directly.')
      }
    } catch {
      setError('The submission service did not respond. Try again, or email the event idea directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-hub-gradient font-mono text-xl font-black text-black">
          OK
        </div>
        <h2 className="text-3xl font-black text-hub-text">Got it.</h2>
        <p className="mx-auto mt-3 max-w-md text-hub-muted">
          We&apos;ll review your submission and post it to the community if approved.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {error ? (
        <div className="rounded-xl border border-hub-pink/30 bg-hub-pink/10 p-4 text-sm font-semibold leading-relaxed text-hub-text">
          {error}{' '}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-hub-teal underline decoration-hub-teal/40 underline-offset-4">
            Email Yaz
          </a>
        </div>
      ) : null}

      <div>
        <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
          [FIELD: EVENT_NAME] *
        </label>
        <input name="eventName" required placeholder="Game Night in Adams Morgan" className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
            [FIELD: DATE_TIME] *
          </label>
          <input name="date" type="datetime-local" required className={inputClass} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
            [FIELD: LOCATION_ZONE] *
          </label>
          <select name="locationArea" required className={inputClass}>
            <option value="" className="bg-hub-card text-hub-text">Select area</option>
            {locationOptions.map((loc) => (
              <option key={loc} value={loc} className="bg-hub-card text-hub-text">
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
          [FIELD: VENUE_LABEL]
        </label>
        <input name="locationLabel" placeholder="Meridian Pint, Columbia Heights DC" className={inputClass} />
      </div>

      <div>
        <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
          [FIELD: VIBE_CATEGORY] *
        </label>
        <select name="vibe" required className={inputClass}>
          <option value="" className="bg-hub-card text-hub-text">Select vibe</option>
          {vibeOptions.map((vibe) => (
            <option key={vibe} value={vibe} className="bg-hub-card text-hub-text">
              {vibe}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
          [FIELD: DESCRIPTION] *
        </label>
        <textarea
          name="description"
          required
          rows={5}
          placeholder="What should people expect? Who is this good for?"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-hub-muted">
          [FIELD: DISCORD_HANDLE]
        </label>
        <input name="discordHandle" placeholder="yaz" className={inputClass} />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full relative overflow-hidden group/btn border border-transparent hover:border-hub-teal/30 hover:shadow-[0_0_25px_rgba(67,206,162,0.25)]"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Event Idea'}
      </Button>
    </form>
  )
}
