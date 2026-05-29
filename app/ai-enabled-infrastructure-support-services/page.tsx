import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import AIEnabledInfrastructureSupportServicesClient from "./AIEnabledInfrastructureSupportServicesClient";

export const metadata = getComprehensiveMetadata(
  "AI Infra & Support Services Florida",
  "Enhance efficiency with AI-enabled infrastructure and support services from ConvenantSoft Technologies, a trusted Florida company delivering smart, automated IT operations.",
  "/ai-enabled-infrastructure-support-services",
  "/WebDevlopment/1-min.webp",
  [
    "ai infrastructure services",
    "ai enabled infrastructure",
    "ai powered infrastructure",
    "ai infrastructure management",
    "ai infrastructure support",
    "artificial intelligence infrastructure",
    "intelligent infrastructure services",
    "ai it infrastructure",
    "ai infrastructure monitoring",
    "ai infrastructure automation",
    "ai infrastructure solutions",
    "ai enhanced infrastructure",
    "smart infrastructure services",
    "ai infrastructure consulting",
    "ai infrastructure management services",
    "ai infrastructure support services",
    "ai optimised infrastructure",
    "intelligent it infrastructure",
    "ai infrastructure developers",
    "ai infrastructure platform",
    "predictive infrastructure maintenance",
    "ai infrastructure analytics",
    "automated infrastructure management",
    "ai infrastructure optimization"
  ],
  "Service"
);

export default function AIEnabledInfrastructureSupportServices() {
  const structuredData = getStructuredData(
    "AI-Enabled Infrastructure & Support Services Company in Florida | ConvenantSoft Tech",
    "Convenantsoft is a leading AI-enabled infrastructure and support services company in Florida offering AI-powered IT infrastructure management, intelligent monitoring, predictive maintenance, automated optimization, and proactive support services. Expert AI infrastructure solutions.",
    "/ai-enabled-infrastructure-support-services",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <AIEnabledInfrastructureSupportServicesClient />
    </>
  );
}

