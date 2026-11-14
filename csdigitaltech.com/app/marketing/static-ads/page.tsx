import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { staticAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"

export const metadata = {
  title: staticAdsPageContent.metaTitle,
  description: staticAdsPageContent.metaDescription,
}

export default function StaticAdsPage() {
  return <DedicatedServicePage content={staticAdsPageContent} />
}
