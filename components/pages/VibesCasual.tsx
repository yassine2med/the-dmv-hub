import { VibeCard } from '@/components/sections/VibeCard'
import { VibeQuiz } from '@/components/sections/VibeQuiz'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { vibes } from '@/data/vibes'
import { siteConfig } from '@/lib/config'

export function VibesCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-[48rem] h-[30rem] w-[30rem] rounded-full bg-hub-terracotta/[0.06] blur-[8rem]" />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label">Vibe directory</p>
            <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Pick the room you&apos;d actually <GradientText>want to walk into.</GradientText>
            </h1>
          </div>
          <p className="hub-panel rounded-2xl p-6 text-lg leading-relaxed text-hub-muted">
            The DMV Hub is not one giant awkward mixer. It is a set of social lanes with structure:
            something to do, somewhere to go, and a reason to start talking.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <VibeQuiz />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vibes.map((vibe, index) => (
            <ScrollReveal key={vibe.id} direction="up" delay={200 + index * 50}>
              <VibeCard vibe={vibe} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={200} className="w-full">
          <div className="hub-panel-strong mt-16 rounded-2xl p-8 text-center sm:p-10">
            <h2 className="font-display text-3xl font-black text-hub-text">Don&apos;t overthink the first move.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-hub-muted">
              Browse what is coming up, join the Discord, and let the channel do half the ice-breaking for you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/events">Browse Upcoming Events</Button>
              <Button href={siteConfig.discordInvite} variant="secondary" external>
                Join Discord
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
