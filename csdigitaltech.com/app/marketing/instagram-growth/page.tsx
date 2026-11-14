import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { instagramGrowthPageContent } from "@/components/marketing/service-pages/dedicated-service-config"

export const metadata = {
  title: instagramGrowthPageContent.metaTitle,
  description: instagramGrowthPageContent.metaDescription,
}

export default function InstagramGrowthPage() {
  return <DedicatedServicePage content={instagramGrowthPageContent} />
}
