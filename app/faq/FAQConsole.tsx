'use client'

/**
 * FAQConsole — the FAQ reframed as an "intake channel."
 *
 * Questions are grouped by the *concern* they answer (see data/faq.ts), not by
 * an arbitrary 01..14 order. A sticky frequency-index rail on the left tracks
 * your scroll position with a sliding glow indicator (echoing the site nav),
 * and each question opens as an accordion "transmission."
 *
 * The rail collapses to horizontal channel chips on mobile. Everything is
 * keyboard-operable and respects prefers-reduced-motion.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { faqs } from '@/data/faq'
import type { FAQCategory } from '@/lib/types'

type Channel = {
  id: FAQCategory
  label: string
  code: string
  blurb: string
  text: string // accent text color
  bar: string // accent bar/dot background
  glowDot: string // accent dot with glow
  openRing: string // border accent when a card is open
}

/* Each channel owns one brand accent — same four colors as the home "lanes."
   Class strings are written out in full so Tailwind keeps them at build time. */
const CHANNELS: Channel[] = [
  {
    id: 'basics',
    label: 'The basics',
    code: 'CH·01',
    blurb: 'Cost, access, age, and where we run.',
    text: 'text-hub-pink',
    bar: 'bg-hub-pink',
    glowDot: 'bg-hub-pink shadow-[0_0_10px_#FF6B9D]',
    openRing: 'border-hub-pink/40',
  },
  {
    id: 'fit',
    label: 'Is this for me?',
    code: 'CH·02',
    blurb: 'Who shows up, and whether you’ll fit.',
    text: 'text-hub-purple',
    bar: 'bg-hub-purple',
    glowDot: 'bg-hub-purple shadow-[0_0_10px_#C850C0]',
    openRing: 'border-hub-purple/40',
  },
  {
    id: 'mechanics',
    label: 'How it works',
    code: 'CH·03',
    blurb: 'Discord, events, and hosting.',
    text: 'text-hub-blue',
    bar: 'bg-hub-blue',
    glowDot: 'bg-hub-blue shadow-[0_0_10px_#4158D0]',
    openRing: 'border-hub-blue/40',
  },
  {
    id: 'safety',
    label: 'Safety & first timers',
    code: 'CH·04',
    blurb: 'Showing up solo, and staying safe.',
    text: 'text-hub-teal',
    bar: 'bg-hub-teal',
    glowDot: 'bg-hub-teal shadow-[0_0_10px_#43CEA2]',
    openRing: 'border-hub-teal/40',
  },
]

