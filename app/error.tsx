'use client'

import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="site-grid flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8 inline-flex items-center justify-center gap-3 rounded-lg border border-hub-pink/30 bg-hub-pink/[0.06] px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-hub-pink">
          <span className="h-2 w-2 rounded-full bg-hub-pink shadow-[0_0_8px_#FF6B9D] animate-pulse" />
          SYS_ERROR
        </div>
        <h1 className="text-5xl font-black text-hub-text sm:text-7xl">
          <GradientText>Something broke.</GradientText>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-hub-muted">
          An unexpected error occurred. This has been logged. Try refreshing or head back to the homepage.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={() => reset()}>Try Again</Button>
          <Button href="/" variant="secondary">
            Return Home
          </Button>
        </div>
        <p className="mt-12 font-mono text-[0.6rem] text-hub-muted/50 uppercase tracking-widest">
          [ERR_RUNTIME_EXCEPTION] // DMV Hub Signal Network
        </p>
      </div>
    </div>
  )
}
