import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import CustomSoftwareDevelopmentClient from "./CustomSoftwareDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Custom Software Company in Florida",
  "Conquerors Technologies is a leading Custom Software Development Company in Florida delivering tailored, scalable, and secure digital solutions to accelerate your business growth.",
  "/custom-software-development-company-in-florida",
  "/WebDevlopment/1-min.webp",
  [
    "custom software development company in Florida",
    "digital cloud solutions services in Florida",
    "digital cloud solutions services",
    "cloud transformation services in Florida",
    "cloud transformation services",
    "it consulting services in Florida",
    "flutter app development company in Florida",
    "taxi booking software development company",
    "taxi booking software development company in Florida",
    "drupal web development services in Florida",
    "laravel web development company in Florida",
    "learning management system software in Florida",
    "exam engines softwares in Florida",
    "node js web development services in Florida",
    "mobile app development company",
    "web development services",
    "software development company USA",
    "custom software solutions",
    "enterprise software development",
    "full stack development services",
    "Custom Software Development Companies",
    "Custom Software Development Agency",
    "Web Development Services in USA",
    "Web Development Companies in USA",
    "Website Development Company in USA",
    "Top App Development Companies in USA",
    "React Native App Development Services",
    "IT Consulting Companies in USA",
    "Mobile App Development Companies in USA",
    "App Development Company in USA",
    "Top Mobile App Development Companies in USA",
    "US IT Consulting Companies",
    "IT Consulting Firms In USA",
    "Top IT Consulting Firms In USA",
    "Mobile App Development Companies in US",
    "React Native App Development Company",
    "Best Mobile App Development Services in USA",
    "Enterprise CRM Implementation Services",
    "Drupal Web Development services in USA"
  ],
  "Service"
);

export default function CustomSoftwareDevelopment() {
  const structuredData = getStructuredData(
    "Custom Software Development Company in Florida | Conquerors Tech",
    "Conquerors Technologies is a leading custom software development company in Florida offering custom software solutions, enterprise software development, full stack development services, and digital cloud solutions. Expert software developers for your business needs.",
    "/custom-software-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <CustomSoftwareDevelopmentClient />
    </>
  );
}
