import { VibeCard } from '@/components/sections/VibeCard'
import { VibeQuiz } from '@/components/sections/VibeQuiz'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { vibes } from '@/data/vibes'
import { siteConfig } from '@/lib/config'

export function VibesParty() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cyber ambient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] cyber-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-60 top-16 h-[32rem] w-[32rem] rounded-full bg-hub-teal/[0.07] blur-[10rem]" />
      <div className="pointer-events-none absolute -right-60 top-[44rem] h-[28rem] w-[28rem] rounded-full bg-hub-pink/[0.06] blur-[10rem]" />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.22em] text-hub-teal">
              {'// Vibe directory'}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Pick the room you&apos;d actually{' '}
              <span className="bg-gradient-to-r from-hub-teal via-hub-blue to-hub-pink bg-clip-text text-transparent">
                want to walk into.
              </span>
            </h1>
          </div>
          <div className="hub-panel rounded-2xl p-6 text-lg leading-relaxed text-hub-muted">
            The DMV Hub is not one giant awkward mixer. It is a set of social lanes with structure:
            something to do, somewhere to go, and a reason to start talking.
          </div>
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
          <div className="hub-panel-strong relative mt-16 overflow-hidden rounded-2xl p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.05]" />
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-hub-pink via-hub-teal to-hub-blue" />
            <div className="relative z-10">
              <p className="font-mono text-[0.6rem] font-black uppercase tracking-[0.2em] text-hub-teal">
                {'// Next step'}
              </p>
              <h2 className="mt-3 text-3xl font-black text-hub-text">Don&apos;t overthink the first move.</h2>
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
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
