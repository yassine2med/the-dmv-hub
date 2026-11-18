import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ContactButton } from '@/components/ui/ContactButton'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/lib/config'

const roadmap = [
  { phase: 'Phase 1', detail: 'Discord-first community, curated events across DC, MD & VA, and this public site. Building proof of concept through real people actually showing up.' },
  { phase: 'Scale trigger', detail: 'When we hit 1,000 members and sustain 300+ active people week over week, Phase 2 unlocks.' },
  { phase: 'Phase 2', detail: 'Member profiles, neighborhood discovery, interest-based matching, and RSVP sync. The app follows the community, not the other way around.' },
]

export function AboutCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* soft warm washes, matching the home sections */}
      <div className="pointer-events-none absolute -left-40 top-32 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-[40rem] h-[30rem] w-[30rem] rounded-full bg-hub-terracotta/[0.07] blur-[8rem]" />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal direction="left" delay={100}>
              <p className="section-label">The reason</p>
              <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
                The DMV is huge. <GradientText>Feeling alone here is too easy.</GradientText>
              </h1>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button href={siteConfig.discordInvite} className="w-full sm:w-auto lg:w-full" external>
                  Join the Community
                </Button>
                <ContactButton email={siteConfig.contactEmail} className="w-full sm:w-auto lg:w-full" />
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal direction="right" delay={150}>
              <div className="hub-panel-strong rounded-2xl p-7 sm:p-9">
                <p className="font-display text-2xl font-black leading-snug text-hub-text">
                  People don&apos;t lose their social life because they stop caring. They lose the context that held it together.
                </p>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-hub-muted">
                  <p>
                    The DMV has millions of people: Ethiopian doctors in Silver Spring, Nigerian entrepreneurs
                    in Rockville, Black lawyers in PG County, Latinx nurses in Arlington, queer artists in
                    Petworth, and South Asian federal workers in Bethesda. One of the most diverse metros in the
                    country by almost every measure.
                  </p>
                  <p>
                    And somehow it&apos;s still one of the hardest cities to build a real social life in if you
                    don&apos;t already have one. Long commutes, transient jobs, rotating neighborhoods, and adult
                    schedules that quietly turn &ldquo;we should hang out&rdquo; into nothing.
                  </p>
                  <p>
                    The DMV Hub exists to rebuild that missing infrastructure: events with structure,
                    a Discord that keeps plans alive, and a community where showing up doesn&apos;t feel random.
                    The common thread isn&apos;t background or profession. It&apos;s wanting a real social life
                    and being willing to show up once to see if this one actually works.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <ScrollReveal direction="up" delay={200}>
                <div className="tech-card flex h-full flex-col justify-between rounded-2xl bg-hub-card p-6">
                  <div>
                    <div className="mb-4 flex items-center gap-4 border-b border-hub-border pb-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-hub-terracotta/40" style={{ background: '#0a0f1e' }}>
                        <Image
                          src="/yaz.png"
                          alt="Yassine Emhamed (Yaz)"
                          width={80}
                          height={80}
                          className="h-full w-full object-contain object-center"
                        />
                        {/* left/right fade to blend into card background */}
                        <div className="pointer-events-none absolute inset-0 rounded-full" style={{ background: 'linear-gradient(to right, var(--color-card) 0%, transparent 28%, transparent 72%, var(--color-card) 100%)' }} />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-hub-terracotta">
                          Built by
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <h2 className="font-display text-xl font-black leading-none text-hub-text">Yassine Emhamed</h2>
                          <span className="select-none rounded border border-hub-terracotta/30 bg-hub-terracotta/10 px-2 py-0.5 text-[10px] font-bold leading-none text-hub-terracotta">
                            YAZ
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-hub-muted">
                      Hi, I&apos;m Yassine. I&apos;m a developer and builder based in the District of Columbia, and I
                      make websites, tools, and communities. The DMV Hub started because the problem was personal:
                      I moved here, handled the adulting part fine, and still found it strangely hard to build a
                      real social life. So I&apos;m building the thing I wish had existed, in public, one event at a time.
                    </p>
                  </div>
                  <div className="mt-5 border-t border-hub-border pt-4">
                    <a
                      href="https://yassine-emhamed.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-hub-terracotta transition-colors hover:text-hub-text"
                    >
                      See more of what I build
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <div className="tech-card h-full rounded-2xl bg-hub-card p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-hub-terracotta">
                    Philosophy
                  </p>
                  <h2 className="mt-4 font-display text-2xl font-black text-hub-text">People first. App later.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-hub-muted">
                    Build the room first. We team up with local, non-monetized Meetup planners as co-admins
                    to host early, high-energy events. Prove the concept. Then build the product the community
                    actually needs.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={280}>
              <div className="hub-panel-strong relative overflow-hidden rounded-2xl p-6 sm:p-8">
                <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-32 w-32 rounded-full bg-hub-terracotta/[0.10] blur-2xl" />
                <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div className="max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-hub-terracotta">
                      Co-Host &amp; Organize
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-black text-hub-text">Join the Team</h2>
                    <p className="mt-2 text-sm leading-relaxed text-hub-muted">
                      Want to host neighborhood events, moderate the Discord server, or bring a new interest category to life? We&apos;re always looking for high-energy local coordinators to run slots and build the community.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <ContactButton
                      email={siteConfig.contactEmail}
                      subject="Organizer/Team Application - The DMV Hub"
                      label="Apply to Join"
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="tech-card rounded-2xl bg-hub-card p-6">
                <p className="section-label">Roadmap</p>
                <div className="mt-6 space-y-4">
                  {roadmap.map((item, index) => (
                    <div key={item.phase} className="group/item flex gap-4">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-hub-border bg-hub-sand font-display text-xs font-black text-hub-text transition-all duration-300 group-hover/item:border-hub-terracotta/40 group-hover/item:text-hub-terracotta">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-hub-text transition-colors duration-300 group-hover/item:text-hub-terracotta">{item.phase}</p>
                        <p className="mt-1 text-sm leading-relaxed text-hub-muted">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
