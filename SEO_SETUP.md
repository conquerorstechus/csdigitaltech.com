# SEO Setup Documentation

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```env
# SEO and Site Configuration
NEXT_PUBLIC_SITE_URL=https://conquerorstech.net

# Search Engine Verification Codes
GOOGLE_SITE_VERIFICATION=your_google_verification_code_here
YANDEX_VERIFICATION=your_yandex_verification_code_here
YAHOO_VERIFICATION=your_yahoo_verification_code_here

# Social Media Handles (for structured data)
NEXT_PUBLIC_TWITTER_HANDLE=@ConquerorsTech
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/company/ConvenantSoft-technologies
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/conquerorstech
```

## SEO Features Implemented

### 1. Basic Meta Tags
- ✅ Title with brand suffix
- ✅ Meta description
- ✅ Keywords
- ✅ Canonical URLs
- ✅ Robots meta tags

### 2. Open Graph Tags (Social Media)
- ✅ Title
- ✅ Description
- ✅ URL
- ✅ Site name
- ✅ Images (1200x630)
- ✅ Locale
- ✅ Type

### 3. Twitter Card Tags
- ✅ Card type (summary_large_image)
- ✅ Title
- ✅ Description
- ✅ Images
- ✅ Site handle
- ✅ Creator handle

### 4. Structured Data (JSON-LD)
- ✅ Organization schema
- ✅ WebPage schema
- ✅ Service schema
- ✅ Contact information
- ✅ Address details
- ✅ Social media links

### 5. Additional SEO Features
- ✅ Search engine verification codes
- ✅ Author and publisher information
- ✅ Format detection settings
- ✅ Referrer policy
- ✅ Category and classification

## Pages Updated with Comprehensive SEO

### ✅ Homepage (`/`)
- **Type**: Organization
- **Keywords**: 20+ targeted keywords for software development
- **Image**: `/images/home-banner.jpg`
- **Structured Data**: Organization schema with contact details

### ✅ About Us (`/about-us`)
- **Type**: Organization
- **Keywords**: 20+ keywords focused on company information
- **Image**: `/About/image-box1.jpg`
- **Structured Data**: Organization schema with company details

### ✅ Contact Us (`/contact-us`)
- **Type**: Organization
- **Keywords**: 20+ keywords focused on contact and consultation
- **Image**: `/bg-pheader.jpg`
- **Structured Data**: Organization schema with contact information

### ✅ Software Development Services (`/services/software-development-in-florida`)
- **Type**: Service
- **Keywords**: 20+ keywords focused on software development services
- **Image**: `/softwaredevelopment1.jpg`
- **Structured Data**: Service schema with provider information

### ✅ Digital Cloud Solutions (`/services/digital-cloud-solutions-in-Florida`)
- **Type**: Service
- **Keywords**: 20+ keywords focused on cloud and digital solutions
- **Image**: `/Digitalcloud/cloud-computing-banner-background-smart-city_53876-108504.webp`
- **Structured Data**: Service schema with provider information

## Pages Pending SEO Update

### 🔄 IT Consulting (`/services/it-consulting-in-Florida`)
- **Status**: Client component created, needs server component update
- **Keywords**: IT consulting, technology consulting, Salesforce, NetSuite, SAP
- **Image**: `/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp`

### 🔄 Testing Services (`/services/testing-services-in-Florida`)
- **Status**: Needs complete SEO implementation
- **Keywords**: QA testing, software testing, automation testing, manual testing
- **Image**: `/testing-services.jpg`

### 🔄 Cloud Services (`/services/cloud-services-in-Florida`)
- **Status**: Needs complete SEO implementation
- **Keywords**: Cloud services, AWS, Azure, Google Cloud, cloud migration
- **Image**: `/Digitalcloud/cloud-computing-banner-background-smart-city_53876-108504.webp`

### 🔄 Other Service Pages
- **Web Development** (`/services/web-development`)
- **Mobile Development** (`/services/mobile-development`)
- **E-commerce** (`/services/ecommerce`)
- **IoT** (`/services/iot`)
- **DevOps** (`/services/devops`)
- **Data Science** (`/services/data-science`)
- **Branding Agency** (`/services/branding-agency`)

