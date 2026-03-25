import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import WebDesignClient from "./WebDesignClient";

export const metadata = getComprehensiveMetadata(
  "Web design | Conquerors Technologies",
  "Conquerors Technologies is a leading web design company in Florida offering custom web design, graphic design, corporate identity, and logo design services. Get creative web solutions that cater to your marketing and design needs.",
  "/web-design",
  "/WebDevlopment/2-Web-Design.jpg",
  [
    "web development",
    "web development services",
    "custom web development",
    "web application development",
    "e-commerce development",
    "dynamic websites",
    "mobile application development",
    "CMS development",
    "content management system",
    "WordPress development",
    "Drupal development",
    "HTML5 development",
    "progressive web applications",
    "web development company",
    "web development company in florida",
    "web development Florida",
    "custom web applications in florida",
    "responsive web design",
    "web development solutions in florida",
    "web development agency",
    "software development company",
    "web development services in usa",
    "web development companies in usa",
    "website design companies in usa",
    "website development company in usa",
    "web design company usa",
    "web development usa",
    "top web development companies in usa",
    "website design services in usa",
    "website development services in usa",
    "best website development company in usa",
    "web design company in america",
    "web development company in america",
    "top website design company in usa",
    "website design company in america"
  ],
  "Service"
);

export default function WebDesign() {
  const structuredData = getStructuredData(
    "Web design | Conquerors Technologies",
    "Conquerors Technologies is a leading web design company in Florida offering custom web design, graphic design, corporate identity, and logo design services. Get creative web solutions that cater to your marketing and design needs.",
    "/web-design",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <WebDesignClient />
    </>
  );
}
