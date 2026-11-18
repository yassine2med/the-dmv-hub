import Image from 'next/image'
import Link from 'next/link'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { siteConfig } from '@/lib/config'

const footerLinks = {
  Explore: [
    { label: 'Events', href: '/events' },
    { label: 'Vibes', href: '/vibes' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Games', href: '/games' },
    { label: 'Blog', href: '/blog' },
    { label: 'Submit an Event', href: '/submit' },
  ],
  Community: [
    { label: 'Join Discord', href: siteConfig.discordInvite, external: true },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Support Us', href: '/support' },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-hub-border bg-hub-sand">
      {/* Soft place-grounding skyline silhouette along the top edge. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-[0.08]" aria-hidden="true">
        <svg viewBox="0 0 1440 80" className="h-full w-full" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V55l20-5v-8h6V30h4v-6h4V30h4v12h6V55l15-5V38h4V28h6V38h4v12l10-2V30h3V18h2V12h2V18h2V30h3v18l12-3V22h4V10h4V22h4v23l8-2V20h6V8h2V4h2V8h6V20h6v23l14-3V28h4V16h2V10h4V16h2v12h4v22l10-2V28h4V14h6V28h4v20l18-4V32h2V20h4V32h2v12l10-2V28h6V18h2V10h2V18h2v10h6v12l14-3V22h4V12h4V22h4v15l16-3V18h6V8h2V2h2V8h6V18h6v16l10-2V18h4V8h6V18h4v14l12-2V18h4V6h4V18h4v12l10-2V14h4V4h2V0h2V4h2v10h4v14l14-3V14h4V6h4V14h4v11l20-4V14h6V4h2V0h2V4h6V14h6v11l10-2V14h4V4h6V14h4v9l18-4V12h4V2h4V12h4v7l20-4V10h6V2h2V0h2V2h6V10h6v5L1440 12V80H0z" className="fill-hub-va-navy" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="hub-panel-strong rounded-2xl p-6 sm:p-8">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <div className="relative overflow-hidden" style={{ height: '6rem', width: '18rem', maxWidth: '100%' }}>
                <Image
                  src="/logo.png"
                  alt="The DMV Hub"
                  width={1536}
                  height={1024}
                  priority
                  className="logo-breathe pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
                  style={{ height: '12rem', width: '18rem', maxWidth: 'none' }}
                />
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-hub-muted">
                A warm front door to the District of Columbia, Maryland, and Virginia. Find your
                people, then make the plan.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['DC', 'MD', 'VA'].map((area) => (
                  <span key={area} className="route-chip rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em]">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="font-display text-sm font-black uppercase tracking-[0.12em] text-hub-terracotta">
                  {group}
                </h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) =>
                    'external' in link && link.external ? (
                      <li key={link.href} className="group/link">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-hub-muted transition-colors"
                        >
                          <span className="mr-1.5 text-hub-terracotta opacity-0 -translate-x-1.5 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                            →
                          </span>
                          <span className="group-hover/link:text-hub-text transition-colors duration-300">{link.label}</span>
                        </a>
                      </li>
                    ) : (
                      <li key={link.href} className="group/link">
                        <Link
                          href={link.href}
                          className="inline-flex items-center text-sm font-semibold text-hub-muted transition-colors"
                        >
                          <span className="mr-1.5 text-hub-terracotta opacity-0 -translate-x-1.5 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                            →
                          </span>
                          <span className="group-hover/link:text-hub-text transition-colors duration-300">{link.label}</span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative mt-12 border-t border-hub-border pt-7 text-xs text-hub-muted flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p>
                © {new Date().getFullYear()} The DMV Hub · Built by{' '}
                <a href="https://yassine-emhamed.net/" target="_blank" rel="noopener noreferrer" className="font-bold text-hub-text transition-colors hover:text-hub-terracotta">
                  Yassine Emhamed
                </a>
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-hub-muted/70">
                  Rooted in the DMV · 38.9° N, 77.0° W
                </p>
                <span className="text-hub-muted/30">·</span>
                <Link href="/privacy" className="text-[0.68rem] uppercase tracking-[0.12em] text-hub-muted/60 transition-colors hover:text-hub-terracotta">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[0.68rem] uppercase tracking-[0.12em] text-hub-muted/60 transition-colors hover:text-hub-terracotta">
                  Terms
                </Link>
                <Link href="/code-of-conduct" className="text-[0.68rem] uppercase tracking-[0.12em] text-hub-muted/60 transition-colors hover:text-hub-terracotta">
                  Code of Conduct
                </Link>
              </div>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}
