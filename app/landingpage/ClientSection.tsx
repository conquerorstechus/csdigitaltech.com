"use client"

import React from 'react';
import Image, { StaticImageData } from 'next/image';

import pawsitivelyPilates from '../assets/client/pawsitively-pilates.png';
import bhanukapilaRealtor from '../assets/client/bhanukapila-realtor.png';
import znEnterprises from '../assets/client/zn-enterprises.png';
import butterflyPharmacy from '../assets/client/client19.png';
import cypressPalliative from '../assets/client/client21.png';
import jcPpeConsultation from '../assets/client/jc-ppe-consultation.jpg';
import sisiraLogo from '../assets/client/sisira-logo.jpg';
import utsavCatering from '../assets/client/ustav-catering.jpg';
import watersPediatricCenter from '../assets/client/water-pediatric-center.jpg';

type ImageClient = { name: string; type: 'image'; logo: StaticImageData };
type TextClient = { name: string; type: 'text' };
type Client = ImageClient | TextClient;

const clientLogos: Client[] = [
  { name: "Pawsitively Pilates", type: "image", logo: pawsitivelyPilates },
  { name: "ZN Enterprises", type: "image", logo: znEnterprises },
  { name: "Bhanukapila Realtor", type: "image", logo: bhanukapilaRealtor },
  { name: "Butterfly Pharmacy", type: "image", logo: butterflyPharmacy },
  { name: "Rik Promo", type: "text" },
  { name: "Utsav Catering", type: "image", logo: utsavCatering },
  { name: "Tampa Realty Pros", type: "text" },
  { name: "Cypress Palliative & Comfort Care", type: "image", logo: cypressPalliative },
  { name: "JC PPE Consultation", type: "image", logo: jcPpeConsultation },
  { name: "Sisira Farms", type: "image", logo: sisiraLogo },
  { name: "Waters Pediatric Center", type: "image", logo: watersPediatricCenter },
];

function ClientLogo({ client }: { client: Client }) {
  if (client.type === 'text') {
    return (
      <span className="text-xl md:text-2xl font-bold text-[#9CA3AF] whitespace-nowrap select-none">
        {client.name}
      </span>
    );
  }

  return (
    <Image
      src={client.logo}
      alt={client.name}
      title={`${client.name} - Trusted Partner of Cornerstone Digital Technologies`}
      className="h-10 md:h-12 w-auto object-contain grayscale opacity-60"
      height={48}
      width={176}
    />
  );
}

export default function ClientSection() {
  const scrollingClients = [...clientLogos, ...clientLogos];

  return (
    <section className="relative bg-[#F5F9FF] lg:py-16 py-8 overflow-hidden border-y border-blue-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Trusted By Growing Brands &amp; Businesses
        </h2>
        <div className="brand-scroll-wrapper overflow-hidden">
          <div className="brand-scroll flex items-center gap-10 md:gap-16 w-max py-2">
            {scrollingClients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex-shrink-0">
                <ClientLogo client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
