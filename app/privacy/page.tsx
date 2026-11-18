import type { Metadata } from 'next'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How The DMV Hub collects, uses, and protects your information.',
}

const sections = [
  {
    title: 'What we collect',
    body: [
      'Your email address if you sign up for updates or send the contact form.',
      'The event details and optional Discord handle you provide through the event-submission form.',
      'Discord separately processes your account, messages, and server activity under its own privacy terms.',
      'Messages or contact form submissions you send us directly.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'To respond to messages, review event ideas, and send occasional community updates if you opted in.',
      'To manage server membership and enforce our Code of Conduct.',
      'To improve the site and events based on what people actually attend.',
      'We do not sell, rent, or share your personal information with third parties for marketing purposes. Ever.',
    ],
  },
  {
    title: 'Third-party services',
    body: [
      'Discord: membership and community messaging, governed by Discord\'s own Privacy Policy.',
      'Formspree: receives and stores contact, update-signup, and event-submission form data for us.',
      'Vercel: hosts this website and provides aggregate Web Analytics and Speed Insights in production.',
      'PostHog: optional first-party product analytics, used only when production configuration is present.',
      'Ko-fi: handles support payments independently; we do not receive card details.',
      'We do not sell personal information or run targeted advertising.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'You can opt out of updates or request deletion by emailing us at the address below.',
      'Form submissions may also be subject to Formspree\'s retention and deletion processes.',
      'You can leave the Discord at any time — your message history stays in the server per Discord\'s terms.',
    ],
  },
  {
    title: 'Data retention',
    body: [
      'We keep update-signup emails until you opt out or ask us to delete them.',
      'Contact and event submissions are retained only as long as reasonably needed for communication and planning, subject to Formspree controls.',
      'We don\'t hold financial data — we use Ko-fi for donations, which handles payments independently.',
    ],
  },
  {
    title: 'Contact',
    body: [
      `Questions, requests, or concerns: ${siteConfig.contactEmail}. We respond within a few business days.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="site-grid min-h-screen">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100}>
          <p className="section-label">Legal</p>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            Privacy <GradientText>Policy</GradientText>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-hub-muted">
            We keep this short because short is honest. Here is what we collect, why, and what you can do about it.
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
