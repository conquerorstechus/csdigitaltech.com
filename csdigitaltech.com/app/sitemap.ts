import type { MetadataRoute } from 'next'
import { absoluteUrl, getAllPosts } from '@/lib/blog'
import { STATIC_SITEMAP_ROUTES } from '@/lib/sitemap-routes'

function safeDate(value: string): Date {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? new Date() : date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: safeDate(post.updated || post.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = STATIC_SITEMAP_ROUTES.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: 'monthly',
    priority,
  }))

  return [...staticPages, ...localPosts]
}
