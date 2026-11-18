'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { DEFAULT_THEME, THEME_STORAGE_KEY, isThemeId, type ThemeId } from '@/lib/theme'

function systemTheme(): ThemeId {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'party' : 'casual'
  } catch {
    return DEFAULT_THEME
  }
}

type ThemeContextValue = { theme: ThemeId; setTheme: (t: ThemeId) => void }

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start from DEFAULT_THEME so server and first client render agree (no
  // hydration mismatch). The real stored value is reconciled in useEffect.
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY)
      setThemeState(isThemeId(stored) ? stored : systemTheme())
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, [])

  const setTheme = useCallback((next: ThemeId) => {
    setThemeState(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* ignore persistence failure */
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

// Runs before first paint (in <head>), so the correct theme is applied with
// zero flash even though React has not hydrated yet.
export function ThemeNoFlashScript() {
  const js = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t!=='casual'&&t!=='party')t=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches?'party':'casual';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','${DEFAULT_THEME}');}})();`
  return <script dangerouslySetInnerHTML={{ __html: js }} />
}
