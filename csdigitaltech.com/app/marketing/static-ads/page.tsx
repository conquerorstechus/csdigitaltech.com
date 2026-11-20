import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { staticAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/static-ads", {
  title: staticAdsPageContent.metaTitle,
  description: staticAdsPageContent.metaDescription,
})

export default function StaticAdsPage() {
  return <DedicatedServicePage content={staticAdsPageContent} />
}
