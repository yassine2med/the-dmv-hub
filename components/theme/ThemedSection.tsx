import type { ReactNode } from 'react'

/**
 * Renders BOTH theme variants; CSS (.theme-*-only + [data-theme]) shows the
 * active one. Server component — no 'use client', no hydration flash. The
 * hidden variant uses display:none so it leaves the accessibility tree.
 */
export function ThemedSection({ casual, party }: { casual: ReactNode; party: ReactNode }) {
  return (
    <>
      <div className="theme-casual-only">{casual}</div>
      <div className="theme-party-only">{party}</div>
    </>
  )
}