export function FAQConsole() {
  const groups = useMemo(
    () => CHANNELS.map((c) => ({ ...c, items: faqs.filter((f) => f.category === c.id) })),
    [],
  )

  const [activeCh, setActiveCh] = useState<FAQCategory>(CHANNELS[0].id)
  const [openId, setOpenId] = useState<string | null>(`${CHANNELS[0].id}-0`)
  const [indicator, setIndicator] = useState({ top: 0, height: 0 })

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const railRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /* Scroll-spy: mark the channel whose section sits in the upper band. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (top) setActiveCh((top.target as HTMLElement).dataset.ch as FAQCategory)
      },
      { rootMargin: '-28% 0px -62% 0px', threshold: 0 },
    )
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Move the glow indicator to the active rail item. */
  useEffect(() => {
    const move = () => {
      const el = railRefs.current[activeCh]
      if (el) setIndicator({ top: el.offsetTop, height: el.offsetHeight })
    }
    move()
    window.addEventListener('resize', move)
    return () => window.removeEventListener('resize', move)
  }, [activeCh])

  const jumpTo = useCallback((id: FAQCategory) => {
    setActiveCh(id)
    sectionRefs.current[id]?.scrollIntoView({
      behavior: reduced() ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  const activeBar = CHANNELS.find((c) => c.id === activeCh)?.bar ?? 'bg-hub-pink'

  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
      {/* Mobile: channel chips */}
      <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 lg:hidden">
        {groups.map((c) => {
          const active = c.id === activeCh
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => jumpTo(c.id)}
              className={`shrink-0 rounded-full border px-3.5 py-2 font-mono text-[0.7rem] font-bold uppercase tracking-wider transition-colors ${
                active
                  ? `border-white/15 bg-white/[0.06] ${c.text}`
                  : 'border-white/[0.07] bg-white/[0.02] text-hub-muted'
              }`}
            >
              <span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle ${active ? c.glowDot : 'bg-hub-muted/50'}`} />
              {c.label}
            </button>
          )
        })}
      </div>

      <div className="grid gap-10 lg:grid-cols-[248px_1fr] lg:gap-14">
        {/* Desktop: frequency-index rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="section-label mb-5">Channels</p>
            <nav className="relative" aria-label="FAQ channels">
              {/* sliding glow indicator */}
              <span
                aria-hidden
                className={`faq-indicator absolute left-0 w-[2px] rounded-full ${activeBar}`}
                style={{
                  transform: `translateY(${indicator.top}px)`,
                  height: indicator.height,
                  boxShadow: '0 0 12px currentColor',
                }}
              />
              {groups.map((c) => {
                const active = c.id === activeCh
                return (
                  <button
                    key={c.id}
                    type="button"
                    ref={(el) => {
                      railRefs.current[c.id] = el
                    }}
                    onClick={() => jumpTo(c.id)}
                    aria-current={active ? 'true' : undefined}
                    className="group block w-full py-3.5 pl-5 pr-2 text-left"
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[0.95rem] font-extrabold leading-tight transition-colors ${
                          active ? c.text : 'text-hub-muted group-hover:text-hub-text'
                        }`}
                      >
                        {c.label}
                      </span>
                      <span className="font-mono text-[0.6rem] font-bold tabular-nums text-hub-muted/60">
                        {c.items.length.toString().padStart(2, '0')}
                      </span>
                    </span>
                    <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-hub-muted/50">
                      {c.code}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Channels + transmissions */}
        <div className="space-y-14">
          {groups.map((c) => (
            <section
              key={c.id}
              data-ch={c.id}
              ref={(el) => {
                sectionRefs.current[c.id] = el
              }}
              className="scroll-mt-28"
              aria-labelledby={`ch-${c.id}`}
            >
              <div className="mb-5 flex items-baseline gap-3 border-b border-white/[0.07] pb-4">
                <span className={`h-2 w-2 shrink-0 translate-y-[-1px] rounded-full ${c.glowDot}`} />
                <div>
                  <h2 id={`ch-${c.id}`} className="text-2xl font-black tracking-tight text-hub-text">
                    {c.label}
                  </h2>
                  <p className="mt-1 text-sm text-hub-muted">{c.blurb}</p>
                </div>
                <span className="ml-auto shrink-0 font-mono text-[0.6rem] font-bold uppercase tracking-[0.16em] text-hub-muted/55">
                  {c.code}
                </span>
              </div>

              <div className="space-y-2.5">
                {c.items.map((item, i) => {
                  const qid = `${c.id}-${i}`
                  const open = openId === qid
                  return (
                    <div
                      key={qid}
                      className={`hub-panel overflow-hidden rounded-xl border transition-colors ${
                        open ? c.openRing : 'border-white/[0.08]'
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={`panel-${qid}`}
                          id={`btn-${qid}`}
                          onClick={() => setOpenId(open ? null : qid)}
                          className="flex w-full items-center gap-4 px-5 py-4 text-left"
                        >
                          <span
                            className={`flex-1 text-base font-bold leading-snug transition-colors ${
                              open ? 'text-hub-text' : 'text-hub-text/90'
                            }`}
                          >
                            {item.question}
                          </span>
                          {/* toggle glyph: a quiet plus that rotates into a minus */}
                          <span
                            aria-hidden
                            className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${
                              open ? `rotate-45 ${c.text}` : 'text-hub-muted'
                            }`}
                          >
                            <span className="absolute left-1/2 top-1/2 h-[1.5px] w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                            <span className="absolute left-1/2 top-1/2 h-3.5 w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                          </span>
                        </button>
                      </h3>
                      <div className="faq-reveal" data-open={open}>
                        <div className="faq-reveal-inner">
                          <div
                            id={`panel-${qid}`}
                            role="region"
                            aria-labelledby={`btn-${qid}`}
                            className="px-5 pb-5 pt-0"
                          >
                            <div className={`mb-4 h-px w-full bg-gradient-to-r from-white/[0.10] to-transparent`} />
                            <p className="text-[0.95rem] leading-relaxed text-hub-muted">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
