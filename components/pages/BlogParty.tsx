import { BlogCard } from '@/components/sections/BlogCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { BlogPostMeta } from '@/lib/types'

export function BlogParty({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[22rem] cyber-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-60 top-16 h-[30rem] w-[30rem] rounded-full bg-hub-blue/[0.07] blur-[10rem]" />
      <div className="pointer-events-none absolute -right-60 top-[40rem] h-[26rem] w-[26rem] rounded-full bg-hub-pink/[0.06] blur-[10rem]" />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" delay={100} className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-mono text-[0.65rem] font-black uppercase tracking-[0.22em] text-hub-teal">
              {'// Field notes'}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] text-hub-text sm:text-6xl">
              Stories from the{' '}
              <span className="bg-gradient-to-r from-hub-teal via-hub-blue to-hub-pink bg-clip-text text-transparent">
                social layer.
              </span>
            </h1>
          </div>
          <div className="hub-panel rounded-2xl p-6 text-lg leading-relaxed text-hub-muted">
            Event recaps, member stories, and proof that the DMV has a social life when someone gives it a place to gather.
          </div>
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
            <div className="hub-panel relative overflow-hidden rounded-2xl px-6 py-24 text-center">
              <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.07]" />
              <p className="relative font-mono text-sm font-bold uppercase tracking-[0.2em] text-hub-teal">
                First dispatch incoming...
              </p>
            </div>
          </ScrollReveal>
        )}
      </section>
    </div>
  )
}
