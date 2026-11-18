import type { Metadata } from 'next'
import { SupportCasual } from '@/components/pages/SupportCasual'
import { SupportParty } from '@/components/pages/SupportParty'
import { ThemedSection } from '@/components/theme/ThemedSection'

export const metadata: Metadata = {
  title: 'Support Us',
  description: 'Support The DMV Hub community or partner with us as a local business.',
}

export default function SupportPage() {
  return <ThemedSection casual={<SupportCasual />} party={<SupportParty />} />
}
