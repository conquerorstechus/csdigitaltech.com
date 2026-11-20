import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { videoAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/video-ads", {
  title: videoAdsPageContent.metaTitle,
  description: videoAdsPageContent.metaDescription,
})

export default function VideoAdsPage() {
  return <DedicatedServicePage content={videoAdsPageContent} />
}
