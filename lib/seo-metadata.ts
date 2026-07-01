// lib/seo-metadata.ts
import type { Metadata } from "next";

export function getMetadata(
  pageTitle: string,
  pageDescription: string,
  pagePath: string,
  imagePath: string = "/images/default-banner.jpg",
  keywords: string[] = []
): Metadata {
  // Use environment variable for domain or fallback to localhost for development
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  const fullUrl = `${domain}${pagePath}`;
  const fullImage = `${domain}${imagePath}`;

  // Convert keywords array to string if it's an array, or use as is if it's already a string
  const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return {
    title: `${pageTitle} | ConvenantSoft Technologies`,
    description: pageDescription,
    keywords: keywordsString,
    metadataBase: new URL(domain),
    openGraph: {
      title: `${pageTitle} | ConvenantSoft Technologies`,
      description: pageDescription,
      url: fullUrl,
      siteName: "ConvenantSoft Technologies",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ConvenantSoft Technologies`,
      description: pageDescription,
      images: [fullImage],
      site: "@ConquerorsTech",
      creator: "@ConquerorsTech",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
    alternates: {
      canonical: fullUrl,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    category: "technology",
    classification: "Software Development Company",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "ConvenantSoft Technologies" }],
    creator: "ConvenantSoft Technologies",
    publisher: "ConvenantSoft Technologies",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

// Function to generate structured data (JSON-LD) for better SEO
export function getStructuredData(
  pageTitle: string,
  pageDescription: string,
  pagePath: string,
  pageType: "Organization" | "WebPage" | "Service" | "Article" | "SoftwareApplication" | "LocalBusiness" | "FAQPage" | "BreadcrumbList" = "WebPage",
  additionalData?: any
) {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  const fullUrl = `${domain}${pagePath}`;

  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": pageType,
    "name": `${pageTitle} | ConvenantSoft Technologies`,
    "description": pageDescription,
    "url": fullUrl,
    "publisher": {
      "@type": "Organization",
      "name": "ConvenantSoft Technologies",
      "url": domain,
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/cornerstone-logo.png`,
        "width": 1024,
        "height": 341
      },
      "sameAs": [
        "https://www.linkedin.com/company/conquerorssoftwaretechnologies",
        "https://x.com/ConquerorsTech",
        "https://www.facebook.com/ConquerorsSoftwareTechnologiesPvtLimited/",
        "https://www.instagram.com/conquerorstechnologies/",
        "https://www.pinterest.com/conquerorstech/"
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  };

  if (pageType === "Organization") {
    return {
      ...baseStructuredData,
      "@type": "Organization",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19046 Bruce B. Downs Blvd. #1376",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33647",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-813-563-0060",
        "contactType": "customer service",
        "email": "info@conquerorstech.com",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      "foundingDate": "2009",
      "numberOfEmployees": "50-100",
      "serviceArea": {
        "@type": "Country",
        "name": "Worldwide"
      }
    };
  }

  if (pageType === "Service") {
    return {
      ...baseStructuredData,
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "ConvenantSoft Technologies",
        "url": domain
      },
      "serviceType": "Software Development",
      "areaServed": {
        "@type": "Country",
        "name": "USA"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          }
        ]
      }
    };
  }

  if (pageType === "Article") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle,
      "description": pageDescription,
      "url": fullUrl,
      "datePublished": additionalData?.datePublished || new Date().toISOString(),
      "dateModified": additionalData?.dateModified || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": additionalData?.author || "ConvenantSoft Technologies",
        "url": domain
      },
      "publisher": baseStructuredData.publisher,
      "image": additionalData?.image || `${domain}/technology.jpg`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      },
      "keywords": additionalData?.keywords || [],
      "articleSection": additionalData?.category || "Technology",
      "wordCount": additionalData?.wordCount || 1000
    };
  }

  if (pageType === "SoftwareApplication") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": pageTitle,
      "description": pageDescription,
      "url": fullUrl,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": additionalData?.operatingSystem || "Web, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": baseStructuredData.publisher,
      "image": additionalData?.image || `${domain}/technology.jpg`,
      "screenshot": additionalData?.screenshots || [],
      "featureList": additionalData?.features || []
    };
  }

  if (pageType === "LocalBusiness") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ConvenantSoft Technologies",
      "description": pageDescription,
      "url": domain,
      "telephone": "+1-813-563-0060",
      "email": "info@conquerorstech.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19046 Bruce B. Downs Blvd. #1376",
        "addressLocality": "Tampa",
        "addressRegion": "FL",
        "postalCode": "33647",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.0836",
        "longitude": "-82.4191"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": baseStructuredData.publisher.sameAs,
      "priceRange": "$$"
    };
  }

  if (pageType === "FAQPage") {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": additionalData?.faqs || []
    };
  }

  if (pageType === "BreadcrumbList") {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": additionalData?.breadcrumbs || []
    };
  }

  return baseStructuredData;
}

// Schema for Software Development Services in Florida
export function getSoftwareDevelopmentServicesFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/software-development-in-florida#service`,
        "name": "Software Development Services in Florida",
        "url": `${domain}/services/software-development-in-florida`,
        "description": "AI-powered custom software development services in Florida, including intelligent web and mobile app development, enterprise applications, UI/UX design, integrations, and full lifecycle support.",
        "serviceType": [
          "Custom Software Development",
          "AI-Powered Web Application Development",
          "AI-Enhanced Mobile App Development",
          "Enterprise Software Development",
          "Full Stack Development",
          "UI/UX Design",
          "Cloud-Native Application Development",
          "API Integration and Automation"
        ],
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Florida"
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI-Powered Software Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Powered Enterprise & Custom Software",
                "description": "Custom AI-enabled enterprise and business applications with scalable, secure architectures and workflow automation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Next-Gen AI Mobile Applications",
                "description": "Native and hybrid mobile apps for iOS and Android with AI personalization, chatbots, and predictive engagement."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Driven Web Design & Development",
                "description": "AI-assisted UI/UX, responsive web design and custom web platforms built with modern front-end and back-end stacks."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "End-to-End App Development Lifecycle",
                "description": "Complete application lifecycle services including UX, development, QA/testing, DevOps, AI model enhancements, and maintenance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design & Prototyping",
                "description": "Wireframing, interactive prototypes, and user-centric UI/UX design for web and mobile applications."
              }
            }
          ]
        },
        "termsOfService": `${domain}/privacy-policy/`,
        "category": "SoftwareDevelopment",
        "isSimilarTo": [
          "Custom software development company in Florida",
          "AI-powered software development services in Florida"
        ]
      }
    ]
  };
}

