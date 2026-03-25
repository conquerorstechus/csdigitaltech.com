import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import DataScienceServicesClient from "./DataScienceServicesClient";

export const metadata = getComprehensiveMetadata(
  "Data Science services in Florida",
  "Get advanced data science solutions in Florida with Conquerors Technologies. We turn your data into actionable insights, predictive models, and business growth.",
  "/data-science-services-florida",
  "/WebDevlopment/one-min-1.jpg",
  [
    "Affordable data science company Florida",
    "Best data science company in Florida",
    "Best data science consulting firms",
    "Data analytics in management",
    "Data science and advanced analytics",
    "Data science and software development",
    "Data science company in Florida",
    "Data science consultancies",
    "Data science consultancy services",
    "Data science consulting",
    "Data science consulting companies",
    "Data science consulting firms",
    "Data science consulting Florida",
    "Data science consulting services",
    "Data science development services",
    "Data science engineering services",
    "Data science firms",
    "Data science in financial services",
    "Data science management consulting",
    "Data science marketing agency",
    "Data science service providers",
    "Data science services",
    "Data science services companies",
    "Data science services in Florida",
    "Data science software development",
    "Data science solutions Florida",
    "Enterprise data science solutions Florida",
    "Local data science consulting Florida",
    "Top data science services Florida"
  ],
  "Service"
);

export default function DataScienceServices() {
  const structuredData = getStructuredData(
    "Data Science services in Florida | Conquerors Tech",
    "Get advanced data science solutions in Florida with Conquerors Technologies. We turn your data into actionable insights, predictive models, and business growth.",
    "/data-science-services-florida",
    "Service"
  );

  return (
    <>
      <StructuredData data={structuredData} />
      <DataScienceServicesClient />
    </>
  );
}
