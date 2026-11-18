import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'

export default function NotFound() {
  return (
    <div className="site-grid flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8 inline-flex items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-muted">
          <span className="h-2 w-2 rounded-full bg-hub-pink shadow-[0_0_8px_#FF6B9D] animate-pulse" />
          SIGNAL_LOST
        </div>
        <h1 className="text-6xl font-black text-hub-text sm:text-8xl">
          <GradientText>404</GradientText>
        </h1>
        <p className="mt-6 text-xl font-bold text-hub-text">
          This route doesn&apos;t exist on the map.
        </p>
        <p className="mt-3 text-hub-muted leading-relaxed">
          The page you&apos;re looking for has either moved, been removed, or never existed.
          Head back to a known signal.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/">Return Home</Button>
          <Button href="/events" variant="secondary">
            Browse Events
          </Button>
        </div>
        <p className="mt-12 font-mono text-[0.6rem] text-hub-muted/50 uppercase tracking-widest">
          [ERR_ROUTE_NOT_FOUND] // DMV Hub Signal Network
        </p>
      </div>
    </div>
  )
}