// Schema for AI & IT Consulting Services in Florida
export function getAITConsultingServicesFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/it-consulting-in-Florida#service`,
        "name": "AI & IT Consulting Services in Florida",
        "url": `${domain}/services/it-consulting-in-Florida`,
        "description": "AI & IT consulting services in Florida helping businesses integrate AI into enterprise systems, build custom LLMs, modernize legacy applications, implement automation, and optimize IT operations.",
        "serviceType": [
          "AI & IT Consulting",
          "RAG (Retrieval-Augmented Generation) Consulting",
          "Custom LLM Development",
          "AI-Assisted Product Testing",
          "Intelligent Automation Consulting",
          "ERP & CRM Consulting (Salesforce, SAP, NetSuite)",
          "Data Science & Analytics Consulting",
          "Performance Engineering",
          "Marketing Automation Consulting",
          "QA & Testing Consulting"
        ],
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Florida"
          },
          {
            "@type": "City",
            "name": "Tampa"
          },
          {
            "@type": "City",
            "name": "Miami"
          },
          {
            "@type": "City",
            "name": "Orlando"
          },
          {
            "@type": "City",
            "name": "Jacksonville"
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI & IT Consulting Service Offerings",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "RAG (Data to LLMs)",
                "description": "Design and implementation of secure retrieval-augmented generation (RAG) pipelines that connect enterprise data to Large Language Models for smarter search, insights, and decision-making."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom LLMs for Enterprises",
                "description": "Development and fine-tuning of custom Large Language Models aligned with enterprise workflows, compliance requirements, and customer engagement strategies."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Assisted Product Testing",
                "description": "AI-driven automated testing services to reduce defects, improve reliability, and accelerate software release cycles."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Intelligent Automation",
                "description": "AI-powered workflow automation, chatbots, and process optimization across finance, HR, operations, and customer support."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERP Consulting (Salesforce, SAP, NetSuite)",
                "description": "Functional and technical consulting for ERP/CRM platforms including design, implementation, migration, integration, and 24/7 support."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Science & Analytics",
                "description": "Business intelligence, dashboards, and analytics solutions using Power BI, Tableau, Zoho Analytics, and AI-powered reporting."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Engineering",
                "description": "Performance monitoring, optimization, and scalability consulting for critical web and enterprise applications."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing Automation Consulting",
                "description": "Consulting on AI-enabled lead scoring, campaign automation, CRM integrations, and digital marketing tools to improve sales performance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "QA & Testing Services",
                "description": "End-to-end testing strategy, AI-assisted QA, and performance audits to ensure secure, reliable, and future-ready applications."
              }
            }
          ]
        },
        "termsOfService": `${domain}/privacy-policy/`,
        "category": "ITConsulting",
        "isSimilarTo": [
          "AI & IT consulting company in Florida",
          "Enterprise IT consulting services in Florida"
        ]
      }
    ]
  };
}

// Schema for AI & ML Services in Florida
export function getAIMLServicesFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/ai-ml-services-in-Florida/#service`,
        "name": "AI & Machine Learning Services in Florida",
        "serviceType": "AI Development, Machine Learning, Predictive Analytics, NLP, Automation",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "providerMobility": "dynamic",
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies delivers end-to-end AI & ML services in Florida—AI strategy development, data engineering, predictive analytics, custom model building, NLP solutions, automation systems, and enterprise AI implementation.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI & ML Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Machine Learning Model Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Predictive Analytics Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Natural Language Processing (NLP)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Automation & Workflow Optimization"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for AI-Driven Custom LLMs for Enterprises in Florida
export function getCustomLLMsFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/custom-llms-in-Florida/#service`,
        "name": "Custom LLM Development Services in Florida",
        "serviceType": "Custom Large Language Models, Fine-Tuning, AI Model Training, Enterprise LLM Integration",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies provides complete custom LLM development services in Florida—enterprise training, domain-specific model creation, LLM fine-tuning, RAG implementation, vector database integration, AI chatbot building, and end-to-end LLM deployment for businesses.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Custom LLM Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom LLM Development & Training"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "LLM Fine-Tuning for Business Applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "RAG (Retrieval-Augmented Generation) Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Chatbot Development Using LLMs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise LLM Integration & Deployment"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for AI-Powered Learning Solutions in Florida, USA
export function getAILearningSolutionsFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/ai-learning-in-Florida/#service`,
        "name": "AI Learning Solutions in Florida",
        "serviceType": "AI Learning, Machine Learning Training, Corporate AI Training, AI Education Programs",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies offers professional AI learning services in Florida, including personalized AI learning programs, machine learning courses, hands-on AI workshops, corporate AI training, and AI upskilling solutions for businesses, institutions, and individuals.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Learning Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & Machine Learning Courses"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate AI Training Workshops"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customized AI Learning Programs"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Upskilling for Professionals"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Education for Enterprises & Teams"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for AI-Powered MMRAG Services in Florida
export function getAIPoweredMMRAGServicesFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/ai-powered-mmrag-services-florida/#service`,
        "name": "AI-Powered MMRAG Services in Florida",
        "serviceType": "Multimodal RAG, AI-Powered Retrieval-Augmented Generation, Multimodal AI Processing, Enterprise AI Integration",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies delivers cutting-edge AI-powered MMRAG (Multimodal Retrieval-Augmented Generation) services in Florida, enabling enterprises to process and retrieve information from text, images, audio, video, and structured data. Services include custom MMRAG development, multimodal AI pipelines, vector database integration, and AI automation solutions.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI-Powered MMRAG Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multimodal RAG (MMRAG) Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Retrieval-Augmented Generation (RAG) Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vector Database Integration for MMRAG"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multimodal AI Processing (Text, Image, Audio, Video)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "MMRAG Deployment & Enterprise Integration"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Data Analytics & BI in Florida
export function getDataAnalyticsBIFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/data-analytics-bi-in-Florida/#service`,
        "name": "Data Analytics & Business Intelligence Services in Florida",
        "serviceType": "Data Analytics, Business Intelligence, Data Visualization, Predictive Analytics, Data Warehousing",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies delivers end-to-end Data Analytics and BI solutions in Florida, offering predictive analytics, business dashboards, ETL pipelines, data warehousing, KPI reporting, cloud-based BI, and enterprise data modernization services.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Data Analytics & BI Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Intelligence (BI) Dashboard Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Warehousing & ETL Engineering"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Predictive Analytics & Forecasting Models"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Visualization & Reporting Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise BI Transformation & Cloud BI"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for AI-Driven Data Science & Analytics Services
export function getDataScienceServicesSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/data-science/#service`,
        "name": "Data Science Services",
        "serviceType": "Data Science, Machine Learning, Predictive Analytics, Big Data, AI Modeling, Data Engineering",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "description": "ConvenantSoft Technologies helps businesses leverage data science to drive insights and innovation, offering predictive modeling, ML development, statistical analysis, data automation, big data pipelines, and enterprise data science consulting.",
        "areaServed": {
          "@type": "Place",
          "name": "USA"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Data Science Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Machine Learning Model Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Predictive Analytics & Forecasting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Big Data Engineering & Pipelines"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Data Mining & Statistical Analysis"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Model Optimization & Deployment"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Digital & Cloud Solutions in Florida
export function getDigitalCloudSolutionsFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/digital-cloud-solutions-in-Florida/#service`,
        "name": "Digital Cloud Solutions in Florida",
        "serviceType": "Cloud Migration, Cloud Modernization, Cloud Consulting, Cloud-Native Development, DevOps, Managed Cloud Services",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies offers complete digital cloud solutions in Florida including cloud infrastructure setup, cloud strategy consulting, multi-cloud deployment, DevOps automation, cloud-native application development, and 24/7 managed cloud operations.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Cloud Solutions Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Migration & Modernization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud-Native Application Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DevOps & Cloud Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Multi-Cloud Deployment (AWS, Azure, GCP)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Managed Cloud Services"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Cloud Services in Florida
export function getCloudServicesFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/cloud-services-in-Florida/#service`,
        "name": "Cloud Services in Florida",
        "serviceType": "Cloud Consulting, Cloud Migration, Cloud Security, DevOps Services, Cloud Infrastructure Setup, Managed Cloud Services",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies provides complete cloud services in Florida including cloud consulting, migration, cloud security implementation, multi-cloud deployment, cloud-native development, and 24/7 managed cloud support for businesses seeking scalability and security.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cloud Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Consulting & Strategy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Migration (AWS, Azure, GCP)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Security & Compliance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DevOps & CI/CD Automation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cloud Infrastructure Setup & Optimization"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Managed Cloud Services"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Software Testing Services in Florida
export function getTestingServicesFloridaSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/testing-services-in-Florida/#service`,
        "name": "Software Testing Services in Florida",
        "serviceType": "Manual Testing, Automation Testing, Security Testing, Performance Testing, Mobile App Testing, QA Consulting",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "Florida, USA"
        },
        "description": "ConvenantSoft Technologies offers comprehensive testing services in Florida, including end-to-end QA solutions, functional testing, test automation, API testing, performance engineering, mobile testing, security audits, and enterprise QA consulting.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Software Testing Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Manual Testing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Automation Testing (Selenium, Cypress, Playwright)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Testing (Load, Stress, Scalability)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Security & Penetration Testing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mobile App Testing (iOS & Android)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "QA Consulting & Test Strategy Development"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Branding Agency Services
export function getBrandingAgencyServicesSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/services/branding-agency/#service`,
        "name": "Branding Agency Services",
        "serviceType": "Brand Strategy, Logo Design, Brand Identity, Digital Branding, Rebranding",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "USA"
        },
        "description": "ConvenantSoft Technologies delivers complete branding solutions, including brand strategy, logo design, corporate identity development, visual communication, rebranding, digital brand presence, and brand storytelling services tailored for modern businesses.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Branding Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Brand Strategy & Positioning"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Logo Design & Brand Identity"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Branding Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rebranding & Brand Refresh"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Branding & Visual Communication"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Mobile App Development Services
export function getMobileAppDevelopmentServicesSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/mobile-app-development/#service`,
        "name": "Mobile App Development Services",
        "serviceType": "Android App Development, iOS App Development, Hybrid App Development, Cross-Platform Mobile App Development",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "areaServed": {
          "@type": "Place",
          "name": "USA, India, Global"
        },
        "description": "ConvenantSoft Technologies delivers end-to-end mobile app development services including native Android & iOS apps, hybrid app development, cross-platform apps, UI/UX design, app integration, and scalable enterprise app solutions.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mobile Application Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Android App Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "iOS App Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Hybrid Mobile App Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cross-Platform App Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design for Mobile Apps"
              }
            }
          ]
        }
      }
    ]
  };
}

// Schema for Custom Web Application Development Services
export function getWebDevelopmentServicesSchema() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://conquerorstech.com";
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${domain}/web-development/#service`,
        "name": "Custom Web Application Development Services",
        "serviceType": "Web Development, CMS Development, Full-Stack Web Development, eCommerce Development, Website Design",
        "provider": {
          "@id": `${domain}/#organization`
        },
        "providerMobility": "dynamic",
        "areaServed": [
          {
            "@type": "Country",
            "name": "USA"
          },
          {
            "@type": "Place",
            "name": "Florida, USA"
          }
        ],
        "description": "ConvenantSoft Technologies delivers high-performance custom web application development services, specializing in enterprise-grade applications, CMS-based websites, progressive web apps, full-stack development, and secure, scalable web solutions tailored to business requirements.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Web App Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Stack Web Development (React, Angular, Node, PHP)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CMS Development (WordPress, Drupal, Joomla)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "eCommerce Development (Magento, WooCommerce, Shopify)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Responsive Website Design & UX/UI"
              }
            }
          ]
        }
      }
    ]
  };
}

// FAQ Schema for Software Development Services in Florida
export function getSoftwareDevelopmentServicesFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of software development services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Being the best custom software development company in the US, we provide AI-powered web applications, mobile apps, enterprise software, UI/UX design, database systems, integrations, and full lifecycle support."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop both mobile and web applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We deliver intelligent web and mobile solutions for iOS, Android, and cross-platform environments in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Which technologies does your team specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our expertise spans React, Angular, Node.js, .NET, Java, Python, Flutter, AI/ML frameworks, and cloud-native platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle full-stack development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer AI-augmented full-stack development across frontend, backend, databases, APIs, and cloud-native environments."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build enterprise-grade software solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We design scalable, secure, and compliant enterprise software for regulated industries, including healthcare, finance, retail, and manufacturing."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI enhance your UI/UX design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI enables adaptive, data-driven interfaces, providing personalized, intuitive, and engaging user experiences across web and mobile applications."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile app development for both Android and iOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build native, hybrid, and AI-enhanced apps with voice interactions, smart notifications, and predictive personalization in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "What development methodology do you follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow Agile and DevOps practices, embedding AI into CI/CD pipelines to accelerate delivery while ensuring security and reliability."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure software quality and reliability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through AI-powered testing, including functional, regression, performance, and automated testing, we aim to minimize errors and enhance stability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide maintenance and post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our AI-assisted monitoring, predictive maintenance, and lifecycle support ensure applications remain secure, optimized, and future-ready."
        }
      },
      {
        "@type": "Question",
        "name": "Can you assist with third-party integrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We integrate AI-powered APIs, ERP, CRM, cloud services, and legacy systems for seamless interoperability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support low-code development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our AI-assisted low-code solutions accelerate delivery, reduce costs, and empower rapid innovation for business applications."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure data security and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement AI-enabled DevSecOps, encryption, and compliance frameworks such as GDPR, HIPAA, and SOC2 for end-to-end protection."
        }
      },
      {
        "@type": "Question",
        "name": "Can you modernize legacy applications with AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We migrate and replatform legacy systems to AI-powered, cloud-native architectures for enhanced performance and scalability in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with your AI-powered development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us for a consultation. We assess your needs and provide a custom roadmap to deliver intelligent, scalable software solutions in Florida and across other regions in the USA."
        }
      }
    ]
  };
}

// FAQ Schema for AI & IT Consulting Services in Florida
export function getAITConsultingServicesFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does your AI & IT consulting service cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From AI strategy, ERP support, automation, data analytics, and cloud adoption to custom LLM development and AI integrations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide consulting for businesses in Florida specifically?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We serve clients across Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help us implement RAG pipelines for our enterprise data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We design secure RAG frameworks to connect enterprise data with LLMs for smarter insights."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build custom LLMs for enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We fine-tune LLMs for industry-specific needs, compliance requirements, and business processes."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI improve software testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With AI-powered automation, we help detect bugs earlier, reduce human error, and achieve zero-defect software delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ERP and CRM consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our experts provide consulting and support for Salesforce, SAP, NetSuite, and more."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support offshore and onshore consulting models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer hybrid engagement models that balance cost efficiency with local presence."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you onboard consultants for my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can deploy skilled AI and IT consultants within days based on your project scope."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide proof-of-concept (POC) before full-scale AI adoption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We often build POCs and pilots to validate feasibility and ROI before scaling."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure security and compliance in AI solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow HIPAA, GDPR, SOC 2, and ISO standards, ensuring compliance for Florida businesses across industries in USA."
        }
      }
    ]
  };
}

// FAQ Schema for AI & ML Services in Florida
export function getAIMLServicesFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does AI & ML integration mean for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It means enhancing your existing systems—like ERP, CRM, websites, or mobile apps—by adding AI/ML capabilities such as automation, predictive analytics, and intelligent insights, without replacing what already works."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build AI models from scratch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our focus is on implementing and integrating proven AI/ML models into your workflows. We fine-tune, customise, and connect them to your systems so they deliver immediate business value."
        }
      },
      {
        "@type": "Question",
        "name": "What industries in Florida benefit most from AI integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare, retail, finance, real estate, education, and manufacturing see the biggest impact. We work with businesses across Miami, Orlando, Tampa, Jacksonville, and nearby regions."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI be integrated into legacy software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in modernising monolithic systems into microservices and embedding AI into existing enterprise software, making it smarter without starting over."
        }
      },
      {
        "@type": "Question",
        "name": "How long does AI integration take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines vary depending on the scope. A simple integration (like a chatbot or recommendation engine) may take a few weeks, while larger enterprise rollouts could take 3–6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Will integrating AI disrupt my current operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Our approach ensures seamless implementation, with minimal downtime and phased rollouts so your operations continue smoothly."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide local support in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While we operate globally, we provide dedicated support to Florida businesses, with flexible engagement models customized for your local operations."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of AI features can you integrate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI chatbots & conversational AI, Recommendation engines, Predictive analytics dashboards, Sentiment analysis & NLP, Image recognition & computer vision, and Workflow automation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate multilingual AI solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We implement multilingual NLP and conversational AI, helping Florida businesses serve diverse audiences and expand globally."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI integration secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We implement end-to-end encryption, secure APIs, access controls, and compliance measures (GDPR, HIPAA, SOC 2) to protect sensitive data."
        }
      },
      {
        "@type": "Question",
        "name": "What are some real-world use cases in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare: AI imaging & patient portals in Miami clinics, Retail: Smart checkout & inventory tracking for Tampa stores, Finance: Fraud detection systems for Orlando banks, Education: AI tutoring platforms for universities in Jacksonville."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer cloud-based AI integrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We work with AWS, Azure, and Google Cloud to integrate AI features into cloud-native systems that are scalable and cost-efficient."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure ROI from AI implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with proof-of-concept integrations, measure impact through KPIs (efficiency, conversion rates, cost savings), and scale once proven effective."
        }
      },
      {
        "@type": "Question",
        "name": "Can you provide ongoing support after integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer 24/7 monitoring, AI model retraining, system updates, and continuous optimisation to keep your solutions effective."
        }
      },
      {
        "@type": "Question",
        "name": "What makes ConvenantSoft different from other AI providers in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We don't just sell AI—we seamlessly integrate it into your existing systems. With 15+ years of expertise and a skilled team in AI/ML frameworks, we deliver future-ready, compliant, and cost-effective implementations for Florida businesses and across other regions in the USA."
        }
      }
    ]
  };
}

