import { Button } from '@/components/ui/Button'
import { ContactButton } from '@/components/ui/ContactButton'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

const tiers = [
  { amount: '$5', label: 'Keeps the lights on' },
  { amount: '$20', label: 'Helps fund a community event' },
  { amount: '$50', label: 'Sponsors a mixer or game night' },
]

const benefits = [
  'Featured placement on the Events page',
  'Shoutouts in the Discord community',
  'Event co-hosting opportunities',
  'Direct access to a local 22+ community',
]

export function SupportCasual() {
  const koFiReady = siteConfig.koFiUrl.startsWith('https://ko-fi.com/')

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-[34rem] h-[28rem] w-[28rem] rounded-full bg-hub-terracotta/[0.07] blur-[8rem]" />

      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="mb-12 max-w-4xl">
          <p className="section-label">Support the hub</p>
          <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            Help keep the DMV&apos;s social layer <GradientText>alive and useful.</GradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hub-muted">
            The community is free to join. Support helps with hosting, moderation, event materials,
            and the boring operational stuff that makes fun things happen.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="left" delay={150} className="h-full">
            <div className="tech-card flex h-full flex-col justify-between rounded-2xl bg-hub-card p-7 transition-all duration-300 hover:border-hub-terracotta/40 sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-hub-terracotta">
                  Community support
                </p>
                <h2 className="mt-4 font-display text-3xl font-black text-hub-text">Buy us a round</h2>
                <p className="mt-4 leading-relaxed text-hub-muted">
                  No complicated perks. Just fuel for the community Yaz is building in public.
                </p>
                <div className="mt-8 space-y-3">
                  {tiers.map((tier) => (
                    <div key={tier.amount} className="group/tier flex items-center justify-between gap-4 rounded-xl border border-hub-border bg-hub-sand p-4 transition-all duration-300 hover:border-hub-terracotta/40">
                      <span className="text-sm text-hub-muted transition-colors group-hover/tier:text-hub-text">{tier.label}</span>
                      <span className="font-display text-xl font-black text-hub-terracotta">
                        {tier.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {koFiReady ? (
                <Button href={siteConfig.koFiUrl} size="lg" className="mt-8 w-full" external>
                  Support the Community
                </Button>
              ) : (
                <ContactButton
                  email={siteConfig.contactEmail}
                  subject="Sponsor / Donate"
                  label="Support the Community"
                  size="lg"
                  className="mt-8 w-full"
                />
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={250} className="h-full">
            <div className="tech-card flex h-full flex-col justify-between rounded-2xl bg-hub-card p-7 transition-all duration-300 hover:border-hub-terracotta/40 sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-hub-terracotta">
                  Local partnerships
                </p>
                <h2 className="mt-4 font-display text-3xl font-black text-hub-text">Partner with us</h2>
                <p className="mt-4 leading-relaxed text-hub-muted">
                  Bars, restaurants, venues, activity spaces, studios, and local brands can reach people actively looking for things to do.
                </p>
                <div className="mt-8 space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 rounded-xl border border-hub-border bg-hub-sand p-4 transition-all duration-300 hover:border-hub-terracotta/40">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-hub-terracotta" />
                      <span className="text-sm leading-relaxed text-hub-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <ContactButton
                email={siteConfig.contactEmail}
                subject="Partnership Inquiry - The DMV Hub"
                size="lg"
                className="mt-8 w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
