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

export function AboutParty() {
  return (
    <div className="site-grid min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal direction="left" delay={100}>
              <p className="section-label">The reason</p>
              <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
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
                <p className="text-2xl font-black leading-snug text-hub-text">
                  People do not lose their social life because they stop caring. They lose the context that held it together.
                </p>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-hub-muted">
                  <p>
                    The DMV has millions of people: Ethiopian doctors in Silver Spring, Nigerian entrepreneurs
                    in Rockville, Black lawyers in PG County, Latinx nurses in Arlington, queer artists in
                    Petworth, and South Asian federal workers in Bethesda. One of the most diverse metros in the
                    country by almost every measure.
                  </p>
                  <p>
                    And somehow it is still one of the hardest cities to build a real social life in if you
                    do not already have one. Long commutes, transient jobs, rotating neighborhoods, and adult
                    schedules that quietly turn &ldquo;we should hang out&rdquo; into nothing.
                  </p>
                  <p>
                    The DMV Hub exists to rebuild that missing infrastructure: events with structure,
                    a Discord that keeps plans alive, and a community where showing up does not feel random.
                    The common thread is not background or profession. It is wanting a real social life
                    and being willing to show up once to see if this one actually works.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <ScrollReveal direction="up" delay={200}>
                <div className="tech-card rounded-2xl p-6 bg-hub-card h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-4">
                      <div className="relative h-20 w-20 shrink-0 rounded-full border border-hub-teal/40 overflow-hidden" style={{ background: '#0a0f1e' }}>
                        <Image
                          src="/yaz.png"
                          alt="Yassine Emhamed (Yaz)"
                          width={80}
                          height={80}
                          className="h-full w-full object-contain object-center"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-full" style={{ background: 'linear-gradient(to right, #0a0f1e 0%, transparent 28%, transparent 72%, #0a0f1e 100%)' }} />
                      </div>
                      <div>
                        <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-hub-teal">
                          Built by
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <h2 className="text-xl font-black text-hub-text leading-none">Yassine Emhamed</h2>
                          <span className="bg-hub-teal/10 border border-hub-teal/30 text-hub-teal px-2 py-0.5 rounded text-[10px] font-mono font-bold leading-none select-none">
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
                  <div className="mt-5 border-t border-white/5 pt-4">
                    <a
                      href="https://yassine-emhamed.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-hub-teal transition-colors hover:text-hub-text"
                    >
                      See more of what I build
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                <div className="tech-card rounded-2xl p-6 bg-hub-card h-full">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-pink">
                    Philosophy
                  </p>
                  <h2 className="mt-4 text-2xl font-black text-hub-text">People first. App later.</h2>
                  <p className="mt-4 text-sm leading-relaxed text-hub-muted">
                    Build the room first. We team up with local, non-monetized Meetup planners as co-admins
                    to host early, high-energy events. Prove the concept. Then build the product the community
                    actually needs.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up" delay={280}>
              <div className="hub-panel-strong rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute right-[-4rem] top-[-4rem] h-32 w-32 rounded-full bg-hub-pink/[0.08] blur-2xl pointer-events-none" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div className="max-w-xl">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-pink">
                      Co-Host &amp; Organize
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-hub-text">Join the Team</h2>
                    <p className="mt-2 text-sm leading-relaxed text-hub-muted">
                      Want to host neighborhood events, moderate the Discord server, or bring a new interest category to life? We are always looking for high-energy local coordinators to run slots and build the community.
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

            <ScrollReveal direction="up" delay={300}>
              <div className="tech-card rounded-2xl p-6 bg-hub-card">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-teal">
                  Growth &amp; Activation Strategy
                </p>
                <h2 className="mt-4 text-2xl font-black text-hub-text">Direct signal activation</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-hub-muted">
                  <div className="border border-white/5 bg-white/[0.02] p-3 rounded-lg hover:border-hub-teal/20 transition-all duration-300">
                    <span className="text-hub-teal font-bold block mb-1">01 / ORGANIZERS</span>
                    Partner with independent local planners to co-host structured activities.
                  </div>
                  <div className="border border-white/5 bg-white/[0.02] p-3 rounded-lg hover:border-hub-pink/20 transition-all duration-300">
                    <span className="text-hub-pink font-bold block mb-1">02 / OUTREACH</span>
                    Coordinate invitations across DMV subreddits, Facebook groups, and localized spaces.
                  </div>
                  <div className="border border-white/5 bg-white/[0.02] p-3 rounded-lg hover:border-hub-teal/20 transition-all duration-300">
                    <span className="text-hub-teal font-bold block mb-1">03 / PROOF</span>
                    Launch early, small-scale events to prove the social network value immediately.
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="tech-card rounded-2xl p-6 bg-hub-card">
                <p className="section-label">Roadmap</p>
                <div className="mt-6 space-y-4">
                  {roadmap.map((item, index) => (
                    <div key={item.phase} className="flex gap-4 group/item">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] font-mono text-xs font-bold text-hub-text border border-white/10 group-hover/item:border-hub-teal/30 group-hover/item:text-hub-teal transition-all duration-300">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-hub-text group-hover/item:text-hub-teal transition-colors duration-300">{item.phase}</p>
                        <p className="mt-1 text-sm leading-relaxed text-hub-muted group-hover/item:text-hub-text/80 transition-colors duration-300">{item.detail}</p>
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
