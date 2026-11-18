import type { Metadata } from 'next'
import { CommunityCasual } from '@/components/pages/CommunityCasual'
import { CommunityParty } from '@/components/pages/CommunityParty'
import { ThemedSection } from '@/components/theme/ThemedSection'

export const metadata: Metadata = {
  title: 'Community',
  description: 'The DMV Hub Discord where the community lives. Channels, voice hangouts, and real connections.',
}

export default function CommunityPage() {
  return <ThemedSection casual={<CommunityCasual />} party={<CommunityParty />} />
}
