import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import LaravelDevelopmentClient from "./LaravelDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Laravel Development Company in Florida",
  "Build powerful web apps with Laravel development services from Cornerstone Digital Technologies in Florida — clean code, high performance, and long-term scalability.",
  "/laravel-development-company-in-florida",
  "/WebDevlopment/Laravel-banner.jpg",
  [
    "laravel web development company",
    "laravel development company",
    "laravel website development company",
    "laravel app development company",
    "laravel development agency",
    "best laravel development company",
    "laravel web application development services",
    "laravel agency",
    "laravel web application development company",
    "top laravel development companies",
    "php laravel development company",
    "laravel web development companies",
    "laravel web agency",
    "laravel php development company",
    "laravel web development agency",
    "laravel framework development company",
    "laravel devlopment company"
  ],
  "Service"
);

export default function LaravelDevelopment() {
  const structuredData = getStructuredData(
    "Laravel Development Company in Florida  | Cornerstone Digital Technologies Tech",
    "Build powerful web apps with Laravel development services from Cornerstone Digital Technologies in Florida — clean code, high performance, and long-term scalability.",
    "/laravel-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <LaravelDevelopmentClient />
    </>
  );
}
