import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/types'

interface BlogCardProps {
  post: BlogPostMeta
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="hub-panel h-full overflow-hidden rounded-xl hover-glow">
        <div className="relative h-56 overflow-hidden border-b border-white/10 bg-hub-dark">
          {/* Ambient photographic blog cover background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.22] transition-all duration-500 group-hover:opacity-[0.42] mix-blend-luminosity pointer-events-none"
            style={{ backgroundImage: `url('${post.coverImage}')` }}
          />
          <div className="absolute inset-0 cyber-grid opacity-60" />
          <div className="absolute inset-0 map-lines opacity-15 transition-opacity duration-500 group-hover:opacity-30" />
          <div className="absolute left-0 top-0 h-1 w-full bg-hub-gradient opacity-85" />
          <div className="absolute right-5 top-5 font-mono text-[4.5rem] font-black leading-none text-white/[0.035] transition-colors duration-300 group-hover:text-white/[0.06]">
            HUB
          </div>
          <div className="absolute left-5 top-5 rounded-md border border-hub-teal/20 bg-hub-teal/10 px-3 py-2 font-mono text-[0.68rem] font-black uppercase tracking-[0.16em] text-hub-teal">
            Field note
          </div>
          <div className="absolute inset-x-5 bottom-16 h-px bg-gradient-to-r from-hub-pink/50 via-hub-teal/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-hub-black/95 via-hub-black/45 to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-hub-black/70 px-3 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-hub-teal backdrop-blur">
            {formatDate(post.date)}
          </div>
        </div>
        <div className="p-6">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-hub-muted">
            Dispatch by {post.author}
          </p>
          <h3 className="mt-3 text-2xl font-black leading-tight text-hub-text transition-colors group-hover:text-hub-teal">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-hub-muted">{post.excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
