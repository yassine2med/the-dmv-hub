import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FAQConsole } from '@/app/faq/FAQConsole'
import { faqs } from '@/data/faq'
import { siteConfig } from '@/lib/config'

export function FAQCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />

      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="section-label">FAQ · Intake</p>
            <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Everything you&apos;d ask <GradientText>before walking in.</GradientText>
            </h1>
          </div>
          <p className="hub-panel rounded-2xl p-6 text-lg leading-relaxed text-hub-muted">
            Pick the channel that matches what&apos;s on your mind — the basics, whether you&apos;ll fit,
            how it works, or showing up safe and solo. {faqs.length} answers, no mystery, then the
            door to Discord.
          </p>
        </ScrollReveal>
      </section>

      <FAQConsole />

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={120}>
          <div className="hub-panel-strong rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl font-black text-hub-text">Still wondering if this is your room?</h2>
            <p className="mx-auto mt-4 max-w-xl text-hub-muted">
              Ask directly, or join quietly and look around. Both are fine.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={`mailto:${siteConfig.contactEmail}`} variant="secondary">
                Email us
              </Button>
              <Button href={siteConfig.discordInvite} external>
                Ask on Discord
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
