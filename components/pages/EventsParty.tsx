import Link from 'next/link'
import { EventCardParty } from '@/components/sections/EventCardParty'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { vibes } from '@/data/vibes'
import type { EventsViewProps } from '@/components/pages/events-view'

export function EventsParty({ events, selectedVibe, selectedArea, feature }: EventsViewProps) {
  return (
    <div className="site-grid min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">Event dispatch</p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Find the plan that gets you <GradientText>out of the house.</GradientText>
            </h1>
          </div>
          <div className="hub-panel rounded-2xl p-6">
            <p className="text-lg leading-relaxed text-hub-muted">
              Planned hangouts across the District of Columbia, Maryland, and Virginia. Dates and neighborhoods
              are planning targets until the organizer confirms the final venue, cost, accessibility details,
              and host in Discord. Check there before traveling.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['DC', 'MD', 'VA'].map((area) => {
                const isSelected = selectedArea === area
                const href = selectedVibe
                  ? `/events?filter=${encodeURIComponent(selectedVibe)}&area=${area}`
                  : `/events?area=${area}`
                const resetHref = selectedVibe ? `/events?filter=${encodeURIComponent(selectedVibe)}` : `/events`

                const dotColor =
                  area === 'DC'
                    ? 'bg-hub-dc-red shadow-[0_0_8px_#DC143C]'
                    : area === 'MD'
                    ? 'bg-[#FFCC00] shadow-[0_0_8px_#FFCC00]'
                    : 'bg-hub-blue shadow-[0_0_8px_#4158D0]'

                return (
                  <Link
                    key={area}
                    href={isSelected ? resetHref : href}
                    className={`block rounded-lg border p-3 text-center transition-all duration-300 ${
                      isSelected
                        ? 'border-hub-teal/40 bg-white/[0.08] shadow-[0_0_15px_rgba(67,206,162,0.15)] scale-105'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <p className="font-mono text-xl font-black text-hub-text flex items-center justify-center gap-1.5">
                      <span className={`${dotColor} h-2.5 w-2.5 rounded-full ${isSelected ? 'animate-pulse' : ''}`} />
                      {area}
                    </p>
                    <p className={`mt-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${isSelected ? 'text-hub-teal' : 'text-hub-muted'}`}>
                      {isSelected ? 'Signal locked' : 'Filter zone'}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {feature.show && feature.event && (
          <ScrollReveal direction="up" delay={140}>
            <div className="hub-panel-strong relative mt-10 overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-hub-teal/[0.12] blur-3xl" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hub-teal/50 to-transparent" />
              <div className="relative grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="flex min-w-[5.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
                  <span className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.18em] text-hub-teal">{feature.month}</span>
                  <span className="text-4xl font-black leading-none text-hub-text">{feature.day}</span>
                  <span className="mt-1 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-hub-muted">{feature.weekday}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] font-bold uppercase tracking-[0.16em] text-hub-teal">
                      <span className="live-pulse" /> Next up
                    </span>
                    <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-hub-muted">
                      {feature.relative} · {feature.time}
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-hub-text sm:text-3xl">{feature.event.title}</h2>
                  <p className="mt-1 text-sm text-hub-muted">
                    {feature.event.locationArea} · {feature.event.locationLabel} · {feature.event.vibe}
                  </p>
                  <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-hub-muted/90">
                    {feature.event.description}
                  </p>
                  <div className="mt-5">
                    <Button href={feature.event.discordLink} external>
                      Connect on Discord
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal direction="up" delay={150}>
          <div className="mt-12 flex flex-wrap gap-2">
            <Link
              href={selectedArea ? `/events?area=${selectedArea}` : '/events'}
              className={`rounded-md px-3 py-2 text-xs font-extrabold uppercase tracking-[0.11em] transition-colors ${
                !selectedVibe ? 'bg-hub-gradient text-black' : 'route-chip hover:text-hub-text'
              }`}
            >
              All Vibes
            </Link>
            {vibes.map((vibe) => (
              <Link
                key={vibe.id}
                href={`/events?filter=${encodeURIComponent(vibe.name)}${selectedArea ? `&area=${selectedArea}` : ''}`}
                className={`rounded-md px-3 py-2 text-xs font-extrabold uppercase tracking-[0.11em] transition-colors ${
                  selectedVibe === vibe.name ? 'bg-hub-gradient text-black' : 'route-chip hover:text-hub-text'
                }`}
              >
                {vibe.name}
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {events.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <ScrollReveal key={event.id} direction="up" delay={200 + index * 50} className="h-full">
                <TiltCard max={4} className="h-full rounded-xl">
                  <EventCardParty event={event} />
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="up" delay={200}>
            <div className="hub-panel mt-10 rounded-2xl px-6 py-20 text-center">
              <h2 className="text-3xl font-black text-hub-text">Nothing scheduled in that lane yet.</h2>
              <p className="mx-auto mt-3 max-w-lg text-hub-muted">
                Be the reason it exists. Send in an idea and we&apos;ll review it for the community board.
              </p>
              <div className="mt-8">
                <Button href="/submit">Submit an Event Idea</Button>
              </div>
            </div>
          </ScrollReveal>
        )}
      </section>
    </div>
  )
}
