import fs from 'fs'
import path from 'path'
import { parse } from 'yaml'
import type { BlogPostMeta } from '@/lib/types'

const blogDir = path.join(process.cwd(), 'data/blog')

function readPost(slug: string) {
  const fullPath = path.join(blogDir, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!match) {
    throw new Error(`Blog post "${slug}" is missing valid front matter.`)
  }

  const parsed = parse(match[1])
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`Blog post "${slug}" has invalid front matter.`)
  }

  const data = parsed as Record<string, unknown>
  const required = ['title', 'date', 'excerpt', 'coverImage', 'author'] as const
  for (const field of required) {
    if (typeof data[field] !== 'string' || data[field].trim().length === 0) {
      throw new Error(`Blog post "${slug}" is missing front-matter field "${field}".`)
    }
  }

  const meta: BlogPostMeta = {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string,
    author: data.author as string,
  }

  return { meta, content: match[2] }
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostMeta(slug: string): BlogPostMeta {
  return readPost(slug).meta
}

export function getPostContent(slug: string): { meta: BlogPostMeta; content: string } {
  return readPost(slug)
}
