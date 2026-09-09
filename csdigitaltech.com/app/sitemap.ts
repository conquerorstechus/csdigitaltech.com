import type { MetadataRoute } from 'next';
import { getOpinlyClient, getOpinlySitemapConfig } from '@/lib/opinly';
import { buildSitemapEntries } from '@opinly/shared';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const client = getOpinlyClient();
    const routes = await client.routes();
    const config = getOpinlySitemapConfig();
    const entries = buildSitemapEntries(
      routes.map((route) => ({
        type: route.type,
        slug: route.slug,
        lastModified: route.lastModified,
      })),
      config,
    );

    return entries.map((entry) => ({
      url: entry.url,
      lastModified: new Date(entry.lastModified),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch {
    return [];
  }
}
