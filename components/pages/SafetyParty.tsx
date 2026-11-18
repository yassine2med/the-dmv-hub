import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

const verificationFacts = [
  'ID is seen by a mod to confirm you\'re a real, unique person — then deleted immediately. Never saved, stored, or shared.',
  'A one-time code to your phone confirms the number is real and actually yours.',
  'We keep only a hashed (scrambled, unreadable) version of your phone number — to prevent a banned person from returning.',
  'We keep your first name and verification date. That\'s the full list.',
  'No folder of IDs. No personal data database. Nothing is sold or made public.',
]

const inPersonTips = [
  { icon: '📍', title: 'Always in public', body: 'Every event is at a public venue — restaurant, bar, park, community space. Never somewhere private.' },
  { icon: '🚪', title: 'Leave whenever', body: 'No obligation, no awkwardness. Step out when you want. Hosts know this.' },
  { icon: '👥', title: 'Bring a buddy', body: 'First event? Bring a friend if that feels safer. Everyone is welcome.' },
  { icon: '📱', title: 'Tell someone', body: 'Drop the event details in a text to someone you trust before heading out.' },
]

const reportSteps = [
  { label: 'Anonymous form', body: 'Linked in Discord #rules. Report without revealing your identity.' },
  { label: 'DM a mod', body: 'Any @Mod in Discord. Not sure who? DM @Yaz directly.' },
  { label: 'Email', body: `${siteConfig.contactEmail} — private, read only by admin.` },
]

export function SafetyParty() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-60 top-10 h-[40rem] w-[40rem] rounded-full bg-hub-teal/[0.06] blur-[10rem]" />
      <div className="pointer-events-none absolute -right-60 top-80 h-[30rem] w-[30rem] rounded-full bg-hub-pink/[0.05] blur-[10rem]" />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={80} className="max-w-3xl">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-teal">{'// SAFETY_PROTOCOL'}</p>
          <h1
            className="mt-6 text-balance text-5xl font-black leading-[1.02] sm:text-6xl"
            style={{
              background: 'linear-gradient(135deg, #43CEA2, #4158D0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Know exactly what you&apos;re walking into.
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-hub-muted">
            Especially for anyone showing up solo — and especially for women. Here&apos;s how verification works, how to report something, and what to know before your first event.
          </p>
        </ScrollReveal>
      </section>

      {/* Opt-in intent */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div className="rounded-2xl border border-hub-purple/30 bg-hub-purple/[0.04] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-purple">{'// INTENT_ROLES'}</p>
            <h2 className="mt-3 text-2xl font-black text-hub-text">Romantic interest is opt-in</h2>
            <p className="mt-3 max-w-2xl font-mono text-sm leading-relaxed text-hub-muted">
              On join, you self-select: <span className="text-hub-pink">Open to dating</span> or{' '}
              <span className="text-hub-teal">Friends only</span>. Friendship events are friendship
              events — not dating events with a different name. Nobody is expected to signal romantic
              openness just by showing up.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Verification */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-teal">{'// VERIFICATION_LOG'}</p>
          <h2 className="mt-2 text-3xl font-black text-hub-text">What we collect and why</h2>
          <p className="mt-3 mb-6 max-w-2xl font-mono text-sm text-hub-muted">Every member goes through the same process. Here&apos;s exactly what that means for your privacy.</p>
        </ScrollReveal>
        <div className="flex flex-col gap-3">
          {verificationFacts.map((fact, i) => (
            <ScrollReveal key={i} direction="left" delay={80 + i * 50}>
              <div className="flex items-start gap-4 rounded-xl border border-hub-teal/20 bg-hub-card/40 p-4 backdrop-blur-sm">
                <span className="flex-shrink-0 font-mono text-hub-teal">✓</span>
                <p className="font-mono text-sm leading-relaxed text-hub-muted">{fact}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* In-person */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-pink">{'// BEFORE_FIRST_EVENT'}</p>
          <h2 className="mt-2 text-3xl font-black text-hub-text">Practical stuff, not scary stuff.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {inPersonTips.map((tip, i) => (
              <div key={tip.title} className="rounded-2xl border border-hub-border bg-hub-card/40 p-6 backdrop-blur-sm">
                <span className="text-2xl">{tip.icon}</span>
                <h3 className="mt-3 font-black text-hub-text">{tip.title}</h3>
                <p className="mt-2 font-mono text-sm leading-relaxed text-hub-muted">{tip.body}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Report */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-pink">{'// REPORT_FLOW'}</p>
          <h2 className="mt-2 text-3xl font-black text-hub-text">How to report something</h2>
          <p className="mt-3 mb-6 max-w-2xl font-mono text-sm text-hub-muted">
            Reports are taken seriously. A strike system is tied to the Code of Conduct — warning, removal, permanent ban. You don&apos;t have to explain everything at once.
          </p>
        </ScrollReveal>
        <div className="flex flex-col gap-3">
          {reportSteps.map((step, i) => (
            <ScrollReveal key={step.label} direction="up" delay={80 + i * 60}>
              <div className="flex items-start gap-4 rounded-xl border border-hub-pink/20 bg-hub-card/40 p-4 backdrop-blur-sm">
                <span className="flex-shrink-0 font-mono text-xs font-black text-hub-pink">0{i + 1}</span>
                <div>
                  <p className="font-mono text-sm font-bold text-hub-text">{step.label}</p>
                  <p className="mt-1 font-mono text-sm text-hub-muted">{step.body}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div
            className="rounded-2xl border border-hub-teal/30 p-8 text-center backdrop-blur-sm sm:p-12"
            style={{ background: 'linear-gradient(135deg, rgba(67,206,162,0.04), rgba(65,88,208,0.04))' }}
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-teal">{'// QUESTIONS?'}</p>
            <h2 className="mt-4 text-3xl font-black text-hub-text">Still have questions?</h2>
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
