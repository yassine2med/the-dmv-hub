import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

const steps = [
  {
    number: '01',
    title: 'Read the rules & agree',
    body: 'In #rules, hit the ✅ reaction to confirm you\'re in. The rules exist so this stays a real community — not a feed, not an app, not an inbox.',
    accent: 'border-hub-terracotta/40 bg-hub-terracotta/5',
    dot: 'bg-hub-terracotta',
  },
  {
    number: '02',
    title: 'Complete verification (~2 min)',
    body: 'We open a private ticket just for you. A mod sees your ID to confirm you\'re a real, unique person — then deletes it immediately. We never store it. Then a one-time code to your phone confirms it\'s really yours. That\'s it.',
    accent: 'border-hub-amber/40 bg-hub-amber/5',
    dot: 'bg-hub-amber',
  },
  {
    number: '03',
    title: 'Post your intro',
    body: 'Once verified, drop a message in #introductions using the template below. You\'ll get a real reply — not a bot, not a reaction. A person.',
    accent: 'border-hub-teal/40 bg-hub-teal/5',
    dot: 'bg-hub-teal',
  },
]

const introTemplate = `👋 Name:
📍 Neighborhood:
🎯 Here for: friends / dating / both
✨ One random thing about me:`

export function StartCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Soft glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[36rem] w-[36rem] rounded-full bg-hub-amber/[0.07] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-60 h-[28rem] w-[28rem] rounded-full bg-hub-teal/[0.06] blur-[8rem]" />

      {/* Hero */}
      <section className="relative mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={80}>
          <p className="section-label">Your first step</p>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            Three steps and you&apos;re in. <GradientText>For real.</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-hub-muted">
            This isn&apos;t a link-and-hope Discord. Everyone is verified. Everyone gets a real welcome.
            Here&apos;s exactly what happens when you join.
          </p>
        </ScrollReveal>
      </section>

      {/* Steps */}
      <section className="relative mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} direction="up" delay={100 + i * 80}>
              <div className={`hub-panel rounded-2xl border p-6 sm:p-8 ${step.accent}`}>
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.dot} text-white`}>
                      <span className="font-mono text-xs font-black">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-black text-hub-text">{step.title}</h2>
                    <p className="mt-2 leading-relaxed text-hub-muted">{step.body}</p>
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
          <div className="hub-panel-strong rounded-2xl p-6 sm:p-8">
            <p className="section-label mb-4">Your intro template</p>
            <p className="mb-4 text-hub-muted">
              Copy this, fill it in, and drop it in <span className="font-mono text-hub-teal">#introductions</span>. Keep it honest and loose — nobody&apos;s grading you.
            </p>
            <pre className="overflow-x-auto rounded-xl border border-hub-border bg-hub-bg/60 p-5 font-mono text-sm leading-loose text-hub-text">
              {introTemplate}
            </pre>
          </div>
        </ScrollReveal>
      </section>

      {/* What to expect re: verification */}
      <section className="relative mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div className="rounded-2xl border border-hub-teal/20 bg-hub-teal/[0.04] p-6 sm:p-8">
            <h3 className="font-display text-lg font-black text-hub-text">Why we verify</h3>
            <p className="mt-3 leading-relaxed text-hub-muted">
              The ID is seen and deleted on the spot — we never save it, never store it. The phone
              code proves your number is real. That&apos;s all we keep: a scrambled version of your
              number (so a banned person can&apos;t return) and your first name. No folder of IDs.
              No database of personal data. Just a community where everyone is confirmed to be a
              real, unique person.
            </p>
            <p className="mt-3 text-sm text-hub-muted">
              Takes about 2 minutes. Mods are real people — they&apos;ll move fast.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={80}>
          <div className="hub-panel-strong rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-black text-hub-text">
              Ready? The room is waiting.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-hub-muted">
              You&apos;ll get a real welcome in {' '}
              <span className="font-semibold text-hub-text">#introductions</span>. Someone will reply.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.discordInvite} size="lg" external className="w-full sm:w-auto">
                Join the Discord →
              </Button>
            </div>
            <p className="mt-4 text-xs text-hub-muted">
              Free forever · Adults 22+ · DC · MD · VA
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
