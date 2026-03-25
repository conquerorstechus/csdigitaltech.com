import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import BusinessIntelligenceDevelopmentClient from "./BusinessIntelligenceDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Business Intelligence Experts Florida",
  "Empower data-driven decisions with Conquerors Technologies, a top Business Intelligence Company in Florida delivering smart BI solutions for improved insights and performance.",
  "/business-intelligence-development-company-in-florida",
  "/WebDevlopment/6_1.jpg",
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

export default function BusinessIntelligenceDevelopment() {
  const structuredData = getStructuredData(
    "Business Intelligence Development Company in Florida | Conquerors Tech",
    "Conquerors Technologies is a leading business intelligence development company in Florida offering BI services, data analytics, dashboards, reporting, and enterprise BI solutions. Get expert business intelligence consulting and development services.",
    "/business-intelligence-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <BusinessIntelligenceDevelopmentClient />
    </>
  );
}
