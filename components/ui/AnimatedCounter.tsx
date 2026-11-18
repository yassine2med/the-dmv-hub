'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  /** Target value to count up to (e.g., "100+", "6", "3") */
  value: string
  /** Duration of the count animation in ms */
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, duration = 1800, className = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)

  const match = value.match(/^(\d+)(.*)$/)
  const targetNumber = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    function runAnimation() {
      setHasAnimated(true)
      const startTime = performance.now()

      function tick(now: number) {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * targetNumber)
        setDisplayValue(String(current))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    // Already in viewport on mount → start animation immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      runAnimation()
      return
    }

    // Below fold → trigger when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          observer.unobserve(el)
          runAnimation()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated, targetNumber, duration])

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  )
}
