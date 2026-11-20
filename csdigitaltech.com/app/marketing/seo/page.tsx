import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { seoServicesPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/seo", {
  title: seoServicesPageContent.metaTitle,
  description: seoServicesPageContent.metaDescription,
})

export default function SeoPage() {
  return <DedicatedServicePage content={seoServicesPageContent} />
}
