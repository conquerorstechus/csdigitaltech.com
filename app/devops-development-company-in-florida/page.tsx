import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import DevOpsDevelopmentClient from "./DevOpsDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "DevOps Development Company in Florida",
  "Get cutting-edge DevOps services in Florida with ConvenantSoft Technologies: we streamline your delivery pipeline, automate infrastructure, and boost deployment speed.",
  "/devops-development-company-in-florida",
  "/WebDevlopment/1-min.webp",
  [
    "best devops consulting companies",
    "best devops consulting firms",
    "cloud devops consulting services",
    "devops advisory services",
    "devops automation consulting",
    "devops cloud services",
    "devops companies",
    "devops consulting",
    "devops consulting companies",
    "devops consulting firms",
    "devops consulting services",
    "devops consulting solutions",
    "devops development company",
    "devops development services",
    "devops managed service provider",
    "devops managed services",
    "devops management services",
    "devops professional services",
    "devops service company",
    "devops service company florida",
    "devops service provider company",
    "devops service providers",
    "devops services & solutions",
    "devops services and solutions",
    "devops services company",
    "devops services company in florida",
    "devops software development services",
    "devops solutions and service provider",
    "devops solutions and service provider company",
    "devops solutions and services",
    "devops solutions company",
    "devops solutions provider",
    "devops test data management",
    "software development and consultancy",
    "top devops consulting companies",
    "top devops consulting company",
    "top devops service providers"
  ],
  "Service"
);

export default function DevOpsDevelopment() {
  const structuredData = getStructuredData(
    "DevOps Development Company in Florida | ConvenantSoft Tech",
    "Get cutting-edge DevOps services in Florida with ConvenantSoft Technologies: we streamline your delivery pipeline, automate infrastructure, and boost deployment speed.",
    "/devops-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <DevOpsDevelopmentClient />
    </>
  );
}
