import Image from 'next/image'
import { DiscordWidget } from '@/components/sections/DiscordWidget'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { siteConfig } from '@/lib/config'

const proof = [
  { value: '22+', label: 'adults welcome' },
  { value: '4', label: 'public planning channels' },
  { value: '3', label: 'DMV regions in scope' },
]

const verificationSteps = [
  {
    step: '01',
    title: 'Read the community rules',
    detail: 'The Code of Conduct is public, including consent, harassment, privacy, promotion, and reporting expectations.',
    accent: 'bg-hub-pink/10 border-hub-pink/30 text-hub-pink',
  },
  {
    step: '02',
    title: 'Introduce yourself consistently',
    detail: 'Use one consistent Discord identity and share only the profile details you are comfortable making visible.',
    accent: 'bg-hub-blue/10 border-hub-blue/30 text-hub-blue',
  },
  {
    step: '03',
    title: 'Confirm hosted-event details',
    detail: 'Before traveling, check Discord for the final venue, cost, accessibility notes, organizer, and cancellation status.',
    accent: 'bg-hub-teal/10 border-hub-teal/30 text-hub-teal',
  },
]

const interestCircles = [
  {
    category: 'Active & Sports',
    items: [
      'Tennis & Pickleball matches (all levels)',
      'Soccer & basketball pickup games',
      'Motorcycle riders crew, C&O Canal route',
      'Golf meetups (beginner-friendly)',
      'Run clubs in H Street, U Street, Rosslyn',
      'Indoor climbing & bouldering groups',
    ],
    icon: '⚽',
  },
  {
    category: 'Tech & Learning',
    items: [
      'Web dev & design circles, weekly check-ins',
      'Language exchange: Arabic, French, Spanish, Amharic',
      'Public study sessions & co-working spots',
      'AI & side project accountability',
      'Federal tech & cybersecurity professionals',
    ],
    icon: '💻',
  },
  {
    category: 'Arts & Night Out',
    items: [
      'Theater, concerts & live music at District of Columbia venues',
      'Outdoor & rooftop movie nights',
      'Gallery walks: Shaw, Georgetown, Anacostia',
      'Comedy nights & open mics',
      'Watch parties for series & sporting events',
    ],
    icon: '🎭',
  },
  {
    category: 'Food & Culture',
    items: [
      'Restaurant takeovers: Ethiopian, Nigerian, Caribbean',
      'Cooking nights & recipe sharing',
      'Farmers market hangs on Saturday mornings',
      'Cultural celebrations & holiday meetups',
      'Halal-friendly & vegetarian event threads',
    ],
    icon: '🍽️',
  },
  {
    category: 'Day Trips & Outdoors',
    items: [
      'Shenandoah & Blue Ridge hike crew',
      'Annapolis crab & harbor trips',
      'Kayaking the C&O Canal & Potomac',
      'Baltimore neighborhood explorations',
      'Harper\'s Ferry & Great Falls excursions',
    ],
    icon: '🗺️',
  },
  {
    category: 'Introductions & Profiles',
    items: [
      'Optional member photo & bio',
      'Zodiac, neighborhood & vibe tags',
      'Social handle exchange thread',
      'New-to-DMV welcome channel',
      'Find your area: DC / MD / VA sub-zones',
    ],
    icon: '🏷️',
  },
]

