'use client'

import Link from 'next/link'
import { AnimatedLogo } from '@/components/ui/AnimatedLogo'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { siteConfig } from '@/lib/config'

const navLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Vibes', href: '/vibes' },
  { label: 'Community', href: '/community' },
  { label: 'Blog', href: '/blog' },
  { label: 'Safety', href: '/safety' },
  { label: 'About', href: '/about' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-hub-border bg-hub-paper/85 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between py-3 sm:h-32">
          <Link href="/" className="flex items-center gap-3 group" aria-label="The DMV Hub - Home">
            <AnimatedLogo />
          </Link>

          <nav className="hidden items-center gap-1.5 rounded-full border border-hub-border bg-hub-card p-1.5 xl:flex shadow-[0_6px_20px_-12px_rgba(60,40,20,0.25)] transition-colors duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] transition-all duration-300 ${
                    isActive
                      ? 'text-hub-terracotta bg-hub-sand border border-hub-terracotta/25'
                      : 'text-hub-muted border border-transparent hover:text-hub-text hover:bg-hub-sand'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-hub-terracotta" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-2">
            <ThemeToggle />
            <div className="flex items-center rounded-xl border border-hub-border bg-hub-card p-1 shadow-[0_6px_20px_-12px_rgba(60,40,20,0.25)] transition-all hover:border-hub-terracotta/40">
              <a
                href="/start"
                className="btn-sheen rounded-lg bg-hub-gradient px-4 py-2 text-xs font-black uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
              >
                Join Community
              </a>
              <div className="mx-1 h-4 w-px bg-hub-border" />
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-hub-muted transition-colors hover:bg-hub-sand hover:text-hub-text"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <button
            className="rounded-lg border border-hub-border bg-hub-card p-2 text-hub-muted hover:text-hub-text xl:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="space-y-3 border-t border-hub-border py-4 xl:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-extrabold uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? 'text-hub-terracotta bg-hub-sand'
                      : 'text-hub-muted hover:bg-hub-sand hover:text-hub-text'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="flex items-center justify-between rounded-lg px-3 py-2">
              <span className="text-sm font-extrabold uppercase tracking-[0.1em] text-hub-muted">Theme</span>
              <ThemeToggle />
            </div>
            <Button href="/start" size="sm" className="w-full mt-2">
              Join Community
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
