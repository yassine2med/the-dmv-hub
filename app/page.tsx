import { HomeCasual } from '@/components/home/HomeCasual'
import { HomeParty } from '@/components/home/HomeParty'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { getEvents } from '@/lib/server/events-source'

export default async function HomePage() {
  const allEvents = await getEvents()
  return (
    <ThemedSection
      casual={<HomeCasual events={allEvents} />}
      party={<HomeParty events={allEvents} />}
    />
  )
}
