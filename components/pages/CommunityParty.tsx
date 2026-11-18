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

function MemberBadgeMockup() {
  return (
    <div className="tech-card rounded-2xl p-6 bg-black/60 relative overflow-hidden max-w-sm mx-auto shadow-[0_0_40px_rgba(65,88,208,0.15)] hover:border-hub-teal/40 transition-all duration-300">
      <div className="absolute top-0 right-0 font-mono text-[9px] bg-hub-teal/20 text-hub-teal px-2 py-0.5 rounded-bl">
        PROFILE_TYPE: FOUNDER_EXAMPLE
      </div>
      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
        <div className="relative h-14 w-14 shrink-0 rounded-full border border-hub-pink/40 bg-white/5 overflow-hidden">
          <Image
            src="/yaz.png"
            alt="Yaz"
            width={56}
            height={56}
            className="h-full w-full object-cover object-top"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-hub-teal border-2 border-black animate-pulse z-10" />
        </div>
        <div>
          <h4 className="text-lg font-black text-hub-text">Yaz</h4>
          <p className="text-xs font-mono text-hub-teal">{'// community_admin'}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3 font-mono text-xs">
        <div className="flex justify-between border-b border-white/5 pb-1">
          <span className="text-hub-muted">LOC_ZONE:</span>
          <span className="text-hub-text font-bold">Silver Spring, MD</span>
        </div>
        <div className="flex justify-between border-b border-white/5 pb-1">
          <span className="text-hub-muted">ZODIAC:</span>
          <span className="text-hub-text font-bold">Scorpio ♏</span>
        </div>
        <div className="flex flex-col gap-1 border-b border-white/5 pb-1">
          <span className="text-hub-muted">ACTIVE_LANES:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {['#find-a-crew', '#tech-webdev', '#motorcycles'].map(lane => (
              <span key={lane} className="bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-[10px] text-hub-text">{lane}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CommunityParty() {
  return (
    <div className="site-grid min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        {/* Header Section */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <ScrollReveal direction="left">
            <p className="section-label">Community HQ</p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              The site points you in. <GradientText>Discord keeps you there.</GradientText>
            </h1>
          </ScrollReveal>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {proof.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 100} direction="right">
                <div className="tech-card rounded-xl p-4 bg-hub-card">
                  <AnimatedCounter value={item.value} className="font-mono text-3xl font-black text-hub-text" />
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-hub-muted">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Discord Server Window */}
        <ScrollReveal>
          <DiscordWidget />
        </ScrollReveal>

        {/* Launch-stage safety */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center pt-8">
          <ScrollReveal direction="left">
            <div>
              <p className="section-label">Launch-Stage Safety</p>
              <h2 className="mt-6 text-4xl font-black text-hub-text">
                Clear standards. <GradientText>No fake safety guarantees.</GradientText>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-hub-muted">
                The Discord is in its founding stage. Joining a server never removes the normal risks of meeting
                people online, so use good judgment and follow these practical safeguards:
              </p>
              <div className="mt-8 space-y-4">
                {verificationSteps.map((step, index) => (
                  <ScrollReveal key={step.step} delay={index * 120}>
                    <div className="tech-card rounded-xl p-5 bg-hub-card flex gap-4 transition-all duration-300 hover:border-hub-teal/40">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-black ${step.accent}`}>
                        {step.step}
                      </span>
                      <div>
                        <h3 className="text-base font-black text-hub-text">{step.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-hub-muted">{step.detail}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-6">
              <div className="hub-panel-strong rounded-2xl p-7 text-center">
                <h3 className="text-xl font-black text-hub-text">Sample founder profile</h3>
                <p className="text-sm text-hub-muted mt-2 mb-6">
                  Zodiac tags, local neighborhood flags, and active interest lanes help find matching signals instantly.
                </p>
                <MemberBadgeMockup />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Interest Directories Grid */}
        <div className="pt-8">
          <ScrollReveal>
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <p className="section-label justify-center">Interest Rooms Directory</p>
              <h2 className="mt-6 text-4xl font-black text-hub-text">
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
                <div className="tech-card rounded-xl p-5 bg-hub-card transition-all duration-300 hover:border-hub-teal/40 h-full">
                  <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-4">
                    <span className="text-2xl">{circle.icon}</span>
                    <h3 className="text-lg font-black leading-tight text-hub-text">{circle.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {circle.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-hub-muted">
                        <span className="text-hub-teal font-mono shrink-0">·</span>
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
              <Button href={siteConfig.discordInvite} size="lg" className="relative overflow-hidden group/btn border border-transparent hover:border-hub-teal/30 hover:shadow-[0_0_25px_rgba(67,206,162,0.25)]" external>
                Join the Founding Server
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
