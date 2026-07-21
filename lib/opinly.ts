import { createOpinlyClient } from '@opinly/backend';
import type { OpinlyConfig, SeoResolved } from '@opinly/shared';

const getSiteUrl = () =>
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.conquerorstech.com';

const getBlogPrefix = () => process.env.OPINLY_BLOG_PREFIX || '/blog';

const getImagesPrefix = () => process.env.OPINLY_IMAGES_PREFIX || '/images';

const getSiteName = () => process.env.OPINLY_SITE_NAME || 'Cornerstone Digital Technologies';

export function getOpinlyRenderConfig(): OpinlyConfig {
  return {
    imagesPrefix: getImagesPrefix(),
    siteUrl: getSiteUrl(),
    blogPrefix: getBlogPrefix(),
    siteName: getSiteName(),
    categoryPrefix: process.env.OPINLY_CATEGORY_PREFIX || 'category',
    authorPrefix: process.env.OPINLY_AUTHOR_PREFIX || 'authors',
    tagPrefix: process.env.OPINLY_TAG_PREFIX || 'tag',
  };
}

export function getOpinlyClient() {
  const apiKey = process.env.OPINLY_API_KEY;

  return createOpinlyClient({
    apiKey,
    url: process.env.OPINLY_API_URL,
  });
}

export async function getOpinlyPostResolved(slug: string): Promise<SeoResolved | null> {
  const client = getOpinlyClient();
  const post = await client.post(slug);

  if (!post) {
    return null;
  }

  return {
    type: 'post',
    data: {
      title: post.title,
      description: post.description || post.metaDescription || undefined,
      slug: post.slug,
      category: post.category ? { slug: post.category.slug } : null,
      titleFile: post.titleFile
        ? { fileKey: post.titleFile.fileKey }
        : null,
      author: post.author
        ? { name: post.author.name, slug: post.author.slug }
        : null,
      firstPublishedAt: post.firstPublishedAt,
      modifiedAt: post.modifiedAt,
    },
  };
}

export function getOpinlySitemapConfig(): OpinlyConfig {
  return {
    imagesPrefix: getImagesPrefix(),
    siteUrl: getSiteUrl(),
    blogPrefix: getBlogPrefix(),
    siteName: getSiteName(),
    categoryPrefix: process.env.OPINLY_CATEGORY_PREFIX || 'category',
    authorPrefix: process.env.OPINLY_AUTHOR_PREFIX || 'authors',
    tagPrefix: process.env.OPINLY_TAG_PREFIX || 'tag',
  };
}
