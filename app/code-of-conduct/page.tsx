import type { Metadata } from 'next'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description: 'The standards that keep The DMV Hub a safe, welcoming community.',
}

const rules = [
  {
    number: '01',
    title: 'Be real. Be yourself.',
    body: 'Use one consistent Discord identity and interact honestly. Do not impersonate another person or create burner accounts to evade moderation. Share only the profile details you are comfortable making visible.',
  },
  {
    number: '02',
    title: 'Respect looks like action.',
    body: 'This community spans Ethiopian doctors, queer artists, federal workers, and night-shift nurses. Respect isn\'t a checkbox — it shows in how you talk to people, how you respond when someone sets a boundary, and whether you make space for others to exist comfortably.',
  },
  {
    number: '03',
    title: 'No harassment. Full stop.',
    body: 'Harassment includes unwanted messages, following someone after they\'ve made clear they\'re not interested, making comments about someone\'s body or identity, and any behavior designed to intimidate or isolate. At events or online — it results in immediate removal.',
  },
  {
    number: '04',
    title: 'No spam, sales, or unsolicited pitches.',
    body: 'This is a social community, not a lead-gen pipeline. Don\'t DM strangers to promote your business, app, service, or side hustle without their prior invitation. There are dedicated channels for sharing your work — use those.',
  },
  {
    number: '05',
    title: 'Keep the group safe at events.',
    body: 'Consent is mandatory. Don\'t photograph people without asking. Don\'t share someone\'s location or attendance publicly without their permission. If an event makes you or someone else feel unsafe, leave and report it.',
  },
  {
    number: '06',
    title: 'Report, don\'t escalate.',
    body: 'If something goes wrong, don\'t confront the person publicly or try to handle it yourself. Report it to a moderator or email us directly. We investigate every report privately and seriously.',
  },
]

const consequences = [
  { level: 'Warning', detail: 'First minor violation — private message from a moderator.' },
  { level: 'Temp removal', detail: 'Repeated or moderate violation — 30-day server suspension.' },
  { level: 'Permanent ban', detail: 'Serious violation or pattern of behavior — banned with no path to return.' },
  { level: 'Event ban', detail: 'Behavior at in-person events that violates this code — removed from event and banned from future events.' },
]

export default function CodeOfConductPage() {
  return (
    <div className="site-grid min-h-screen">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <p className="section-label">Community standards</p>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            Code of <GradientText>Conduct</GradientText>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-hub-muted">
            The room matters as much as the event. These rules set expectations for the founding Discord
            and any DMV Hub-hosted gathering.
          </p>
        </ScrollReveal>

        <div className="mt-12 space-y-5">
          {rules.map((rule, i) => (
            <ScrollReveal key={rule.number} direction="up" delay={i * 70}>
              <div className="hub-panel rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hub-border bg-hub-sand font-display text-sm font-black text-hub-terracotta">
                    {rule.number}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-black text-hub-text">{rule.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-hub-muted">{rule.body}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={500} className="mt-12">
          <div className="hub-panel-strong rounded-2xl p-6 sm:p-8">
            <p className="section-label">Enforcement</p>
            <h2 className="mt-4 font-display text-2xl font-black text-hub-text">What happens when someone violates the code</h2>
            <p className="mt-2 text-sm leading-relaxed text-hub-muted">
              Violations are reviewed by the moderation team. Context matters, but some behaviors result in immediate removal regardless.
            </p>
            <div className="mt-6 space-y-3">
              {consequences.map((c) => (
                <div key={c.level} className="flex items-start gap-4 rounded-xl border border-hub-border bg-hub-card p-4">
                  <span className="shrink-0 rounded-md border border-hub-terracotta/30 bg-hub-terracotta/10 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-hub-terracotta">
                    {c.level}
                  </span>
                  <p className="text-sm leading-relaxed text-hub-muted">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={600} className="mt-8">
          <div className="hub-panel rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="font-display text-xl font-black text-hub-text">Something happen?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-hub-muted">
              Reports go to the published contact address and are handled as privately as practical.
              Response times depend on organizer availability, so use emergency services for immediate danger.
            </p>
            <div className="mt-6">
              <Button href={`mailto:${siteConfig.contactEmail}?subject=Code of Conduct Report`}>
                Submit a Report
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </div>
  )
}
