import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import AndroidAppDevelopmentClient from "./AndroidAppDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Android App Development Company in Florida",
  "ConvenantSoft Technologies is a leading Android app development company in Florida offering native Android application development, custom mobile app solutions, and expert Android developers. Get high-performance Android apps built with latest technologies.",
  "/android-app-development-florida",
  "/WebDevlopment/androidappright.png",
  [
    "mobile app development",
    "mobile app development company",
    "mobile app development company in florida",
    "mobile application development",
    "custom mobile app development",
    "custom mobile app development in florida",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter app development",
    "mobile app development services",
    "mobile developers",
    "mobile app development agency",
    "mobile app development company USA",
    "mobile app development services Florida",
    "mobile application development company",
    "mobile app development solutions",
    "mobile app development experts",
    "mobile app development Florida",
    "mobile app development agency USA",
    "custom mobile application development",
    "mobile app development services in usa",
    "top app development companies in usa",
    "app development companies in usa",
    "app development services usa",
    "mobile app development company in usa",
    "top mobile app development companies in usa",
    "mobile app development usa",
    "app development agency usa",
    "android app development company in usa",
    "mobile app development services usa",
    "mobile application development company in usa",
    "top mobile app development companies usa",
    "mobile application development in usa",
    "mobile app development united states",
    "mobile app development agency usa",
    "application development company in usa",
    "mobile application development services in usa",
    "mobile app development agency in usa",
    "mobile app development company united states",
    "application development services usa",
    "top mobile app development companies in us"
  ],
  "Service"
);

export default function AndroidAppDevelopment() {
  const structuredData = getStructuredData(
    "Android App Development Company in Florida | ConvenantSoft Tech",
    "ConvenantSoft Technologies is a leading Android app development company in Florida offering native Android application development, custom mobile app solutions, and expert Android developers. Get high-performance Android apps built with latest technologies.",
    "/android-app-development-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <AndroidAppDevelopmentClient />
    </>
  );
}
