import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import DrupalDevelopmentClient from "./DrupalDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Drupal Development Company in Florida",
  "Looking for Drupal web development in Florida? ConvenantSoft Technologies delivers custom, secure, and scalable Drupal sites tailored to your goals.",
  "/drupal-development-company-in-florida",
  "/WebDevlopment/2020-08-05-3.jpg",
  [
    "drupal website development services",
    "drupal website development company",
    "drupal development agency",
    "drupal web development services",
    "drupal development services",
    "drupal module development",
    "drupal application development",
    "drupal agencies",
    "drupal development company",
    "drupal development",
    "drupal developers",
    "drupal company",
    "drupal website development",
    "drupal web development",
    "drupal web development company"
  ],
  "Service"
);

export default function DrupalDevelopment() {
  const structuredData = getStructuredData(
    "Drupal Development Company in Florida - Custom Drupal Website Development Services",
    "ConvenantSoft Technologies is a leading Drupal development company in Florida offering custom Drupal website development, module development, theme customization, and Drupal maintenance services. Expert Drupal developers for enterprise solutions.",
    "/drupal-development-company-in-Florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <DrupalDevelopmentClient />
    </>
  );
}
