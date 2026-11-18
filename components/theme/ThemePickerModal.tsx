'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { THEME_STORAGE_KEY, THEME_PICKED_KEY } from '@/lib/theme'

export function ThemePickerModal() {
  const [show, setShow] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstChoiceRef = useRef<HTMLButtonElement>(null)
  const { setTheme } = useTheme()

  useEffect(() => {
    try {
      const alreadyPicked = localStorage.getItem(THEME_PICKED_KEY)
      if (!alreadyPicked) setShow(true)
    } catch {}
  }, [])

  useEffect(() => {
    if (!show) return

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow

    // This is a required first-visit decision, so keep keyboard and scroll
    // interaction inside the dialog until a theme is selected.
    document.body.style.overflow = 'hidden'
    firstChoiceRef.current?.focus()

    function containFocus(event: KeyboardEvent) {
      if (event.key !== 'Tab') return

      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      )

      if (focusable.length === 0) {
        event.preventDefault()
        return
      }

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

    document.addEventListener('keydown', containFocus)

    return () => {
      document.removeEventListener('keydown', containFocus)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [show])

  function pick(theme: 'casual' | 'party') {
    setTheme(theme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
      localStorage.setItem(THEME_PICKED_KEY, '1')
    } catch {}
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="theme-picker-title"
      aria-describedby="theme-picker-description"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div className="relative my-auto w-full max-w-lg rounded-3xl border border-white/10 bg-[#0d0d0d] p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#43CEA2]">
            Welcome to The DMV Hub
          </p>
          <h2 id="theme-picker-title" className="mt-3 font-sans text-2xl font-black text-white sm:text-3xl">
            Pick your vibe
          </h2>
          <p id="theme-picker-description" className="mt-2 text-sm text-white/50">
            You can switch anytime using the toggle in the menu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Casual */}
          <button
            ref={firstChoiceRef}
            type="button"
            onClick={() => pick('casual')}
            className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-[#FAF5EE] p-6 text-left transition-all duration-200 hover:border-[#C4704F] hover:shadow-[0_0_24px_-4px_rgba(196,112,79,0.4)] focus:outline-none focus-visible:border-[#C4704F]"
          >
            <div className="mb-4 text-4xl">☀️</div>
            <h3 className="font-sans text-xl font-black text-[#241F1A]">Casual</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6B5B4E]">
              Warm, daylight energy. Great for browsing events and planning your next hangout.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#C4704F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C4704F]" />
              Light mode · Warm palette
            </div>
          </button>

          {/* Party */}
          <button
            type="button"
            onClick={() => pick('party')}
            className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-[#080B14] p-6 text-left transition-all duration-200 hover:border-[#43CEA2] hover:shadow-[0_0_24px_-4px_rgba(67,206,162,0.3)] focus:outline-none focus-visible:border-[#43CEA2]"
          >
            {/* subtle cyber grid on party card */}
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.12]" />
            <div className="relative mb-4 text-4xl">🌙</div>
            <h3 className="relative font-sans text-xl font-black text-white">Party</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-white/50">
              Cyber dark mode. Built for night owls, club-goers, and anyone who vibes after dark.
            </p>
            <div className="relative mt-5 flex items-center gap-2 text-xs font-bold text-[#43CEA2]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#43CEA2]" />
              Dark mode · Cyber palette
            </div>
          </button>
        </div>

      </div>
    </div>
  )
}
