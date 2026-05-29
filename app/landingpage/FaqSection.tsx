"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number>(0); // First items in each column open by default

  const leftColumnFAQs: FAQItem[] = [
    {
      question: "What services does ConvenantSoft Software Technologies offer?",
      answer: "We provide end-to-end IT solutions, including custom software development, cloud services, mobile applications, UI/UX design, QA & testing, digital marketing, Data Analytics and IT consulting across multiple platforms and industries."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in healthcare, finance, e-commerce, education, manufacturing, and technology sectors, delivering tailored solutions for each industry's unique requirements."
    },
    {
      question: "How do you approach custom software development?",
      answer: "We follow an agile methodology with iterative development cycles, starting with requirements gathering, followed by design, development, testing, and deployment phases."
    },
    {
      question: "Do you provide cloud-based software solutions?",
      answer: "Yes, we offer comprehensive cloud solutions including migration, infrastructure setup, and cloud-native application development across AWS, Azure, and Google Cloud platforms."
    },
    {
      question: "Can you help modernize legacy systems?",
      answer: "Absolutely. We specialize in legacy system modernization, helping businesses upgrade outdated systems while maintaining data integrity and minimizing disruption."
    },
    {
      question: "How do you ensure data security in your software projects?",
      answer: "We implement industry-standard security protocols, encryption, secure coding practices, and regular security audits to protect your data and applications."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Angular, Node.js, Python, Java, .NET, and various cloud platforms to deliver cutting-edge solutions."
    },
    {
      question: "Do you offer mobile application development?",
      answer: "Yes, we develop native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native development tools."
    },
    {
      question: "How experienced is your development team?",
      answer: "Our team consists of senior developers with 5+ years of experience, certified professionals, and specialists in various technologies and domains."
    },
    {
      question: "What is your project delivery model?",
      answer: "We offer flexible delivery models including fixed-price, time & materials, and dedicated team models to suit different project requirements and budgets."
    }
  ];

  const rightColumnFAQs: FAQItem[] = [
    {
      question: "Do you offer UI/UX design services?",
      answer: "Yes. Our UI/UX team creates intuitive and visually compelling interfaces that improve usability, accessibility, and engagement across web and mobile platforms."
    },
    {
      question: "How do you ensure the quality and reliability of software before delivery?",
      answer: "We implement comprehensive testing strategies including unit testing, integration testing, and user acceptance testing to ensure high-quality deliverables."
    },
    {
      question: "Can you integrate third-party APIs and platforms?",
      answer: "Yes, we have extensive experience integrating various third-party APIs, payment gateways, CRM systems, and other platforms to enhance functionality."
    },
    {
      question: "What kind of post-launch support do you provide?",
      answer: "We offer ongoing maintenance, bug fixes, feature updates, and 24/7 technical support to ensure your applications run smoothly after launch."
    },
    {
      question: "How do you ensure timely project delivery?",
      answer: "We use agile project management methodologies, regular client communication, milestone tracking, and risk mitigation strategies to ensure on-time delivery."
    },
    {
      question: "Can you scale with our growing needs?",
      answer: "Yes, we design scalable architectures and can expand our team size and expertise to accommodate your growing business requirements."
    },
    {
      question: "How do you price your projects?",
      answer: "Our pricing is transparent and based on project scope, complexity, and requirements. We provide detailed quotes with no hidden costs."
    },
    {
      question: "What is the typical project timeline?",
      answer: "Project timelines vary from 4-12 weeks for small projects to 6-12 months for enterprise solutions, depending on complexity and requirements."
    },
    {
      question: "Do you offer consulting for technology adoption?",
      answer: "Yes, we provide strategic technology consulting to help businesses choose the right technologies, platforms, and solutions for their needs."
    },
    {
      question: "How do I get started with ConvenantSoft Software Technologies?",
      answer: "Contact us for a free consultation where we'll discuss your requirements, provide recommendations, and create a customized project plan."
    }
  ];

  const toggleItem = (index: number, column: 'left' | 'right') => {
    const actualIndex = column === 'right' ? index + leftColumnFAQs.length : index;
    setOpenItem(prev => (prev === actualIndex ? -1 : actualIndex));
  };

  const isItemOpen = (index: number, column: 'left' | 'right') => {
    const actualIndex = column === 'right' ? index + leftColumnFAQs.length : index;
    return openItem === actualIndex;
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10 md:mb-16">
          Our Business Operating Model
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnFAQs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index, 'left')}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center rounded-lg"
                >
                  <span className="font-medium text-gray-800 pr-4 hover:text-green-600">
                    {faq.question}
                  </span>
                  {isItemOpen(index, 'left') ? (
                    <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {isItemOpen(index, 'left') && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnFAQs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleItem(index, 'right')}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center rounded-lg"
                >
                  <span className="font-medium text-gray-800 hover:text-green-600 pr-4">
                    {faq.question}
                  </span>
                  {isItemOpen(index, 'right') ? (
                    <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {isItemOpen(index, 'right') && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
