import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import ContactUsClient from './ContactUsClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "Contact Us - Software Company Florida",
  "Get in touch with Conquerors Technologies - leading software development company in Florida. Contact us for custom software development, mobile apps, web development, and IT consulting services. Offices in Florida, New York, and Florida.",
  "/contact-us",
  "/bg-pheader.jpg",
  [
    "contact conquerors technologies",
    "software development company contact",
    "custom software development contact",
    "mobile app development contact",
    "web development services contact",
    "it consulting services contact",
    "Florida software company contact",
    "conquerors technologies contact",
    "software development company Florida contact",
    "custom application development contact",
    "digital solutions contact",
    "technology consulting contact",
    "enterprise software development contact",
    "full stack development contact",
    "cloud solutions contact",
    "software development services contact",
    "it services company contact",
    "technology solutions contact",
    "software development consultation",
    "digital transformation contact"
  ],
  "Organization"
);

export default function ContactUs() {
  const structuredData = getStructuredData(
    "Contact Us - Software Development Company Florida",
    "Get in touch with Conquerors Technologies - leading software development company in Florida. Contact us for custom software development, mobile apps, web development, and IT consulting services. Located in Tampa, Florida.",
    "/contact-us",
    "LocalBusiness"
  );

  return (
    <div>
      <StructuredData data={structuredData} />
      <ContactUsClient />
    </div>
  );
}
