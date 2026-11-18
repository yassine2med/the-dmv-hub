import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

const steps = [
  {
    number: '01',
    title: 'Read the rules & agree',
    body: 'In #rules, hit the ✅ reaction to confirm you\'re in. The rules exist so this stays a real community — not a feed, not an app, not an inbox.',
    accent: 'border-hub-pink/30',
    labelColor: 'text-hub-pink',
  },
  {
    number: '02',
    title: 'Complete verification (~2 min)',
    body: 'We open a private ticket just for you. A mod sees your ID to confirm you\'re a real, unique person — then deletes it immediately. We never store it. Then a one-time code to your phone confirms it\'s really yours. That\'s it.',
    accent: 'border-hub-purple/30',
    labelColor: 'text-hub-purple',
  },
  {
    number: '03',
    title: 'Post your intro',
    body: 'Once verified, drop a message in #introductions using the template below. You\'ll get a real reply — not a bot, not a reaction. A person.',
    accent: 'border-hub-teal/30',
    labelColor: 'text-hub-teal',
  },
]

const introTemplate = `👋 Name:
📍 Neighborhood:
🎯 Here for: friends / dating / both
✨ One random thing about me:`

export function StartParty() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-60 top-10 h-[40rem] w-[40rem] rounded-full bg-hub-pink/[0.07] blur-[10rem]" />
      <div className="pointer-events-none absolute -right-60 top-80 h-[32rem] w-[32rem] rounded-full bg-hub-teal/[0.06] blur-[10rem]" />

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={80}>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-pink">
            {'// ENTRY_PROTOCOL'}
          </p>
          <h1
            className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl"
            style={{
              background: 'linear-gradient(135deg, #FF6B9D, #C850C0, #4158D0, #43CEA2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Three steps. Then you&apos;re in.
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-mono text-sm leading-relaxed text-hub-muted">
            Everyone is verified. Everyone gets a real welcome.
            Here&apos;s exactly what happens when you join.
          </p>
        </ScrollReveal>
      </section>

      {/* Steps */}
      <section className="relative mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={100 + i * 80}>
              <div className={`rounded-2xl border bg-hub-card/60 p-6 backdrop-blur-sm sm:p-8 ${step.accent}`}>
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <p className={`font-mono text-xs font-black ${step.labelColor}`}>{'// '}{step.number}</p>
                  </div>
                  <div>
                    <h2 className={`text-xl font-black ${step.labelColor}`}>{step.title}</h2>
                    <p className="mt-2 font-mono text-sm leading-relaxed text-hub-muted">{step.body}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Intro template */}
      <section className="relative mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <div className="rounded-2xl border border-hub-purple/30 bg-hub-card/40 p-6 backdrop-blur-sm sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-purple">
              {'// INTRO_TEMPLATE'}
            </p>
            <p className="mt-3 mb-4 font-mono text-sm text-hub-muted">
              Copy this, fill it in, drop it in{' '}
              <span className="text-hub-teal">#introductions</span>.
            </p>
            <pre className="overflow-x-auto rounded-xl border border-hub-border bg-hub-bg/80 p-5 font-mono text-sm leading-loose text-hub-text">
              {introTemplate}
            </pre>
          </div>
        </ScrollReveal>
      </section>

      {/* Why we verify */}
      <section className="relative mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div className="rounded-2xl border border-hub-teal/20 bg-hub-teal/[0.04] p-6 sm:p-8">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-teal">
              {'// WHY_WE_VERIFY'}
            </p>
            <p className="mt-3 font-mono text-sm leading-relaxed text-hub-muted">
              The ID is seen and deleted on the spot — never saved, never stored. The phone code
              proves your number is real. That&apos;s all we keep: a scrambled version of your
              number (so a banned person can&apos;t return) and your first name. No folder of IDs.
              No database of personal data. Just a community where everyone is confirmed to be a
              real, unique person.
            </p>
            <p className="mt-3 font-mono text-xs text-hub-muted">
              Takes about 2 minutes. Mods are real people — they&apos;ll move fast.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div
            className="rounded-2xl border border-hub-pink/30 p-8 text-center backdrop-blur-sm sm:p-12"
            style={{ background: 'linear-gradient(135deg, rgba(255,107,157,0.05), rgba(67,206,162,0.05))' }}
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-hub-pink">
              {'// READY_SIGNAL'}
            </p>
            <h2 className="mt-4 text-3xl font-black text-hub-text">
              The room is waiting.
            </h2>
            <p className="mx-auto mt-4 max-w-md font-mono text-sm text-hub-muted">
              You&apos;ll get a real welcome in{' '}
              <span className="text-hub-teal">#introductions</span>. Someone will reply.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.discordInvite} size="lg" external className="w-full sm:w-auto">
                Join the Discord →
              </Button>
            </div>
            <p className="mt-4 font-mono text-xs text-hub-muted">
              FREE_FOREVER · ADULTS_22+ · DC · MD · VA
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
