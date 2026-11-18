'use client'

import { useTheme } from '@/components/theme/ThemeProvider'

/**
 * Two-state theme switch (☀️ Casual / 🌙 Party). role="switch"; aria-checked
 * is true when Party is active. Keyboard-operable as a native <button>.
 */
export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const isParty = theme === 'party'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isParty}
      aria-label="Switch theme between Casual and Party"
      onClick={() => setTheme(isParty ? 'casual' : 'party')}
      className={`group inline-flex items-center gap-1.5 rounded-full border border-hub-border bg-hub-card px-1.5 py-1 transition-colors hover:border-hub-terracotta/40 ${className}`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-sm transition-all ${
          !isParty ? 'bg-hub-sand' : 'opacity-50'
        }`}
        aria-hidden
      >
        ☀️
      </span>
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-sm transition-all ${
          isParty ? 'bg-hub-sand' : 'opacity-50'
        }`}
        aria-hidden
      >
        🌙
      </span>
    </button>
  )
}
