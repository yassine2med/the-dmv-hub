import { Hero } from '@/components/sections/Hero'
import { EventCard } from '@/components/sections/EventCard'
import { VibeCard } from '@/components/sections/VibeCard'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { TiltCard } from '@/components/ui/TiltCard'
import { ActivityTicker } from '@/components/sections/ActivityTicker'
import { EmailCapture } from '@/components/sections/EmailCapture'
import { vibes } from '@/data/vibes'
import { communityGoals, communityStats } from '@/data/community'
import { siteConfig } from '@/lib/config'
import type { Event } from '@/lib/types'

const routeSteps = [
  {
    number: '01',
    title: 'Say hi in Discord',
    description: 'Discord is the entry point: no profile setup, no swipe queue, no algorithm. One link and you\'re in. Introduce yourself, browse the channels, see who\'s already talking about the weekend.',
  },
  {
    number: '02',
    title: 'Pick a lane',
    description: 'Food crawl, game night, rooftop, hike, mixer, day trip. Each proposed plan has a format and target group size; final host and venue details are confirmed in Discord.',
  },
  {
    number: '03',
    title: 'Show up once',
    description: 'The hardest part is the first time. After that, you recognize faces, you have context, and the weekend has a pull. Most regulars say they came to one event with zero expectations and came back to everything else.',
  },
]

const lanes = [
  {
    label: 'Friends',
    detail: 'Small groups, recurring hangs, and the kind of low-pressure first hello that actually leads somewhere. Speed friending, game nights, and food crawls are built for this.',
    dotClass: 'bg-hub-pink',
  },
  {
    label: 'Dating',
    detail: 'Structured singles mixers for people who are done with apps. Real rooms, real people, a host who keeps it from going awkward. No swiping, no DM roulette.',
    dotClass: 'bg-hub-purple',
  },
  {
    label: 'Plans',
    detail: 'Rooftops, food crawls, hikes, day trips, movie nights. Curated events across the District of Columbia, Maryland, and Virginia. The kind of weekend you actually look forward to.',
    dotClass: 'bg-hub-blue',
  },
  {
    label: 'Momentum',
    detail: 'A community that keeps the weekend from going blank. The Discord stays active between events so the connections you make have somewhere to go.',
    dotClass: 'bg-hub-teal',
  },
]

/* Accent dot per step (warm gradient stops, no neon glow) */
const stepDots = ['bg-hub-pink', 'bg-hub-blue', 'bg-hub-teal']

/* Trust pillars — safety is the #1 reason someone hesitates to join. */
const trustPillars = [
  {
    title: 'Clear entry rules',
    desc: 'The Code of Conduct is public before you join, and moderation expectations are visible from day one.',
    iconWrap: 'border-hub-teal/30 bg-hub-teal/[0.10] text-hub-teal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Public-venue standard',
    desc: 'DMV Hub-hosted plans are designed for public venues with a named point of contact and clear details.',
    iconWrap: 'border-hub-pink/30 bg-hub-pink/[0.10] text-hub-pink',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 21s-6-5.3-6-10a6 6 0 0112 0c0 4.7-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Published guidelines',
    desc: 'Consent, harassment, privacy, promotion, and reporting expectations are written down before launch.',
    iconWrap: 'border-hub-blue/30 bg-hub-blue/[0.10] text-hub-blue',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9.5 4V3h5v1" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    ),
  },
  {
    title: 'Direct reporting path',
    desc: 'Something feels off? Contact the organizer or use the published email so the concern can be reviewed.',
    iconWrap: 'border-hub-purple/30 bg-hub-purple/[0.10] text-hub-purple',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M5 21V4" />
        <path d="M5 5h11l-2 3 2 3H5" />
      </svg>
    ),
  },
]

