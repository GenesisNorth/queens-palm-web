import React from 'react';

const row1 = [
  "/images/_DSC0034.jpg",
  "/images/_DSC0044.jpg",
  "/images/_DSC0050.jpg",
  "/images/_DSC0057.jpg",
  "/images/_DSC0060.jpg",
];

const row2 = [
  "/images/_DSC0084.jpg",
  "/images/_DSC0087.jpg",
  "/images/_DSC0094.jpg",
  "/images/_DSC0095.jpg",
  "/images/_DSC0098.jpg",
];

export default function DiagonalCarousel() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-transparent overflow-hidden flex flex-col items-center justify-center border-y border-white/[0.08] mt-16 md:mt-[80px]">
      {/* Rotated Container */}
      <div className="relative w-[150vw] md:w-[120vw] flex flex-col gap-4 md:gap-8 -rotate-[6deg] md:-rotate-[10deg] scale-110 z-10">
        
        {/* Row 1 */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((src, idx) => (
            <div key={`r1-${idx}`} className="w-[260px] h-[180px] md:w-[420px] md:h-[300px] shrink-0 mx-2 md:mx-4 overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="QPSI Event Moment" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-[#A855F7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((src, idx) => (
            <div key={`r2-${idx}`} className="w-[260px] h-[180px] md:w-[420px] md:h-[300px] shrink-0 mx-2 md:mx-4 overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative group cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="QPSI Event Moment" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-[#A855F7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Decorative Gradients to fade out edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[20%] md:w-[30%] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[20%] md:w-[30%] bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-20" />
    </section>
  );
}
