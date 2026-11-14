import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { googleAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"

export const metadata = {
  title: googleAdsPageContent.metaTitle,
  description: googleAdsPageContent.metaDescription,
}

export default function GoogleAdsPage() {
  return <DedicatedServicePage content={googleAdsPageContent} />
}
