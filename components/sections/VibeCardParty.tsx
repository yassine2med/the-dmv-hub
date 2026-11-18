import Link from 'next/link'
import type { Vibe, VibeCategory } from '@/lib/types'

interface VibeCardProps {
  vibe: Vibe
}

const vibeSignals: Record<VibeCategory, {
  code: string
  index: string
  rail: string
  marker: string
  coordinate: string
  bg: string
  glow: string
}> = {
  Gaming: {
    code: 'GM',
    index: '01',
    rail: 'from-hub-pink/80 via-hub-purple/70 to-hub-teal/70',
    marker: 'text-hub-pink',
    coordinate: '38.907 / -77.036',
    bg: 'linear-gradient(135deg, rgba(200,80,192,0.22) 0%, #0F1525 45%, rgba(65,88,208,0.18) 100%)',
    glow: 'rgba(200,80,192,0.35)',
  },
  Food: {
    code: 'FD',
    index: '02',
    rail: 'from-hub-teal/80 via-hub-purple/70 to-hub-pink/70',
    marker: 'text-hub-teal',
    coordinate: '39.290 / -76.612',
    bg: 'linear-gradient(135deg, rgba(67,206,162,0.20) 0%, #0F1525 45%, rgba(255,204,0,0.12) 100%)',
    glow: 'rgba(67,206,162,0.35)',
  },
  Outdoors: {
    code: 'OD',
    index: '03',
    rail: 'from-hub-teal/80 via-hub-blue/70 to-hub-purple/70',
    marker: 'text-hub-teal',
    coordinate: '38.804 / -77.047',
    bg: 'linear-gradient(135deg, rgba(67,206,162,0.22) 0%, #0F1525 45%, rgba(65,88,208,0.16) 100%)',
    glow: 'rgba(67,206,162,0.35)',
  },
  Nightlife: {
    code: 'NL',
    index: '04',
    rail: 'from-hub-pink/80 via-hub-purple/70 to-hub-blue/70',
    marker: 'text-hub-purple',
    coordinate: '38.883 / -77.107',
    bg: 'linear-gradient(135deg, rgba(255,107,157,0.22) 0%, #0F1525 45%, rgba(200,80,192,0.20) 100%)',
    glow: 'rgba(255,107,157,0.35)',
  },
  Fitness: {
    code: 'FT',
    index: '05',
    rail: 'from-hub-teal/80 via-hub-pink/70 to-hub-purple/70',
    marker: 'text-hub-teal',
    coordinate: '39.083 / -77.153',
    bg: 'linear-gradient(135deg, rgba(67,206,162,0.20) 0%, #0F1525 45%, rgba(255,107,157,0.16) 100%)',
    glow: 'rgba(67,206,162,0.30)',
  },
  'Dating Mixers': {
    code: 'DM',
    index: '06',
    rail: 'from-hub-pink/85 via-hub-purple/70 to-hub-teal/70',
    marker: 'text-hub-pink',
    coordinate: '38.889 / -77.009',
    bg: 'linear-gradient(135deg, rgba(255,107,157,0.26) 0%, #0F1525 45%, rgba(200,80,192,0.22) 100%)',
    glow: 'rgba(255,107,157,0.40)',
  },
  'Speed Friending': {
    code: 'SF',
    index: '07',
    rail: 'from-hub-blue/80 via-hub-teal/70 to-hub-pink/70',
    marker: 'text-hub-blue',
    coordinate: '39.045 / -76.641',
    bg: 'linear-gradient(135deg, rgba(65,88,208,0.22) 0%, #0F1525 45%, rgba(67,206,162,0.18) 100%)',
    glow: 'rgba(65,88,208,0.35)',
  },
  'Day Trips': {
    code: 'DT',
    index: '08',
    rail: 'from-hub-purple/85 via-hub-blue/70 to-hub-teal/70',
    marker: 'text-hub-purple',
    coordinate: '38.449 / -78.869',
    bg: 'linear-gradient(135deg, rgba(200,80,192,0.20) 0%, #0F1525 45%, rgba(65,88,208,0.18) 100%)',
    glow: 'rgba(200,80,192,0.32)',
  },
  Movies: {
    code: 'MV',
    index: '09',
    rail: 'from-hub-blue/80 via-hub-purple/70 to-hub-pink/70',
    marker: 'text-hub-blue',
    coordinate: '38.978 / -76.492',
    bg: 'linear-gradient(135deg, rgba(65,88,208,0.24) 0%, #0F1525 45%, rgba(200,80,192,0.20) 100%)',
    glow: 'rgba(65,88,208,0.35)',
  },
  Volunteering: {
    code: 'VL',
    index: '10',
    rail: 'from-hub-teal/80 via-hub-blue/70 to-hub-pink/70',
    marker: 'text-hub-teal',
    coordinate: '39.099 / -76.848',
    bg: 'linear-gradient(135deg, rgba(67,206,162,0.22) 0%, #0F1525 45%, rgba(255,107,157,0.16) 100%)',
    glow: 'rgba(67,206,162,0.35)',
  },
  'Coffee Crawls': {
    code: 'CC',
    index: '11',
    rail: 'from-hub-teal/80 via-hub-blue/70 to-hub-purple/70',
    marker: 'text-hub-teal',
    coordinate: '38.895 / -77.036',
    bg: 'linear-gradient(135deg, rgba(67,206,162,0.20) 0%, #0F1525 45%, rgba(65,88,208,0.16) 100%)',
    glow: 'rgba(67,206,162,0.30)',
  },
  'Live Music': {
    code: 'LM',
    index: '12',
    rail: 'from-hub-pink/80 via-hub-purple/70 to-hub-teal/70',
    marker: 'text-hub-pink',
    coordinate: '38.922 / -77.023',
    bg: 'linear-gradient(135deg, rgba(255,107,157,0.22) 0%, #0F1525 45%, rgba(200,80,192,0.20) 100%)',
    glow: 'rgba(255,107,157,0.35)',
  },
  'Museum Nights': {
    code: 'MN',
    index: '13',
    rail: 'from-hub-blue/80 via-hub-teal/70 to-hub-pink/70',
    marker: 'text-hub-blue',
    coordinate: '38.891 / -77.026',
    bg: 'linear-gradient(135deg, rgba(65,88,208,0.22) 0%, #0F1525 45%, rgba(67,206,162,0.18) 100%)',
    glow: 'rgba(65,88,208,0.35)',
  },
  'Dog Parks': {
    code: 'DP',
    index: '14',
    rail: 'from-hub-teal/80 via-hub-pink/70 to-hub-purple/70',
    marker: 'text-hub-teal',
    coordinate: '38.903 / -77.009',
    bg: 'linear-gradient(135deg, rgba(67,206,162,0.22) 0%, #0F1525 45%, rgba(255,107,157,0.16) 100%)',
    glow: 'rgba(67,206,162,0.35)',
  },
  Thrifting: {
    code: 'TF',
    index: '15',
    rail: 'from-hub-purple/85 via-hub-blue/70 to-hub-teal/70',
    marker: 'text-hub-purple',
    coordinate: '38.884 / -76.990',
    bg: 'linear-gradient(135deg, rgba(200,80,192,0.20) 0%, #0F1525 45%, rgba(65,88,208,0.18) 100%)',
    glow: 'rgba(200,80,192,0.32)',
  },
  'Rec Sports': {
    code: 'RS',
    index: '16',
    rail: 'from-hub-pink/80 via-hub-blue/70 to-hub-teal/70',
    marker: 'text-hub-pink',
    coordinate: '38.889 / -77.050',
    bg: 'linear-gradient(135deg, rgba(255,107,157,0.22) 0%, #0F1525 45%, rgba(67,206,162,0.18) 100%)',
    glow: 'rgba(255,107,157,0.35)',
  },
}

