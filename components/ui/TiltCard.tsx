'use client'

import { useRef } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  /** Max tilt in degrees (default 6) */
  max?: number
}

/**
 * TiltCard — subtle 3D tilt that follows the cursor, with a soft glare
 * that tracks the pointer. Pure CSS transform on a ref; no re-renders.
 * Respects prefers-reduced-motion via the .tilt-card utility.
 */
export function TiltCard({ children, className = '', max = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (0.5 - py) * max * 2
    const rotY = (px - 0.5) * max * 2
    el.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(0)`
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${(px * 100).toFixed(0)}% ${(py * 100).toFixed(0)}%, rgba(255,255,255,0.10), transparent 55%)`
      glareRef.current.style.opacity = '1'
    }
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card relative ${className}`}
    >
      {children}
      <div
        ref={glareRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        style={{ borderRadius: 'inherit' }}
      />
    </div>
  )
}
