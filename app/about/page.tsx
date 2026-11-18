import type { Metadata } from 'next'
import { AboutCasual } from '@/components/pages/AboutCasual'
import { AboutParty } from '@/components/pages/AboutParty'
import { ThemedSection } from '@/components/theme/ThemedSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'Why The DMV Hub exists and who built it.',
}

export default function AboutPage() {
  return <ThemedSection casual={<AboutCasual />} party={<AboutParty />} />
}
