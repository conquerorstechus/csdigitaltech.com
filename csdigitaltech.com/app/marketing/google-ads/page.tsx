import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { googleAdsPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/google-ads", {
  title: googleAdsPageContent.metaTitle,
  description: googleAdsPageContent.metaDescription,
})

export default function GoogleAdsPage() {
  return <DedicatedServicePage content={googleAdsPageContent} />
}
