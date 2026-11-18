import { launchSignals as signals } from '@/data/community'

/**
 * A moving launch-status ribbon. All signals are static, verifiable product
 * facts or clearly labelled plans—never simulated joins, RSVPs, or live counts.
 */
export function ActivityTicker() {
  const Track = () => (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {signals.map((signal) => (
        <span key={signal.text} className="flex items-center gap-2.5 whitespace-nowrap">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${signal.dot}`} />
          <span className="text-xs font-medium text-hub-muted">{signal.text}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative border-y border-hub-border bg-hub-sand/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[100vw] items-center">
        <div className="relative z-10 flex shrink-0 items-center gap-2 border-r border-hub-border bg-hub-sand py-3 pl-4 pr-4 sm:pl-6">
          <span className="live-pulse" />
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-hub-terracotta">
            Launch
          </span>
        </div>
        <div className="marquee-track relative flex-1 overflow-hidden py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-hub-sand to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-hub-sand to-transparent" />
          <div className="flex w-max animate-marquee">
            <Track />
            <Track />
          </div>
        </div>
      </div>
    </div>
  )
}
