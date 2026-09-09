import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import IOSAppDevelopmentClient from "./IOSAppDevelopmentClient";

export const metadata = getComprehensiveMetadata(
  "Ios App Development Services in Florida | Cornerstone Digital Technologies Tech",
  "Cornerstone Digital Technologies is a leading iOS app development company in Florida offering custom iPhone app development, native iOS development, and expert iOS developers. Get high-performance iOS apps built with Swift and Objective-C.",
  "/ios-app-development-florida",
  "/WebDevlopment/IOsappright.png",
  [
    "apple app development",
    "apple app development company",
    "apple application development",
    "apple developer services",
    "apple ios app development",
    "apple ios development",
    "apple mobile app development",
    "best ios app developers",
    "best ios app development services",
    "best ios apps for developers in Florida",
    "best iphone development company",
    "custom ios app development",
    "custom ios app development services in Florida",
    "custom ios application development",
    "custom ios development",
    "custom ios mobile app design and development",
    "custom iphone app development",
    "custom iphone app development services",
    "custom iphone application development",
    "custom iphone application development services",
    "ios app development service company",
    "ios app development services",
    "ios app development solutions",
    "ios application services in Florida",
    "ios development agency",
    "ios development company in Florida",
    "ios development platform",
    "ios development services",
    "ios mobile application development",
    "ios mobile application development services",
    "ios native app development",
    "iphone app design company",
    "iphone app development",
    "iphone app development services",
    "iphone application developers",
    "iphone application development agencies",
    "iphone application development companies",
    "iphone application development service",
    "iphone development agency",
    "iphone development firm",
    "iphone development service",
    "iphone development service in Florida",
    "iphone mobile app development",
    "iphone mobile app development services",
    "iphone mobile application developer",
    "iphone mobile application development",
    "iphone mobile application development company in Florida",
    "iphone native app development",
    "native iphone app development in Florida",
    "top iphone application development company in Florida"
  ],
  "Service"
);

export default function IOSAppDevelopment() {
  const structuredData = getStructuredData(
    "Ios App Development Services in Florida",
    "Cornerstone Digital Technologies is a leading iOS app development company in Florida offering custom iPhone app development, native iOS development, and expert iOS developers. Get high-performance iOS apps built with Swift and Objective-C.",
    "/ios-app-development-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <IOSAppDevelopmentClient />
    </>
  );
}
