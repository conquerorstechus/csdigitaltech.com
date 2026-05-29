import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import BusinessIntelligenceClient from "./BusinessIntelligenceClient";

export const metadata = getComprehensiveMetadata(
  "Business Intelligence Services | ConvenantSoft Tech",
  "ConvenantSoft Technologies is a leading business intelligence services company offering comprehensive BI solutions, data analytics, dashboards, and enterprise BI consulting. Get expert business intelligence services for data-driven decision making.",
  "/business-intelligence",
  "/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp",
  [
    "Business intelligence services",
    "Business intelligence service providers",
    "Business intelligence company",
    "Business intelligence solutions",
    "Business intelligence consulting firm",
    "BI services and solutions",
    "Business intelligence consulting company",
    "Business intelligence experts",
    "Enterprise business intelligence services",
    "Business intelligence support services",
    "Business intelligence services USA",
    "Business intelligence company USA",
    "Business intelligence service providers USA",
    "Business intelligence consulting USA",
    "Business intelligence solutions USA",
    "Top business intelligence firms USA",
    "Best business intelligence consultants USA",
    "Affordable business intelligence company USA",
    "Enterprise BI solutions USA",
    "Leading business intelligence agencies USA",
    "Business intelligence services in Florida",
    "Business intelligence company Florida",
    "Business intelligence service providers Florida",
    "Business intelligence consulting Florida",
    "Business intelligence solutions Florida",
    "Best business intelligence firm in Florida",
    "Top BI consultants Florida",
    "Affordable business intelligence company Florida",
    "Florida business intelligence experts",
    "Florida BI consulting agency"
  ],
  "Service"
);

export default function BusinessIntelligence() {
  const structuredData = getStructuredData(
    "Business Intelligence Services | ConvenantSoft Tech",
    "ConvenantSoft Technologies is a leading business intelligence services company offering comprehensive BI solutions, data analytics, dashboards, and enterprise BI consulting. Get expert business intelligence services for data-driven decision making.",
    "/business-intelligence",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <BusinessIntelligenceClient />
    </>
  );
} 