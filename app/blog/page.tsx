import type { Metadata } from 'next'
import { ThemedSection } from '@/components/theme/ThemedSection'
import { BlogCasual } from '@/components/pages/BlogCasual'
import { BlogParty } from '@/components/pages/BlogParty'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Event recaps, community stories, and things to do in the DMV.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return (
    <ThemedSection
      casual={<BlogCasual posts={posts} />}
      party={<BlogParty posts={posts} />}
    />
  )
}
