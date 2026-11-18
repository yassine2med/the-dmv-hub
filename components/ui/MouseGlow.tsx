'use client'

import { useEffect, useRef } from 'react'

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable mouse glow on devices with a mouse/pointer (not touch)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: PointerEvent) => {
      if (!glowRef.current) return
      // Center the 600px radial glow circle around the pointer
      glowRef.current.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`
    }

    // Fade in the glow once mouse enters the screen
    const handleMouseEnter = () => {
      if (glowRef.current) glowRef.current.style.opacity = '1'
    }

    // Fade out when mouse leaves
    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    window.addEventListener('pointermove', handleMouseMove, { passive: true })
    document.addEventListener('pointerenter', handleMouseEnter)
    document.addEventListener('pointerleave', handleMouseLeave)

    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
      document.removeEventListener('pointerenter', handleMouseEnter)
      document.removeEventListener('pointerleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform md:block"
      style={{
        background: 'radial-gradient(circle, rgba(255, 107, 157, 0.08) 0%, rgba(65, 88, 208, 0.05) 35%, rgba(67, 206, 162, 0.02) 60%, transparent 80%)',
      }}
    />
  )
}
