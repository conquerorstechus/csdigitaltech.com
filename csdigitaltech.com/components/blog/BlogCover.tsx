import Image from 'next/image'

type BlogCoverProps = {
  src: string
  alt: string
  title?: string
  priority?: boolean
  className?: string
}

export function BlogCover({ src, alt, title, priority = false, className }: BlogCoverProps) {
  const imageClass = className ?? 'object-cover'

  if (src.startsWith('/')) {
    return (
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        priority={priority}
        className={imageClass}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={`absolute inset-0 h-full w-full ${imageClass}`}
    />
  )
}
