import { MetadataRoute } from 'next'
import { getAllPostSlugs } from '@/lib/blog'
import { siteConfig } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/events',
    '/vibes',
    '/community',
    '/about',
    '/blog',
    '/submit',
    '/faq',
    '/support',
    '/gallery',
    '/games',
    '/start',
    '/safety',
    '/privacy',
    '/terms',
    '/code-of-conduct',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const blogSlugs = getAllPostSlugs()
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
