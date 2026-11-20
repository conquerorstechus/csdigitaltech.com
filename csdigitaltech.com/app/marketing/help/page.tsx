'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/marketing/ui/button'

const FAQ_GROUPS = [
  {
    heading: 'Services and pricing',
    faqs: [
      {
        question: 'What services do you offer?',
        answer:
          'We offer comprehensive digital marketing services including Meta Ads management, Google Ads management, SEO, Instagram growth, static ad creatives, video ads and email design.',
      },
      {
        question: 'How much does your service cost?',
        answer:
          'Our services are affordably priced, starting from $99/mo. Pricing varies by service: static and video ads start from $149, while Meta Ads and Google Ads management start from $549/mo. Visit our Pricing page for detailed information on each service tier.',
      },
      {
        question: 'Do you work with small businesses?',
        answer:
          'Absolutely! We specialize in affordable solutions for small businesses. Our services are designed to be accessible to businesses of all sizes, so you can start with one service and add more as you grow.',
      },
      {
        question: 'Do you offer custom solutions?',
        answer:
          'Yes, we offer custom enterprise solutions. Contact our sales team for personalized packages tailored to your specific business needs.',
      },
      {
        question: 'Can I combine more than one service?',
        answer:
          'Yes. Many clients pair a creative service, such as static ads or video ads, with a management service like Meta Ads or Google Ads, so the creatives and the campaigns that run them work together. The Pricing page lets you configure each service.',
      },
    ],
  },
  {
    heading: 'Results and expectations',
    faqs: [
      {
        question: 'How long does it take to see results?',
        answer:
          'Results timeline varies by service. Most clients see initial engagement within 1-2 weeks, with significant improvements within 1-3 months depending on the service and campaign goals.',
      },
      {
        question: "What's your client satisfaction rate?",
        answer:
          "We maintain a 99% client satisfaction rate. We're committed to delivering exceptional results.",
      },
      {
        question: 'Will I know what you are working on?',
        answer:
          'Yes. You can reach our team at any time through the Contact page, and we are happy to walk you through what is being delivered for your account and what comes next.',
      },
    ],
  },
  {
    heading: 'Billing, cancellation and refunds',
    faqs: [
      {
        question: 'Can I cancel my subscription anytime?',
        answer:
          'Yes, you can cancel your subscription anytime with no long-term contracts and no penalties. We believe in flexibility and want you to stay with us because you love our service.',
      },
      {
        question: 'Do services renew automatically?',
        answer:
          'Our services are provided on a subscription basis and renew automatically unless you cancel. You can review the full details in our Terms of Service.',
      },
      {
        question: 'Do you offer refunds?',
        answer:
          'Refunds are provided within 30 days of cancellation for unused services. See our Terms of Service for the full policy.',
      },
      {
        question: 'How is my payment information handled?',
        answer:
          'We collect billing and payment information only to process your transactions. Our Privacy Policy explains what we collect, how we use it and how we protect it.',
      },
    ],
  },
  {
    heading: 'Getting started',
    faqs: [
      {
        question: 'How do I get started?',
        answer:
          'Simply book a demo call or visit any of our service pages to learn more. Our team will guide you through the process and help you choose the right solution.',
      },
      {
        question: 'Which service should I start with?',
        answer:
          'It depends on your goal. Instagram growth and static ads suit brands building awareness, Meta Ads and Google Ads suit businesses that want leads and sales from paid traffic, and SEO suits businesses that want steady organic traffic over time. If you are unsure, contact us and we will recommend a starting point.',
      },
    ],
  },
]

const ALL_FAQS = FAQ_GROUPS.flatMap((group) => group.faqs)

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function HelpCenter() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Help Center</h1>
        <p className="text-center text-gray-600 text-lg mb-8">
          Find answers to common questions about our digital marketing services, pricing, billing and
          how to get started with Cornerstone Digital Technologies.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading} className="mb-10" aria-labelledby={`faq-${group.heading}`}>
            <h2 id={`faq-${group.heading}`} className="text-2xl font-bold mb-4 text-gray-900">
              {group.heading}
            </h2>
            <div className="space-y-4">
              {group.faqs.map((faq) => {
                const index = ALL_FAQS.indexOf(faq)
                const isOpen = openFAQ === index
                return (
                  <div
                    key={faq.question}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-left text-gray-900">{faq.question}</h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-red-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {/* Always rendered so the answer text is in the page HTML; only visually collapsed. */}
                    <div
                      id={`faq-answer-${index}`}
                      hidden={!isOpen}
                      className="px-6 py-4 bg-slate-50 border-t border-gray-200"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        {/* Related pages */}
        <section className="mt-12" aria-labelledby="help-explore">
          <h2 id="help-explore" className="text-2xl font-bold mb-3 text-gray-900">
            Explore our services
          </h2>
          <p className="text-gray-600 mb-4">
            Learn more about what each service includes, or compare plans before you decide.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 text-red-600">
            <li><Link href="/marketing/pricing" className="hover:underline">Pricing and plans</Link></li>
            <li><Link href="/marketing/meta-ads" className="hover:underline">Meta Ads management</Link></li>
            <li><Link href="/marketing/google-ads" className="hover:underline">Google Ads management</Link></li>
            <li><Link href="/marketing/seo" className="hover:underline">SEO services</Link></li>
            <li><Link href="/marketing/instagram-growth" className="hover:underline">Instagram growth</Link></li>
            <li><Link href="/marketing/static-ads" className="hover:underline">Static ads</Link></li>
            <li><Link href="/marketing/video-ads" className="hover:underline">Video ads</Link></li>
            <li><Link href="/marketing/email-design" className="hover:underline">Email design</Link></li>
            <li><Link href="/marketing/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/marketing/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </section>

        {/* Contact Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Didn't find what you're looking for?</h2>
          <p className="text-gray-600 mb-6">Our support team is here to help. Reach out to us anytime.</p>
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/marketing/contact">Contact Support</Link>
          </Button>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
            <Link href="/marketing#footer">← Back</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
