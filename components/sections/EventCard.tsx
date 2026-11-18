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

export function EventCard({ event }: EventCardProps) {
  const date = new Date(event.date)
  const window = relativeWindow(event.date)

  return (
    <article className="tech-card group relative flex h-full flex-col overflow-hidden rounded-2xl bg-hub-card p-5">
      {/* Gradient accent rule across the top */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-hub-gradient opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative mb-5 flex items-start justify-between gap-4">
        {/* Date block */}
        <div className="rounded-xl border border-hub-border bg-hub-sand px-3 py-2 text-center transition-colors duration-300 group-hover:border-hub-terracotta/40">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-hub-terracotta">
            {date.toLocaleDateString('en-US', { month: 'short' })}
          </p>
          <p className="mt-0.5 font-display text-2xl font-black leading-none text-hub-text">
            {date.toLocaleDateString('en-US', { day: '2-digit' })}
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-1.5">
          {event.recurrence && (
            <span className="inline-flex items-center gap-1 rounded-full border border-hub-blue/40 bg-hub-blue/10 px-2 py-0.5 text-[0.58rem] font-black uppercase tracking-[0.1em] text-hub-blue">
              ↻ {event.recurrence === 'biweekly' ? 'Biweekly' : event.recurrence === 'weekly' ? 'Weekly' : 'Monthly'}
            </span>
          )}
          <Badge label={event.vibe} type="vibe" />
          <Badge label={event.locationArea} type="location" />
        </div>
      </div>

      <div className="relative">
        <h3 className="font-display text-xl font-black leading-tight text-hub-text transition-colors duration-300 group-hover:text-hub-terracotta">
          {event.title}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-hub-terracotta">
            {formatDate(event.date)}
          </p>
          {window && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-hub-terracotta/30 bg-hub-terracotta/10 px-2 py-0.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-hub-terracotta" />
              <span className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-hub-terracotta">{window}</span>
            </span>
          )}
          <span className="hidden h-1 w-1 rounded-full bg-hub-border sm:inline" />
          <p className="text-xs text-hub-muted">{event.locationLabel}</p>
        </div>
      </div>

      <p className="relative mt-4 line-clamp-3 text-sm leading-relaxed text-hub-muted">
        {event.description}
      </p>

      <a
        href={event.discordLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-auto inline-flex items-center gap-2 pt-6 text-xs font-extrabold uppercase tracking-[0.13em] text-hub-muted transition-colors duration-300 group-hover:text-hub-terracotta"
      >
        <span className="route-node" />
        <span>Confirm details on Discord</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    </article>
  )
}
