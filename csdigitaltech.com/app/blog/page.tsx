import Image from 'next/image'
import Link from 'next/link'
import { User, ArrowRight } from 'lucide-react'
import { formatDate } from '@opinly/next'
import type { Post } from '@opinly/backend'
import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import { opinly } from '@/clients/opinly'
import { getOpinlyImageUrl } from '@/lib/opinly-utils'

export const revalidate = 3600

export const metadata = getComprehensiveMetadata(
  'Blog - Latest Tech Insight Articles',
  'Stay updated with the latest insights, trends, and innovations in technology, software development, cloud computing, and digital transformation. Expert articles from Cornerstone Digital Technologies.',
  '/blog',
  '/technology.jpg',
  [
    'technology blog',
    'software development blog',
    'tech insights Florida',
    'digital transformation articles',
    'cloud computing trends',
    'AI technology blog',
    'software development insights',
    'technology trends 2024',
    'digital marketing strategies',
    'IT consulting blog',
    'web development articles',
    'mobile app development blog',
    'enterprise software insights',
    'technology news Florida',
    'software industry trends',
    'digital innovation blog',
    'tech company blog',
    'software development tips',
    'technology consulting articles',
    'IT solutions blog',
  ],
  'WebPage'
)

async function getPublishedPosts(): Promise<Post[]> {
  try {
    const result = await opinly.posts({ limit: 24, sort: 'newest' })
    return result.data
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('[blog] Failed to fetch Opinly posts:', message)
    if (!process.env.OPINLY_API_KEY?.trim()) {
      console.error(
        '[blog] OPINLY_API_KEY is missing in this environment. Set it in Vercel and redeploy.'
      )
    }
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()

  const structuredData = getStructuredData(
    'Blog - Latest Technology Insights & Software Development Articles',
    'Stay updated with the latest insights, trends, and innovations in technology, software development, cloud computing, and digital transformation. Expert articles from Cornerstone Digital Technologies.',
    '/blog',
    'WebPage'
  )

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-white">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and innovations in technology,
              software development, and digital transformation.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Latest Articles
            </h2>

            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg mb-2">No published articles yet.</p>
                <p className="text-gray-500 text-sm">
                  Check back soon, or verify your Opinly API configuration.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const imageSrc = getOpinlyImageUrl(post.image?.fileKey)
                  const categoryName = post.category?.name ?? 'Article'
                  const publishedLabel = formatDate(post.firstPublishedAt)

                  return (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="flex">
                      <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col w-full h-full">
                        <div className="aspect-video relative bg-gray-100 overflow-hidden shrink-0">
                          {imageSrc ? (
                            <Image
                              src={imageSrc}
                              alt={post.image?.alt || post.title}
                              title={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200" />
                          )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-3 gap-2">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {categoryName}
                            </span>
                            <span className="text-sm text-gray-500 shrink-0">
                              {publishedLabel}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
                            {post.description}
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              {post.author?.name ? (
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-1 text-blue-500" />
                                  {post.author.name}
                                </div>
                              ) : null}
                            </div>
                            <div className="flex items-center text-blue-600 hover:text-blue-700 font-bold text-sm transition-colors group-hover:translate-x-1">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
