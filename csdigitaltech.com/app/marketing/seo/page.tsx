import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { seoServicesPageContent } from "@/components/marketing/service-pages/dedicated-service-config"

export const metadata = {
  title: seoServicesPageContent.metaTitle,
  description: seoServicesPageContent.metaDescription,
}

export default function SeoPage() {
  return <DedicatedServicePage content={seoServicesPageContent} />
}
