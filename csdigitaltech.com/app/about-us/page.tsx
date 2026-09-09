// ✅ This is a Server Component — no "use client" here
import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import AboutUsClient from './AboutUsClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "About Us -  Software  Company in Florida ",
  "Discover Cornerstone Digital Technologies - a premier software development company in Florida. Learn about our journey, expertise in custom software development, mobile apps, and digital solutions. Trusted by 500+ clients worldwide.",
  "/about-us",
  "/About/image-box1.jpg",
  [
    "about Cornerstone Digital Technologies",
    "software development company Florida",
    "custom software development company",
    "mobile app development company",
    "web development services Florida",
    "it consulting services",
    "digital solutions company",
    "enterprise software development",
    "full stack development company",
    "cloud solutions provider",
    "technology consulting services",
    "software development team",
    "Cornerstone Digital Technologies  about",
    "Florida software company",
    "custom application development",
    "digital transformation services",
    "software development expertise",
    "technology solutions provider",
    "it services company Florida",
    "software development portfolio"
  ],
  "Organization"
);

export default function AboutUs() {
  const structuredData = getStructuredData(
    "About Us - Leading Software Development Company in Florida",
    "Discover Cornerstone Digital Technologies - a premier software development company in Florida. Learn about our journey, expertise in custom software development, mobile apps, and digital solutions. Trusted by 500+ clients worldwide.",
    "/about-us",
    "Organization"
  );

  return (
    <div>
      <StructuredData data={structuredData} />
      <AboutUsClient /> 
    </div>
  );
}
