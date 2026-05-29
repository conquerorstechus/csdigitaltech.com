'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import heroBg1 from '../assets/slide1-home1.jpg';
import heroBg2 from '../assets/slide2-home1.jpg';
import heroBg3 from '../assets/slide3-home1.jpg';
import img1 from '../assets/imgi_2_flipbox1-e1660731233400.jpg';
import img2 from '../assets/imgi_3_flipbox2.jpg';
import img3 from '../assets/imgi_4_flipbox3.jpg';

type AnimationStage =
  | 'welcome-typing'
  | 'welcome-pause'
  | 'welcome-deleting'
  | 'paragraph-typing'
  | 'paragraph-pause'
  | 'paragraph-fadeout'
  | 'background-transition'
  | 'image-reveal';

const images = [
  {
    id: 1,
    image: heroBg1,
    size: 'large', // 2 cols, 2 rows
    text: 'Scalable Architecture for Enterprise Growth',
  },
  {
    id: 2,
    image: heroBg2,
    size: 'medium', // 1 col, 2 rows
    text: 'AI-Powered Solutions for Modern Businesses',
  },
  {
    id: 3,
    image: heroBg3,
    size: 'medium',
    text: 'Cloud-Native Development Excellence',
  },
  {
    id: 4,
    image: img1,
    size: 'medium',
    text: 'Real-Time Performance Optimization',
  },
  {
    id: 5,
    image: img2,
    size: 'medium',
    text: 'Microservices & API Integration',
  },
];

