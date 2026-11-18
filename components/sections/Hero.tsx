import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { CitySkyline } from '@/components/ui/CitySkyline'
import type { Event } from '@/lib/types'
import { siteConfig } from '@/lib/config'

/* Warm accent per row, cycled across the "this week" card (DMV gradient stops). */
const rowAccents = [
  'from-hub-pink to-hub-purple',
  'from-hub-blue to-hub-teal',
  'from-hub-amber to-hub-terracotta',
]

export function Hero({ events }: { events: Event[] }) {
  const featured = events.filter((event) => event.featured)
  const heroEvents = (featured.length > 0 ? featured : events).slice(0, 3)

  return (
    <section className="relative overflow-hidden border-b border-hub-border bg-hub-paper">
      {/* Temporary warm photo slot — swap for a real candid of a DMV friend
          group at golden hour. Until then, a soft warm wash keeps it inviting. */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-100"
        data-needs-image="hero"
        style={{
          background:
            'radial-gradient(120% 90% at 85% 0%, rgba(242,169,59,0.16) 0%, transparent 55%),' +
            'radial-gradient(120% 100% at 0% 100%, rgba(232,116,59,0.10) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Soft place-grounding skyline at the bottom, in a warm tone. */}
      <CitySkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full text-hub-va-navy/[0.08] sm:h-24" />

      <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* ── Left: the invite ── */}
        <div className="max-w-3xl">
          <div className="hero-entrance hero-entrance-delay-1 mb-6 inline-flex items-center gap-3 rounded-full border border-hub-border bg-hub-card px-4 py-2 text-sm text-hub-muted shadow-[0_6px_16px_-10px_rgba(60,40,20,0.25)]">
            <span className="live-pulse" />
            <span className="font-bold text-hub-text">Founding Discord now open</span>
            <span className="hidden h-1 w-1 rounded-full bg-hub-border sm:block" />
            <span className="hidden sm:inline">District of Columbia · Maryland · Virginia</span>
          </div>

          <h1 className="hero-entrance hero-entrance-delay-2 max-w-full text-balance font-display text-[3.2rem] font-black leading-[1.02] text-hub-text min-[420px]:text-6xl lg:text-7xl">
            You know people
            <br />
            in the DMV.
            <br />
            <GradientText>But do you have people?</GradientText>
          </h1>

          <div className="hero-entrance hero-entrance-delay-3 mt-7 max-w-2xl space-y-3 border-l-2 border-hub-terracotta/40 pl-4 sm:pl-5">
            <p className="text-lg leading-relaxed text-hub-text/80 sm:text-xl">
              Adulting here is easy. Building a real social life after 25 is the part
              nobody gave you a map for.
            </p>
            <p className="text-sm leading-relaxed text-hub-muted sm:text-base">
              The DMV Hub connects adults 22+ across the District of Columbia, Maryland, and Virginia for
              friends, dating, events, and weekend plans that actually happen.
            </p>
          </div>

          <div className="hero-entrance hero-entrance-delay-4 mt-8 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="/start" size="lg" className="w-full sm:w-auto">
              Join the Community
            </Button>
            <Button href="/events" size="lg" variant="secondary" className="w-full sm:w-auto">
              See What&apos;s Happening
            </Button>
            <a
              href="/vibes"
              className="text-center text-sm font-bold text-hub-muted underline underline-offset-4 transition-colors hover:text-hub-terracotta sm:ml-2 sm:text-left"
            >
              Take the Vibe Quiz
            </a>
          </div>

          <div className="hero-entrance hero-entrance-delay-4 mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em]">
            {['No app', 'No swiping', 'Just show up'].map((item) => (
              <span key={item} className="route-chip rounded-full px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: what's happening this week ── */}
        <div className="hero-entrance hero-entrance-delay-3 relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="hub-panel-strong relative overflow-hidden rounded-3xl p-6 sm:p-7">
            {/* Header */}
            <div className="relative flex items-center justify-between gap-4 border-b border-hub-border pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-hub-terracotta">
                  This week
                </p>
                <p className="font-display text-lg font-black leading-tight text-hub-text">
                  People are getting together
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hub-gradient text-base font-black text-black shadow-[0_8px_20px_-10px_rgba(60,40,20,0.4)]">
                {heroEvents.length}
              </span>
            </div>

            {/* Event rows */}
            <div className="relative mt-5 space-y-2.5">
              {heroEvents.map((event, index) => (
                <a
                  key={event.id}
                  href={event.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-hub-border bg-hub-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-hub-terracotta/40 hover:shadow-[0_14px_30px_-16px_rgba(60,40,20,0.25)]"
                >
                  {/* Warm gradient thumb with the area code — stands in until real
                      event photos land. */}
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${
                      rowAccents[index % rowAccents.length]
                    } text-xs font-black text-black`}
                    data-needs-image="event-thumb"
                    aria-hidden="true"
                  >
                    {event.locationArea}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-hub-muted">
                      {event.locationArea} · {event.vibe}
                    </p>
                    <h3 className="mt-0.5 truncate font-display text-[0.98rem] font-black leading-tight text-hub-text">
                      {event.title}
                    </h3>
                    <p className="mt-0.5 truncate text-xs text-hub-muted">{event.locationLabel}</p>
                  </div>
                  <span
                    aria-hidden
                    className="ml-auto shrink-0 text-lg leading-none text-hub-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-hub-terracotta"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href={siteConfig.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-hub-border bg-hub-sand py-3 text-sm font-bold text-hub-text transition-colors hover:border-hub-terracotta hover:text-hub-terracotta"
            >
              See who&apos;s going this week
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
