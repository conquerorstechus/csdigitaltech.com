import type { MetadataRoute } from 'next'
import { buildSitemapEntries } from '@opinly/shared'
import { absoluteUrl, getAllPosts } from '@/lib/blog'
import { getOpinlyClient, getOpinlySitemapConfig } from '@/lib/opinly'
import { STATIC_SITEMAP_ROUTES } from '@/lib/sitemap-routes'

export const dynamic = 'force-dynamic'

function pathnameOf(url: string): string {
  try {
    return new URL(url).pathname.replace(/\/$/, '') || '/'
  } catch {
    return url
  }
}

function safeDate(value: string): Date {
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? new Date() : date
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const localPaths = new Set(
    [...staticPages, ...localPosts].map((entry) => pathnameOf(entry.url)),
  )

  let opinlyEntries: MetadataRoute.Sitemap = []
  try {
    const client = getOpinlyClient()
    const routes = await client.routes()
    const config = getOpinlySitemapConfig()
    const entries = buildSitemapEntries(
      routes.map((route) => ({
        type: route.type,
        slug: route.slug,
        lastModified: route.lastModified,
      })),
      config,
    )

    opinlyEntries = entries
      .filter((entry) => !localPaths.has(pathnameOf(entry.url)))
      .map((entry) => ({
        url: entry.url,
        lastModified: new Date(entry.lastModified),
        changeFrequency: 'weekly',
        priority: 0.7,
      }))
  } catch {
    opinlyEntries = []
  }

  return [...staticPages, ...localPosts, ...opinlyEntries]
}
