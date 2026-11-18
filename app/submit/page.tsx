import type { Metadata } from 'next'
import { SubmitCasual } from '@/components/pages/SubmitCasual'
import { SubmitParty } from '@/components/pages/SubmitParty'
import { ThemedSection } from '@/components/theme/ThemedSection'

export const metadata: Metadata = {
  title: 'Submit an Event',
  description: 'Submit a DMV hangout, meetup, or event idea for The DMV Hub community.',
}

export default function SubmitPage() {
  return <ThemedSection casual={<SubmitCasual />} party={<SubmitParty />} />
}
