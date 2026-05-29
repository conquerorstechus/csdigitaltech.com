import { getComprehensiveMetadata, getTestingServicesFloridaSchema, getTestingServicesFloridaFAQSchema } from "@/lib/seo-metadata";
import TestingServicesClient from './TestingServicesClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "QA Testing Services in Florida",
  "Want flawless apps? ConvenantSoft Technologies in Florida runs in-depth QA testing to catch bugs early, boost performance, and make sure your software runs exactly like you want.",
  "/services/testing-services-in-Florida",
  "/Digitalcloud/testing-services.jpg",
  [
    "QA testing services",
    "software testing services",
    "quality assurance services",
    "functional testing",
    "automation testing",
    "performance testing",
    "security testing",
    "UI testing",
    "API testing",
    "database testing",
    "mobile testing",
    "selenium testing",
    "test automation",
    "QA consulting",
    "software quality assurance",
    "testing company",
    "QA services Florida",
    "test automation framework",
    "manual testing services",
    "regression testing",
    "load testing",
    "penetration testing",
    "compatibility testing",
    "usability testing"
  ],
  "Service"
);

export default function TestingServices() {
  const structuredData = getTestingServicesFloridaSchema();
  const faqSchema = getTestingServicesFloridaFAQSchema();

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <TestingServicesClient />
    </div>
  );
}
