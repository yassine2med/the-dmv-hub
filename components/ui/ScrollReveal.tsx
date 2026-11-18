'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  /** Delay in ms before animation starts after element becomes visible */
  delay?: number
  /** Direction from which the element slides in */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // mounted = false until after first paint, so SSR/hydration never hides content
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [useVerticalMotion, setUseVerticalMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setUseVerticalMotion(window.matchMedia('(max-width: 767px)').matches)
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    // Already in viewport on mount → show immediately, no animation wait
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true)
      return
    }

    // Below fold → animate on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 120px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const activeDirection =
    useVerticalMotion && (direction === 'left' || direction === 'right') ? 'up' : direction

  const transforms: Record<string, string> = {
    up: 'translateY(32px)',
    down: 'translateY(-32px)',
    left: 'translateX(32px)',
    right: 'translateX(-32px)',
    none: 'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: !mounted || isVisible ? 1 : 0,
        transform: !mounted || isVisible ? 'none' : transforms[activeDirection],
        transition: mounted ? `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms` : 'none',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
