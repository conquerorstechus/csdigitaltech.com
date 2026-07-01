import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import DigitalStrategyServicesClient from "./DigitalStrategyServicesClient";

export const metadata = getComprehensiveMetadata(
  "Digital Strategy Services in Florida",
  "Achieve digital success with Cornerstone Digital Technologies in Florida. We design smart, customized digital strategies that strengthen brand visibility and deliver real business impact.",
  "/digital-strategy-services-florida",
  "/WebDevlopment/two-min.jpg",
  [
    "Affordable digital strategy services Florida",
    "Affordable digital strategy services USA",
    "Best digital strategy company in Florida",
    "Best digital strategy company USA",
    "Digital business strategy services",
    "Digital growth strategy services",
    "Digital innovation strategy consulting",
    "Digital marketing and strategy services USA",
    "Digital marketing strategy services",
    "Digital strategy consulting",
    "Digital strategy consulting Florida",
    "Digital strategy consulting USA",
    "Digital strategy services",
    "Digital strategy services in Florida",
    "Digital strategy services USA",
    "Digital strategy solutions provider USA",
    "Digital transformation consulting Florida",
    "Digital transformation strategy services",
    "End-to-end digital strategy services",
    "Enterprise digital strategy consulting USA",
    "Enterprise digital strategy solutions",
    "Enterprise digital strategy solutions Florida",
    "Florida digital strategy experts",
    "Florida-based digital strategy company",
    "Leading digital strategy firms USA",
    "Online business strategy services USA",
    "Online digital strategy services Florida",
    "Online strategy consulting services",
    "Top digital strategy services Florida",
    "Top digital strategy services in USA"
  ],
  "Service"
);

export default function DigitalStrategyServices() {
  const structuredData = getStructuredData(
    "Digital Strategy Services in Florida | Cornerstone Digital Technologies Tech",
    "Cornerstone Digital Technologies is a leading digital strategy services company in Florida offering digital transformation consulting, digital business strategy, and digital innovation strategy. Get comprehensive digital strategy solutions for your business.",
    "/digital-strategy-services-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <DigitalStrategyServicesClient />
    </>
  );
}
