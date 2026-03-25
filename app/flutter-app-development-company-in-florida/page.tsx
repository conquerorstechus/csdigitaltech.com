import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import FlutterAppDevelopmentClient from "./FlutterAppDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Flutter App Development Company in Florida",
  "Conquerors Technologies is a leading Flutter app development company in Florida offering cross-platform Flutter development, mobile app development, and expert Flutter developers. Get high-quality Flutter apps built with latest technologies.",
  "/flutter-app-development-company-in-florida",
  "/WebDevlopment/Flutter-banner.jpg",
  [
    "flutter app development company",
    "flutter app development services",
    "flutter application development services",
    "flutter company",
    "flutter mobile app development",
    "flutter tech",
    "flutter development company",
    "flutter app developer",
    "flutter development services",
    "top flutter app development companies",
    "flutter app development agency",
    "flutter mobile app development company",
    "companies using flutter",
    "best flutter app",
    "flutter mobile app development services",
    "best flutter app development company",
    "flutter app development services in Florida",
    "flutter app development company in Florida",
    "flutter app development consulting Florida",
    "flutter app development services in USA",
    "flutter app development company in USA",
    "flutter app development consulting USA"
  ],
  "Service"
);

export default function FlutterAppDevelopment() {
  const structuredData = getStructuredData(
    "Flutter App Development Company in Florida | Conquerors Tech",
    "Conquerors Technologies is a leading Flutter app development company in Florida offering cross-platform Flutter development, mobile app development, and expert Flutter developers. Get high-quality Flutter apps built with latest technologies.",
    "/flutter-app-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <FlutterAppDevelopmentClient />
    </>
  );
}
