'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { CitySkyline } from '@/components/ui/CitySkyline'
import type { Event } from '@/lib/types'
import { siteConfig } from '@/lib/config'

/* Per-row beacon styling for the live signal board (DC / MD / VA accents). */
const beacons = [
  {
    dot: 'bg-hub-pink shadow-[0_0_12px_#FF6B9D]',
    text: 'text-hub-pink',
    ring: 'border-hub-pink/45',
    glow: 'shadow-[0_0_28px_rgba(255,107,157,0.20)]',
  },
  {
    dot: 'bg-hub-teal shadow-[0_0_12px_#43CEA2]',
    text: 'text-hub-teal',
    ring: 'border-hub-teal/45',
    glow: 'shadow-[0_0_28px_rgba(67,206,162,0.20)]',
  },
  {
    dot: 'bg-hub-blue shadow-[0_0_12px_#4158D0]',
    text: 'text-hub-blue',
    ring: 'border-hub-blue/45',
    glow: 'shadow-[0_0_28px_rgba(65,88,208,0.20)]',
  },
]

export function HeroParty({ events }: { events: Event[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const featured = events.filter((event) => event.featured)
  const heroEvents = (featured.length > 0 ? featured : events).slice(0, 3)

  // Scroll-linked parallax: orbs drift slower than the page for depth.
  const pinkRef = useRef<HTMLDivElement>(null)
  const tealRef = useRef<HTMLDivElement>(null)
  const blueRef = useRef<HTMLDivElement>(null)
  const purpleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (pinkRef.current) pinkRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`
        if (tealRef.current) tealRef.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`
        if (blueRef.current) blueRef.current.style.transform = `translate3d(0, ${y * 0.32}px, 0)`
        if (purpleRef.current) purpleRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-white/[0.06] bg-hub-black lg:min-h-[calc(100vh-6rem)]">
      {/* Cinematic background photo texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-luminosity"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
        aria-hidden="true"
      />
      {/* ── Background: large soft aurora orbs. No lines, no textures. ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div ref={pinkRef} className="absolute -left-32 top-0 h-[700px] w-[700px] rounded-full bg-hub-pink/[0.22] blur-[120px] will-change-transform" />
        <div ref={tealRef} className="absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full bg-hub-teal/[0.18] blur-[110px] will-change-transform" />
        <div ref={blueRef} className="absolute left-[35%] top-[30%] h-[500px] w-[500px] rounded-full bg-hub-blue/[0.14] blur-[100px] will-change-transform" />
        <div ref={purpleRef} className="absolute -bottom-16 left-[10%] h-[350px] w-[350px] rounded-full bg-hub-purple/[0.14] blur-[90px] will-change-transform" />
      </div>

      {/* Very faint dot grid — barely there, just adds micro-texture */}
      <div className="dot-grid absolute inset-0 opacity-[0.18]" aria-hidden="true" />

      {/* Left vignette: keeps the heading text crisp and readable */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,11,20,0.95)_0%,rgba(8,11,20,0.65)_50%,rgba(8,11,20,0.82)_100%)]" />

      {/* Bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-hub-black to-transparent" />

      {/* Faint skyline silhouette — grounds the hero in a real place */}
      <CitySkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-hub-blue/[0.14] sm:h-28" />

      <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="hero-entrance hero-entrance-delay-1 mb-6 inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-hub-muted backdrop-blur-xl">
            <span className="live-pulse" />
            <span className="font-bold text-hub-text">Founding Discord now open</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
            <span className="hidden sm:inline">District of Columbia / Maryland / Virginia</span>
          </div>

          <h1 className="hero-entrance hero-entrance-delay-2 max-w-full text-balance text-[3.2rem] font-black leading-[0.98] text-hub-text min-[420px]:text-5xl sm:text-6xl lg:text-7xl">
            You know people
            <br />
            in the DMV.
            <br />
            <span className="glitch-hover max-w-full whitespace-normal" data-text="But do you have people?">
              <GradientText>But do you have people?</GradientText>
            </span>
          </h1>

          <div className="hero-entrance hero-entrance-delay-3 mt-6 max-w-2xl space-y-3 border-l-2 border-hub-teal/30 pl-4 sm:pl-5">
            <p className="text-lg leading-relaxed text-hub-muted sm:text-xl">
              Adulting here is easy. <span className="typewriter inline-block text-hub-teal font-medium">Building a real social life after 25 is the part nobody gave you a map for.</span>
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
            <a href="/vibes" className="text-center text-sm font-bold text-hub-muted underline underline-offset-4 transition-colors hover:text-hub-teal sm:ml-2 sm:text-left">
              Take the Vibe Quiz
            </a>
          </div>

          <div className="hero-entrance hero-entrance-delay-4 mt-6 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em]">
            {['No app', 'No swiping', 'Just show up'].map((item) => (
              <span key={item} className="route-chip rounded-md px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Live signal board ─────────────────────────────────────── */}
        <div className="hero-entrance hero-entrance-delay-3 relative mx-auto w-full max-w-md lg:ml-auto">
          {/* soft gradient halo behind the panel */}
          <div className="pointer-events-none absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-hub-pink/10 via-transparent to-hub-teal/10 blur-2xl" />

          <div className="hub-panel-strong relative overflow-hidden rounded-3xl p-6 sm:p-7">
            <div className="pointer-events-none absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full bg-hub-teal/[0.15] blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-6rem] left-[-5rem] h-52 w-52 rounded-full bg-hub-pink/[0.15] blur-3xl" />

            {/* Header */}
            <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-hub-teal/30 bg-hub-teal/[0.08]">
                  <span className="live-pulse" />
                </span>
                <div>
                  <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-hub-teal">
                    Live · tonight
                  </p>
                  <p className="text-base font-black leading-tight text-hub-text">The DMV is lighting up</p>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-right">
                <p className="text-xl font-black leading-none text-hub-text">3</p>
                <p className="mt-1 font-mono text-[0.55rem] font-bold uppercase tracking-[0.12em] text-hub-muted">
                  zones live
                </p>
              </div>
            </div>

            {/* Signal spine + event beacons */}
            <div className="relative mt-6 space-y-2.5 pl-7">
              <span
                aria-hidden
                className="absolute left-[9px] bottom-3 top-3 w-px bg-gradient-to-b from-hub-pink/70 via-hub-blue/50 to-hub-teal/70"
              />
              {heroEvents.map((event, index) => {
                const c = beacons[index % beacons.length]
                const active = hoveredIndex === index
                return (
                  <a
                    key={event.id}
                    href={event.discordLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group relative block rounded-xl border p-3.5 transition-all duration-300 ${
                      active ? `${c.ring} bg-white/[0.05] ${c.glow}` : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    {/* beacon sitting on the spine */}
                    <span
                      aria-hidden
                      className={`absolute -left-[1.6rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ${c.dot}`}
                    />
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p
                          className={`font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] transition-colors ${
                            active ? c.text : 'text-hub-muted'
                          }`}
                        >
                          {event.locationArea} · {event.vibe}
                        </p>
                        <h3 className="mt-0.5 truncate text-[0.95rem] font-black leading-tight text-hub-text">
                          {event.title}
                        </h3>
                        <p className="mt-0.5 truncate text-xs text-hub-muted">{event.locationLabel}</p>
                      </div>
                      <span
                        aria-hidden
                        className={`shrink-0 text-lg leading-none text-hub-muted transition-all duration-300 ${
                          active ? `translate-x-0.5 ${c.text}` : ''
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* CTA */}
            <a
              href={siteConfig.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen relative mt-5 flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-bold text-hub-text transition-colors hover:border-hub-teal/40"
            >
              See who&apos;s going tonight
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
