"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import client logo images
import client17 from '../assets/client/client17.png';
import client18 from '../assets/client/client18.png';
import client19 from '../assets/client/client19.png';
import client20 from '../assets/client/client20.png';
import client21 from '../assets/client/client21.png';
import client25 from '../assets/client/client25.png';
import j127 from '../assets/client/j-127.jpg';
import jcPpeConsultation from '../assets/client/jc-ppe-consultation.jpg';
import sisiraLogo from '../assets/client/sisira-logo.jpg';
import ustavCatering from '../assets/client/ustav-catering.jpg';
import waterPediatricCenter from '../assets/client/water-pediatric-center.jpg';

// Client logos array with imported images
const clientLogos = [
  { name: "Pawsitively Pilates", logo: client17 },
  { name: "Bhanukapila Realtor", logo: client18 },
  { name: "Butterfly Pharmacy", logo: client19 },
  { name: "BuySell Realty Pros", logo: client20 },
  { name: "Cypress Palliative & Comfort Care", logo: client21 },
  { name: "J-127", logo: j127 },
  { name: "JC PPE Consultation", logo: jcPpeConsultation },
  { name: "Sisira", logo: sisiraLogo },
  { name: "Ustav Catering", logo: ustavCatering },
  { name: "Water Pediatric Center", logo: waterPediatricCenter },
  { name: "Client", logo: client25 },
];

export default function ClientSection() {
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    // Continuous auto-scroll with smooth transitions
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative bg-gradient-to-b from-sky-50 via-white to-blue-50/60 lg:py-16 py-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Trusted By Growing Brands &amp; Businesses
        </h2>
        <div className="w-full">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
              duration: 25,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="flex -ml-4 md:-ml-8">
              {clientLogos.map((client, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-8 basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
                  <div className="flex items-center justify-center h-24 md:h-32 bg-white rounded-2xl shadow-[0_4px_24px_rgba(59,130,246,0.12)] border border-blue-100/80 p-4 md:p-8 hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)] hover:border-blue-200 transition-all duration-500 ease-out transform hover:scale-105 group overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        title={`${client.name} - Trusted Partner of Cornerstone Digital Technologies`}
                        className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-500 brightness-105 saturate-110 group-hover:brightness-110 group-hover:saturate-125 group-hover:scale-110"
                        priority={index < 6}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}