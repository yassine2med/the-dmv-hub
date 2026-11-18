import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { StartCasual } from '@/components/pages/StartCasual'
import { StartParty } from '@/components/pages/StartParty'

export const metadata: Metadata = {
  title: 'Join The DMV Hub',
  description:
    'Three steps to join a real, verified social community for adults 22+ in DC, MD & VA. Here\'s exactly what happens when you join.',
  openGraph: {
    title: 'Join The DMV Hub — Three steps and you\'re in',
    description:
      'A verified Discord community for adults 22+ across DC, MD & VA. Friends, events, weekend plans. Here\'s what to expect.',
  },
}

export default function StartPage() {
  return (
    <ThemedSection
      casual={<StartCasual />}
      party={<StartParty />}
    />
  )
}