/* Play-by-play of a first event — answers "what if I show up and it's awkward?" */
const firstNight = [
  { t: 'Check Discord', d: 'Confirm the date, venue, cost, accessibility notes, host, and RSVP instructions before making plans.', ring: 'border-hub-pink/50 text-hub-pink' },
  { t: 'Arrive safely', d: 'Use your own transportation plan, meet in the published public venue, and tell someone where you are going.', ring: 'border-hub-purple/50 text-hub-purple' },
  { t: 'Use the format', d: 'A food-crawl route, game table, or guided rotation can give everyone an easy way to start talking.', ring: 'border-hub-blue/50 text-hub-blue' },
  { t: 'Choose your pace', d: 'Stay for the part that feels comfortable, leave whenever you want, and follow up only with people you choose.', ring: 'border-hub-teal/50 text-hub-teal' },
  { t: 'It keeps going', d: "Photos hit the Discord that night. Next weekend's plans start forming before you even leave.", ring: 'border-hub-pink/50 text-hub-pink' },
]

const zones = [
  { zone: 'U Street / Shaw', area: 'DC', dot: 'bg-hub-pink' },
  { zone: 'H Street / NoMa', area: 'DC', dot: 'bg-hub-pink' },
  { zone: 'Columbia Heights', area: 'DC', dot: 'bg-hub-pink' },
  { zone: 'Silver Spring', area: 'MD', dot: 'bg-hub-teal' },
  { zone: 'Bethesda / Rockville', area: 'MD', dot: 'bg-hub-teal' },
  { zone: 'PG County / Largo', area: 'MD', dot: 'bg-hub-teal' },
  { zone: 'Arlington / Rosslyn', area: 'VA', dot: 'bg-hub-blue' },
  { zone: 'Tysons / NoVA', area: 'VA', dot: 'bg-hub-blue' },
  { zone: 'Annapolis / Baltimore', area: 'MD+', dot: 'bg-hub-purple' },
]