// FAQ Schema for AI-Driven Custom LLMs for Enterprises in Florida
export function getCustomLLMsFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What exactly do you offer in AI-Driven Custom LLM services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement and integrate Large Language Models (LLMs) into enterprise systems like CRMs, ERPs, customer portals, and cloud platforms. We don't build models from scratch—we adapt and incorporate trusted AI models to work for your business in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build LLMs from the ground up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We focus on integrating, fine-tuning, and deploying proven AI models (such as GPT, LLaMA, and Hugging Face) into your existing workflows, ensuring they are customized to your business and industry."
        }
      },
      {
        "@type": "Question",
        "name": "How can custom LLMs benefit my Florida-based business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They can automate customer support, simplify document handling, provide smarter search, and generate accurate insights—all of which save time, reduce costs, and improve customer experience."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries in Florida can benefit from your LLM services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve healthcare, finance, real estate, retail, legal, education, hospitality, and tourism industries, as well as startups and enterprise clients across Florida."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate LLMs with our existing software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in seamless integration with CRMs, ERPs, eCommerce platforms, and custom enterprise applications, without disrupting your existing operations."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement LLMs into my enterprise systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation time depends on complexity. Most projects take 4–8 weeks for deployment, with faster rollouts possible for smaller use cases."
        }
      },
      {
        "@type": "Question",
        "name": "Is data security maintained when using LLMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We implement secure APIs, encryption, access controls, and compliance checks to ensure your data stays safe and meets regulations such as HIPAA, GDPR, and SOC 2."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support after integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide post-deployment support, including monitoring, fine-tuning, retraining, and continuous optimisation, so the AI remains accurate and reliable."
        }
      },
      {
        "@type": "Question",
        "name": "Can LLMs handle multilingual support for Florida's diverse communities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can implement multilingual LLMs that communicate in English, Spanish, and other languages commonly used across Florida."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer on-premise as well as cloud deployments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Depending on your compliance and security needs, we can deploy LLMs on-premise, in the cloud, or in a hybrid environment."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to implement AI-driven LLMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs depend on the project's scope, integrations, and level of customisation. We offer flexible pricing models customized to your specific requirements following an initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose ConvenantSoft Software Technologies USA for LLM integration in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because we're not just AI consultants—we're a service delivery partner. We help businesses in Florida and across other regions in the USA implement AI quickly, securely, and effectively with local support, deep enterprise experience, and proven results."
        }
      }
    ]
  };
}

// FAQ Schema for AI-Powered Learning Solutions in Florida, USA
export function getAILearningSolutionsFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI-powered learning solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-powered learning solutions are platforms that use artificial intelligence, machine learning, and natural language processing to deliver personalized education, automate assessments, and enhance student engagement."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI improve education for schools and colleges in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI personalizes learning by identifying knowledge gaps, generating adaptive quizzes, and providing targeted recommendations. This helps students in Miami, Orlando, Tampa, Jacksonville, and beyond learn faster and retain knowledge longer."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI be integrated into our existing e-learning platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can integrate AI features like adaptive quizzes, chatbots, and personalized recommendations into your existing LMS, website, or mobile app—without disrupting your current system."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your AI solutions different from generic AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use fine-tuned Large Language Models (LLMs) trained on domain-specific educational datasets, ensuring higher accuracy, topical relevance, and context-aware learning compared to generic AI models."
        }
      },
      {
        "@type": "Question",
        "name": "Do your AI solutions support multiple subjects and grade levels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our platforms can be customized for K-12 schools, higher education, vocational training, and corporate learning, covering multiple subjects and complexity levels."
        }
      },
      {
        "@type": "Question",
        "name": "How do AI-powered quizzes work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our AI quiz engines use adaptive learning algorithms and natural language generation to create questions based on the student's progress. This ensures assessments are personalized, relevant, and effective."
        }
      },
      {
        "@type": "Question",
        "name": "Are your AI-powered solutions suitable for corporate training in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We help businesses and training providers in Florida implement AI-driven training platforms that personalize employee learning, automate compliance training, and track performance."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is student and institutional data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow strict data privacy and compliance standards (including FERPA, GDPR, and HIPAA, where applicable). All data is encrypted and securely managed in compliance with US educational regulations."
        }
      },
      {
        "@type": "Question",
        "name": "Can educators control and customize the AI-generated content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Educators always remain in control. They can approve, modify, or fine-tune AI-generated quizzes, study material, and recommendations to ensure alignment with the curriculum."
        }
      },
      {
        "@type": "Question",
        "name": "Do AI-powered learning solutions work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our solutions are built as mobile-friendly web apps or cross-platform mobile apps (iOS & Android), ensuring students and employees in Florida can access them anytime, anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can an institution deploy AI-powered learning tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deployment depends on the scope. A basic AI-powered quiz engine can be integrated in as little as 4–6 weeks, while a full custom AI learning platform may take 3–6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support and model updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide continuous monitoring, AI model retraining, system updates, and technical support, ensuring your learning platform stays up-to-date and effective."
        }
      },
      {
        "@type": "Question",
        "name": "What types of organizations in Florida use your AI learning solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve schools, universities, colleges, corporate trainers, skill development centers, and edtech startups across Florida and nearby regions."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI-powered learning improve student engagement and retention?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With personalized learning paths, adaptive quizzes, and AI tutors, students are more engaged, motivated, and likely to retain information long-term."
        }
      },
      {
        "@type": "Question",
        "name": "How do we get started with AI-powered learning solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply book a consultation with our team. We'll evaluate your needs, propose the right AI features, and help you implement a solution customized to your institution or business in Florida and across other regions in the USA."
        }
      }
    ]
  };
}

