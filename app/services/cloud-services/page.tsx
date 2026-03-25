import { getComprehensiveMetadata, getCloudServicesFloridaSchema, getCloudServicesFloridaFAQSchema } from "@/lib/seo-metadata";
import CloudServicesClient from './CloudServicesClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "Cloud Services & Support in Florida",
  "Need reliable cloud support? Conquerors Technologies in Florida provides cloud services that keep your data safe, your systems scalable, and your costs under control.",
  "/services/cloud-services-in-Florida",
  "/Digitalcloud/cloud-computing-banner-background-smart-city_53876-108504.webp",
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
    "container orchestration",
    "cloud migration",
    "cloud consulting",
    "managed cloud services",
    "cloud backup and recovery",
    "cloud performance monitoring",
    "cloud infrastructure management",
    "cloud support Florida",
    "DevOps automation",
    "Kubernetes support",
    "Docker support"
  ],
  "Service"
);

export default function CloudServices() {
  const structuredData = getCloudServicesFloridaSchema();
  const faqSchema = getCloudServicesFloridaFAQSchema();

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <CloudServicesClient />
    </div>
  );
}
