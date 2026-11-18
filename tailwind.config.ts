import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Structural colors resolve per-theme via CSS variables (data-theme). */
        'hub-black': 'var(--color-bg)',
        'hub-paper': 'var(--color-bg)',
        'hub-sand': 'var(--color-bg-alt)',
        'hub-dark': 'var(--color-bg-alt)',
        'hub-card': 'var(--color-card)',
        'hub-surface': 'var(--color-surface-2)',
        'hub-border': 'var(--color-border)',
        'hub-text': 'var(--color-text)',
        'hub-muted': 'var(--color-muted)',
        /* Brand gradient stops — identical in both themes, stay literal. */
        'hub-pink': '#FF6B9D',
        'hub-purple': '#C850C0',
        'hub-blue': '#4158D0',
        'hub-teal': '#43CEA2',
        /* Warm accents (Casual only; Party never references them). */
        'hub-terracotta': '#E8743B',
        'hub-amber': '#F2A93B',
        /* State flag colors (Casual values; negligible drift under Party). */
        'hub-dc-red': '#C0392B',
        'hub-md-gold': '#E0A800',
        'hub-va-navy': '#1B2A4A',
      },
      backgroundImage: {
        'hub-gradient': 'linear-gradient(135deg, #FF6B9D, #C850C0, #4158D0, #43CEA2)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
