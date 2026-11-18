import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { GradientText } from '@/components/ui/GradientText'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { getAllPostSlugs, getPostContent } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = getPostContent(slug)
    return { title: meta.title, description: meta.excerpt }
  } catch {
    return { title: 'Post not found' }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let meta
  let content

  try {
    const post = getPostContent(slug)
    meta = post.meta
    content = post.content
  } catch {
    notFound()
  }

  return (
    <div className="site-grid min-h-screen">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={100} className="w-full">
          <div className="hub-panel-strong overflow-hidden rounded-2xl">
            <div className="relative min-h-[22rem] overflow-hidden border-b border-hub-border sm:min-h-[26rem]">
              {/* Ambient blog post cover image banner */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.20] mix-blend-luminosity pointer-events-none"
                style={{ backgroundImage: `url('${meta.coverImage}')` }}
              />
              <div className="absolute inset-0 cyber-grid opacity-60" />
              <div className="absolute inset-0 map-lines opacity-20" />
              <div className="absolute left-0 top-0 h-1 w-full bg-hub-gradient" />
              <div className="absolute right-6 top-6 font-mono text-[7rem] font-black leading-none text-white/[0.035] sm:text-[10rem]">
                DMV
              </div>
              <div className="absolute left-6 top-6 rounded-md border border-hub-teal/25 bg-hub-teal/10 px-3 py-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.18em] text-hub-teal">
                Community dispatch
              </div>
              <div className="absolute inset-x-6 bottom-28 h-px bg-gradient-to-r from-hub-pink/60 via-hub-teal/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-hub-black via-hub-black/[0.6] to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-hub-teal">
                  {new Date(meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}{' '}
                  / {meta.author}
                </p>
                <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-hub-text sm:text-5xl">
                  <GradientText>{meta.title}</GradientText>
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              {/* Prose colors bound to theme-aware tokens so body text stays
                  readable in BOTH Casual (light) and Party (dark). */}
              <div className="prose prose-lg max-w-none [--tw-prose-body:var(--color-muted)] [--tw-prose-headings:var(--color-text)] [--tw-prose-bold:var(--color-text)] [--tw-prose-links:var(--color-terracotta)] [--tw-prose-bullets:var(--color-terracotta)] [--tw-prose-quotes:var(--color-text)] [--tw-prose-quote-borders:var(--color-border)] [--tw-prose-hr:var(--color-border)] [--tw-prose-counters:var(--color-muted)] prose-a:font-bold">
                <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </article>
    </div>
  )
}
