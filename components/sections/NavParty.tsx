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

export function NavParty() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-hub-black/[0.72] backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between py-3 sm:h-32">
          <Link href="/" className="flex items-center gap-3 group" aria-label="The DMV Hub - Home">
            <AnimatedLogo />
          </Link>

          <nav className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5 md:flex shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-white/20 transition-colors duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] transition-all duration-300 ${
                    isActive
                      ? 'text-hub-teal bg-white/[0.05] border border-hub-teal/20 shadow-[0_0_15px_rgba(67,206,162,0.1)]'
                      : 'text-hub-muted border border-transparent hover:text-hub-text hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-2px] left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-hub-teal shadow-[0_0_8px_#43CEA2]" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <div className="flex items-center rounded-xl border border-white/10 bg-white/[0.02] p-1 shadow-[0_0_20px_rgba(67,206,162,0.05)] backdrop-blur-md transition-all hover:border-white/20 hover:shadow-[0_0_25px_rgba(67,206,162,0.1)]">
              <a
                href="/start"
                className="btn-sheen rounded-lg bg-hub-gradient px-4 py-2 text-xs font-black uppercase tracking-wider text-black transition-transform hover:scale-[1.03]"
              >
                Join Community
              </a>
              <div className="mx-1 h-4 w-px bg-white/10" />
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                className="rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-hub-muted transition-colors hover:bg-white/5 hover:text-hub-text"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <button
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-hub-muted hover:text-hub-text md:hidden focus:outline-none"
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
          <div className="space-y-3 border-t border-white/10 py-4 md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 text-sm font-extrabold uppercase tracking-[0.1em] transition-colors ${
                    isActive 
                      ? 'text-hub-teal bg-white/[0.04]' 
                      : 'text-hub-muted hover:bg-white/[0.03] hover:text-hub-text'
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
