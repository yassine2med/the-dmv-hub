import { BlogCard } from '@/components/sections/BlogCard'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { BlogPostMeta } from '@/lib/types'

export function BlogCasual({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full bg-hub-amber/[0.08] blur-[8rem]" />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">Field notes</p>
            <h1 className="mt-6 text-balance font-display text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Stories from the <GradientText>social layer.</GradientText>
            </h1>
          </div>
          <p className="hub-panel rounded-2xl p-6 text-lg leading-relaxed text-hub-muted">
            Event recaps, member stories, and proof that the DMV has a social life when someone gives it a place to gather.
          </p>
        </ScrollReveal>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} direction="up" delay={200 + index * 50}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal direction="up" delay={200}>
            <div className="hub-panel rounded-2xl px-6 py-24 text-center">
              <p className="font-display text-xl font-black text-hub-text">First dispatch coming soon.</p>
              <p className="mt-2 text-hub-muted">Check back after the next event.</p>
            </div>
          </ScrollReveal>
        )}
      </section>
    </div>
  )
}
