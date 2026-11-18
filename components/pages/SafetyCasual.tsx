import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

const verificationFacts = [
  'Your ID is seen by a mod to confirm you\'re a real, unique person — then deleted immediately. It is never saved, stored, or shared.',
  'A one-time code to your phone confirms the number is real and actually yours.',
  'We keep only a scrambled (hashed) version of your phone number — not readable — to prevent a banned person from returning on a new account.',
  'We keep your first name and the date you verified. That\'s the full list.',
  'No folder of IDs. No database of personal data. Nothing is ever sold or made public.',
]

const inPersonTips = [
  {
    icon: '📍',
    title: 'Events are always in public',
    body: 'Every Hub event is at a public venue — a restaurant, bar, park, or community space. You\'re never asked to meet somewhere private.',
  },
  {
    icon: '🚪',
    title: 'You can leave whenever',
    body: 'No obligation, no awkwardness. Step out when you want. Our hosts know this and won\'t make it weird.',
  },
  {
    icon: '👥',
    title: 'Bring a buddy',
    body: 'Especially for a first event — come with a friend if that feels safer. Everyone is welcome.',
  },
  {
    icon: '📱',
    title: 'Tell someone where you\'re going',
    body: 'Standard practice. Drop the event details in a text to someone you trust before you head out.',
  },
]

const reportSteps = [
  { label: 'Anonymous form', body: 'Linked in the Discord #rules channel. You can report without revealing your identity.' },
  { label: 'Direct message a mod', body: 'Any mod with the @Mod role in Discord. If you\'re not sure who that is, DM @Yaz directly.' },
  { label: 'Email us', body: `Send to ${siteConfig.contactEmail} — private, read only by the admin.` },
]

export function SafetyCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-teal/[0.07] blur-[8rem]" />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={80} className="max-w-3xl">
          <p className="section-label">Safety · How We Handle It</p>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            You should know <GradientText>exactly what you&apos;re walking into.</GradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hub-muted">
            This page is especially for anyone showing up solo — and especially for women. Here&apos;s
            how verification works, how to report something, and what to know before your first event.
          </p>
        </ScrollReveal>
      </section>

      {/* Romantic intent opt-in */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div className="hub-panel-strong rounded-2xl border border-hub-amber/30 bg-hub-amber/5 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-black text-hub-text">
              Romantic interest is opt-in
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-hub-muted">
              When you join Discord, you self-select a role: <strong className="text-hub-text">Open to dating</strong> or{' '}
              <strong className="text-hub-text">Friends only</strong>. Friendship events are friendship events.
              They are not dating events with a different name. If you pick &ldquo;Friends only,&rdquo; that&apos;s the
              signal the community sees — and hosts enforce it. Nobody is expected to signal romantic
              openness just by showing up.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Verification section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <h2 className="font-display text-3xl font-black text-hub-text">
            Verification: what we collect and why
          </h2>
          <p className="mt-3 mb-6 max-w-2xl text-hub-muted">
            Every member goes through the same process. Here&apos;s exactly what that means for your privacy.
          </p>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {verificationFacts.map((fact, i) => (
            <ScrollReveal key={i} direction="left" delay={80 + i * 60}>
              <div className="flex items-start gap-4 hub-panel rounded-xl p-5">
                <span className="mt-0.5 flex-shrink-0 text-hub-teal">✓</span>
                <p className="leading-relaxed text-hub-muted">{fact}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* In-person safety */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <h2 className="font-display text-3xl font-black text-hub-text">Before your first event</h2>
          <p className="mt-3 mb-8 max-w-2xl text-hub-muted">Practical stuff, not scary stuff.</p>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {inPersonTips.map((tip, i) => (
            <ScrollReveal key={tip.title} direction="up" delay={80 + i * 60}>
              <div className="hub-panel rounded-2xl p-6 h-full">
                <span className="text-2xl">{tip.icon}</span>
                <h3 className="mt-3 font-display text-lg font-black text-hub-text">{tip.title}</h3>
                <p className="mt-2 leading-relaxed text-hub-muted">{tip.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Report flow */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <h2 className="font-display text-3xl font-black text-hub-text">How to report something</h2>
          <p className="mt-3 mb-8 max-w-2xl text-hub-muted">
            Reports are taken seriously. A strike system is tied to the Code of Conduct — warning, removal, permanent ban. You don&apos;t have to explain everything at once. Just reach out.
          </p>
        </ScrollReveal>
        <div className="flex flex-col gap-4">
          {reportSteps.map((step, i) => (
            <ScrollReveal key={step.label} direction="up" delay={80 + i * 60}>
              <div className="hub-panel rounded-xl p-5 flex items-start gap-4">
                <span className="flex-shrink-0 font-mono text-sm font-black text-hub-terracotta">0{i + 1}</span>
                <div>
                  <p className="font-bold text-hub-text">{step.label}</p>
                  <p className="mt-1 text-hub-muted">{step.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div className="hub-panel-strong rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display text-3xl font-black text-hub-text">
              Questions before you join?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-hub-muted">
              Email us directly, or read the full Code of Conduct.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={`mailto:${siteConfig.contactEmail}`} variant="secondary">
                Email us
              </Button>
              <Button href="/code-of-conduct" variant="secondary">
                Code of Conduct
              </Button>
              <Button href="/start">
                Join the Community
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
