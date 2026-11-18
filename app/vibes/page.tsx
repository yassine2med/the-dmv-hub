import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { VibesCasual } from '@/components/pages/VibesCasual'
import { VibesParty } from '@/components/pages/VibesParty'

export const metadata: Metadata = {
  title: 'Vibes',
  description: 'What kind of hangouts happen at The DMV Hub? Gaming, food, outdoors, dating mixers, and more.',
}

export default function VibesPage() {
  return (
    <ThemedSection
      casual={<VibesCasual />}
      party={<VibesParty />}
    />
  )
}
