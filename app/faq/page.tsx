import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { FAQCasual } from '@/components/pages/FAQCasual'
import { FAQParty } from '@/components/pages/FAQParty'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Common questions about The DMV Hub, what it is, how it works, and how to join.',
}

export default function FAQPage() {
  return (
    <ThemedSection
      casual={<FAQCasual />}
      party={<FAQParty />}
    />
  )
}
