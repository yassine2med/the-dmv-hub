import type { Event } from '@/lib/types'

/** The "Next up" feature block, precomputed in the page (request-time). */
export interface EventsFeature {
  show: boolean
  event: Event | null
  month: string
  day: number
  weekday: string
  time: string
  relative: string
}

/** Shared props for both Events theme variants — page computes, variants render. */
export interface EventsViewProps {
  events: Event[]
  selectedVibe?: string
  selectedArea?: string
  feature: EventsFeature
}
