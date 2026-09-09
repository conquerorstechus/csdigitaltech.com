import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import WordPressDevelopmentClient from "./WordPressDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "WordPress Web Development Services",
  "Boost your online presence with custom WordPress development by Cornerstone Digital Technologies. Fast, secure, user-friendly websites built to grow your business.",
  "/wordpress-development-company",
  "/WebDevlopment/2020-08-05-3.jpg",
  [
    "WordPress development",
    "WordPress development company",
    "WordPress website development",
    "custom WordPress development",
    "WordPress theme development",
    "WordPress plugin development",
    "WordPress customization",
    "WordPress development services",
    "WordPress developers",
    "WordPress website design",
    "WordPress CMS development",
    "WordPress e-commerce development",
    "WordPress maintenance services",
    "WordPress development agency",
    "WordPress development company USA",
    "WordPress development services Florida",
    "WordPress web development",
    "WordPress application development",
    "WordPress development solutions",
    "WordPress development experts"
  ],
  "Service"
);

export default function WordPressDevelopment() {
  const structuredData = getStructuredData(
    "WordPress Development Company - Custom WordPress Website Development Services",
    "Cornerstone Digital Technologies is a leading WordPress development company offering custom WordPress website development, theme customization, plugin development, and WordPress maintenance services. Expert WordPress developers for your business.",
    "/wordpress-development-company",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <WordPressDevelopmentClient />
    </>
  );
}
