import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react'
import {
  OpinlyJsonLd,
  buildBlogPostingJsonLd,
  buildFaqJsonLd,
  formatDate,
  generateOpinlyMetadata,
} from '@opinly/next'
import { calculateReadingTime } from '@opinly/shared'
import type { FullPost, Post } from '@opinly/backend'
import { opinly } from '@/clients/opinly'
import { PostContent } from '@/components/blog/PostContent'
import { getOpinlyImageUrl } from '@/lib/opinly-utils'

export const revalidate = 3600

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string): Promise<FullPost | null> {
  try {
    return await opinly.post(slug)
  } catch (error) {
    console.error(`[blog] Failed to fetch Opinly post "${slug}":`, error)
    return null
  }
}

async function getRelatedPosts(currentSlug: string): Promise<Post[]> {
  try {
    const result = await opinly.posts({ limit: 6, sort: 'newest' })
    return result.data.filter((post) => post.slug !== currentSlug).slice(0, 2)
  } catch (error) {
    console.error('[blog] Failed to fetch related Opinly posts:', error)
    return []
  }
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | Cornerstone Digital Technologies',
      description: 'The requested blog post could not be found.',
    }
  }

  return generateOpinlyMetadata({ type: 'post', data: post }, parent)
}

export async function generateStaticParams() {
  try {
    const routes = await opinly.routes()
    return routes
      .filter((route) => route.type === 'post' && route.slug)
      .map((route) => ({ slug: route.slug }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post.slug)
  const imageSrc = getOpinlyImageUrl(post.titleFile?.fileKey)
  const categoryName = post.category?.name ?? 'Article'
  const authorName = post.author?.name ?? 'Cornerstone Digital Technologies'
  const publishedLabel = formatDate(post.firstPublishedAt)
  const readingMinutes = calculateReadingTime(post.content)
  const tags = post.tags ?? []

  return (
    <>
      <OpinlyJsonLd data={buildBlogPostingJsonLd(post)} />
      {post.faqs?.length ? <OpinlyJsonLd data={buildFaqJsonLd(post.faqs)} /> : null}

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

            {imageSrc ? (
              <div className="mb-8">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={imageSrc}
                    alt={post.titleFile?.altText || post.title}
                    title={`${post.title} - ${categoryName} Article`}
                    fill
                    className="object-cover"
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

            <PostContent content={post.content} />

            {tags.length > 0 ? (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag.name}
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
                {relatedPosts.map((related) => {
                  const relatedImage = getOpinlyImageUrl(related.image?.fileKey)
                  return (
                    <Link href={`/blog/${related.slug}`} key={related.slug}>
                      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                        <div className="aspect-video relative bg-gray-100 overflow-hidden">
                          {relatedImage ? (
                            <Image
                              src={relatedImage}
                              alt={related.image?.alt || related.title}
                              title={related.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200" />
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3 gap-2">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {related.category?.name ?? 'Article'}
                            </span>
                            <span className="text-sm text-gray-500 shrink-0">
                              {formatDate(related.firstPublishedAt)}
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
                  )
                })}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </>
  )
}