// FAQ Schema for AI-Powered MMRAG Services in Florida
export function getAIPoweredMMRAGServicesFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Multimodal Retrieval-Augmented Generation (MMRAG)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MMRAG is an advanced AI approach that combines multiple data sources—text, images, audio, video, and documents—to retrieve information and generate accurate, human-like responses. Unlike traditional AI, it delivers context-aware, multimodal insights."
        }
      },
      {
        "@type": "Question",
        "name": "How can MMRAG benefit my business in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It helps businesses improve customer service, automate support, and deliver smarter digital experiences by making your existing data (manuals, PDFs, images, training videos) accessible through AI-powered platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can MMRAG be integrated into my existing website or application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our team specialises in seamless AI integration with websites, mobile apps, CRMs, ERPs, and other enterprise platforms—so you don't need to start from scratch."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries in Florida can use MMRAG solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Almost every industry can benefit, including: Healthcare & Clinics – AI assistants for patient queries. Finance & Legal – Smarter document search and compliance support. Retail & E-Commerce – AI-powered product recommendations and visual search. Education & Training – Adaptive multimodal learning systems. Tourism & Real Estate – Intelligent property, booking, and service platforms."
        }
      },
      {
        "@type": "Question",
        "name": "What are the common applications of MMRAG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI chatbots & virtual assistants, Knowledge hubs for employees, Automated customer support, E-commerce recommendations, Legal/medical document analysis, Education & training platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide customised solutions for Florida businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We tailor every MMRAG solution to your industry, workflow, and data sources, ensuring maximum ROI and local market relevance."
        }
      },
      {
        "@type": "Question",
        "name": "How secure are your AI-powered solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow enterprise-grade security protocols including encryption, role-based access, and compliance with standards like HIPAA, GDPR, and SOC 2—critical for Florida's healthcare, finance, and legal sectors."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement an MMRAG solution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines depend on scope. A pilot or proof of concept can be delivered in 6–8 weeks, while full enterprise-grade deployments may take 3–6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Can MMRAG improve customer service for local businesses in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. AI-powered chatbots and assistants can handle customer queries around the clock, reducing wait times and improving satisfaction—ideal for industries like tourism, hospitality, retail, and healthcare."
        }
      },
      {
        "@type": "Question",
        "name": "Will my staff need training to use the system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. We design solutions with simple, user-friendly interfaces and also provide training sessions and documentation for your team."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for MMRAG services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with leading AI/ML frameworks such as TensorFlow, PyTorch, Hugging Face, OpenAI APIs, and cloud-native architectures on AWS, Azure, and Google Cloud."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support after deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide 24/7 monitoring, AI model updates, retraining, and technical support to keep your solution up-to-date and performing optimally."
        }
      },
      {
        "@type": "Question",
        "name": "Can MMRAG be used for multilingual support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our AI solutions can be trained for multilingual capabilities, ideal for Florida's diverse markets, including Spanish and Creole-speaking communities."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an AI-powered MMRAG solution cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs depend on complexity, data sources, and integrations. We offer flexible pricing models—from proof-of-concept to full enterprise rollout."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose ConvenantSoft Software Technologies USA for MMRAG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "15+ years of enterprise software expertise, AI-first approach with proven implementations, Local experience working with Florida businesses, Customised, secure, and scalable AI solutions, Dedicated support and flexible engagement models."
        }
      }
    ]
  };
}

// FAQ Schema for Data Analytics & BI in Florida
export function getDataAnalyticsBIFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-Driven Data Analytics & BI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-Driven Data Analytics & BI uses artificial intelligence and machine learning to transform raw business data into real-time, actionable insights. It goes beyond traditional BI by predicting trends, automating reports, and optimizing decisions."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI-powered analytics differ from traditional BI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional BI explains what happened. AI-powered analytics explains why it happened, what will happen next, and how to respond—making it far more proactive and valuable."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI analytics help my Florida-based business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Whether you're in healthcare in Miami, retail in Orlando, real estate in Tampa, or finance in Jacksonville, AI analytics helps you forecast demand, personalize experiences, and reduce risks."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a lot of data to benefit from AI analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Even smaller datasets can provide value when combined with AI models. As your business grows, the system adapts to process larger volumes of data."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with healthcare, finance, real estate, retail, manufacturing, education, hospitality, and tourism businesses across Florida and nearby regions."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI integrate with my existing ERP, CRM, or POS system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in data integration and can connect AI analytics with systems like SAP, Salesforce, HubSpot, Microsoft Dynamics, and other enterprise platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to implement AI-Driven Data Analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Implementation timelines vary. A basic AI dashboard may take 6–8 weeks, while a full predictive analytics system may take 3–4 months, depending on complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide real-time analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design AI/ML pipelines that process data in real time, enabling instant insights and automated alerts."
        }
      },
      {
        "@type": "Question",
        "name": "Will my team need training to use these AI dashboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our solutions are designed to be user-friendly, but we also provide training sessions, documentation, and ongoing support for your staff."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is my business data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adhere to strict data security practices, including encryption, role-based access controls, and compliance with the GDPR, HIPAA, and SOC 2—essential for Florida's healthcare and financial industries."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI analytics help with compliance and risk management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AI detects anomalies, flags compliance risks, and automates reporting—reducing manual effort and helping businesses avoid penalties."
        }
      },
      {
        "@type": "Question",
        "name": "What if my data is unstructured or spread across multiple systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No problem. We offer data cleansing, integration, and unification services to ensure you have a single, accurate source of truth before applying AI analytics."
        }
      },
      {
        "@type": "Question",
        "name": "How does predictive analytics improve decision-making?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Predictive analytics uses machine learning models to anticipate demand, customer behavior, and risks—allowing you to act before issues arise."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support after implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide continuous support, AI model retraining, dashboard updates, and monitoring services to ensure accuracy and performance over time."
        }
      },
      {
        "@type": "Question",
        "name": "How much does AI-Driven Data Analytics & BI cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs depend on project scope and complexity. We offer flexible engagement models—from one-time dashboard projects to enterprise-wide AI analytics solutions."
        }
      }
    ]
  };
}

// FAQ Schema for AI-Driven Data Science & Analytics Services
export function getDataScienceServicesFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI-Driven Data Science & Analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's the use of artificial intelligence and machine learning models to analyse business data, uncover patterns, and provide predictive insights that traditional analytics cannot."
        }
      },
      {
        "@type": "Question",
        "name": "How can AI-powered analytics benefit my Florida business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI helps you predict customer demand, automate forecasting, detect risks early, and make smarter business decisions—giving your business a competitive edge in fast-moving Florida markets."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with small and mid-sized businesses in Florida, or only large enterprises?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with businesses of all sizes across Florida and across other regions in the USA, from startups in Miami and Orlando to established enterprises in Tampa and Jacksonville."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI analytics into my existing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate AI into your current ERP, CRM, cloud, or legacy systems without disrupting daily operations."
        }
      },
      {
        "@type": "Question",
        "name": "What industries in Florida can benefit most from AI analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key industries include healthcare, finance, real estate, retail, tourism, hospitality, and education—all thriving in Florida."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I see results from AI-driven analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Early insights can often be seen in 4–6 weeks with a proof of concept, while full-scale solutions typically deliver measurable results in 3–6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI analytics secure and compliant with regulations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We follow strict data security and compliance frameworks (GDPR, HIPAA, SOC 2) and ensure sensitive business data remains protected."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide real-time analytics solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our AI solutions support real-time dashboards and live data processing, critical for industries like finance, healthcare, and e-commerce."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI help my retail or e-commerce business in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AI-powered analytics can predict demand, personalise shopping experiences, reduce churn, and optimise inventory—ideal for retail hubs like Miami and Tampa."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer customised dashboards for decision-makers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design AI-enabled BI dashboards that present insights in a simple, actionable format for executives, managers, and operational teams."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle data from different sources?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide data engineering and integration services, connecting multiple sources—databases, CRMs, IoT systems—into a unified AI-ready structure."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer ongoing support after implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide continuous monitoring, AI model retraining, and system optimisation so your analytics evolve with business needs."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your AI analytics services different from regular BI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike traditional BI tools that show past data, our AI-driven solutions predict future trends, identify risks, and recommend next best actions."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI help Florida businesses with risk management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AI identifies anomalies and predicts risks—helping industries like finance, insurance, and healthcare mitigate fraud, compliance issues, and operational threats."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with your AI-driven data science services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It starts with a consultation where we understand your goals, assess your data, and design a custom AI analytics roadmap customized to your business in Florida and across other regions in the USA."
        }
      }
    ]
  };
}

