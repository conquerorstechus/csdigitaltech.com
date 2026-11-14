import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { videoAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"

export const metadata = {
  title: videoAdsPageContent.metaTitle,
  description: videoAdsPageContent.metaDescription,
}

export default function VideoAdsPage() {
  return <DedicatedServicePage content={videoAdsPageContent} />
}
