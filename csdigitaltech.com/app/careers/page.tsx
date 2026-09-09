import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import CareersClient from './CareersClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "Careers - Join Cornerstone Digital Technologies",
  "Explore careers at Cornerstone Digital Technologies in Tampa, Florida. View open roles in software engineering, AI, mobile apps, QA, design, and digital marketing, plus internships and how to apply.",
  "/careers",
  "/bg-pheader.jpg",
  [
    "careers Cornerstone Digital Technologies",
    "jobs Tampa software company",
    "software engineer jobs Florida",
    "AI engineer careers Tampa",
    "digital marketing jobs Tampa",
    "internships software Florida",
    "work at Cornerstone Digital Technologies",
    "remote software jobs Florida",
    "QA engineer jobs Tampa",
    "UI UX designer jobs Florida"
  ],
  "WebPage"
);

export default function CareersPage() {
  const structuredData = getStructuredData(
    "Careers - Join Cornerstone Digital Technologies",
    "Explore careers at Cornerstone Digital Technologies in Tampa, Florida. Open roles in engineering, AI, design, QA, and digital marketing.",
    "/careers",
    "WebPage"
  );

  return (
    <div>
      <StructuredData data={structuredData} />
      <CareersClient />
    </div>
  );
}
