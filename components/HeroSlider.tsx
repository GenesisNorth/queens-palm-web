"use client";

import { useState, useEffect, useCallback } from "react";
import GlitchText from "@/components/GlitchText";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

const slides = [
  {
    eyebrow: "WELCOME TO",
    heading: "QUEENS PALM\nSUPPORT INITIATIVE",
    subheading:
      "EMPOWERING YOUNG INDIVIDUALS WITH ESSENTIAL SOFT SKILLS THAT ARE TIMELESS AND INVALUABLE FOR SUCCESS IN LIFE AND CAREER.",
    cta: { label: "GET STARTED", href: JOIN_FORM },
  },
  {
    eyebrow: "",
    heading: "HIGHLY EFFECTIVE\nTRAININGS AND OUTREACHES",
    subheading:
      "LOVE & EXCELLENCE: THE HEARTBEAT OF OUR COMMUNITY. ONE-TO-ONE MENTORSHIP SESSIONS THAT TRANSFORM LIVES.",
    cta: null,
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[active];

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 px-6 md:py-[160px] md:px-[120px] overflow-hidden">
      
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#A855F7]/20 to-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A855F7]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center gap-8 md:gap-10 max-w-[1200px] w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-10"
        style={{ 
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)'
        }}
        key={active}
      >
        {/* Floating Glass Pill (Eyebrow) */}
        {slide.eyebrow && (
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.1] shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]"></span>
            </span>
            <span className="font-ibm-mono text-[10px] md:text-[12px] font-bold text-[#F5F5F0] tracking-[2px] whitespace-nowrap">
              {slide.eyebrow}
            </span>
          </div>
        )}

        {/* Massive Typography Heading */}
        <h1 className="font-grotesk text-[clamp(40px,9vw,110px)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#A0A0A0] tracking-[-2px] md:tracking-[-4px] leading-[0.95] text-center w-full whitespace-pre-line drop-shadow-2xl">
          <GlitchText text={slide.heading} speed={35} delay={100} key={`h-${active}`} />
        </h1>

        {/* Elevated Subheading */}
        <p className="font-ibm-mono text-[13px] md:text-[16px] text-[#A0A0A0] tracking-[0.5px] leading-[1.8] text-center w-full max-w-[800px] font-medium">
          {slide.subheading}
        </p>

        {/* Modern Glass Buttons (CTA) */}
        {slide.cta && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full pt-8">
            <a
              href={slide.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-full sm:w-[240px] h-[60px] rounded-full bg-[#F5F5F0] hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(245,245,240,0.2)] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:scale-105"
            >
              <span className="font-grotesk text-[13px] font-bold text-[#050505] tracking-[2px]">
                {slide.cta.label}
              </span>
              <div className="absolute inset-0 rounded-full border border-black/10 pointer-events-none" />
            </a>
            
            <a
              href="/about"
              className="group flex items-center justify-center w-full sm:w-[240px] h-[60px] rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#A855F7]/50 transition-all duration-300 hover:scale-105"
            >
              <span className="font-ibm-mono text-[13px] text-[#CCCCCC] group-hover:text-white tracking-[2px] transition-colors">
                LEARN MORE
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Modern Slide Indicators (Dots) */}
      <div className="absolute bottom-12 flex items-center gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === active ? "w-10 bg-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.8)]" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Decorative Bottom Gradient Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
