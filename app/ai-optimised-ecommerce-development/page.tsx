import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import AIOptimisedEcommerceDevelopmentClient from "./AIOptimisedEcommerceDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "AI-ECommerce Development Firm Florida ",
  "Transform your store with AI! Cornerstone Digital Technologies, Florida’s trusted eCommerce innovator, builds powerful, scalable, and high-conversion AI-optimised online platforms.",
  "/ai-optimised-ecommerce-development",
  "/WebDevlopment/startup-594090__340-2.jpg",
  [
    "ai ecommerce development",
    "ai optimised ecommerce",
    "ai powered ecommerce",
    "ai ecommerce development company",
    "ai ecommerce development services",
    "artificial intelligence ecommerce",
    "ecommerce ai integration",
    "ecommerce machine learning",
    "intelligent ecommerce development",
    "ai online store development",
    "ecommerce ai solutions",
    "ai enhanced ecommerce",
    "smart ecommerce development",
    "ecommerce ai automation",
    "ai ecommerce consulting",
    "ecommerce ai services",
    "ai optimised online store",
    "intelligent shopping experience",
    "ai ecommerce developers",
    "ecommerce ai platform",
    "ai product recommendations",
    "personalized ecommerce",
    "ai shopping cart",
    "intelligent inventory management"
  ],
  "Service"
);

export default function AIOptimisedEcommerceDevelopment() {
  const structuredData = getStructuredData(
    "AI-Optimised eCommerce Development Company in Florida | Cornerstone Digital Technologies Tech",
    "Cornerstone Digital Technologies is a leading AI-optimised eCommerce development company in Florida offering AI-powered online stores, intelligent product recommendations, personalized shopping experiences, and automated eCommerce solutions. Expert AI eCommerce developers for smart online retail.",
    "/ai-optimised-ecommerce-development",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <AIOptimisedEcommerceDevelopmentClient />
    </>
  );
}

