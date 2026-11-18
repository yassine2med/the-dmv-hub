import { Badge } from '@/components/ui/Badge'
import type { Event } from '@/lib/types'

interface EventCardProps {
  event: Event
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

/** Relative window label derived from the event date (no fabricated data). */
function relativeWindow(iso: string): string | null {
  const now = new Date()
  const d = new Date(iso)
  const days = Math.round((d.getTime() - now.getTime()) / 86_400_000)
  if (days < 0) return null
  if (days <= 7) return 'This week'
  if (days <= 14) return 'Next week'
  if (days <= 31) return 'This month'
  return null
}

export function EventCardParty({ event }: EventCardProps) {
  const date = new Date(event.date)
  const window = relativeWindow(event.date)

  // Determine the glow-dot style for the state/location area
  const locationDotColor = 
    event.locationArea === 'DC' 
      ? 'bg-hub-dc-red shadow-[0_0_8px_#DC143C]' 
      : event.locationArea === 'MD' 
      ? 'bg-[#FFCC00] shadow-[0_0_8px_#FFCC00]' 
      : event.locationArea === 'VA'
      ? 'bg-hub-blue shadow-[0_0_8px_#4158D0]'
      : 'bg-white/40';

  return (
    <article className="tech-card gradient-border-anim group relative flex h-full flex-col overflow-hidden rounded-xl p-5 bg-hub-card">
      {/* Visual background gradients */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-hub-gradient opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute right-[-4rem] top-[-4rem] h-32 w-32 rounded-full bg-hub-purple/[0.1] blur-3xl transition-all duration-500 group-hover:bg-hub-teal/[0.12]" />

      <div className="relative mb-5 flex items-start justify-between gap-4">
        {/* Date block with custom neon theme */}
        <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-center font-mono transition-colors duration-300 group-hover:border-hub-teal/40">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-hub-muted group-hover:text-hub-teal transition-colors duration-300">
            {date.toLocaleDateString('en-US', { month: 'short' })}
          </p>
          <p className="text-2xl font-black leading-none text-hub-text mt-0.5">
            {date.toLocaleDateString('en-US', { day: '2-digit' })}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex flex-wrap justify-end gap-1.5">
            {event.recurrence && (
              <span className="inline-flex items-center gap-1 rounded-full border border-hub-purple/40 bg-hub-purple/10 px-2 py-0.5 font-mono text-[0.58rem] font-black uppercase tracking-[0.1em] text-hub-purple">
                ↻ {event.recurrence === 'biweekly' ? 'Biweekly' : event.recurrence === 'weekly' ? 'Weekly' : 'Monthly'}
              </span>
            )}
            <Badge label={event.vibe} type="vibe" />
            <Badge label={event.locationArea} type="location" />
          </div>
          {/* Status signal */}
          <div className="flex items-center gap-1.5 font-mono text-[0.6rem] font-bold uppercase tracking-widest text-hub-muted">
            <span className={locationDotColor + " h-2 w-2 rounded-full"} />
            <span>{event.locationArea} DISPATCH</span>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Cyber prefix */}
        <div className="font-mono text-[0.6rem] font-bold tracking-widest text-hub-muted/60 mb-1">
          {'// event_id_'}{event.id.replace('-', '_')}
        </div>
        <h3 className="text-xl font-black leading-tight text-hub-text group-hover:text-hub-teal transition-colors duration-300">
          {event.title}
        </h3>
        
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-hub-teal">
            {formatDate(event.date)}
          </p>
          {window && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hub-teal/30 bg-hub-teal/10 px-2 py-0.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-hub-teal" />
              <span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-hub-teal">{window}</span>
            </span>
          )}
          <span className="hidden w-1 h-1 rounded-full bg-white/20 sm:inline" />
          <p className="text-xs text-hub-muted group-hover:text-hub-text transition-colors duration-300">
            {event.locationLabel}
          </p>
        </div>
      </div>

      <p className="relative mt-4 line-clamp-3 text-sm leading-relaxed text-hub-muted transition-colors duration-300 group-hover:text-hub-text/90">
        {event.description}
      </p>

      {/* Futuristic footer connection link */}
      <a
        href={event.discordLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-auto inline-flex items-center gap-2 pt-6 text-xs font-extrabold uppercase tracking-[0.15em] text-hub-muted transition-all duration-300 group-hover:text-hub-teal"
      >
        <span className="route-node transition-all duration-300 group-hover:bg-hub-teal group-hover:shadow-[0_0_12px_rgba(67,206,162,0.8)]" />
        <span>Confirm event details</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </article>
  )
}
