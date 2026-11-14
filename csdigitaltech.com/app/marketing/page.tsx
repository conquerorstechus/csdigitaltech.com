import { HeroSection } from "@/components/marketing/hero-section"
import { SocialChannels } from "@/components/marketing/social-channels"
import { TrustSection } from "@/components/marketing/trust-section"
import { ExamplesSection } from "@/components/marketing/examples-section"
import { WhyChooseUsSection } from "@/components/marketing/why-choose-us-section"
import { ClientReviewsSection } from "@/components/marketing/client-reviews"
import { FeaturesSection } from "@/components/marketing/features-section"
import { FAQSection } from "@/components/marketing/faq-section"
import { CTASection } from "@/components/marketing/cta-section"
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialChannels />
      <TrustSection />
      <ExamplesSection />
      <WhyChooseUsSection />
      <ClientReviewsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