// FAQ Schema for Digital & Cloud Solutions in Florida
export function getDigitalCloudSolutionsFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's included in your Digital & Cloud Solutions service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide cloud migration, AI integrations, workflow automation, RPA, IoT, API-led integrations, and managed cloud services."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help us with digital transformation in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We guide businesses through AI-led digital transformation, ensuring secure cloud adoption and better customer engagement in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Which cloud platforms do you specialise in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with AWS, Microsoft Azure, and Google Cloud for migration, hosting, and application development."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI into our legacy systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in AI and cloud integrations for legacy platforms, modernising them without disrupting operations in Florida and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide managed cloud services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide 24/7 monitoring, cloud optimisation, and AI model updates to keep your systems future-ready."
        }
      },
      {
        "@type": "Question",
        "name": "How do AI-led API integrations benefit my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They allow systems to communicate seamlessly, improving efficiency and enabling intelligent workflows across departments."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare, finance, retail, education, real estate, hospitality, manufacturing, and startups."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer hybrid or multi-cloud strategy consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design hybrid and multi-cloud solutions to balance flexibility, performance, and cost."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical cloud migration project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on complexity, migrations take 8–16 weeks, while large-scale enterprise transformations may take longer."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose ConvenantSoft Software Technologies USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because we deliver AI-powered, future-ready solutions that don't just move you to the cloud but make your business smarter, faster, and more competitive wherever in Florida and across other regions in the USA."
        }
      }
    ]
  };
}

// FAQ Schema for Cloud Services in Florida
export function getCloudServicesFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What type of cloud support services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer end-to-end cloud support services, including 24/7 infrastructure monitoring, incident handling, performance tuning, backup and recovery, network and datacenter support, and security management across cloud and on-premise environments."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support multiple cloud platforms like AWS, Azure, and Google Cloud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our team has extensive expertise in AWS, Microsoft Azure, and Google Cloud Platform (GCP), ensuring seamless support, migration, and optimization across all major cloud providers."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your 24x7 Infrastructure Monitoring service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 24/7 monitoring includes real-time tracking of system health, uptime, resource usage, alerts for unusual activity, incident response, and proactive resolution to prevent downtime."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle cloud security and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide Web Application Firewall (WAF) support, vulnerability scanning, access control, encryption, and compliance management (like GDPR, HIPAA, ISO 27001) tailored to your industry."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of DevOps services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our DevOps support includes CI/CD pipeline setup, container orchestration (Docker, Kubernetes), configuration management (Ansible, Chef), and automation using Jenkins and similar tools."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help us with cloud migration and hybrid cloud integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We assist with cloud migration from legacy systems, hybrid cloud setups, data migration, and optimizing workloads for performance and cost-efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer backup and disaster recovery solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide scheduled data backups, automated recovery plans, failover systems, and RTO/RPO management to ensure business continuity during failures."
        }
      },
      {
        "@type": "Question",
        "name": "What are your SLAs for support response and resolution?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow clearly defined SLAs with priority-based response times. Critical incidents are addressed immediately, with dedicated support for high-availability systems."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle performance monitoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use industry-standard tools to monitor server, network, and application performance in real time, with alerts and automated optimization recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your systems IT support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Systems IT Support covers networking, datacenters, servers, systems helpdesk, patching, security hardening, data backup, and end-user support."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide support for on-premise servers and environments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Alongside cloud infrastructure, we also offer comprehensive support for on-premise and hybrid environments including hardware, network, and application-level assistance."
        }
      },
      {
        "@type": "Question",
        "name": "Can you set up monitoring tools for our environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We help select, configure, and integrate monitoring tools like Nagios, Zabbix, Prometheus, Grafana, New Relic, or others as per your environment and needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do you manage configuration and infrastructure changes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow Infrastructure as Code (IaC) practices using tools like Terraform, Ansible, and Puppet to ensure secure, repeatable, and version-controlled changes."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve with your cloud services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve clients across various domains including healthcare, fintech, manufacturing, logistics, retail, education, and enterprise IT."
        }
      },
      {
        "@type": "Question",
        "name": "Can your team assist in setting up a new cloud environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design, architect, and implement secure and scalable cloud environments tailored to your business requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer consultation to choose the right cloud provider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certainly. We evaluate your business needs, scalability, security requirements, and budget to recommend the best cloud provider or hybrid solution."
        }
      },
      {
        "@type": "Question",
        "name": "Is your support model flexible for different business sizes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Whether you're a startup or a large enterprise, we offer flexible support packages—from on-demand incident handling to dedicated 24/7 managed services."
        }
      },
      {
        "@type": "Question",
        "name": "How often do you conduct system audits or health checks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We conduct regular audits and health checks based on your SLA—monthly, quarterly, or custom schedules—to ensure optimal system performance and security."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer maintenance support for third-party systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer maintenance and support for a wide range of third-party systems and applications, subject to initial evaluation and compatibility."
        }
      },
      {
        "@type": "Question",
        "name": "How can we get started with your cloud support services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're just a click away; contact us online or drop us an email. Our team will set up a discovery call to understand your needs, assess your infrastructure, and propose a customized solution."
        }
      }
    ]
  };
}

// FAQ Schema for QA / Testing Services
export function getTestingServicesFloridaFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of software testing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a wide range of QA services, including Functional Testing, Non-Functional Testing, UI Testing, Automation Testing, Performance Testing, API Testing, Database Testing, and Security Testing. Our solutions cover both manual and automated testing approaches."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the quality of software delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adopt a rigorous QA process involving test planning, test case creation, defect tracking, and continuous validation. Our team uses industry-standard tools and best practices to ensure high-quality, defect-free software."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide end-to-end testing services for web and mobile applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive end-to-end testing for web and mobile applications, including responsive testing, cross-browser compatibility, UI/UX validation, performance benchmarking, and security assessments."
        }
      },
      {
        "@type": "Question",
        "name": "What tools do you use for automation testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team is skilled in leading tools such as Selenium WebDriver, TestNG, Postman, JMeter, Katalon Studio, and more. We choose tools based on the project's scope, technology stack, and client preferences."
        }
      },
      {
        "@type": "Question",
        "name": "How does automation testing benefit my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automation reduces manual effort, speeds up regression testing, enhances accuracy, supports continuous integration, and ensures faster time-to-market, ultimately lowering testing and development costs."
        }
      },
      {
        "@type": "Question",
        "name": "How do functional and non-functional testing differ in software testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Functional testing verifies the application's features and behaviors, while non-functional testing evaluates performance, scalability, usability, and security aspects to ensure the application meets real-world demands."
        }
      },
      {
        "@type": "Question",
        "name": "Can you test third-party or legacy systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our QA team can test third-party applications and legacy systems, ensuring backward compatibility, integration reliability, and adherence to business workflows."
        }
      },
      {
        "@type": "Question",
        "name": "Do you follow Agile or DevOps methodologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we align our QA processes with Agile, DevOps, and CI/CD practices to support continuous testing and faster software delivery cycles."
        }
      },
      {
        "@type": "Question",
        "name": "What industries or domains do you have experience testing in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have worked across domains such as healthcare, e-commerce, finance, logistics, manufacturing, and education. Our testing solutions are tailored to domain-specific compliance and requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer security testing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide security testing to identify vulnerabilities, assess threats, and ensure data protection using tools and techniques aligned with OWASP standards."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of outsourcing QA to ConvenantSoft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing QA to us provides access to experienced professionals, faster delivery cycles, reduced overhead, lower defect rates, and cost-effective test automation solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate your QA process with our development workflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely. We seamlessly integrate with your in-house development or DevOps teams using collaboration tools like JIRA, Azure DevOps, Jenkins, and GitLab."
        }
      },
      {
        "@type": "Question",
        "name": "What is your approach to performance testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We assess application performance under normal and peak conditions using tools like JMeter. Our testing helps identify bottlenecks, optimize resources, and enhance end-user experience."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide UI/UX testing across devices and browsers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we conduct responsive and compatibility testing across various devices, operating systems, and browsers to ensure a consistent user experience."
        }
      },
      {
        "@type": "Question",
        "name": "How do you manage test documentation and reporting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We maintain detailed test plans, test cases, execution logs, and defect reports. Clients receive periodic QA status reports with insights and recommendations for quality improvements."
        }
      },
      {
        "@type": "Question",
        "name": "What is your typical QA project onboarding process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with requirement analysis, environment setup, test strategy creation, tool selection, and team allocation—followed by test execution, reporting, and continuous feedback cycles."
        }
      },
      {
        "@type": "Question",
        "name": "Can you customize your testing services for my product needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible engagement models and tailor our services to fit your technology stack, development cycle, and business goals."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure test coverage across complex digital ecosystems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We perform exhaustive test planning, prioritization, and traceability mapping across digital assets, APIs, cloud components, and mobile platforms to ensure maximum coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer API and database testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We validate business logic, data integrity, performance, and error handling through API and database testing using Postman, SQL scripts, and custom test cases."
        }
      },
      {
        "@type": "Question",
        "name": "Is there ongoing support or post-release QA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer continuous QA support for maintenance, enhancements, post-production validation, and change requests to ensure long-term software stability."
        }
      }
    ]
  };
}

