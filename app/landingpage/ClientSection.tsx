"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import client logo images
import client1 from '../assets/client/client1.jpg';
import client2 from '../assets/client/client2.png';
import client3 from '../assets/client/client3.jpg';
import client4 from '../assets/client/client4.png';
import client5 from '../assets/client/client5.png';
import client6 from '../assets/client/client6.png';
import client7 from '../assets/client/client7.png';
import client8 from '../assets/client/client8.jpg';
import client9 from '../assets/client/client9.png';
import client10 from '../assets/client/client10.png';
import client11 from '../assets/client/client11.png';
import client12 from '../assets/client/client12.jpg';
import client13 from '../assets/client/client13.png';
import client14 from '../assets/client/client14.png';
import client15 from '../assets/client/client15.jpg';
import client16 from '../assets/client/client16.png';
import client17 from '../assets/client/client17.png';
import client18 from '../assets/client/client18.png';
import client19 from '../assets/client/client19.png';
import client20 from '../assets/client/client20.png';
import client21 from '../assets/client/client21.png';
import client22 from '../assets/client/client22.png';
import client23 from '../assets/client/client23.png';
import client24 from '../assets/client/client24.png';

// Client logos array with imported images
const clientLogos = [
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },
  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
  { name: "Client 9", logo: client9 },
  { name: "Client 10", logo: client10 },
  { name: "Client 11", logo: client11 },
  { name: "Client 12", logo: client12 },
  { name: "Client 13", logo: client13 },
  { name: "Client 14", logo: client14 },
  { name: "Client 15", logo: client15 },
  { name: "Client 16", logo: client16 },
  { name: "Client 17", logo: client17 },
  { name: "Client 18", logo: client18 },
  { name: "Client 19", logo: client19 },
  { name: "Client 20", logo: client20 },
  { name: "Client 21", logo: client21 },
  { name: "Client 22", logo: client22 },
  { name: "Client 23", logo: client23 },
  { name: "Client 24", logo: client24 },
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
    <section className="bg-white lg:py-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Carousel */}
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
                  <div className="flex items-center justify-center h-24 md:h-32 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 p-4 md:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 ease-out transform hover:scale-105 group overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        title={`${client.name} - Trusted Partner of Cornerstone Digital Technologies`}
                        className="max-h-full max-w-full w-auto h-auto object-contain transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
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