## Usage Examples

### For Homepage (Organization):
```typescript
export const metadata = getComprehensiveMetadata(
  "Custom Software Development Company Florida",
  "Your description here...",
  "/",
  "/images/home-banner.jpg",
  ["keyword1", "keyword2"],
  "Organization"
);
```

### For Service Pages:
```typescript
export const metadata = getComprehensiveMetadata(
  "Web Development Services | ConvenantSoft",
  "Your description here...",
  "/web-development",
  "/images/web-dev-banner.jpg",
  ["web development", "custom websites"],
  "Service"
);
```

### For Regular Pages:
```typescript
export const metadata = getComprehensiveMetadata(
  "About Us | ConvenantSoft",
  "Your description here...",
  "/about-us",
  "/images/about-banner.jpg",
  ["about us", "company"],
  "WebPage"
);
```

## File Structure

```
lib/
├── seo-metadata.ts          # Main SEO functions
components/ui/
├── StructuredData.tsx       # JSON-LD injection component
app/
├── page.tsx                 # Homepage with SEO
├── about-us/
│   ├── page.tsx            # About page with SEO
│   └── AboutUsClient.tsx   # Client component
├── contact-us/
│   ├── page.tsx            # Contact page with SEO
│   ├── ContactUsClient.tsx # Client component
│   └── ContactForm.tsx     # Contact form
└── services/
    ├── software-development/
    │   ├── page.tsx                    # Service page with SEO
    │   └── SoftwareDevelopmentClient.tsx # Client component
    ├── digital-cloud-solutions/
    │   ├── page.tsx                    # Service page with SEO
    │   └── DigitalCloudSolutionsClient.tsx # Client component
    └── it-consulting/
        ├── page.tsx                    # Service page with SEO (pending)
        └── ITConsultingClient.tsx      # Client component (created)
```

## Testing SEO

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/

## Next Steps

1. ✅ Set up the environment variables
2. ✅ Update social media URLs in the structured data
3. ✅ Add verification codes from search engines
4. ✅ Test with the tools mentioned above
5. 🔄 Apply the same pattern to all other pages in your site

## Remaining Pages to Update

- [ ] IT Consulting page (server component needs update)
- [ ] Testing Services page
- [ ] Cloud Services page
- [ ] All other service pages in `/services/`
- [ ] Portfolio pages
- [ ] Blog pages
- [ ] Technology-specific pages (React, Angular, etc.)
- [ ] Location-specific pages (Florida, etc.)

## SEO Benefits Achieved

- **Better Search Rankings**: Comprehensive meta tags and structured data
- **Rich Snippets**: JSON-LD schema markup for enhanced search results
- **Social Media Optimization**: Perfect OpenGraph and Twitter Card tags
- **Local SEO**: Address and contact information in structured data
- **Mobile Optimization**: Proper viewport and format detection
- **International SEO**: Locale settings and language support

## Quick Implementation Guide

For each remaining page:

1. **Convert to Server Component** (if it's a client component)
2. **Add SEO Metadata** using `getComprehensiveMetadata()`
3. **Create Client Component** with original content
4. **Add Structured Data** using `getStructuredData()`
5. **Import StructuredData Component** and inject JSON-LD

Example template:
```typescript
import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import PageClient from './PageClient';
import StructuredData from "@/components/ui/StructuredData";

export const metadata = getComprehensiveMetadata(
  "Page Title | ConvenantSoft",
  "Page description...",
  "/page-path",
  "/image-path.jpg",
  ["keyword1", "keyword2"],
  "Service" // or "Organization" or "WebPage"
);

export default function Page() {
  const structuredData = getStructuredData(
    "Page Title | ConvenantSoft",
    "Page description...",
    "/page-path",
    "Service"
  );

  return (
    <div>
      <StructuredData data={structuredData} />
      <PageClient />
    </div>
  );
}
```
