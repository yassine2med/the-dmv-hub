import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { SafetyCasual } from '@/components/pages/SafetyCasual'
import { SafetyParty } from '@/components/pages/SafetyParty'

export const metadata: Metadata = {
  title: 'Safety',
  description:
    'How The DMV Hub keeps members safe: verification, opt-in dating intent, in-person event safety, and how to report something.',
}

export default function SafetyPage() {
  return (
    <ThemedSection
      casual={<SafetyCasual />}
      party={<SafetyParty />}
    />
  )
}