// FAQ Schema for Digital Marketing
export function getDigitalMarketingFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What digital marketing services does iConquerors offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iConquerors offers end-to-end digital marketing services including SEO, Social Media Marketing, Google Ads, Email Marketing, Branding, Online Reputation Management, Web Development, and Marketing Automation."
        }
      },
      {
        "@type": "Question",
        "name": "How long has iConquerors been in the digital marketing industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "iConquerors has been providing digital marketing and SEO services since 2010, building a strong reputation across South USA and globally."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with clients across multiple sectors such as Education, Healthcare, Transport, Retail, Manufacturing, and IT/Business Consulting."
        }
      },
      {
        "@type": "Question",
        "name": "How does iConquerors approach SEO for long-term results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement white-hat SEO techniques backed by thorough keyword research, technical optimization, link-building, and continuous monitoring to ensure sustainable, long-term rankings and traffic."
        }
      },
      {
        "@type": "Question",
        "name": "What is Online Reputation Management (ORM) and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ORM involves managing and improving your brand's online presence by responding to reviews, addressing negative feedback, and promoting positive content. It protects your credibility and helps build trust with customers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide customized digital marketing strategies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every business is unique, and we tailor our digital strategies to align with your goals, target audience, and market trends for maximum impact."
        }
      },
      {
        "@type": "Question",
        "name": "Can iConquerors handle both B2B and B2C digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our experience spans both B2B and B2C models, with a focus on customer journeys, conversion optimization, and sector-specific messaging."
        }
      },
      {
        "@type": "Question",
        "name": "What analytics and tools do you use to measure campaign success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track KPIs like website traffic, keyword rankings, conversion rates, engagement metrics, ROI, and ad performance using tools like Google Analytics, SEMrush, and Meta Business Suite."
        }
      },
      {
        "@type": "Question",
        "name": "What makes iConquerors different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 15+ years of expertise, transparent communication, result-driven approach, and multi-sector portfolio make us a trusted digital partner in South USA and beyond."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer web design and development along with marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide visually engaging, mobile-optimized, and SEO-friendly websites that serve as strong foundations for your marketing campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "Are your marketing strategies compliant with current algorithms and platform policies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We stay up-to-date with the latest Google and social media platform updates to ensure all campaigns are compliant and effective."
        }
      },
      {
        "@type": "Question",
        "name": "Can you manage my brand's social media accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely. From content planning and design to community engagement and analytics, we offer complete social media management services."
        }
      },
      {
        "@type": "Question",
        "name": "How soon can I expect results from digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While paid ads can deliver quick visibility, organic results typically take 3–6 months. However, consistent efforts yield lasting returns over time."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms do you run ads on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We run strategic ad campaigns on Google Search & Display, YouTube, Meta (Facebook/Instagram), LinkedIn, and industry-specific platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide regular reporting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide detailed monthly reports with performance metrics, insights, and recommendations, ensuring transparency and informed decision-making."
        }
      },
      {
        "@type": "Question",
        "name": "What is your process for onboarding a new client?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We begin with a discovery call, followed by requirement analysis, competitor research, strategy formulation, and execution with dedicated account management."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with local SEO and Google My Business optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We optimize your presence for local searches, maps, and voice searches to drive foot traffic and visibility in your region."
        }
      },
      {
        "@type": "Question",
        "name": "Is marketing automation part of your offerings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We implement and manage marketing automation tools for email campaigns, lead nurturing, customer journeys, and CRM integrations."
        }
      },
      {
        "@type": "Question",
        "name": "How flexible are your pricing models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible pricing plans based on your goals, scope of work, and budget. Custom packages can be designed for startups, SMEs, and large enterprises."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with iConquerors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reach us easily through your preferred channel—website, phone, or email. Our team will set up a consultation to understand your requirements and begin crafting your success plan."
        }
      }
    ]
  };
}

// FAQ Schema for Mobile App Development
export function getMobileAppDevelopmentServicesFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes AI-powered mobile apps different from regular apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-powered apps go beyond static functionality. They learn from user behavior, personalize content, automate workflows, and predict needs in real time, making them more engaging and effective for Florida and across other regions in the USA businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build both native and cross-platform AI mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in native iOS/Android apps as well as cross-platform frameworks like Flutter, React Native, Ionic, and PWAs, all enhanced with AI features."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI into my existing mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We can modernise your current app by integrating AI modules such as chatbots, predictive analytics, voice recognition, or recommendation engines—without a complete rebuild."
        }
      },
      {
        "@type": "Question",
        "name": "What types of AI features can you add to mobile applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deliver features like chatbots, voice assistants, fraud detection, sentiment analysis, computer vision, personalised shopping recommendations, AI-based search, and predictive notifications."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure compliance for industries like healthcare and finance in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design apps with strict adherence to HIPAA, GDPR, SOC 2, and PCI DSS standards, ensuring regulatory compliance for sensitive sectors across Florida."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile apps for healthcare providers in Florida and across the USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build HIPAA-compliant telemedicine apps, patient engagement tools, and AI-powered diagnostic platforms for healthcare providers in Miami, Orlando, Tampa, and across other regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an AI-driven mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timeframes vary: MVP apps: 8–12 weeks, Enterprise-grade apps: 4–6 months. We use agile methods to speed delivery without compromising quality."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of AI mobile app development in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs depend on complexity, AI features, and integrations. We offer flexible engagement models—fixed-cost, time-and-material, or dedicated development teams."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI apps integrate with existing enterprise systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We ensure seamless integration with ERPs, CRMs, cloud platforms, payment gateways, and custom APIs, helping Florida businesses unify their operations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide mobile apps with cloud and AI integration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build cloud-native apps integrated with AI services on AWS, Azure, and Google Cloud, optimised for scalability and performance."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries in Florida benefit most from AI-driven apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve healthcare, finance, retail, education, real estate, tourism, and lifestyle sectors—delivering AI-powered mobile apps tailored to each industry."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI apps improve e-commerce sales in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AI apps enhance eCommerce through personalised recommendations, dynamic pricing, fraud detection, and automated cart recovery, helping retailers in Florida and across other regions in the USA and beyond grow revenue."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer post-launch support and maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide 24/7 monitoring, AI model retraining, security updates, and feature enhancements to keep your mobile app competitive and future-ready."
        }
      },
      {
        "@type": "Question",
        "name": "How secure are AI-powered mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our apps include end-to-end encryption, secure APIs, multi-factor authentication, and AI-based fraud detection for maximum security."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI mobile apps work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design hybrid and PWA apps with AI-powered offline capabilities, ensuring smooth user experiences even with limited connectivity—important for businesses across Florida."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create voice-enabled AI apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate voice recognition, NLP (natural language processing), and speech-to-text AI models into apps for hands-free interaction."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure AI apps remain future-ready?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use modular architectures, continuous integration, and AI model updates so your app evolves with technology and user expectations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI-driven mobile apps for startups in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We work with Florida and across other regions in the USA, startups and enterprises alike, offering scalable mobile apps that grow with the business."
        }
      },
      {
        "@type": "Question",
        "name": "Can you develop location-based AI mobile apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate geolocation, AI-driven local recommendations, and Florida-specific business features into apps for tourism, retail, and real estate."
        }
      },
      {
        "@type": "Question",
        "name": "Do you only serve Florida, or do you cover other regions too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are headquartered in the USA and serve clients in Florida and across other states in the USA."
        }
      }
    ]
  };
}