export default function HeroSection() {
  const [stage, setStage] = useState<AnimationStage>('welcome-typing');
  const [welcomeText, setWelcomeText] = useState('');
  const [paragraphText, setParagraphText] = useState('');
  const [paragraphOpacity, setParagraphOpacity] = useState(1);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const [textBackgroundOpacity, setTextBackgroundOpacity] = useState(0);

  const fullWelcomeText = 'Welcome to COVENANTSOFT';
  const fullParagraph =
    'We build world-class web and mobile applications that empower innovation and accelerate digital growth. Our expert team delivers cutting-edge solutions tailored to your business needs, ensuring scalability, performance, and exceptional user experiences.';

  // ------------------------------
  // Stage 1: Welcome typing
  // ------------------------------
  useEffect(() => {
    if (stage !== 'welcome-typing') return;

    setTextBackgroundOpacity(1);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullWelcomeText.length) {
        setWelcomeText(fullWelcomeText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // short hold then move to pause
        setTimeout(() => setStage('welcome-pause'), 600);
      }
    }, 70);

    return () => clearInterval(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // ------------------------------
  // Stage 2: Welcome pause -> start deleting
  // ------------------------------
  useEffect(() => {
    if (stage !== 'welcome-pause') return;

    // very short pause
    const t = setTimeout(() => setStage('welcome-deleting'), 400);
    return () => clearTimeout(t);
  }, [stage]);

  // ------------------------------
  // Stage 3: Welcome deleting
  // ------------------------------
  useEffect(() => {
    if (stage !== 'welcome-deleting') return;

    let currentIndex = fullWelcomeText.length;
    const deletingInterval = setInterval(() => {
      if (currentIndex > 0) {
        currentIndex--;
        setWelcomeText(fullWelcomeText.substring(0, currentIndex));
      } else {
        clearInterval(deletingInterval);
        setWelcomeText('');
        // quick jump into paragraph typing
        setTimeout(() => setStage('paragraph-typing'), 150);
      }
    }, 40); // faster deletion

    return () => clearInterval(deletingInterval);
  }, [stage]);

  // ------------------------------
  // Stage 4: Paragraph typing
  // ------------------------------
  useEffect(() => {
    if (stage !== 'paragraph-typing') return;

    setTextBackgroundOpacity(1);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullParagraph.length) {
        setParagraphText(fullParagraph.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // very short hold, then fade out
        setTimeout(() => setStage('paragraph-pause'), 300);
      }
    }, 120); // Slow, neat typing speed

    return () => clearInterval(typingInterval);
  }, [stage]);

  // ------------------------------
  // Stage 5: Paragraph pause -> fadeout
  // ------------------------------
  useEffect(() => {
    if (stage !== 'paragraph-pause') return;

    // short pause then fade
    const t = setTimeout(() => setStage('paragraph-fadeout'), 250);
    return () => clearTimeout(t);
  }, [stage]);

  // ------------------------------
  // Stage 6: Paragraph fadeout + delete quickly
  // ------------------------------
  useEffect(() => {
    if (stage !== 'paragraph-fadeout') return;

    // We'll perform a quick opacity fade and then aggressively delete characters
    let opacity = 1;
    const fadeStep = 0.14; // faster fade
    const fadeInterval = setInterval(() => {
      opacity -= fadeStep;
      if (opacity <= 0) {
        opacity = 0;
        setParagraphOpacity(0);
        clearInterval(fadeInterval);

        // aggressive char deletion
        let charIndex = fullParagraph.length;
        const deleteInterval = setInterval(() => {
          charIndex -= 6; // delete multiple chars to speed up
          if (charIndex <= 0) {
            setParagraphText('');
            clearInterval(deleteInterval);
            // Immediately go to background transition (very short delay)
            setTimeout(() => setStage('background-transition'), 120);
          } else {
            setParagraphText(fullParagraph.substring(0, Math.max(charIndex, 0)));
          }
        }, 18);
      } else {
        setParagraphOpacity(opacity);
      }
    }, 28);

    return () => clearInterval(fadeInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // ------------------------------
  // Stage 7: Background transition -> immediate image reveal
  // ------------------------------
  useEffect(() => {
    if (stage !== 'background-transition') return;

    // hide text BG, show dark background and then image grid fast
    setTextBackgroundOpacity(0);
    setBackgroundOpacity(1);

    // very short delay then reveal images
    const t = setTimeout(() => setStage('image-reveal'), 120);
    return () => clearTimeout(t);
  }, [stage]);

  // ------------------------------
  // Stage 8: Image reveal
  // ------------------------------
  useEffect(() => {
    if (stage !== 'image-reveal') return;
    // quick fade-in
    setImageOpacity(1);
  }, [stage]);

  // ------------------------------
  // Auto-hover effect for images - smooth and neat
  // ------------------------------
  useEffect(() => {
    if (stage !== 'image-reveal') return;
    
    // Start with first image after a short delay
    const initialDelay = setTimeout(() => {
      setHoveredImageIndex(0);
    }, 500);
    
    // Then cycle through images smoothly
    const hoverInterval = setInterval(() => {
      setHoveredImageIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Smooth 2.5s intervals for better visibility
    
    return () => {
      clearInterval(hoverInterval);
      clearTimeout(initialDelay);
    };
  }, [stage]);

  // ------------------------------
  // Rendering helpers
  // ------------------------------
  const renderParagraphWithHighlights = (text: string) => {
    const words = text.split(/(\s+)/); // keep spaces
    return words.map((word, index) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?]/g, '');
      let colorClass = 'text-white';
      if (cleanWord === 'web' || cleanWord === 'mobile' || cleanWord === 'solutions') {
        colorClass = 'text-blue-400 font-bold';
      } else if (cleanWord === 'innovation' || cleanWord === 'scalability') {
        colorClass = 'text-orange-400 font-bold';
      } else if (word.toLowerCase().includes('digital') || word.toLowerCase().includes('growth')) {
        colorClass = 'text-orange-400 font-bold';
      }
      return (
        <span key={index} className={colorClass}>
          {word}
        </span>
      );
    });
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  const getHeightClasses = (size: string) => {
    // Use full height to fill grid cells proportionally
    return 'h-full';
  };

  // ------------------------------
  // Component JSX
  // ------------------------------
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Text Animation Background (dark) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{ opacity: textBackgroundOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          {/* subtle pattern */}
          <div
            className="absolute inset-0 opacity-18"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          {/* floating particles */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse" />
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-pulse" />
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-500 rounded-full opacity-70 animate-pulse" />
            <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-40 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Neutral dark background for image transition (replaces white flash) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 transition-opacity duration-500 ease-in-out"
        style={{ opacity: backgroundOpacity }}
      />

      {/* Image Grid - shown only at image-reveal stage */}
      {stage === 'image-reveal' && (
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-600 ease-in-out"
          style={{ opacity: imageOpacity }}
        >
          <div className="w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full gap-0">
              {images.map((item, index) => {
                const isHovered = hoveredImageIndex === index;
                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden ${getSizeClasses(item.size)} transition-all duration-500 ease-in-out ${
                      isHovered ? 'z-10' : 'z-0'
                    }`}
                  >
                    <div className={`relative w-full ${getHeightClasses(item.size)} overflow-hidden rounded-sm`}>
                      <Image
                        src={item.image}
                        alt={`ConvenantSoft Image ${item.id}`}
                        fill
                        className={`object-cover transition-all duration-500 ease-in-out ${
                          isHovered ? 'scale-105 brightness-110' : 'scale-100 brightness-100'
                        }`}
                      />
                      {/* overlay gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent transition-all duration-500 ease-in-out ${
                          isHovered ? 'from-black/70' : 'from-black/40'
                        }`}
                      />
                      {/* smooth glow effect - only inside card */}
                      <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                        isHovered ? 'bg-blue-500/15' : 'bg-blue-500/0'
                      }`} />
                      {/* centered text - smooth reveal */}
                      <div className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 ease-in-out ${
                        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                      }`}>
                        <div className="text-center">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-2xl leading-tight">
                            {item.text}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Text animations container (shown while not in image-reveal) */}
      {stage !== 'image-reveal' && (
        <div
          className={`absolute inset-0 flex z-30 ${
            stage === 'paragraph-typing' || stage === 'paragraph-pause' || stage === 'paragraph-fadeout'
              ? 'items-start justify-center pt-16 lg:pt-28'
              : 'items-center justify-center'
          }`}
        >
          {/* Welcome text */}
          {(stage === 'welcome-typing' || stage === 'welcome-pause' || stage === 'welcome-deleting') && (
            <div className="text-center px-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl leading-tight">
                {welcomeText}
                {(stage === 'welcome-typing' || stage === 'welcome-pause') && <span className="animate-pulse text-blue-400 ml-1">|</span>}
              </h1>
            </div>
          )}

          {/* Paragraph text */}
          {(stage === 'paragraph-typing' || stage === 'paragraph-pause' || stage === 'paragraph-fadeout') && (
            <div
              className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ease-in-out animate-fade-in"
              style={{ opacity: paragraphOpacity }}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-relaxed md:leading-relaxed text-white drop-shadow-lg font-mono">
                {renderParagraphWithHighlights(paragraphText)}
                {(stage === 'paragraph-typing' || stage === 'paragraph-pause') && paragraphText.length > 0 && <span className="animate-pulse text-blue-400 ml-1">|</span>}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
