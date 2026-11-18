export type LocationArea = 'DC' | 'MD' | 'VA' | 'Virtual'

export type VibeCategory =
  | 'Gaming'
  | 'Food'
  | 'Outdoors'
  | 'Nightlife'
  | 'Fitness'
  | 'Dating Mixers'
  | 'Speed Friending'
  | 'Day Trips'
  | 'Movies'
  | 'Volunteering'
  | 'Coffee Crawls'
  | 'Live Music'
  | 'Museum Nights'
  | 'Dog Parks'
  | 'Thrifting'
  | 'Rec Sports'

export interface Event {
  id: string
  title: string
  date: string
  locationArea: LocationArea
  locationLabel: string
  vibe: VibeCategory
  description: string
  discordLink: string
  imageUrl?: string
  featured?: boolean
  recurrence?: 'weekly' | 'biweekly' | 'monthly'
  seriesName?: string
}

export interface Vibe {
  id: string
  name: VibeCategory
  description: string
  emoji: string
  imageUrl?: string
}

/**
 * FAQ concern-categories. These encode the *type of hesitation* a question
 * answers (not an arbitrary order), and drive the grouped FAQ console UI.
 */
export type FAQCategory = 'basics' | 'fit' | 'mechanics' | 'safety'

export interface FAQItem {
  question: string
  answer: string
  category?: FAQCategory
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  author: string
}
