import Image from 'next/image'

/**
 * AnimatedLogo — nav lockup, split into DMV + HUB at the 63% seam (which falls
 * in the transparent gap between the V and the HUB badge, so no glyph is cut).
 *
 * Motion:
 *   • On load (once): DMV rises + fades in, then the HUB badge drops in a beat
 *     later with a soft overshoot, then both sit still.
 *   • On hover: the HUB badge gently lifts.
 *
 * No looping motion. Lives in the persistent Nav, so the entrance plays on full
 * page load, not on client-side route changes. Respects prefers-reduced-motion.
 */

const DMV_PCT = 63
const logoStyle = {
  width: '10.5rem',
  height: '7rem',
  objectFit: 'contain',
} as const

export function AnimatedLogo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`group relative inline-block shrink-0 ${className}`}
      aria-label="The DMV Hub"
      role="img"
    >
      {/* DMV part — defines the box; clipped to the left of the seam */}
      <Image
        src="/logo.png"
        alt=""
        width={1536}
        height={1024}
        priority
        aria-hidden="true"
        draggable={false}
        className="logo-dmv-in block select-none"
        style={{ ...logoStyle, pointerEvents: 'none', clipPath: `inset(0 ${100 - DMV_PCT}% 0 0)` }}
      />

      {/* HUB part — entrance on the wrapper, hover lift on the inner image */}
      <span className="logo-hub-in absolute left-0 top-0 block">
        <Image
          src="/logo.png"
          alt=""
          width={1536}
          height={1024}
          priority
          aria-hidden="true"
          draggable={false}
          className="block select-none transition-transform duration-300 ease-out group-hover:-translate-y-1"
          style={{ ...logoStyle, pointerEvents: 'none', clipPath: `inset(0 0 0 ${DMV_PCT}%)` }}
        />
      </span>
    </div>
  )
}
