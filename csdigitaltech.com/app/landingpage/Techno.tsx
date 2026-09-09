"use client"

import React from 'react';
import { Monitor, Smartphone, Shield, Globe, Cloud, BarChart3 } from 'lucide-react';

export default function Techno() {
  const technologyServices = [
    {
      id: 1,
      name: "WEB",
      icon: Monitor,
      color: "bg-[#8B4513]", // Reddish-brown/maroon
      description: "Web Development"
    },
    {
      id: 2,
      name: "MOBILITY",
      icon: Smartphone,
      color: "bg-[#9A9A00]", // Olive green/mustard yellow
      description: "Mobile Applications"
    },
    {
      id: 3,
      name: "SECURITY",
      icon: Shield,
      color: "bg-[#006400]", // Dark green
      description: "Cybersecurity Solutions"
    },
    {
      id: 4,
      name: "AI/ML & IOT",
      icon: Globe,
      color: "bg-[#87CEEB]", // Light blue
      description: "Artificial Intelligence & IoT"
    },
    {
      id: 5,
      name: "CLOUD",
      icon: Cloud,
      color: "bg-[#800080]", // Purple
      description: "Cloud Infrastructure"
    },
    {
      id: 6,
      name: "ANALYTICS",
      icon: BarChart3,
      color: "bg-[#4169E1]", // Medium blue
      description: "Data Analytics"
    }
  ];

  return (
    <section className="relative py-10 flex items-center justify-center overflow-hidden">
             {/* Background Image with People and Laptop */}
       <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: "url('/technology.jpg')",
           filter: 'grayscale(100%) brightness(0.9) saturate(0.9)'
         }}
       />

      {/* Blue-Green Triangular Overlay (Left) */}
      <div className="absolute inset-0">
        <div 
          className="absolute bottom-0 left-0 w-1/5 h-full opacity-60"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, #20B2AA 70%, #20B2AA 100%)',
            clipPath: 'polygon(0 100%, 0 0, 100% 0)'
          }}
        />
      </div>

      {/* Purple Diagonal Overlay (Right) */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-1/5 h-full opacity-60"
          style={{
            background: 'linear-gradient(-45deg, transparent 0%, #800080 70%, #800080 100%)',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
          }}
        />
        {/* White diagonal lines on purple overlay */}
        <div className="absolute top-0 right-0 w-1/5 h-full opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 10px)'
          }} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Hero Slogan */}
        <div className="mb-16">
          <p className="text-white text-lg font-normal mb-4 tracking-wider">
            // TECHNOLOGY
          </p>
          <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight mb-4">
            <span className="italic">We UNITE as 'Cornerstone Digital Technologies'</span>
          </h2>
          <h2 className="text-2xl lg:text-5xl font-bold text-white leading-tight">
            <span className="italic">to DIVIDE & CONQUER complex problems</span>
          </h2>
        </div>

                 {/* Technology Service Boxes */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
           {technologyServices.map((service) => (
             <div
               key={service.id}
               className={`${service.color} rounded-lg p-6 text-white text-center hover:scale-105 transition-transform duration-300  group bg-opacity-80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl`}
             >
               <div className="flex flex-col items-center space-y-3">
                 {/* Icon */}
                 <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors duration-300 shadow-md">
                   <service.icon className="w-8 h-8 text-white" />
                 </div>
                 
                 {/* Service Name */}
                 <h3 className="text-lg font-semibold tracking-wide text-white/95 group-hover:text-white transition-colors duration-300">
                   {service.name}
                 </h3>
                 
                 {/* Description */}
                 <p className="text-xs text-white/80 group-hover:text-white/90 transition-opacity duration-300">
                   {service.description}
                 </p>
               </div>
             </div>
           ))}
         </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
