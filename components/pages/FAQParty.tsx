import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { FAQConsole } from '@/app/faq/FAQConsole'
import { faqs } from '@/data/faq'
import { siteConfig } from '@/lib/config'

export function FAQParty() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[22rem] cyber-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-60 top-16 h-[30rem] w-[30rem] rounded-full bg-hub-purple/[0.07] blur-[10rem]" />

      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.22em] text-hub-teal">
              {'// FAQ · Intake'}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Everything you&apos;d ask{' '}
              <span className="bg-gradient-to-r from-hub-teal via-hub-blue to-hub-pink bg-clip-text text-transparent">
                before walking in.
              </span>
            </h1>
          </div>
          <div className="hub-panel rounded-2xl p-6 text-lg leading-relaxed text-hub-muted">
            Pick the channel that matches what&apos;s on your mind — the basics, whether you&apos;ll fit,
            how it works, or showing up safe and solo. {faqs.length} answers, no mystery, then the
            door to Discord.
          </div>
        </ScrollReveal>
      </section>

      <FAQConsole />

      <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={120}>
          <div className="hub-panel-strong relative overflow-hidden rounded-2xl p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.05]" />
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-hub-pink via-hub-teal to-hub-blue" />
            <div className="relative z-10">
              <p className="font-mono text-[0.6rem] font-black uppercase tracking-[0.2em] text-hub-teal">
                {'// Still need answers?'}
              </p>
              <h2 className="mt-3 text-3xl font-black text-hub-text">Still wondering if this is your room?</h2>
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
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
