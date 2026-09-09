import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import FullstackDevelopmentClient from "./FullstackDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Top Fullstack Development in  Florida",
  "Get end-to-end web and app solutions with Cornerstone Digital Technologies, a leading Fullstack Development Company in Florida delivering scalable, secure, and high-performance products.",
  "/fullstack-development-company-florida",
  "/WebDevlopment/2020-08-05-3.jpg",
  [
    "fullstack development",
    "fullstack development company",
    "fullstack development Florida",
    "full stack development",
    "full stack web development",
    "fullstack web development",
    "frontend development",
    "backend development",
    "fullstack developers",
    "fullstack development services",
    "fullstack development company Florida",
    "fullstack development services Florida",
    "fullstack development agency",
    "fullstack development company USA",
    "fullstack development solutions",
    "fullstack development experts",
    "fullstack development agency Florida",
    "fullstack development company USA",
    "fullstack web development services",
    "fullstack application development"
  ],
  "Service"
);

export default function FullstackDevelopment() {
  const structuredData = getStructuredData(
    "Fullstack Development Company in Florida - Full Stack Web Development Services",
    "Cornerstone Digital Technologies is a leading fullstack development company in Florida offering end-to-end full stack web development services including frontend, backend, database, and DevOps. Expert fullstack developers for complete web solutions.",
    "/fullstack-development-company-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <FullstackDevelopmentClient />
    </>
  );
}
