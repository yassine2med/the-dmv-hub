import Link from 'next/link'
import type { Vibe } from '@/lib/types'

interface VibeCardProps {
  vibe: Vibe
}

/* Image-led warm tile: a photo header with a soft scrim, then a warm body.
   The /vibes/{id}.png art is a placeholder until warm candids land
   (see STATE.md "Needs Image"). */
export function VibeCard({ vibe }: VibeCardProps) {
  return (
    <Link
      href={`/events?filter=${encodeURIComponent(vibe.name)}`}
      className="group block h-full focus:outline-none"
    >
      <article className="tech-card flex h-full flex-col overflow-hidden rounded-2xl bg-hub-card">
        {/* Photo header */}
        <div className="relative h-40 overflow-hidden" data-needs-image="vibe">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url('/vibes/${vibe.id}.png')` }}
          />
          {/* Warm wash to harmonize the art with the light theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-hub-card via-hub-card/30 to-transparent" />
          <div className="absolute inset-0 bg-hub-terracotta/10 mix-blend-multiply" />
          <h3 className="absolute bottom-3 left-4 right-4 font-display text-2xl font-black leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {vibe.name}
          </h3>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-sm leading-relaxed text-hub-muted">{vibe.description}</p>
          <div className="mt-4 flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-[0.12em] text-hub-terracotta">
            <span>Explore this vibe</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