function MemberBadgeWarm() {
  return (
    <div className="tech-card relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-hub-card p-6 text-left transition-all duration-300 hover:border-hub-terracotta/40">
      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-hub-teal/30 bg-hub-teal/10 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-hub-teal">
        <span className="h-1.5 w-1.5 rounded-full bg-hub-teal" /> Founder
      </span>
      <div className="flex items-center gap-4 border-b border-hub-border pb-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-hub-terracotta/40" style={{ background: '#0a0f1e' }}>
          <Image src="/yaz.png" alt="Yaz" width={56} height={56} className="h-full w-full object-contain object-center" />
        </div>
        <div>
          <h4 className="font-display text-lg font-black text-hub-text">Yaz</h4>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-hub-terracotta">Community admin</p>
        </div>
      </div>

      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between border-b border-hub-border pb-2">
          <dt className="text-hub-muted">Neighborhood</dt>
          <dd className="font-bold text-hub-text">Silver Spring, MD</dd>
        </div>
        <div className="flex justify-between border-b border-hub-border pb-2">
          <dt className="text-hub-muted">Vibe</dt>
          <dd className="font-bold text-hub-text">Scorpio ♏</dd>
        </div>
        <div className="border-b border-hub-border pb-2">
          <dt className="text-hub-muted">Active lanes</dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {['#find-a-crew', '#tech-webdev', '#motorcycles'].map((lane) => (
              <span key={lane} className="rounded-full border border-hub-border bg-hub-sand px-2 py-0.5 text-[0.7rem] font-medium text-hub-text">{lane}</span>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  )
}

export function CommunityCasual() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />
      <div className="pointer-events-none absolute -right-40 top-[48rem] h-[30rem] w-[30rem] rounded-full bg-hub-terracotta/[0.06] blur-[8rem]" />

      <section className="relative mx-auto max-w-7xl space-y-24 px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <ScrollReveal direction="left">
            <p className="section-label">Community HQ</p>
            <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              The site points you in. <GradientText>Discord keeps you there.</GradientText>
            </h1>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {proof.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 100} direction="right">
                <div className="tech-card rounded-xl bg-hub-card p-4">
                  <AnimatedCounter value={item.value} className="font-display text-3xl font-black text-hub-text" />
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-hub-muted">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Discord widget */}
        <ScrollReveal>
          <DiscordWidget />
        </ScrollReveal>

        {/* Launch-stage safety */}
        <div className="grid items-center gap-12 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal direction="left">
            <div>
              <p className="section-label">Launch-stage safety</p>
              <h2 className="mt-6 font-display text-4xl font-black text-hub-text">
                Clear standards. <GradientText>No fake safety guarantees.</GradientText>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-hub-muted">
                The Discord is in its founding stage. Joining a server never removes the normal risks of meeting
                people online, so use good judgment and follow these practical safeguards:
              </p>
              <div className="mt-8 space-y-4">
                {verificationSteps.map((step, index) => (
                  <ScrollReveal key={step.step} delay={index * 120}>
                    <div className="tech-card flex gap-4 rounded-xl bg-hub-card p-5 transition-all duration-300 hover:border-hub-terracotta/40">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-display text-xs font-black ${step.accent}`}>
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-black text-hub-text">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-hub-muted">{step.detail}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="hub-panel-strong rounded-2xl p-7 text-center">
              <h3 className="font-display text-xl font-black text-hub-text">Sample founder profile</h3>
              <p className="mb-6 mt-2 text-sm text-hub-muted">
                Vibe tags, neighborhood flags, and active interest lanes help you find your people fast.
              </p>
              <MemberBadgeWarm />
            </div>
          </ScrollReveal>
        </div>

        {/* Interest rooms */}
        <div className="pt-8">
          <ScrollReveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="section-label justify-center">Interest rooms</p>
              <h2 className="mt-6 font-display text-4xl font-black text-hub-text">
                Enter your specific <GradientText>interest circle</GradientText>
              </h2>
              <p className="mt-4 text-hub-muted">
                These are interest-room ideas the founding community can activate as real people join. Browse the
                current Discord channels, then request the next lane you want to help build.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interestCircles.map((circle, index) => (
              <ScrollReveal key={circle.category} delay={index * 80}>
                <div className="tech-card h-full rounded-xl bg-hub-card p-5 transition-all duration-300 hover:border-hub-terracotta/40">
                  <div className="mb-5 flex items-center gap-3 border-b border-hub-border pb-4">
                    <span className="text-2xl">{circle.icon}</span>
                    <h3 className="font-display text-lg font-black leading-tight text-hub-text">{circle.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {circle.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-hub-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-hub-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <Button href={siteConfig.discordInvite} size="lg" external>
                Join the Founding Server
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
