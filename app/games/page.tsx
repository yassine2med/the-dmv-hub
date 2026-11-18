import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Games',
  description: 'Game nights, tournaments, and competitive hangouts across the DMV — coming soon to The DMV Hub.',
}

const formats = [
  { icon: '🎮', title: 'Video Game Nights', desc: 'Console and PC sessions at local venues and member setups.' },
  { icon: '♟️', title: 'Board Game Cafés', desc: 'Strategy, party games, and tabletop RPG one-shots.' },
  { icon: '🏆', title: 'Tournaments', desc: 'Brackets, prizes, and a reason to get competitive.' },
  { icon: '🎯', title: 'Trivia & Pub Games', desc: 'Team-based trivia nights and classic bar games across the DMV.' },
]

function GamesCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-[44rem] h-[28rem] w-[28rem] rounded-full bg-hub-terracotta/[0.06] blur-[8rem]" />

      <section className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-hub-terracotta/30 bg-hub-terracotta/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-hub-terracotta">
            <span className="h-1.5 w-1.5 rounded-full bg-hub-terracotta" />
            Coming Soon
          </span>

          <h1 className="mt-8 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl lg:text-7xl">
            Play together. <GradientText>Build your crew.</GradientText>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-hub-muted">
            The Games section is where DMV Hub members compete, co-op, and connect. Game nights,
            tournaments, and casual hangouts — all organized through Discord, all in public venues
            across the District of Columbia, Maryland, and Virginia.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {formats.map((f, i) => (
            <ScrollReveal key={f.title} direction="up" delay={200 + i * 70}>
              <div className="hub-panel rounded-2xl p-6 transition-all duration-300 hover:border-hub-terracotta/30">
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-3xl">{f.icon}</span>
                  <h2 className="font-display text-lg font-black text-hub-text">{f.title}</h2>
                </div>
                <p className="text-sm leading-relaxed text-hub-muted">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={500} className="mt-14 text-center">
          <div className="hub-panel-strong rounded-2xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-black text-hub-text">Want to run a game night?</h2>
            <p className="mx-auto mt-3 max-w-md text-hub-muted">
              Jump in Discord and pitch it. If you have a format and a venue idea, we&apos;ll help you fill the seats.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={siteConfig.discordInvite} external>
                Join Discord
              </Button>
              <Button href="/events" variant="secondary">
                Browse Current Events
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

function GamesParty() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full cyber-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-60 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-blue/[0.07] blur-[10rem]" />
      <div className="pointer-events-none absolute -right-60 top-[44rem] h-[28rem] w-[28rem] rounded-full bg-hub-purple/[0.06] blur-[10rem]" />

      <section className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100} className="text-center">
          <span className="font-mono inline-flex items-center gap-2 rounded-full border border-hub-teal/30 bg-hub-teal/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-hub-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-hub-teal animate-pulse" />
            {'// Coming Soon'}
          </span>

          <h1 className="mt-8 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl lg:text-7xl">
            Play together.{' '}
            <span className="bg-gradient-to-r from-hub-blue via-hub-purple to-hub-pink bg-clip-text text-transparent">
              Build your crew.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-hub-muted">
            The Games section is where DMV Hub members compete, co-op, and connect. Game nights,
            tournaments, and casual hangouts — all organized through Discord, all in public venues
            across the District of Columbia, Maryland, and Virginia.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {formats.map((f, i) => (
            <ScrollReveal key={f.title} direction="up" delay={200 + i * 70}>
              <div className="hub-panel relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-hub-teal/30">
                <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.06]" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-3xl">{f.icon}</span>
                    <h2 className="font-mono text-base font-black uppercase tracking-[0.1em] text-hub-text">{f.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-hub-muted">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={500} className="mt-14 text-center">
          <div className="hub-panel-strong relative overflow-hidden rounded-2xl p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.05]" />
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-hub-blue via-hub-purple to-hub-pink" />
            <div className="relative z-10">
              <p className="font-mono text-[0.6rem] font-black uppercase tracking-[0.2em] text-hub-teal">
                {'// Want to run a session?'}
              </p>
              <h2 className="mt-3 text-2xl font-black text-hub-text">Want to run a game night?</h2>
              <p className="mx-auto mt-3 max-w-md text-hub-muted">
                Jump in Discord and pitch it. If you have a format and a venue idea, we&apos;ll help you fill the seats.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href={siteConfig.discordInvite} external>
                  Join Discord
                </Button>
                <Button href="/events" variant="secondary">
                  Browse Current Events
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

export default function GamesPage() {
  return <ThemedSection casual={<GamesCasual />} party={<GamesParty />} />
}
