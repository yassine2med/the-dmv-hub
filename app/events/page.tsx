import type { Metadata } from 'next'
import { EventsCasual } from '@/components/pages/EventsCasual'
import { EventsParty } from '@/components/pages/EventsParty'
import { ThemedSection } from '@/components/theme/ThemedSection'
import type { EventsFeature } from '@/components/pages/events-view'
import { getEvents } from '@/lib/server/events-source'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events and hangouts in the District of Columbia, Maryland, and Virginia.',
}

/** Short human cue for how soon an event is, computed at request time. */
function relativeLabel(date: Date, now: Date) {
  const days = Math.ceil((date.getTime() - now.getTime()) / 86_400_000)
  if (days <= 0) return 'Happening now'
  if (days === 1) return 'Tomorrow'
  return `In ${days} days`
}

interface EventsPageProps {
  searchParams?: Promise<{
    filter?: string
    area?: string
  }>
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const query = await searchParams
  const selectedVibe = query?.filter
  const selectedArea = query?.area

  const events = await getEvents()
  const sorted = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  let filtered = selectedVibe ? sorted.filter((event) => event.vibe === selectedVibe) : sorted
  if (selectedArea) {
    filtered = filtered.filter((event) => event.locationArea === selectedArea)
  }

  // "Next up" feature (default view only): the soonest upcoming event.
  const now = new Date()
  const upcoming = sorted.filter((event) => new Date(event.date).getTime() >= now.getTime())
  const nextEvent = upcoming[0] ?? sorted[0] ?? null
  const showFeature = !selectedVibe && !selectedArea && Boolean(nextEvent)
  const nd = nextEvent ? new Date(nextEvent.date) : now

  const feature: EventsFeature = {
    show: showFeature,
    event: nextEvent,
    month: nd.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: nd.getDate(),
    weekday: nd.toLocaleDateString('en-US', { weekday: 'short' }),
    time: nd.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    relative: relativeLabel(nd, now),
  }

  const props = { events: filtered, selectedVibe, selectedArea, feature }

  return (
    <ThemedSection casual={<EventsCasual {...props} />} party={<EventsParty {...props} />} />
  )
}
