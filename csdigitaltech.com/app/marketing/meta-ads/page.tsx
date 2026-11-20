import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { metaAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/meta-ads", {
  title: metaAdsPageContent.metaTitle,
  description: metaAdsPageContent.metaDescription,
})

export default function MetaAdsPage() {
  return <DedicatedServicePage content={metaAdsPageContent} />
}
