import { HeroParty } from '@/components/sections/HeroParty'
import { EventCardParty } from '@/components/sections/EventCardParty'
import { VibeCardParty } from '@/components/sections/VibeCardParty'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { TiltCard } from '@/components/ui/TiltCard'
import { ActivityTickerParty } from '@/components/sections/ActivityTickerParty'
import { EmailCaptureParty } from '@/components/sections/EmailCaptureParty'
import { CircuitLines } from '@/components/ui/CircuitLines'
import { vibes } from '@/data/vibes'
import { communityGoals, communityStats } from '@/data/community'
import { siteConfig } from '@/lib/config'
import type { Event } from '@/lib/types'

const routeSteps = [
  {
    number: '01',
    title: 'Join the signal',
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
    dotClass: 'bg-hub-pink shadow-[0_0_8px_rgba(255,107,157,0.75)]',
  },
  {
    label: 'Dating',
    detail: 'Structured singles mixers for people who are done with apps. Real rooms, real people, a host who keeps it from going awkward. No swiping, no DM roulette.',
    dotClass: 'bg-hub-purple shadow-[0_0_8px_rgba(200,80,192,0.75)]',
  },
  {
    label: 'Plans',
    detail: 'Rooftops, food crawls, hikes, day trips, movie nights. Curated events across the District of Columbia, Maryland, and Virginia. The kind of weekend you actually look forward to.',
    dotClass: 'bg-hub-blue shadow-[0_0_8px_rgba(65,88,208,0.75)]',
  },
  {
    label: 'Momentum',
    detail: 'A community that keeps the weekend from going blank. The Discord stays active between events so the connections you make have somewhere to go.',
    dotClass: 'bg-hub-teal shadow-[0_0_8px_rgba(67,206,162,0.75)]',
  },
]

/* Color map for step accent dots */
const stepAccents = [
  { dot: 'bg-hub-pink shadow-[0_0_10px_#FF6B9D]', border: 'hover:border-hub-pink/40', glow: 'group-hover:shadow-[0_0_20px_rgba(255,107,157,0.1)]' },
  { dot: 'bg-hub-blue shadow-[0_0_10px_#4158D0]', border: 'hover:border-hub-blue/40', glow: 'group-hover:shadow-[0_0_20px_rgba(65,88,208,0.1)]' },
  { dot: 'bg-hub-teal shadow-[0_0_10px_#43CEA2]', border: 'hover:border-hub-teal/40', glow: 'group-hover:shadow-[0_0_20px_rgba(67,206,162,0.1)]' },
]

/* Trust pillars — surfaced on the home page because safety is the #1 reason
   someone hesitates to join a meet-strangers community. */
