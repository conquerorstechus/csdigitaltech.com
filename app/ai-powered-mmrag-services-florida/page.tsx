import { getComprehensiveMetadata, getAIPoweredMMRAGServicesFloridaSchema, getAIPoweredMMRAGServicesFloridaFAQSchema } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import MmragServicesClient from "./MmragServicesClient";

export const metadata = getComprehensiveMetadata(
  "AI-Powered MMRAG Services Florida",
  "Unlock smarter business insights with ConvenantSoft Technologies' AI-powered Multimodal Retrieval-Augmented Generation (MMRAG) services in Florida. Context-rich AI for improved engagement.",
  "/ai-powered-mmrag-services-florida",
  "/WebDevlopment/6_1.jpg",
  [
    "MMRAG services Florida",
    "Multimodal RAG Florida",
    "AI-powered MMRAG",
    "Retrieval-Augmented Generation Florida",
    "AI chatbot development Florida",
    "Multimodal AI services",
    "AI knowledge platform Florida",
    "Enterprise AI solutions Florida",
    "AI virtual assistant Florida",
    "Multimodal AI chatbot",
    "AI document analysis Florida",
    "AI-powered knowledge hub",
    "MMRAG development company",
    "AI services Miami",
    "AI services Tampa",
    "AI services Orlando",
    "Healthcare AI solutions Florida",
    "Legal AI solutions Florida",
    "E-commerce AI Florida",
    "Education AI Florida",
    "AI machine learning Florida",
    "Custom AI development Florida",
    "Enterprise AI platform",
    "Multimodal retrieval Florida",
    "AI text image video processing",
    "AI customer support Florida",
    "Intelligent chatbot Florida",
    "AI training platform Florida",
    "MMRAG implementation",
    "AI integration services Florida",
    "ConvenantSoft MMRAG services"
  ],
  "Service"
);

export default function MmragServicesPage() {
  const structuredData = getAIPoweredMMRAGServicesFloridaSchema();
  const faqSchema = getAIPoweredMMRAGServicesFloridaFAQSchema();

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <MmragServicesClient />
    </>
  );
}