// FAQ Schema for Web Development
export function getWebDevelopmentServicesFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes AI-driven web design different from traditional web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI-driven web design uses artificial intelligence to personalise content, adapt layouts based on user behaviour, and integrate smart features like chatbots and recommendation engines - creating websites that engage and convert better than static designs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you only serve clients in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While we work with clients globally, the majority of our services are for businesses across Florida and across other states and regions in the USA."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign my existing website with AI features?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can enhance your current website with AI-powered features such as intelligent search, chatbots, automated recommendations, and data-driven content delivery - without requiring a complete rebuild."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with healthcare, retail, real estate, education, finance, hospitality, tourism, and startups across Florida. Whether you run a local shop or a large enterprise, our AI-driven solutions are adaptable to your industry."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI improve e-commerce websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI enables smart product recommendations, predictive analytics, dynamic pricing, abandoned cart recovery, and fraud detection. This helps Florida businesses increase sales, improve customer retention, and boost ROI."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide mobile app development along with websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design AI-enhanced mobile apps for iOS and Android using Flutter, React Native, and other modern frameworks. Apps include features like voice search, intelligent notifications, and personalised experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Progressive Web App (PWA), and should my business use one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A PWA combines the best of mobile and web. It loads fast, works offline, and can be installed like an app. With AI features such as push notifications and personalised content, it is ideal for Florida businesses that want mobile-first engagement without building a full native app."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI improve my website SEO and visibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate AI into CMS platforms like WordPress, Joomla, and Drupal for smart SEO optimisation, content tagging, and automated suggestions, which help boost rankings and visibility in local Florida and across other regions in the USA searches."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build an AI-driven website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timelines depend on complexity. A basic AI-enhanced website can take 6-8 weeks, while larger e-commerce platforms or multi-featured apps may take 3-6 months."
        }
      },
      {
        "@type": "Question",
        "name": "Is AI-driven web design expensive compared to regular web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While it can be slightly more than a standard website, the long-term ROI is significantly higher due to automation, higher conversions, and improved customer experiences. We also provide flexible pricing models to suit Florida businesses of all sizes."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate AI with my existing CRM or ERP system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialise in seamless integrations, connecting your website or app to existing CRM, ERP, or third-party platforms for a connected, AI-enabled ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support and updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer continuous support, AI model updates, performance monitoring, and security patches to keep your Florida business future-ready."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure security in AI-driven websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow best-in-class practices, including encryption, secure APIs, regular audits, and compliance with regulations like GDPR and HIPAA for industries that require it."
        }
      },
      {
        "@type": "Question",
        "name": "Will my team need technical knowledge to manage an AI-enhanced website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We build easy-to-use dashboards and CMS interfaces. Your team can manage content while AI automates the heavy lifting, like personalisation, recommendations, and SEO optimisation."
        }
      },
      {
        "@type": "Question",
        "name": "Why should I choose ConvenantSoft Software Technologies USA for AI-driven web design in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because we combine 15+ years of expertise with AI-first development and deep knowledge of Florida competitive business landscape. We deliver localised, scalable, and intelligent solutions designed for real business growth."
        }
      }
    ]
  };
}

// FAQ Schema for Home Page
export function getHomePageFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does ConvenantSoft Software Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide end-to-end IT solutions, including custom software development, cloud services, mobile applications, UI/UX design, QA & testing, digital marketing, Data Analytics and IT consulting across multiple platforms and industries."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in healthcare, finance, e-commerce, education, manufacturing, and technology sectors, delivering tailored solutions for each industry's unique requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How do you approach custom software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow an agile methodology with iterative development cycles, starting with requirements gathering, followed by design, development, testing, and deployment phases."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide cloud-based software solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive cloud solutions including migration, infrastructure setup, and cloud-native application development across AWS, Azure, and Google Cloud platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help modernize legacy systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialize in legacy system modernization, helping businesses upgrade outdated systems while maintaining data integrity and minimizing disruption."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure data security in your software projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement industry-standard security protocols, encryption, secure coding practices, and regular security audits to protect your data and applications."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with modern technologies including React, Angular, Node.js, Python, Java, .NET, and various cloud platforms to deliver cutting-edge solutions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer mobile application development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we develop native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native development tools."
        }
      },
      {
        "@type": "Question",
        "name": "How experienced is your development team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team consists of senior developers with 5+ years of experience, certified professionals, and specialists in various technologies and domains."
        }
      },
      {
        "@type": "Question",
        "name": "What is your project delivery model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible delivery models including fixed-price, time & materials, and dedicated team models to suit different project requirements and budgets."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer UI/UX design services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our UI/UX team creates intuitive and visually compelling interfaces that improve usability, accessibility, and engagement across web and mobile platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the quality and reliability of software before delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement comprehensive testing strategies including unit testing, integration testing, and user acceptance testing to ensure high-quality deliverables."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate third-party APIs and platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have extensive experience integrating various third-party APIs, payment gateways, CRM systems, and other platforms to enhance functionality."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of post-launch support do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer ongoing maintenance, bug fixes, feature updates, and 24/7 technical support to ensure your applications run smoothly after launch."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure timely project delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use agile project management methodologies, regular client communication, milestone tracking, and risk mitigation strategies to ensure on-time delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Can you scale with our growing needs",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design scalable architectures and can expand our team size and expertise to accommodate your growing business requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How do you price your projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing is transparent and based on project scope, complexity, and requirements. We provide detailed quotes with no hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical project timeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary from 4-12 weeks for small projects to 6-12 months for enterprise solutions, depending on complexity and requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer consulting for technology adoption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide strategic technology consulting to help businesses choose the right technologies, platforms, and solutions for their needs."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with ConvenantSoft Software Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact us for a free consultation where we'll discuss your requirements, provide recommendations, and create a customized project plan."
        }
      }
    ]
  };
}

// Function to generate FAQ schema
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Comprehensive metadata function that includes everything
export function getComprehensiveMetadata(
  pageTitle: string,
  pageDescription: string,
  pagePath: string,
  imagePath: string = "/images/default-banner.jpg",
  keywords: string[] = [],
  pageType: "Organization" | "WebPage" | "Service" = "WebPage",
  canonicalUrl?: string
) {
  const metadata = getMetadata(pageTitle, pageDescription, pagePath, imagePath, keywords);
  const structuredData = getStructuredData(pageTitle, pageDescription, pagePath, pageType);

  return {
    ...metadata,
    alternates: {
      canonical: canonicalUrl || pagePath
    },
    other: {
      "structured-data": JSON.stringify(structuredData),
    },
  };
}
