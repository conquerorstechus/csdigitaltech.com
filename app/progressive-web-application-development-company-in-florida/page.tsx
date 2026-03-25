import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import ProgressiveWebApplicationDevelopmentClient from "./ProgressiveWebApplicationDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Progressive Web App services Florida",
  "Build fast, secure, and engaging PWAs with Conquerors Technologies, a leading Progressive Web Application Development Company in Florida delivering seamless cross-platform experiences.",
  "/progressive-web-application-development-company-in-florida",
  "/WebDevlopment/2020-08-05-3.jpg",
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

export default function ProgressiveWebApplicationDevelopment() {
  const structuredData = getStructuredData(
    "Progressive Web Application Development Company in Florida | Conquerors Tech",
    "Conquerors Technologies is a leading progressive web application development company in Florida offering custom PWA development, web development services, and expert PWA developers. Get high-quality progressive web apps built with latest technologies.",
    "/progressive-web-application-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <ProgressiveWebApplicationDevelopmentClient />
    </>
  );
}
