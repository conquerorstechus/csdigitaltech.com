'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MarkdownPost({ content }: { content: string }) {
  return (
    <div className="max-w-none text-lg leading-relaxed text-gray-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 className="font-bold text-gray-900 mb-4 mt-8 text-3xl">{children}</h2>
          ),
          h2: ({ children }) => (
            <h2 className="font-bold text-gray-900 mb-4 mt-8 text-2xl">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-bold text-gray-900 mb-4 mt-8 text-xl">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-bold text-gray-900 mb-4 mt-8 text-lg">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="mb-6 text-lg leading-relaxed text-gray-700">{children}</p>
          ),
          a: ({ href, children }) => {
            const url = href ?? ''
            const external = /^https?:\/\//i.test(url)
            return (
              <a
                href={url}
                className="text-blue-600 hover:text-blue-700 underline"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {children}
              </a>
            )
          },
          ul: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 text-lg leading-relaxed text-gray-700">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 text-lg leading-relaxed text-gray-700">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-2">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-6">
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => (
            <img
              src={typeof src === 'string' ? src : ''}
              alt={alt ?? ''}
              className="rounded-lg my-8 w-full h-auto"
            />
          ),
          hr: () => <hr className="my-8 border-gray-200" />,
          pre: ({ children }) => (
            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-6 text-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit">
              {children}
            </pre>
          ),
          code: ({ className, children }) => (
            <code
              className={
                className
                  ? `${className} font-mono`
                  : 'bg-gray-100 rounded px-1.5 py-0.5 text-base font-mono'
              }
            >
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-base">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-200 px-3 py-2 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="border border-gray-200 px-3 py-2 align-top">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
