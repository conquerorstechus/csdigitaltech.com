import { OpinlyContent } from '@opinly/react'
import { opinlyConfig } from '@opinly/next'
import type { OpinlyNode } from '@opinly/shared'

const config = {
  imagesPrefix: opinlyConfig.imagesPrefix,
  siteUrl: opinlyConfig.siteUrl,
  blogPrefix: opinlyConfig.blogPrefix,
  siteName: opinlyConfig.siteName,
}

export function PostContent({ content }: { content: OpinlyNode }) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600">
      <OpinlyContent
        content={content}
        config={config}
        classNames={{
          paragraph: 'mb-6 text-lg leading-relaxed text-gray-700',
          heading: 'font-bold text-gray-900 mb-4 mt-8',
          bulletList: 'list-disc pl-6 mb-6 text-lg leading-relaxed text-gray-700',
          orderedList: 'list-decimal pl-6 mb-6 text-lg leading-relaxed text-gray-700',
          listItem: 'mb-2',
          blockquote: 'border-l-4 border-blue-600 pl-4 italic text-gray-600 my-6',
          image: 'rounded-lg my-8 w-full h-auto',
          link: 'text-blue-600 hover:text-blue-700 underline',
          horizontalRule: 'my-8 border-gray-200',
        }}
      />
    </div>
  )
}
