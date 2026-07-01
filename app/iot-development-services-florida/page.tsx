import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import IOTDevelopmentClient from "./IOTDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "IoT Development Services in Florida",
  "Get advanced IoT solutions in Florida with Cornerstone Digital Technologies — custom device software, cloud connectivity, real-time monitoring, and IoT analytics.",
  "/iot-development-services-florida",
  "/WebDevlopment/9 (1).jpg",
  [
    "Best IoT developers",
    "Custom IoT development company",
    "Custom IoT development services",
    "Custom IoT development solutions",
    "IIoT platform development",
    "Industrial IoT development services",
    "Internet of Things app development company",
    "Internet of Things app development services",
    "Internet of Things application development",
    "Internet of Things developers",
    "Internet of Things development companies",
    "Internet of Things development services",
    "Internet of Things software development company",
    "Internet of Things software development services",
    "IoT app development agency",
    "IoT app development company",
    "IoT app development services",
    "IoT app development solutions",
    "IoT app developers",
    "IoT application development agency",
    "IoT application development company",
    "IoT application development services",
    "IoT application development services company",
    "IoT application developers",
    "IoT applications outsourcing company",
    "IoT cloud development",
    "IoT cloud developer",
    "IoT development agency",
    "IoT development company",
    "IoT development services",
    "IoT development services in Florida",
    "IoT development solutions",
    "IoT mobile app development company",
    "IoT mobile app development services",
    "IoT platform development",
    "IoT product development services",
    "IoT project development",
    "IoT software development company",
    "IoT software development services",
    "Mobile IoT app solutions",
    "Outsource IoT development services",
    "Top IoT app development companies",
    "Top IoT developers",
    "Top IoT development company",
    "Ionic Application Development Company in Florida",
    "Ionic application development company in usa"
  ],
  "Service"
);

export default function IOTDevelopment() {
  const structuredData = getStructuredData(
    "Iot Development Services in Florida | Cornerstone Digital Technologies Tech",
    "Cornerstone Digital Technologies is a leading IoT development services company in Florida offering custom IoT development, industrial IoT solutions, and expert IoT developers. Get scalable IoT solutions with deep analytical layers.",
    "/iot-development-services-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <IOTDevelopmentClient />
    </>
  );
}
