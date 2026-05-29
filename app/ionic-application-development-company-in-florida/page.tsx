import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import IonicApplicationDevelopmentClient from "./IonicApplicationDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Ionic Application Development Company in Florida",
  "ConvenantSoft Technologies is a leading Ionic application development company in Florida offering custom Ionic development, cross-platform mobile apps, and expert Ionic developers. Get high-quality Ionic apps built with web technologies.",
  "/ionic-application-development-company-in-florida",
  "/WebDevlopment/ionicrightimage.png",
  [
    "Affordable Ionic app development services",
    "Best Ionic app development company",
    "Capacitor app development",
    "Dedicated Ionic web developer",
    "Enterprise Ionic app development company",
    "Hire Ionic Developer",
    "Hire Ionic developers for mobile apps",
    "Ionic android app development",
    "Ionic android development",
    "Ionic app builder",
    "Ionic app development",
    "Ionic app development companies",
    "Ionic app development company",
    "Ionic app development services",
    "Ionic application development company",
    "Ionic application development company in Florida",
    "Ionic application development company in USA",
    "Ionic application development consulting Florida",
    "Ionic application development consulting USA",
    "Ionic application development services in Florida",
    "Ionic application development services in USA",
    "Ionic cross platform development",
    "Ionic cross platform mobile app development",
    "Ionic development",
    "Ionic development company",
    "Ionic development services",
    "Ionic for app development",
    "Ionic for mobile app development",
    "Ionic framework developer",
    "Ionic hybrid mobile app development",
    "Ionic mobile app builder",
    "Ionic mobile app developer",
    "Ionic mobile app development",
    "Ionic mobile app development company",
    "Ionic mobile app development services",
    "Ionic mobile development",
    "Ionic software development",
    "Ionic web development",
    "Top Ionic application development services"
  ],
  "Service"
);

export default function IonicApplicationDevelopment() {
  const structuredData = getStructuredData(
    "Ionic Application Development Company in Florida | ConvenantSoft Tech",
    "ConvenantSoft Technologies is a leading Ionic application development company in Florida offering custom Ionic development, cross-platform mobile apps, and expert Ionic developers. Get high-quality Ionic apps built with web technologies.",
    "/ionic-application-development-company-in-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <IonicApplicationDevelopmentClient />
    </>
  );
}
