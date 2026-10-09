import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react'
import { BlogCover } from '@/components/blog/BlogCover'
import { MarkdownPost } from '@/components/blog/MarkdownPost'
import {
  absoluteUrl,
  formatBlogDate,
  getPost,
  getPostSlugs,
  getRelatedPosts,
  postCanonical,
  readingTimeMinutes,
  type BlogPost,
} from '@/lib/blog'

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = true

function blogPostingJsonLd(post: BlogPost) {
  const canonical = postCanonical(post.slug)
  const image = post.image ? absoluteUrl(post.image) : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    ...(image ? { image } : {}),
    author: {
      '@type': 'Person',
      name: post.author || 'Cornerstone Digital Technologies',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cornerstone Digital Technologies',
      url: absoluteUrl('/'),
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/cornerstone-logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    url: canonical,
  }
}

function faqJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | Cornerstone Digital Technologies',
      description: 'The requested blog post could not be found.',
    }
  }

  const canonical = postCanonical(post.slug)
  const image = post.image ? absoluteUrl(post.image) : undefined

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: canonical,
      publishedTime: post.date || undefined,
      modifiedTime: post.updated || undefined,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: post.title,
      description: post.description,
      images: image ? [image] : undefined,
    },
  }
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug)
  const categoryName = post.category || 'Article'
  const authorName = post.author || 'Cornerstone Digital Technologies'
  const publishedLabel = formatBlogDate(post.date)
  const readingMinutes = readingTimeMinutes(post.content)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post)) }}
      />
      {post.faqs.length ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(post)) }}
        />
      ) : null}

      <div className="min-h-screen bg-white">
        <section className="py-6 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {categoryName}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {publishedLabel}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {readingMinutes} min read
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-1" />
                  {authorName}
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              {post.description ? (
                <p className="text-xl text-gray-600 leading-relaxed">{post.description}</p>
              ) : null}
            </div>

            {post.image ? (
              <div className="mb-8">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <BlogCover
                    src={post.image}
                    alt={post.title}
                    title={`${post.title} - ${categoryName} Article`}
                    priority
                  />
                </div>
              </div>
            ) : null}

            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
            </div>

            <MarkdownPost content={post.content} />

            {post.tags.length > 0 ? (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((related) => (
                  <Link href={`/blog/${related.slug}`} key={related.slug}>
                    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                      <div className="aspect-video relative bg-gray-100 overflow-hidden">
                        {related.image ? (
                          <BlogCover
                            src={related.image}
                            alt={related.title}
                            title={related.title}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200" />
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3 gap-2">
                          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {related.category || 'Article'}
                          </span>
                          <span className="text-sm text-gray-500 shrink-0">
                            {formatBlogDate(related.date)}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
                          {related.description}
                        </p>
                        <div className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group-hover:translate-x-1">
                          Read More →
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </>
  )
}
