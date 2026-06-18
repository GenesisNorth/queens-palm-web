"use client";

import { useState, useEffect, useCallback } from "react";
import GlitchText from "@/components/GlitchText";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

const slides = [
  {
    eyebrow: "WELCOME TO",
    heading: "QUEENS PALMS\nSUPPORT INITIATIVE",
    subheading:
      "EMPOWERING YOUNG INDIVIDUALS WITH ESSENTIAL SOFT SKILLS THAT ARE TIMELESS AND INVALUABLE FOR SUCCESS IN LIFE AND CAREER.",
    cta: { label: "GET STARTED", href: JOIN_FORM },
  },
  {
    eyebrow: "",
    heading: "HIGHLY EFFECTIVE\nTRAINING IN SEMINARS",
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
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[active];

  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-transparent min-h-[85vh] py-24 px-6 md:py-[140px] md:px-[120px] overflow-hidden">

      {/* Content */}
      <div
        className="relative flex flex-col items-center gap-6 md:gap-8 max-w-[1000px] w-full transition-opacity duration-700"
        style={{ opacity: mounted ? 1 : 0 }}
        key={active}
      >
        {/* Eyebrow */}
        {slide.eyebrow && (
          <div className="flex items-center justify-center gap-[8px] h-[32px] px-[12px] md:px-[16px] bg-[#1A1A1A] border-2 border-[#A855F7]">
            <div className="w-[8px] h-[8px] bg-[#A855F7] shrink-0" />
            <span className="font-ibm-mono text-[9px] md:text-[11px] font-bold text-[#A855F7] tracking-[1px] md:tracking-[2px] whitespace-nowrap">
              {slide.eyebrow}
            </span>
          </div>
        )}

        {/* Heading */}
        <h1 className="font-grotesk text-[clamp(32px,8vw,80px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-none text-center w-full whitespace-pre-line">
          <GlitchText text={slide.heading} speed={35} delay={100} key={`h-${active}`} />
        </h1>

        {/* Subheading */}
        <p className="font-ibm-mono text-[12px] md:text-[14px] text-[#888888] tracking-[1px] leading-[1.7] text-center w-full max-w-[700px]">
          {slide.subheading}
        </p>

        {/* CTA */}
        {slide.cta && (
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[16px] w-full sm:w-auto pt-4">
            <a
              href={slide.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-[220px] h-[56px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors"
            >
              <span className="font-grotesk text-[12px] font-bold text-white tracking-[2px]">
                {slide.cta.label}
              </span>
            </a>
            <a
              href="/about"
              className="flex items-center justify-center w-full sm:w-[200px] h-[56px] bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/[0.2] transition-colors shadow-lg"
            >
              <span className="font-ibm-mono text-[12px] text-[#888888] tracking-[2px]">
                LEARN MORE &gt;
              </span>
            </a>
          </div>
        )}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 md:bottom-12 flex items-center gap-[8px]">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="h-[4px] transition-all"
            style={{
              width: i === active ? 32 : 8,
              backgroundColor: i === active ? "#A855F7" : "#333333",
            }}
          />
        ))}
      </div>

      {/* Decorative accents */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A855F7] to-transparent opacity-30" />
    </section>
  );
}
