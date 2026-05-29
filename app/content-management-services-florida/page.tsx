import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import ContentManagementServicesClient from "./ContentManagementServicesClient";

export const metadata = getComprehensiveMetadata(
  "Content Management Services in Florida",
  "Streamline and scale your content with ConvenantSoft Technologies’ content management services in Florida — from CMS setup to content governance and publishing.",
  "/content-management-services-florida",
  "/WebDevlopment/10-2-min.jpg",
  [
    "Affordable content management companies USA",
    "Affordable content management company Florida",
    "Best content management agency in Florida",
    "Best content management firms in USA",
    "Cloud content management company USA",
    "Cloud content management providers Florida",
    "Cloud content management solutions",
    "Content management company",
    "Content management company Florida",
    "Content management company USA",
    "Content management consulting firm",
    "Content management service providers",
    "Content management service providers in Florida",
    "Content management service providers USA",
    "Content management solutions",
    "Digital content management company",
    "Digital content management consulting USA",
    "Digital content management solutions Florida",
    "Document management experts",
    "Enterprise content management firm Florida",
    "Enterprise content management providers",
    "Enterprise content management solutions USA",
    "Florida content management consultants",
    "Leading content management consultants USA",
    "Professional CMS service providers",
    "Top CMS providers in USA",
    "Web content management agency",
    "Web content management providers Florida",
    "Web content management providers USA"
  ],
  "Service"
);

export default function ContentManagementServices() {
  const structuredData = getStructuredData(
    "Content Management Services in Florida | ConvenantSoft Tech",
    "ConvenantSoft Technologies is a leading content management services company in Florida offering CMS solutions, WordPress, Drupal, Joomla development, and enterprise content management. Get professional CMS consulting and development services.",
    "/content-management-services-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <ContentManagementServicesClient />
    </>
  );
}
