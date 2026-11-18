// Single source of truth for the dual-theme system.
// Renaming a theme or changing the default happens here only.

export type ThemeId = 'casual' | 'party'

export const THEME_STORAGE_KEY = 'dmvhub-theme'
export const THEME_PICKED_KEY = 'dmvhub-theme-picked'
export const DEFAULT_THEME: ThemeId = 'casual'

export const THEMES: { id: ThemeId; label: string; emoji: string }[] = [
  { id: 'casual', label: 'Casual', emoji: '☀️' },
  { id: 'party', label: 'Party', emoji: '🌙' },
]

export function isThemeId(value: unknown): value is ThemeId {
  return value === 'casual' || value === 'party'
}
