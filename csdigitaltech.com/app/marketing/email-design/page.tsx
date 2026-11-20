import { DedicatedServicePage } from "@/components/marketing/service-pages/dedicated-service-page"
import { emailDesignPageContent } from "@/components/marketing/service-pages/dedicated-service-config"
import { marketingMeta } from "@/lib/marketing-metadata"

export const metadata = marketingMeta("/marketing/email-design", {
  title: emailDesignPageContent.metaTitle,
  description: emailDesignPageContent.metaDescription,
})

export default function EmailDesignPage() {
  return <DedicatedServicePage content={emailDesignPageContent} />
}
