import type { VibeCategory, LocationArea } from '@/lib/types'

const vibeColors: Record<string, string> = {
  Gaming: 'bg-hub-purple/[0.12] text-hub-text border-hub-purple/[0.35]',
  Food: 'bg-hub-pink/[0.12] text-hub-text border-hub-pink/[0.35]',
  Outdoors: 'bg-hub-teal/[0.12] text-hub-text border-hub-teal/[0.35]',
  Nightlife: 'bg-hub-blue/[0.14] text-hub-text border-hub-blue/40',
  Fitness: 'bg-hub-dc-red/[0.12] text-hub-text border-hub-dc-red/[0.35]',
  'Dating Mixers': 'bg-hub-pink/[0.14] text-hub-text border-hub-pink/[0.45]',
  'Speed Friending': 'bg-hub-teal/[0.14] text-hub-text border-hub-teal/[0.45]',
  'Day Trips': 'bg-hub-blue/[0.14] text-hub-text border-hub-blue/40',
  Movies: 'bg-hub-purple/[0.12] text-hub-text border-hub-purple/[0.35]',
  Volunteering: 'bg-hub-teal/[0.12] text-hub-text border-hub-teal/[0.35]',
}

const locationColors: Record<string, string> = {
  DC: 'bg-hub-dc-red/[0.12] text-hub-text border-hub-dc-red/40',
  MD: 'bg-hub-md-gold/[0.18] text-hub-text border-hub-md-gold/[0.55]',
  VA: 'bg-hub-va-navy/[0.10] text-hub-text border-hub-va-navy/[0.35]',
  Virtual: 'bg-hub-sand text-hub-text border-hub-border',
}

interface BadgeProps {
  label: VibeCategory | LocationArea | string
  type?: 'vibe' | 'location' | 'default'
}

export function Badge({ label, type = 'default' }: BadgeProps) {
  const colorMap =
    type === 'vibe' ? vibeColors : type === 'location' ? locationColors : {}

  const colors = colorMap[label] ?? 'bg-hub-sand text-hub-muted border-hub-border'

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.11em] ${colors}`}>
      {label}
    </span>
  )
}
