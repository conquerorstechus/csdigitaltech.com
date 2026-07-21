import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OpinlyContent } from '@opinly/react';
import { generateOpinlyMetadata, OpinlyJsonLd, buildBlogPostingJsonLd, buildFaqJsonLd } from '@opinly/next';
import { buildSitemapEntries } from '@opinly/shared';
import { getOpinlyClient, getOpinlyRenderConfig, getOpinlyPostResolved, getOpinlySitemapConfig } from '@/lib/opinly';
import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ blogPath?: string; slug?: string[] }> }): Promise<Metadata> {
  const { blogPath, slug = [] } = await params;
  const normalizedBlogPath = blogPath || '/blog';

  if (normalizedBlogPath !== '/blog') {
    return {};
  }

  if (slug.length === 0) {
    const client = getOpinlyClient();
    const routes = await client.routes();
    const homeRoute = routes.find((route) => route.type === 'home');

    if (!homeRoute) {
      return {};
    }

    const resolved = { type: 'home' as const, data: homeRoute };
    return generateOpinlyMetadata(resolved as any, {} as any);
  }

  const [firstSegment, secondSegment] = slug;

  if (slug.length === 1) {
    const resolved = await getOpinlyPostResolved(firstSegment);
    if (!resolved) {
      return {};
    }
    return generateOpinlyMetadata(resolved, {} as any);
  }

  if (firstSegment === 'category') {
    const client = getOpinlyClient();
    const category = await client.categories();
    const match = category.find((item) => item.slug === secondSegment);
    if (!match) {
      return {};
    }
    return generateOpinlyMetadata({ type: 'category', data: { name: match.name, slug: match.slug, description: match.description || undefined } }, {} as any);
  }

  if (firstSegment === 'authors') {
    const client = getOpinlyClient();
    const authors = await client.authors();
    const match = authors.data?.find((item: any) => item.slug === secondSegment);
    if (!match) {
      return {};
    }
    return generateOpinlyMetadata({ type: 'author', data: { name: match.name, slug: match.slug, bio: match.bio || undefined, image: match.image ? { fileKey: match.image.fileKey } : undefined } }, {} as any);
  }

  return {};
}

export async function generateStaticParams() {
  try {
    const client = getOpinlyClient();
    const routes = await client.routes();
    return routes.map((route) => {
      if (route.type === 'home') {
        return { blogPath: 'blog', slug: [] };
      }
      if (route.type === 'post') {
        return { blogPath: 'blog', slug: [route.slug] };
      }
      if (route.type === 'category') {
        return { blogPath: 'blog', slug: ['category', route.slug] };
      }
      if (route.type === 'author') {
        return { blogPath: 'blog', slug: ['authors', route.slug] };
      }
      if (route.type === 'tag') {
        return { blogPath: 'blog', slug: ['tag', route.slug] };
      }
      return { blogPath: 'blog', slug: [] };
    });
  } catch {
    return [];
  }
}

export async function generateSitemaps() {
  try {
    const client = getOpinlyClient();
    const routes = await client.routes();
    return [{ id: 0 }];
  } catch {
    return [{ id: 0 }];
  }
}

export default async function OpinlyBlogPage({ params }: { params: Promise<{ blogPath?: string; slug?: string[] }> }) {
  const { blogPath, slug = [] } = await params;
  const normalizedBlogPath = blogPath || '/blog';

  if (normalizedBlogPath !== '/blog') {
    notFound();
  }

  const renderConfig = getOpinlyRenderConfig();
  const client = getOpinlyClient();

  if (slug.length === 0) {
    const [posts, categories] = await Promise.all([client.posts({ limit: 12 }), client.categories()]);
    return (
      <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Opinly blog</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Latest insights</h1>
            <p className="max-w-2xl text-lg text-slate-600">Fresh posts from Opinly, rendered inside this Next.js app.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.data.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-medium text-blue-600">{post.category?.name || 'Blog'}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
                <a className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600" href={`${renderConfig.blogPrefix}/${post.slug}`}>
                  Read article →
                </a>
              </article>
            ))}
          </div>
          {categories.length > 0 ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <a key={category.slug} href={`${renderConfig.blogPrefix}/category/${category.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700">
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </main>
    );
  }

  const [firstSegment, secondSegment] = slug;

  if (firstSegment === 'category') {
    const posts = await client.posts({ category: secondSegment, limit: 12 });
    return (
      <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <h1 className="text-3xl font-semibold text-slate-900">Category: {secondSegment}</h1>
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.data.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
                <a className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600" href={`${renderConfig.blogPrefix}/${post.slug}`}>
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (firstSegment === 'authors') {
    const authors = await client.authors();
    const author = authors.data?.find((item: any) => item.slug === secondSegment);

    if (!author) {
      notFound();
    }

    return (
      <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <h1 className="text-3xl font-semibold text-slate-900">Author: {author.name}</h1>
          <p className="max-w-2xl text-slate-600">{author.bio}</p>
          <div className="grid gap-8 lg:grid-cols-2">
            {author.posts.map((post: any) => (
              <article key={post.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
                <a className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600" href={`${renderConfig.blogPrefix}/${post.slug}`}>
                  Read article →
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (slug.length === 1) {
    const post = await client.post(firstSegment);

    if (!post) {
      notFound();
    }

    const resolved = await getOpinlyPostResolved(post.slug);

    if (!resolved) {
      notFound();
    }

    const faqSchema = post.faqs && post.faqs.length > 0 ? buildFaqJsonLd(post.faqs) : null;
    const blogPostingSchema = buildBlogPostingJsonLd(post);

    return (
      <main className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">{post.category?.name || 'Blog'}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{post.title}</h1>
            <p className="max-w-2xl text-lg text-slate-600">{post.description}</p>
          </div>
          <div className="prose prose-slate max-w-none">
            <OpinlyContent content={post.content} config={renderConfig} />
          </div>
          {faqSchema ? <OpinlyJsonLd data={faqSchema} /> : null}
          <OpinlyJsonLd data={blogPostingSchema} />
        </article>
      </main>
    );
  }

  notFound();
}
