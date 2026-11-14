import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { metaAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"

export const metadata = {
  title: metaAdsPageContent.metaTitle,
  description: metaAdsPageContent.metaDescription,
}

export default function MetaAdsPage() {
  return <DedicatedServicePage content={metaAdsPageContent} />
}
