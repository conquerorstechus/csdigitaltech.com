import { imageUrl, type OpinlyConfig } from '@opinly/shared'
import { opinlyConfig } from '@opinly/next'

export const opinlyRenderConfig: OpinlyConfig = {
  imagesPrefix: opinlyConfig.imagesPrefix,
  siteUrl: opinlyConfig.siteUrl,
  blogPrefix: opinlyConfig.blogPrefix,
  siteName: opinlyConfig.siteName,
}

export function getOpinlyImageUrl(fileKey: string | null | undefined): string | null {
  if (!fileKey) return null
  return imageUrl(fileKey, opinlyRenderConfig)
}
