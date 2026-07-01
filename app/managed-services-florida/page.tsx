import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import ManagedServicesClient from "./ManagedServicesClient";

export const metadata = getComprehensiveMetadata(
  "Managed Services in Florida",
  "Get reliable managed services in Florida from Cornerstone Digital Technologies. We handle your IT, cloud systems, monitoring, and support so your business stays efficient and growing.",
  "/managed-services-florida",
  "/WebDevlopment/9.jpg",
  [
    "Affordable managed IT services Florida",
    "Affordable managed IT services USA",
    "Best managed service providers in Florida",
    "Best managed service providers USA",
    "Best managed services in Florida",
    "Cloud managed services Florida",
    "Cloud managed services USA",
    "Enterprise managed services Florida",
    "Enterprise managed services USA",
    "Florida managed IT services",
    "Florida managed IT support company",
    "Florida managed security services",
    "Florida managed service providers",
    "IT managed service providers",
    "IT outsourcing and managed services USA",
    "IT outsourcing services Florida",
    "Leading managed service providers in USA",
    "Managed IT companies in Florida USA",
    "Managed IT services Florida",
    "Managed IT services USA",
    "Managed IT services for Florida businesses",
    "Managed IT support services",
    "Managed security services USA",
    "Managed service providers in Tampa FL",
    "Managed services in Florida",
    "Managed services USA",
    "Top IT managed service providers in Florida",
    "Top managed IT companies in USA",
    "Top managed IT service providers in Florida",
    "Top managed services company Florida"
  ],
  "Service"
);

export default function ManagedServices() {
  const structuredData = getStructuredData(
    "Managed Services in Florida | Cornerstone Digital Technologies Techologies",
    "Get reliable managed services in Florida from Cornerstone Digital Technologies. We handle your IT, cloud systems, monitoring, and support so your business stays efficient and growing.",
    "/managed-services-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <ManagedServicesClient />
    </>
  );
}