export function HomeCasual({ events }: { events: Event[] }) {
  const allEvents = events
  const featured = allEvents.filter((event) => event.featured)
  const featuredEvents = (featured.length > 0 ? featured : allEvents).slice(0, 3)
  const featuredVibes = vibes.slice(0, 4)

  return (
    <>
      <Hero events={allEvents} />

      {/* LIVE ACTIVITY TICKER */}
      <ActivityTicker />

      <div className="relative">
        {/* COMMUNITY STATS */}
        <section className="relative border-b border-hub-border px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {communityStats.map((stat) => (
                  <TiltCard key={stat.label}>
                    <div className="hub-panel group h-full rounded-2xl p-5 text-center">
                      <div className={`font-display text-4xl font-black tracking-tight sm:text-5xl ${stat.accent}`}>
                        <AnimatedCounter value={stat.value} duration={2000} />
                      </div>
                      <p className="mt-2 text-sm font-bold text-hub-text">{stat.label}</p>
                      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.1em] text-hub-muted">{stat.sub}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* WHY THIS EXISTS */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -left-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <ScrollReveal direction="left">
              <p className="section-label">Why this exists</p>
              <h2 className="mt-6 text-balance font-display text-4xl font-black leading-[1.04] text-hub-text sm:text-5xl lg:text-6xl">
                Somewhere between graduation and your 30s,{' '}
                <GradientText>the easy ways to meet people disappeared.</GradientText>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="hub-panel rounded-2xl p-6 sm:p-8">
                <p className="text-xl leading-relaxed text-hub-text/80">
                  The DMV has millions of people: Ethiopian families in Silver Spring, Nigerian entrepreneurs in Rockville,
                  Black professionals in PG County, queer artists in Petworth, and transplants from everywhere in between. One of
                  the most diverse metros on earth. And somehow adult friendship here still feels like a logistics problem
                  nobody solved.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-hub-muted">
                  People move here, work hard, change jobs, shift neighborhoods, and lose the context that held their social
                  life together, then end up with free weekends but no crew to fill them. The DMV Hub is social
                  infrastructure: a Discord-first community that turns &ldquo;we should hang out&rdquo; into actual plans
                  with actual people.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-hub-muted/80">
                  No app to download. No algorithm. No profile optimization. Just a founding Discord server, a public
                  planning board, and an invitation for adults 22+ across the District of Columbia, Maryland, and Virginia.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-label">The route</p>
                  <h2 className="mt-5 font-display text-4xl font-black text-hub-text">
                    How it <GradientText>actually works</GradientText>
                  </h2>
                </div>
                <p className="max-w-xl text-hub-muted">
                  No complicated product funnel. The community lives where people already talk, and the site points you toward the right first move.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative grid gap-4 lg:grid-cols-3">
              {routeSteps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 120}>
                  <div className="tech-card group relative h-full rounded-2xl bg-hub-card p-6 transition-all duration-300">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full ${stepDots[index]}`} />
                        <span className="text-xs font-bold uppercase tracking-widest text-hub-muted">Step 0{index + 1}</span>
                      </div>
                      <span className="rounded-lg bg-hub-sand px-2.5 py-0.5 font-display text-sm font-black text-hub-text">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-black text-hub-text transition-colors duration-300 group-hover:text-hub-terracotta">{step.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-hub-muted">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* YOUR FIRST NIGHT */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="text-center">
                <p className="section-label justify-center">Your first night</p>
                <h2 className="mt-5 font-display text-4xl font-black leading-tight text-hub-text">
                  Your first night, <GradientText>start to finish.</GradientText>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-hub-muted">
                  The scary part is imagining it. Here is what actually happens the night you show up to your first one.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12">
              {firstNight.map((step, index) => (
                <ScrollReveal key={step.t} delay={index * 90} direction="up">
                  <div className="relative flex gap-5 pb-7 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-hub-card font-display text-sm font-black ${step.ring}`}>
                        {index + 1}
                      </span>
                      {index < firstNight.length - 1 && (
                        <span aria-hidden className="mt-1 w-px flex-1 bg-gradient-to-b from-hub-border to-transparent" />
                      )}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display text-lg font-black leading-tight text-hub-text">{step.t}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-hub-muted">{step.d}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL LANES */}
        <section className="relative overflow-hidden border-y border-hub-border bg-hub-sand/60 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <ScrollReveal direction="left">
                <p className="section-label">Social lanes</p>
                <h2 className="mt-5 font-display text-4xl font-black leading-tight text-hub-text">
                  Not one generic meetup. <GradientText>Four reasons people join.</GradientText>
                </h2>
              </ScrollReveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {lanes.map((lane, index) => (
                  <ScrollReveal key={lane.label} delay={index * 100}>
                    <div className="tech-card h-full rounded-2xl bg-hub-card p-5 transition-all duration-300">
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="font-display text-2xl font-black text-hub-text">{lane.label}</h3>
                        <span className={`h-2.5 w-2.5 rounded-full ${lane.dotClass}`} />
                      </div>
                      <p className="text-sm leading-relaxed text-hub-muted">{lane.detail}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S HAPPENING */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-label">This month</p>
                  <h2 className="mt-5 font-display text-4xl font-black text-hub-text">
                    What&apos;s happening <GradientText>this month</GradientText>
                  </h2>
                </div>
                <Button href="/events" variant="secondary">
                  See all events
                </Button>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 md:grid-cols-3">
              {featuredEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 100}>
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* VIBES */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="section-label">Pick your first night out</p>
                  <h2 className="mt-5 font-display text-4xl font-black text-hub-text">
                    Choose a <GradientText>vibe</GradientText>, not a personality test.
                  </h2>
                </div>
                <Button href="/vibes" variant="ghost">
                  Explore all vibes
                </Button>
              </div>
            </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredVibes.map((vibe, index) => (
                <ScrollReveal key={vibe.id} delay={index * 80}>
                  <VibeCard vibe={vibe} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* MEMBER STORIES */}
        <section className="relative overflow-hidden border-y border-hub-border px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="section-label justify-center">Launch principles</p>
              <h2 className="mx-auto mt-5 max-w-2xl text-center font-display text-4xl font-black text-hub-text">
                What we are <GradientText>building toward.</GradientText>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-hub-muted">
                The DMV Hub is in its founding stage. These are operating goals, not invented testimonials.
              </p>
            </ScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {communityGoals.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className={`hub-panel h-full rounded-2xl border-t-2 p-6 ${item.accent}`}>
                    <p className="mb-4 font-display text-3xl leading-none text-hub-terracotta">&ldquo;</p>
                    <p className="text-sm leading-relaxed text-hub-text/80">{item.quote}</p>
                    <div className="mt-6 flex items-center gap-2 border-t border-hub-border pt-4">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-hub-muted">{item.meta}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* NEIGHBORHOOD ZONES */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="hub-panel-strong overflow-hidden rounded-2xl p-8 sm:p-10">
                <div className="relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                  <div>
                    <p className="section-label">Pick your zone</p>
                    <h2 className="mt-5 font-display text-3xl font-black leading-tight text-hub-text sm:text-4xl">
                      Find your <GradientText>neighborhood crew.</GradientText>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-hub-muted">
                      Plans are organized by DMV zone rather than one vague &ldquo;District of Columbia
                      area.&rdquo; Join Discord to see what is currently being planned near you.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {zones.map((item) => (
                      <div key={item.zone} className="flex items-start gap-2.5 rounded-xl border border-hub-border bg-hub-card p-3 transition-colors duration-300 hover:border-hub-terracotta/40">
                        <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
                        <div>
                          <p className="text-xs font-bold leading-tight text-hub-text">{item.zone}</p>
                          <p className="mt-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-hub-muted/70">{item.area}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* SAFE BY DESIGN */}
        <section className="relative overflow-hidden border-t border-hub-border px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="section-label justify-center">Safe by design</p>
                <h2 className="mt-5 font-display text-4xl font-black leading-tight text-hub-text">
                  Meeting strangers, <GradientText>minus the sketchy part.</GradientText>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-hub-muted">
                  No community can promise zero risk. These are the standards the founding team is committing to
                  as real members and hosted plans are added.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustPillars.map((pillar, index) => (
                <ScrollReveal key={pillar.title} delay={index * 100}>
                  <div className="tech-card h-full rounded-2xl bg-hub-card p-6 transition-all duration-300">
                    <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${pillar.iconWrap}`}>
                      {pillar.icon}
                    </div>
                    <h3 className="font-display text-lg font-black leading-tight text-hub-text">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-hub-muted">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* WEEKLY DROP — soft conversion for the not-ready-for-Discord crowd */}
        <EmailCapture />

        {/* FINAL CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="hub-panel-strong relative mx-auto max-w-7xl overflow-hidden rounded-3xl p-8 text-center sm:p-16">
              <div className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-hub-pink/[0.10] blur-[6rem]" />
              <div className="pointer-events-none absolute bottom-[-8rem] right-[-8rem] h-80 w-80 rounded-full bg-hub-teal/[0.10] blur-[6rem]" />

              <div className="relative">
                <p className="section-label justify-center">Discord-first community</p>
                <h2 className="mx-auto mt-6 max-w-4xl text-balance font-display text-4xl font-black leading-tight text-hub-text sm:text-5xl lg:text-6xl">
                  The founding community is open. <GradientText>Help shape it.</GradientText>
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-hub-muted">
                  Join early, introduce yourself, and help turn the planning board into reliable local hangouts.
                  Final event details live in Discord, and the culture is still small enough for founding members to influence.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Button href={siteConfig.discordInvite} size="lg" external>
                    Join the Discord
                  </Button>
                  <Button href="/events" size="lg" variant="secondary">
                    Browse events first
                  </Button>
                </div>

                {/* Social proof strip */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-hub-border pt-8 text-xs text-hub-muted">
                  {['DC · U Street', 'MD · Silver Spring', 'VA · Arlington', 'MD · Bethesda', 'DC · H Street'].map((loc) => (
                    <span key={loc} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-hub-terracotta" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  )
}
