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
  'A direct line to a local 22+ community',
]

export function SupportParty() {
  const koFiReady = siteConfig.koFiUrl.startsWith('https://ko-fi.com/')

  return (
    <div className="site-grid min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="mb-12 max-w-4xl">
          <p className="section-label">Support the signal</p>
          <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
            Help keep the DMV&apos;s social layer <GradientText>alive and useful.</GradientText>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-hub-muted">
            The community is free to join. Support helps with hosting, moderation, event materials,
            and the boring operational stuff that makes fun things happen.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal direction="left" delay={150} className="h-full">
            <div className="tech-card rounded-2xl p-7 sm:p-8 bg-hub-card transition-all duration-300 hover:border-hub-teal/40 h-full flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-teal">
                  Community support
                </p>
                <h2 className="mt-4 text-3xl font-black text-hub-text">Buy us a round</h2>
                <p className="mt-4 leading-relaxed text-hub-muted">
                  No complicated perks. Just fuel for the community Yaz is building in public.
                </p>
                <div className="mt-8 space-y-3">
                  {tiers.map((tier, index) => (
                    <div key={tier.amount} className="group/tier flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-hub-teal/30 hover:bg-white/[0.05]">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[0.62rem] font-bold text-hub-muted border border-white/10 rounded px-2 py-0.5">
                          SUPPORT_0{index + 1}
                        </span>
                        <span className="text-sm text-hub-muted group-hover/tier:text-hub-text transition-colors">{tier.label}</span>
                      </div>
                      <span className="font-mono text-xl font-black text-hub-teal transition-all duration-300 group-hover/tier:text-hub-pink group-hover/tier:shadow-[0_0_10px_rgba(255,107,157,0.3)]">
                        {tier.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {koFiReady ? (
                <Button href={siteConfig.koFiUrl} size="lg" className="mt-8 w-full relative overflow-hidden group/btn border border-transparent hover:border-hub-teal/30 hover:shadow-[0_0_25px_rgba(67,206,162,0.25)]" external>
                  Support the Community
                </Button>
              ) : (
                <ContactButton
                  email={siteConfig.contactEmail}
                  subject="Sponsor / Donate"
                  label="Support the Community"
                  size="lg"
                  className="mt-8 w-full border-transparent bg-hub-gradient text-black hover:border-hub-teal/30 hover:shadow-[0_0_25px_rgba(67,206,162,0.25)]"
                />
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={250} className="h-full">
            <div className="tech-card rounded-2xl p-7 sm:p-8 bg-hub-card transition-all duration-300 hover:border-hub-teal/40 h-full flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-pink">
                  Local partnerships
                </p>
                <h2 className="mt-4 text-3xl font-black text-hub-text">Partner with us</h2>
                <p className="mt-4 leading-relaxed text-hub-muted">
                  Bars, restaurants, venues, activity spaces, studios, and local brands can reach people actively looking for things to do.
                </p>
                <div className="mt-8 space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:bg-white/[0.04]">
                      <span className="h-2 w-2 rounded-full bg-hub-pink shadow-[0_0_8px_rgba(255,107,157,0.6)] mt-1.5 shrink-0" />
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[0.55rem] font-bold text-hub-muted/60">{'// perk_0'}{index + 1}</span>
                        <span className="text-sm leading-relaxed text-hub-muted">{benefit}</span>
                      </div>
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
