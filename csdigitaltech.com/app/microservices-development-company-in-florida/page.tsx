import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import MicroservicesDevelopmentClient from "./MicroservicesDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Microservices Development Firm Florida",
  "Streamline your architecture with Cornerstone Digital Technologies, a top Microservices Development Company in Florida offering scalable, flexible, and high-performance application solutions.",
  "/microservices-development-company-in-florida",
  "/WebDevlopment/9 (2).jpg",
  [
    "Microservices development company",
    "Microservices development services",
    "Microservices software development",
    "Microservices web development",
    "Microservices consulting services",
    "Microservices architecture development company",
    "Microservices in software development",
    "DevOps microservices architecture",
    "Microservices integration services",
    "Microservices modernization",
    "Cloud-native microservices",
    "Scalable microservices development",
    "Outsourced microservices company",
    "Microservices development company in Florida",
    "Microservices development services Florida",
    "Best microservices company in Florida",
    "Top microservices development Florida",
    "Affordable microservices services Florida",
    "Enterprise microservices company Florida",
    "Florida microservices development experts",
    "Florida microservices consulting firm",
    "Florida microservices solutions provider",
    "Florida microservices outsourcing services",
    "Florida cloud-native microservices services",
    "Florida custom microservices development",
    "Florida enterprise microservices solutions"
  ],
  "Service"
);

export default function MicroservicesDevelopment() {
  const structuredData = getStructuredData(
    "Micro Services Development Company in Florida | Cornerstone Digital Technologies Tech",
    "Cornerstone Digital Technologies is a leading microservices development company in Florida offering custom microservices development, microservices architecture, and expert microservices developers. Get scalable microservices solutions with Java, .NET, and Azure.",
    "/microservices-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <MicroservicesDevelopmentClient />
    </>
  );
}
