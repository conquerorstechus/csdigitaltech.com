import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import CloudDevelopmentClient from "./CloudDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Cloud development Company in Florida",
  "Cornerstone Digital Technologies is a leading cloud development company in Florida offering cloud services, cloud infrastructure support, 24/7 cloud monitoring, DevOps services, and managed cloud solutions. Expert cloud developers for AWS, Azure, and Google Cloud.",
  "/cloud-development-company-in-florida",
  "/WebDevlopment/8-1.jpg",
  [
    "cloud services",
    "cloud infrastructure support",
    "24/7 cloud monitoring",
    "DevOps services",
    "cloud maintenance support",
    "system IT support",
    "infrastructure monitoring",
    "cloud security services",
    "AWS support",
    "Azure support",
    "Google Cloud support",
    "cloud automation",
    "CI/CD pipelines",
    "cloud migration",
    "cloud consulting",
    "managed cloud services",
    "cloud performance monitoring",
    "cloud infrastructure management",
    "cloud support Florida",
    "DevOps automation",
    "Kubernetes support",
    "Docker support",
    "cloud application development services",
    "application development on cloud",
    "cloud software development",
    "cloud native application development",
    "google cloud platform developers",
    "cloud app development services",
    "cloud based application development",
    "cloud based app development",
    "cloud based web development services",
    "cloud based software development",
    "cloud based development platforms",
    "best cloud platform for developers",
    "application development in cloud",
    "aws cloud application development services",
    "cloud application development platform",
    "cloud development company",
    "cloud development services",
    "cloud application development company",
    "cloud software development company",
    "cloud app development company",
    "cloud software development services",
    "best cloud application development platform",
    "cloud applications development services",
    "cloud based application development company",
    "cloud computing development services",
    "custom cloud application development",
    "cloud software developer",
    "google cloud platform for developers",
    "cloud native software development companies",
    "cloud development companies",
    "cloud application development solutions",
    "cloud computing software development",
    "cloud development company in florida",
    "cloud computing development services in florida"
  ],
  "Service"
);

export default function CloudDevelopment() {
  const structuredData = getStructuredData(
    "Cloud development Company in Florida | Cornerstone Digital Technologies Tech",
    "Cornerstone Digital Technologies is a leading cloud development company in Florida offering cloud services, cloud infrastructure support, 24/7 cloud monitoring, DevOps services, and managed cloud solutions. Expert cloud developers for AWS, Azure, and Google Cloud.",
    "/cloud-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <CloudDevelopmentClient />
    </>
  );
}
