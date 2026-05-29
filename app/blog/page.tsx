import { Metadata } from 'next'
import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Eye, ArrowRight } from 'lucide-react'

// Blog data
const blogPosts = [
  {
    id: 4,
    title: "Unlock your Custom AI & LLM Solutions with ConvenantSoft",
    excerpt: "Unlock the potential of custom AI & LLM solutions with ConvenantSoft Tech. Empower your business with intelligent automation and advanced LLM services.",
    image: "/Florida Companies.png",
    category: "Artificial Intelligence",
    date: "March 11, 2026",
    readTime: "7 min read",
    author: "ConvenantSoft Tech Team",
    views: "1.2k"
  },
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Discover how artificial intelligence is revolutionizing the software development industry and what it means for businesses worldwide.",
    image: "/technology.jpg",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "John Doe",
    views: "2.5k"
  },
  {
    id: 2,
    title: "Cloud Computing Trends for 2024",
    excerpt: "Explore the latest trends in cloud computing and how they're shaping the future of digital transformation.",
    image: "/Digitalcloud/cloud-computing-banner-background-smart-city_53876-108504.webp",
    category: "Cloud Solutions",
    date: "March 12, 2024",
    readTime: "4 min read",
    author: "Sarah Johnson",
    views: "1.8k"
  },
  {
    id: 3,
    title: "Digital Marketing Strategies That Drive Results",
    excerpt: "Learn about effective digital marketing strategies that can help your business grow and reach new customers.",
    image: "/1-E-Commerce.jpg",
    category: "Digital Marketing",
    date: "March 10, 2024",
    readTime: "6 min read",
    author: "Mike Chen",
    views: "3.2k"
  }
]

export const metadata = getComprehensiveMetadata(
  "Blog - Latest Tech Insight Articles",
  "Stay updated with the latest insights, trends, and innovations in technology, software development, cloud computing, and digital transformation. Expert articles from ConvenantSoft Technologies.",
  "/blog",
  "/technology.jpg",
  [
    "technology blog",
    "software development blog",
    "tech insights Florida",
    "digital transformation articles",
    "cloud computing trends",
    "AI technology blog",
    "software development insights",
    "technology trends 2024",
    "digital marketing strategies",
    "IT consulting blog",
    "web development articles",
    "mobile app development blog",
    "enterprise software insights",
    "technology news Florida",
    "software industry trends",
    "digital innovation blog",
    "tech company blog",
    "software development tips",
    "technology consulting articles",
    "IT solutions blog"
  ],
  "WebPage"
);

export default function BlogPage() {
  const structuredData = getStructuredData(
    "Blog - Latest Technology Insights & Software Development Articles",
    "Stay updated with the latest insights, trends, and innovations in technology, software development, cloud computing, and digital transformation. Expert articles from ConvenantSoft Technologies.",
    "/blog",
    "WebPage"
  )

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
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

        {/* Blog Posts Grid */}
        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className="flex">
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer flex flex-col w-full h-full">
                    <div className="aspect-video relative bg-gray-100 overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        title={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-blue-500" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1 text-blue-500" />
                            {post.views}
                          </div>
                        </div>
                        <div className="flex items-center text-blue-600 hover:text-blue-700 font-bold text-sm transition-colors group-hover:translate-x-1">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
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