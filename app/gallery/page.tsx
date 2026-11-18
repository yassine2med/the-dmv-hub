import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from DMV Hub events — faces, places, and moments from the community.',
}

function GalleryCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-[40rem] h-[28rem] w-[28rem] rounded-full bg-hub-terracotta/[0.06] blur-[8rem]" />

      <section className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <span className="inline-flex items-center gap-2 rounded-full border border-hub-terracotta/30 bg-hub-terracotta/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-hub-terracotta">
            <span className="h-1.5 w-1.5 rounded-full bg-hub-terracotta" />
            Coming Soon
          </span>

          <h1 className="mt-8 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl lg:text-7xl">
            Real faces. <GradientText>Real moments.</GradientText>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-hub-muted">
            The Gallery will be a living archive of DMV Hub events — candid shots, group photos,
            and the moments that prove the social layer is real. First photos drop after the next event.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-hub-muted/60">
            {['Event recaps', 'Community portraits', 'Neighborhood shots', 'Group moments'].map((tag) => (
              <span key={tag} className="rounded-full border border-hub-border bg-hub-card px-3 py-1 text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.discordInvite} external>
              Join Discord to See First Photos
            </Button>
            <Button href="/events" variant="secondary">
              Browse Upcoming Events
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

function GalleryParty() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full cyber-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-60 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-teal/[0.07] blur-[10rem]" />
      <div className="pointer-events-none absolute -right-60 top-[40rem] h-[28rem] w-[28rem] rounded-full bg-hub-pink/[0.06] blur-[10rem]" />

      <section className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <span className="font-mono inline-flex items-center gap-2 rounded-full border border-hub-teal/30 bg-hub-teal/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-hub-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-hub-teal animate-pulse" />
            {'// Coming Soon'}
          </span>

          <h1 className="mt-8 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl lg:text-7xl">
            Real faces.{' '}
            <span className="bg-gradient-to-r from-hub-teal via-hub-blue to-hub-pink bg-clip-text text-transparent">
              Real moments.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-hub-muted">
            The Gallery will be a living archive of DMV Hub events — candid shots, group photos,
            and the moments that prove the social layer is real. First photos drop after the next event.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {['Event recaps', 'Community portraits', 'Neighborhood shots', 'Group moments'].map((tag) => (
              <span key={tag} className="font-mono rounded-full border border-hub-teal/20 bg-hub-teal/5 px-3 py-1 text-xs font-bold text-hub-teal/70">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={siteConfig.discordInvite} external>
              Join Discord to See First Photos
            </Button>
            <Button href="/events" variant="secondary">
              Browse Upcoming Events
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default function GalleryPage() {
  return <ThemedSection casual={<GalleryCasual />} party={<GalleryParty />} />
}
