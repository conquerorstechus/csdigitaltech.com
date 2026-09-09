import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          The article you are looking for does not exist or is no longer published.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}