const trustPillars = [
  {
    title: 'Clear entry rules',
    desc: 'The Code of Conduct is public before you join, and moderation expectations are visible from day one.',
    iconWrap: 'border-hub-teal/30 bg-hub-teal/[0.08] text-hub-teal',
    ring: 'hover:border-hub-teal/40',
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
    iconWrap: 'border-hub-pink/30 bg-hub-pink/[0.08] text-hub-pink',
    ring: 'hover:border-hub-pink/40',
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
    iconWrap: 'border-hub-blue/30 bg-hub-blue/[0.08] text-hub-blue',
    ring: 'hover:border-hub-blue/40',
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
    iconWrap: 'border-hub-purple/30 bg-hub-purple/[0.08] text-hub-purple',
    ring: 'hover:border-hub-purple/40',
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
  {
    t: 'You RSVP in Discord',
    d: 'One tap in the event channel. You can see who else is going before you ever commit to anything.',
    ring: 'border-hub-pink/50 text-hub-pink',
  },
  {
    t: 'Arrive safely',
    d: 'Use your own transportation plan, meet in the published public venue, and tell someone where you are going.',
    ring: 'border-hub-purple/50 text-hub-purple',
  },
  {
    t: 'The format does the talking',
    d: 'Speed-friending rounds, a food-crawl route, a game table. There is always a built-in reason to start a conversation.',
    ring: 'border-hub-blue/50 text-hub-blue',
  },
  {
    t: 'You find your people',
    d: 'By the second hour you are mid-conversation with a few people you would actually text again.',
    ring: 'border-hub-teal/50 text-hub-teal',
  },
  {
    t: 'It keeps going',
    d: "Photos hit the Discord that night. Next weekend's plans start forming before you even leave.",
    ring: 'border-hub-pink/50 text-hub-pink',
  },
]

export function HomeParty({ events }: { events: Event[] }) {
  const allEvents = events
  const featured = allEvents.filter((event) => event.featured)
  const featuredEvents = (featured.length > 0 ? featured : allEvents).slice(0, 3)
  const featuredVibes = vibes.slice(0, 4)

  return (
    <>
      <HeroParty events={allEvents} />

      {/* LIVE ACTIVITY TICKER */}
      <ActivityTickerParty />

      <div className="relative">
        <CircuitLines />

        {/* COMMUNITY STATS */}
      <section className="relative border-b border-white/[0.06] px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {communityStats.map((stat) => (
                <TiltCard key={stat.label}>
                  <div
                    className="hub-panel gradient-border-anim group h-full rounded-2xl border border-white/10 p-5 text-center"
                  >
                    <div className={`text-4xl font-black tracking-tight sm:text-5xl ${stat.accent}`}>
                      <AnimatedCounter value={stat.value} duration={2000} />
                    </div>
                    <p className="mt-2 text-sm font-bold text-hub-text">{stat.label}</p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-hub-muted">{stat.sub}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY THIS EXISTS */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-hub-pink/[0.10] blur-[8rem]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <ScrollReveal direction="left">
            <p className="section-label">Why this exists</p>
            <h2 className="mt-6 text-balance text-4xl font-black leading-[1.02] text-hub-text sm:text-5xl lg:text-6xl">
              Somewhere between graduation and your 30s,{' '}
              <GradientText>the easy ways to meet people disappeared.</GradientText>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150}>
            <div className="hub-panel rounded-2xl p-6 sm:p-8">
              <p className="text-xl leading-relaxed text-hub-muted">
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
                <h2 className="mt-5 text-4xl font-black text-hub-text">
                  How it <GradientText>actually works</GradientText>
                </h2>
              </div>
              <p className="max-w-xl text-hub-muted">
                No complicated product funnel. The community lives where people already talk, and the site points you toward the right first move.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative grid gap-4 lg:grid-cols-3">
            {/* Animated SVG Connected Circuit Line */}
            <div className="absolute left-0 right-0 top-12 hidden h-6 lg:block pointer-events-none z-10">
              <svg className="w-full h-full" viewBox="0 0 1200 24" fill="none">
                <path d="M 50 12 L 1150 12" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                <path d="M 50 12 L 1150 12" stroke="url(#circuit-grad)" strokeWidth="2" strokeDasharray="12 6" className="animate-[grid-scan_20s_linear_infinite]" />
                
                <circle cx="50" cy="12" r="10" fill="none" stroke="#FF6B9D" strokeWidth="1.5" className="animate-ping opacity-50" />
                <circle cx="50" cy="12" r="4" fill="#FF6B9D" />
                
                <circle cx="450" cy="12" r="10" fill="none" stroke="#4158D0" strokeWidth="1.5" className="animate-ping opacity-50" style={{ animationDelay: '1s' }} />
                <circle cx="450" cy="12" r="4" fill="#4158D0" />
                
                <circle cx="850" cy="12" r="10" fill="none" stroke="#43CEA2" strokeWidth="1.5" className="animate-ping opacity-50" style={{ animationDelay: '2s' }} />
                <circle cx="850" cy="12" r="4" fill="#43CEA2" />

                <defs>
                  <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B9D" />
                    <stop offset="50%" stopColor="#4158D0" />
                    <stop offset="100%" stopColor="#43CEA2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {routeSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 120}>
                <div className={`tech-card group relative rounded-2xl p-6 bg-hub-card transition-all duration-300 ${stepAccents[index].border} ${stepAccents[index].glow}`}>
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${stepAccents[index].dot}`} />
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-hub-muted">{'// step_0'}{index + 1}</span>
                    </div>
                    <span className="font-mono text-sm font-black text-hub-text bg-white/[0.05] border border-white/10 rounded px-2.5 py-0.5">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-hub-text group-hover:text-hub-teal transition-colors duration-300">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-hub-muted">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR FIRST NIGHT — play-by-play that kills first-timer anxiety */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center">
              <p className="section-label justify-center"><span>{'// FIRST_NIGHT'}</span></p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-hub-text">
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
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-hub-black font-mono text-xs font-black ${step.ring}`}>
                      {index + 1}
                    </span>
                    {index < firstNight.length - 1 && (
                      <span aria-hidden className="mt-1 w-px flex-1 bg-gradient-to-b from-white/15 to-white/[0.04]" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-black leading-tight text-hub-text">{step.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-hub-muted">{step.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL LANES */}
      <section className="relative overflow-hidden border-y border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-hub-teal/[0.10] blur-[8rem]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <ScrollReveal direction="left">
              <p className="section-label">Social lanes</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-hub-text">
                Not one generic meetup. <GradientText>Four reasons people join.</GradientText>
              </h2>
            </ScrollReveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {lanes.map((lane, index) => (
                <ScrollReveal key={lane.label} delay={index * 100}>
                  <div className="tech-card rounded-xl p-5 bg-hub-card transition-all duration-300 hover:border-hub-teal/40 hover:shadow-[0_0_20px_rgba(67,206,162,0.1)]">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-2xl font-black text-hub-text">{lane.label}</h3>
                      <div className="flex items-center gap-2 font-mono text-[0.6rem] font-bold text-hub-muted">
                        <span>LANE_0{index + 1}</span>
                        <span className={`h-2 w-2 rounded-full ${lane.dotClass}`} />
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-hub-muted">{lane.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT DISPATCH */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Event dispatch</p>
                <h2 className="mt-5 text-4xl font-black text-hub-text">
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
                <EventCardParty event={event} />
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
                <h2 className="mt-5 text-4xl font-black text-hub-text">
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
                <VibeCardParty vibe={vibe} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LAUNCH PRINCIPLES */}
      <section className="relative overflow-hidden border-y border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-hub-purple/[0.09] blur-[8rem]" />
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-hub-teal/[0.08] blur-[8rem]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="section-label justify-center"><span>{'// LAUNCH_PRINCIPLES'}</span></p>
            <h2 className="mx-auto mt-5 max-w-2xl text-center text-4xl font-black text-hub-text">
              What we are <GradientText>building toward.</GradientText>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-hub-muted">
              The DMV Hub is in its founding stage. These are operating goals, not invented testimonials.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {communityGoals.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`hub-panel gradient-border-anim h-full rounded-2xl border-t-2 p-6 ${item.accent}`}>
                  <p className="font-mono text-hub-teal text-lg leading-none mb-4">&ldquo;</p>
                  <p className="text-sm leading-relaxed text-hub-muted">{item.quote}</p>
                  <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
                    <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-hub-muted/70">{item.meta}</p>
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
                  <h2 className="mt-5 text-3xl font-black leading-tight text-hub-text sm:text-4xl">
                    Find your <GradientText>neighborhood crew.</GradientText>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-hub-muted">
                    Plans are organized by DMV zone rather than one vague &ldquo;District of Columbia
                    area.&rdquo; Join Discord to see what is currently being planned near you.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { zone: 'U Street / Shaw', area: 'DC', dot: 'bg-hub-pink' },
                    { zone: 'H Street / NoMa', area: 'DC', dot: 'bg-hub-pink' },
                    { zone: 'Columbia Heights', area: 'DC', dot: 'bg-hub-pink' },
                    { zone: 'Silver Spring', area: 'MD', dot: 'bg-hub-teal' },
                    { zone: 'Bethesda / Rockville', area: 'MD', dot: 'bg-hub-teal' },
                    { zone: 'PG County / Largo', area: 'MD', dot: 'bg-hub-teal' },
                    { zone: 'Arlington / Rosslyn', area: 'VA', dot: 'bg-hub-blue' },
                    { zone: 'Tysons / NoVA', area: 'VA', dot: 'bg-hub-blue' },
                    { zone: 'Annapolis / Baltimore', area: 'MD+', dot: 'bg-hub-purple' },
                  ].map((item) => (
                    <div key={item.zone} className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]">
                      <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
                      <div>
                        <p className="text-xs font-bold leading-tight text-hub-text">{item.zone}</p>
                        <p className="mt-0.5 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-hub-muted/60">{item.area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SAFE BY DESIGN — handle the trust objection right before the ask */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-4 py-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-hub-teal/[0.07] blur-[8rem]" />
        <div className="relative mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label justify-center"><span>{'// SAFE_BY_DESIGN'}</span></p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-hub-text">
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
                <div className={`tech-card h-full rounded-2xl bg-hub-card p-6 transition-all duration-300 ${pillar.ring}`}>
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${pillar.iconWrap}`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-black leading-tight text-hub-text">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-hub-muted">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY DROP — soft conversion for the not-ready-for-Discord crowd */}
      <EmailCaptureParty />

      {/* FINAL CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="hub-panel-strong relative mx-auto max-w-7xl overflow-hidden rounded-2xl p-8 text-center sm:p-16">
            {/* Background drama: large ambient orbs */}
            <div className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-hub-pink/[0.12] blur-[6rem]" />
            <div className="pointer-events-none absolute bottom-[-8rem] right-[-8rem] h-80 w-80 rounded-full bg-hub-teal/[0.12] blur-[6rem]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-hub-pink/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-hub-teal/50 to-transparent" />

            <div className="relative">
              <p className="section-label justify-center">Discord-first community</p>
              <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-tight text-hub-text sm:text-5xl lg:text-6xl">
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
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/[0.08] pt-8 font-mono text-xs text-hub-muted">
                {['DC · U Street', 'MD · Silver Spring', 'VA · Arlington', 'MD · Bethesda', 'DC · H Street'].map((loc) => (
                  <span key={loc} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-hub-teal shadow-[0_0_6px_#43CEA2]" />
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
