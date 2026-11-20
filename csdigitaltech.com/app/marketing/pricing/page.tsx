import { PricingHero } from "@/components/marketing/pricing/pricing-hero"
import { marketingMeta } from "@/lib/marketing-metadata"
import { DynamicPricingSection } from "@/components/marketing/pricing/dynamic-pricing-section"
import { ServiceCardsGrid } from "@/components/marketing/pricing/service-cards-grid"
import { DYNAMIC_PRICING_TAB_ORDER, type DynamicPricingTabId } from "@/components/marketing/pricing/dynamic-pricing-data"

export const metadata = marketingMeta("/marketing/pricing", {
  title: "Marketing Pricing from $99/mo | Cornerstone Digital Technologies",
  description:
    "Transparent pricing for social media posts, paid ads, SEO, video, and email design. Plans start at $99/month.",
})

// In Next.js 15+, searchParams is a Promise in Server Components
export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const tabParamRaw = params?.tab
  const tabParam = Array.isArray(tabParamRaw) ? tabParamRaw[0] : tabParamRaw
  const normalizedTab = typeof tabParam === "string" ? tabParam.trim().toLowerCase() : ""
  const defaultTabId = (DYNAMIC_PRICING_TAB_ORDER as readonly string[]).includes(normalizedTab)
    ? (normalizedTab as DynamicPricingTabId)
    : "posts"

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-16">
        <PricingHero />
        <DynamicPricingSection defaultTabId={defaultTabId} />
        <ServiceCardsGrid mode="all" />
      </div>
    </main>
  )
}
