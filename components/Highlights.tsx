"use client";

import { useState, useRef } from "react";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    title: "Empowering Young Minds",
    description: "Equipping the next generation with essential soft skills that serve as the foundation for lifelong success in both life and work.",
    image: "/images/_DSC0034.jpg"
  },
  {
    title: "Quality Education",
    description: "Deeply committed to providing access to transformative, quality education, directly aligned with the UN Sustainable Development Goal 4.",
    image: "/images/_DSC0040.jpg"
  },
  {
    title: "Proven Track Record",
    description: "A growing legacy of empowering young adults across major cities including Lagos and Abuja through hands-on initiatives.",
    image: "/images/_DSC0044.jpg"
  },
  {
    title: "Transformative Impact",
    description: "We have witnessed firsthand the extraordinary power of soft skills development in reshaping attitudes and career trajectories.",
    image: "/images/_DSC0045.jpg"
  },
  {
    title: "Inspirational Events",
    description: "Curating impactful, high-energy workshops and conferences that connect, challenge, and elevate young minds.",
    image: "/images/_DSC0046.jpg"
  },
  {
    title: "Personal Growth",
    description: "Guiding young people on a continuous, guided journey of self-discovery, resilience, and unshakeable confidence.",
    image: "/images/_DSC0047.jpg"
  },
  {
    title: "Community Building",
    description: "Fostering a deeply supportive and vibrant community of positive change-makers who uplift one another.",
    image: "/images/_DSC0048.jpg"
  },
  {
    title: "Passionate Team",
    description: "A dedicated, world-class team relentlessly focused on extending positive, lasting impact to young people everywhere.",
    image: "/images/_DSC0050.jpg"
  },
];

function HighlightRow({ h, i, isActive, onMouseEnter }: any) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rotateX = (mouseY / (height / 2)) * -10;
    const rotateY = (mouseX / (width / 2)) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={rowRef}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-center border-b border-white/[0.06] cursor-pointer w-full"
    >
      {/* Background Glow inside the active row */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-[#A855F7]/[0.05] to-transparent transition-opacity duration-500 ease-out pointer-events-none ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Glowing left edge indicator */}
      <div 
        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#A855F7] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_12px_rgba(168,85,247,0.8)] origin-left ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 px-4 md:px-12 w-full gap-8">
        
        {/* Left side: Number, Title & Description Reveal */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 w-full lg:w-[60%]">
          <span 
            className={`font-ibm-mono text-[12px] md:text-[14px] font-bold tracking-[3px] transition-colors duration-500 mt-2 ${
              isActive ? 'text-[#A855F7]' : 'text-white/20'
            }`}
          >
            0{i + 1}
          </span>
          
          <div className="flex flex-col">
            <h3 
              className={`font-grotesk text-[24px] md:text-[36px] lg:text-[42px] font-bold tracking-[-1px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive 
                  ? 'text-[#F5F5F0] translate-x-4 md:translate-x-8' 
                  : 'text-white/30 translate-x-0'
              }`}
            >
              {h.title}
            </h3>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive 
                  ? 'max-h-[150px] opacity-100 translate-y-0 mt-4 translate-x-4 md:translate-x-8' 
                  : 'max-h-0 opacity-0 translate-y-4 translate-x-0'
              }`}
            >
              <p className="font-ibm-mono text-[13px] md:text-[14px] text-[#888888] leading-[1.8] max-w-[480px]">
                {h.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side: 3D Tilted Image Card */}
        <div 
          className={`w-full lg:w-[40%] flex justify-end overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isActive 
              ? 'max-h-[400px] opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 translate-y-8'
          }`}
        >
          <div 
            className="w-full max-w-[320px] aspect-[4/3] [perspective:1000px] pointer-events-none"
          >
            <div 
              className="w-full h-full relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 bg-[#0a0a0a] transition-transform duration-200 ease-out will-change-transform"
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ transform: "translateZ(20px)" }} // Pops image slightly
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={h.image} 
                  alt={h.title} 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Highlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default first item to active

  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] relative z-10 overflow-hidden">
      <SectionHeader
        label="KEY HIGHLIGHTS"
        title={"WHY QPSI\nMATTERS."}
      />

      <div className="flex flex-col w-full border-t border-white/[0.06] mt-12 md:mt-20">
        {highlights.map((h, i) => (
          <HighlightRow 
            key={i}
            h={h}
            i={i}
            isActive={hoveredIndex === i}
            onMouseEnter={() => setHoveredIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
