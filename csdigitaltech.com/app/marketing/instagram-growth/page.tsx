import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { instagramGrowthPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/instagram-growth", {
  title: instagramGrowthPageContent.metaTitle,
  description: instagramGrowthPageContent.metaDescription,
})

export default function InstagramGrowthPage() {
  return <DedicatedServicePage content={instagramGrowthPageContent} />
}
