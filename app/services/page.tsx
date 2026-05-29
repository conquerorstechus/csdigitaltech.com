// ✅ This is a Server Component — no "use client" here
import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import ServicesClient from './ServicesClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "Our Services-Software Company Florida",
  "Explore ConvenantSoft Tech's expert IT services—from web development to digital marketing—designed to accelerate your business growth with innovative, scalable solutions.",
  "/services",
  "/bg-pheader.jpg",
  [
    "software development services",
    "custom software development",
    "cloud solutions",
    "digital transformation services",
    "IT consulting services",
    "mobile app development",
    "web application development",
    "QA testing services",
    "quality assurance services",
    "cloud services AWS Azure",
    "digital marketing services",
    "enterprise software development",
    "software development company",
    "full stack development services",
    "DevOps services",
    "API integration services",
    "IoT solutions",
    "machine learning services",
    "healthcare software development",
    "agri-tech solutions",
    "edu-tech software",
    "e-commerce development",
    "logistics software solutions",
    "manufacturing software",
    "software testing services",
    "automation testing",
    "performance testing",
    "functional testing",
    "cloud migration services",
    "digital cloud solutions"
  ],
  "Service"
);

export default function ServicesPage() {
  const structuredData = getStructuredData(
    "Our Services - Software Development, Cloud Solutions & IT Consulting",
    "Explore our comprehensive software development services including custom web applications, mobile apps, cloud solutions, digital transformation, IT consulting, QA testing, and digital marketing. We serve Healthcare, Agri-Tech, Edu-Tech, E-Commerce, Logistics & Manufacturing industries.",
    "/services",
    "Service"
  );

  return (
    <div>
      <StructuredData data={structuredData} />
      <ServicesClient /> 
    </div>
  );
}
