import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SubmitEventForm } from '@/app/submit/SubmitEventForm'

export function SubmitCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />

      <section className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div>
          <ScrollReveal direction="left" className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div>
              <p className="section-label">Submit a plan</p>
              <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
                Got a hangout idea? <GradientText>Let&apos;s make it happen.</GradientText>
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-hub-muted">
              Send the details. Yaz reviews submissions and approved events get posted to the community.
            </p>
            <div className="space-y-3">
              {['Public venues preferred', 'Clear date and vibe', 'No login required'].map((item) => (
                <div key={item} className="tech-card flex items-center gap-3 rounded-xl bg-hub-card p-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-hub-terracotta" />
                  <span className="text-sm font-semibold text-hub-muted">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="tech-card rounded-2xl bg-hub-card p-6 sm:p-8">
          <SubmitEventForm />
        </div>
      </section>
    </div>
  )
}
