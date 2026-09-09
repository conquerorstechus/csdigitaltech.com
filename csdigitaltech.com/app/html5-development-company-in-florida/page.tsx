import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import HTML5DevelopmentClient from "./HTML5DevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "HTML5 Development Company in Florida",
  "Elevate your web presence with Cornerstone Digital Technologies — Florida’s expert HTML5 development company delivering interactive, high-performance, user-friendly web applications.",
  "/html5-development-company-in-florida",
  "/WebDevlopment/2020-08-05-3.jpg",
  [
    "HTML5 development",
    "HTML5 development company",
    "HTML5 development Florida",
    "HTML5 web development",
    "custom HTML5 development",
    "HTML5 responsive design",
    "HTML5 interactive applications",
    "HTML5 web applications",
    "HTML5 development services",
    "HTML5 developers Florida",
    "HTML5 programming",
    "HTML5 frontend development",
    "HTML5 mobile development",
    "HTML5 cross-platform development",
    "HTML5 web solutions",
    "HTML5 development agency",
    "HTML5 development company USA",
    "HTML5 development services Florida",
    "HTML5 web development company",
    "HTML5 application development"
  ],
  "Service"
);

export default function HTML5Development() {
  const structuredData = getStructuredData(
    "HTML5 Development Company in Florida - Custom HTML5 Web Development Services",
    "Cornerstone Digital Technologies is a leading HTML5 development company in Florida offering custom HTML5 web development, responsive design, interactive applications, and modern web solutions. Expert HTML5 developers for your business needs.",
    "/html5-development-company-in-Florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <HTML5DevelopmentClient />
    </>
  );
}