export function VibeCardParty({ vibe }: VibeCardProps) {
  const signal = vibeSignals[vibe.name]

  return (
    <Link
      href={`/events?filter=${encodeURIComponent(vibe.name)}`}
      className="group block h-full focus:outline-none"
    >
      <article
        className="tech-card gradient-border-anim relative h-full min-h-[24rem] overflow-hidden rounded-xl"
        style={{ background: signal.bg }}
      >
        {/* Ambient photographic vibe background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.14] transition-all duration-500 group-hover:opacity-[0.32] mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/vibes/${vibe.id}.png')` }}
        />
        <div className="absolute inset-0 cyber-grid opacity-50" />
        {/* Glow orb that blooms on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(ellipse at 50% 85%, ${signal.glow} 0%, transparent 65%)` }}
        />
        <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${signal.rail}`} />
        <div className="absolute inset-x-5 top-[7.5rem] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute left-5 top-20 h-28 w-28 rounded-full border border-white/10 opacity-80 transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-4 rounded-full border border-hub-teal/20" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-hub-teal/30 to-transparent" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-hub-pink/25 to-transparent" />
        </div>
        <div className="absolute bottom-3 right-4 font-mono text-[7.5rem] font-black leading-none text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]">
          {signal.code}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-hub-black via-hub-black/50 to-hub-black/20 transition-colors duration-300 group-hover:from-hub-black/90 group-hover:via-hub-black/40" />

        <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
          <div className="flex items-center justify-between">
            <span className="route-chip rounded-md px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] border border-white/10 bg-black/60 text-hub-text backdrop-blur-md transition-all duration-300 group-hover:border-hub-teal/40 group-hover:text-hub-teal">
              {vibe.id.replace('-', ' ')}
            </span>
            {/* Glowing signal node */}
            <div className="flex items-center gap-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-hub-muted">
              <span>ACTIVE</span>
              <span className="h-2 w-2 rounded-full bg-hub-teal shadow-[0_0_10px_#43CEA2] transition-all duration-300 group-hover:bg-hub-pink group-hover:shadow-[0_0_12px_#FF6B9D]" />
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-2 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-hub-teal opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              {'// signal_lock'} {signal.coordinate}
            </div>
            <div className={`mb-3 font-mono text-xs font-black uppercase tracking-[0.2em] ${signal.marker}`}>
              Lane {signal.index}
            </div>
            <h3 className="text-2xl font-black leading-tight text-hub-text transition-colors duration-300 group-hover:text-hub-teal">
              {vibe.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-hub-muted transition-colors duration-300 group-hover:text-hub-text">
              {vibe.description}
            </p>
            <div className="mt-4 flex items-center gap-2 pt-4 border-t border-white/5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em] text-hub-muted transition-colors group-hover:text-hub-text">
              <span>Enter lane</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
