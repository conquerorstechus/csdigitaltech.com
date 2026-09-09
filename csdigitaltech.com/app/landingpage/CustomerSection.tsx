"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

// Testimonial data based on the image
const testimonials = [
  {
    id: 1,
    // name: "Arjun Kumar",
    //title: "Sr. Consultant & Delivery Head",
    quote: "This company delivers high-quality digital solutions and provides outstanding customer support. Their team is knowledgeable, responsive, and committed to ensuring customer satisfaction. Working with them has been a great experience.",
    image: "https://engitech.s3.amazonaws.com/images/testi2.png" // Network/tech icon image
  },
  {
    id: 2,
    //name: "Manoj Kumar",
    //title: "Milan Travels",
    quote: "I have personally come to visit Cornerstone Digital Technologies Software in Florida to Develop and make alteration of the plugin according to me from Mumbai. Very fine Job done by Cornerstone Digital Technologies Team. Thank you for Quality work",
    image: "https://engitech.s3.amazonaws.com/images/testi1.png" // Business/travel icon image
  },
  {
    id: 3,
    //name: "Priya Sharma",
    //title: "Tech Lead",
    quote: "Cornerstone Digital Technologies Tech has transformed our business operations with their innovative solutions. The team's expertise and dedication to quality is unmatched. Highly recommended for any technology needs.",
    image: "https://engitech.s3.amazonaws.com/images/testi2.png"
  },
  {
    id: 4,
    //name: "Rajesh Patel",
    //title: "CEO, Startup Solutions",
    quote: "Working with Cornerstone Digital Technologies has been a game-changer for our startup. Their custom software development services helped us scale rapidly while maintaining quality and performance.",
    image: "https://engitech.s3.amazonaws.com/images/testi1.png"
  }
];

export default function CustomerSection() {
  const [api, setApi] = useState<any>(null);

  return (
    <section className="relative bg-[#16003A] py-24 overflow-hidden">
      {/* Scroll to top button */}
      {/* <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-t-lg rounded-br-none shadow-lg"
        size="sm"
      >
        <ChevronUp className="h-4 w-4" />
      </Button> */}

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-lg font-medium mb-4">
            // OUR CUSTOMER STORIES
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Better Assistance Begins Here
          </h2>
        </div>

        {/* Testimonials Carousel */}
      <div className="max-w-6xl mx-auto relative overflow-visible">
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    setApi={setApi}
    className="w-full overflow-visible"
  >
    <CarouselContent className="-ml-4 overflow-visible">
      {testimonials.map((testimonial, index) => (
        <CarouselItem
          key={testimonial.id}
          className="pl-4 basis-full lg:basis-1/2 pb-6 overflow-visible"
        >
          <div className="bg-[#322B5D] rounded-xl p-8 h-full border border-purple-700/30 hover:border-purple-600/50 transition-all duration-300 relative overflow-visible">
            {/* Avatar */}
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} icon`}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-4">
              <blockquote className="text-white text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="pt-4">
                <h4 className="text-white font-bold text-xl">{testimonial.name}</h4>
                <p className="text-gray-300 text-sm">{testimonial.title}</p>
              </div>
            </div>

            {/* Bottom Shadow Layer */}
            <div className="absolute -bottom-3 left-4 right-4 h-4 bg-[#262152] rounded-b-xl z-[-1] shadow-lg shadow-black/20"></div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Navigation Arrows */}
    <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 border-blue-500 text-white" />
    <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 border-blue-500 text-white" />
  </Carousel>
</div>

      </div>
    </section>
  );
} 