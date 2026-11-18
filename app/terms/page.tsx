import type { Metadata } from 'next'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The ground rules for using The DMV Hub website and community.',
}

const sections = [
  {
    title: 'What this is',
    body: [
      'The DMV Hub is a community platform — a website, Discord server, and event calendar — for adults in the District of Columbia, Maryland, and Virginia area.',
      'By using this site or joining our Discord, you agree to these terms.',
      'We reserve the right to update these terms. Material changes will be announced in the Discord.',
    ],
  },
  {
    title: 'Using the site',
    body: [
      'You agree not to scrape, copy, or reproduce content from this site for commercial purposes.',
      'Event listings are provided in good faith — we are not liable for changes, cancellations, or issues that occur at third-party events.',
      'Submitted events are reviewed before publication. We may decline or edit submissions that don\'t fit our community focus.',
      'You are responsible for the accuracy of anything you submit.',
    ],
  },
  {
    title: 'Community membership',
    body: [
      'The Discord is in its founding stage. Members must follow the published Code of Conduct and use a consistent account identity.',
      'We reserve the right to remove any member for behavior that violates our Code of Conduct, harms other members, or damages the community\'s reputation.',
      'Members who are removed may not evade moderation by rejoining under another account.',
    ],
  },
  {
    title: 'Events',
    body: [
      'Events listed on this site are organized by community members and independent organizers. The DMV Hub is not the organizer of most listed events.',
      'Attendance is at your own risk. We encourage you to use good judgment when meeting people in person.',
      'If an event makes you feel unsafe or uncomfortable, email us or flag it in Discord — we take safety reports seriously.',
    ],
  },
  {
    title: 'Liability',
    body: [
      'This site is provided as-is. We make no guarantees about uptime, accuracy, or completeness of listings.',
      'To the extent permitted by law, The DMV Hub and its organizers are not liable for any damages arising from use of this site or participation in community events.',
    ],
  },
  {
    title: 'Contact',
    body: [
      `Questions or concerns: ${siteConfig.contactEmail}`,
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="site-grid min-h-screen">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <p className="section-label">Legal</p>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            Terms of <GradientText>Service</GradientText>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-hub-muted">
            Plain language. No gotchas. The ground rules for using this site and being part of this community.
          </p>
          <p className="mt-2 text-sm text-hub-muted/70">Last updated: June 2026</p>
        </ScrollReveal>

        <div className="mt-12 space-y-8">
          {sections.map((section, i) => (
            <ScrollReveal key={section.title} direction="up" delay={i * 60}>
              <div className="hub-panel rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-black text-hub-text">{section.title}</h2>
                <ul className="mt-4 space-y-3">
                  {section.body.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-hub-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-hub-terracotta" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </article>
    </div>
  )
}
