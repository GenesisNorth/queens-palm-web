"use client";

import SectionHeader from "./SectionHeader";
const whatWeDoContent = [
  {
    title: "Workshops.",
    subtitle: "VITAL SOFT SKILLS",
    description:
      "Engaging virtual, in-person, hybrid, customized, and public workshops that equip participants with vital soft skills they can apply in real-world situations.",
  },
  {
    title: "Conferences.",
    subtitle: "GROWTH & COLLABORATION",
    description:
      "Events that foster personal growth and collaboration among participants, creating spaces for learning and connection.",
  },
  {
    title: "Empowerment Programs.",
    subtitle: "BUILDING CONFIDENCE",
    description:
      "Programs that equip participants with the skills, knowledge, and attitudes to build self-confidence, develop resilience, foster a growth mindset, and communicate effectively.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[40px] relative z-10 overflow-hidden">
      <SectionHeader
        label="WHAT WE DO"
        title={"BUILDING FUTURES.\nONE SKILL AT A TIME."}
      />

      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-16 lg:gap-8 mt-8 relative">
        {/* Left Side: Image (Static/Sticky while scrolling the section) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:sticky lg:top-[120px]">
          <div className="relative w-full max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/_DSC0084.jpg"
              alt="What we do"
              className="w-full h-full object-cover"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Tilted Scrollable Card (Device Frame) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end [perspective:1400px]">
          {/* Outer Frame (Simulates tablet body) */}
          <div className="relative w-full max-w-[480px] h-[550px] lg:h-[650px] bg-[#d4d4d8] rounded-[2rem] p-[8px] shadow-[30px_20px_60px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:[transform:rotateY(-15deg)_rotateX(3deg)] [transform:rotateY(-30deg)_rotateX(8deg)] origin-center group">
            {/* Outer metallic edge highlight */}
            <div className="absolute inset-0 rounded-[2rem] border-[2px] border-white/60 pointer-events-none" />
            
            {/* The "Screen" */}
            <div className="relative w-full h-full bg-[#070707] rounded-[1.5rem] overflow-hidden flex flex-col shadow-inner">
              
              {/* Top Status/Header bar */}
              <div className="shrink-0 p-8 pb-4 border-b border-white/[0.06] flex items-center justify-between z-10 bg-[#070707]/90 backdrop-blur-md">
                <span className="font-ibm-mono text-[9px] font-bold text-[#A855F7] tracking-[2px]">
                  OUR CORE PILLARS
                </span>
                <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
              </div>

              {/* Scrollable Content Area */}
              <div 
                className="flex-1 overflow-y-auto p-8 pt-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden z-0 overscroll-contain"
                data-lenis-prevent="true"
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-12 pb-16">
                  {whatWeDoContent.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-ibm-mono text-[10px] text-[#A855F7] tracking-[1.5px] uppercase">
                          {item.subtitle}
                        </span>
                      </div>
                      <h3 className="font-grotesk text-[28px] md:text-[34px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1]">
                        {item.title}
                      </h3>
                      <p className="font-ibm-mono text-[13px] text-[#999999] leading-[1.7] mt-2">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom Fade Gradient & Scroll Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-transparent pointer-events-none z-10 flex items-end justify-center pb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 animate-bounce shadow-lg">
                  <span className="font-ibm-mono text-[9px] font-bold text-white tracking-[1.5px]">SCROLL</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A855F7]">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
