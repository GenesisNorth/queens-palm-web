"use client";

import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

const services = [
  {
    title: "Leadership Skills",
    description:
      "Nurture, guide, lead, and inspire others to demonstrate integrity and fairness as a transformative leader in your community.",
    tag: "LEAD",
    colSpan: "lg:col-span-2",
  },
  {
    title: "Communication",
    description:
      "Verbal communication, non-verbal communication, and active listening. Express with absolute confidence and clarity.",
    tag: "COMM",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Emotional Intelligence",
    description:
      "Recognizing and managing one's emotions to achieve deeper understanding and unshakeable self-awareness.",
    tag: "EQ",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Poise & Etiquette",
    description:
      "Refined skills and behaviors that demonstrate true confidence, respect, and consideration for everyone in the room.",
    tag: "POISE",
    colSpan: "lg:col-span-1",
  },
  {
    title: "Inclusion",
    description:
      "Creating an environment where everyone is valued, respected, and supported, regardless of their differences.",
    tag: "INCL",
    colSpan: "lg:col-span-1",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Default tilted-left isometric state
  const DEFAULT_TILT = { x: 5, y: -12 };
  const [rotate, setRotate] = useState(DEFAULT_TILT);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the container
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation (-10 to +10 degrees)
    const rotateX = (mouseY / (height / 2)) * -10;
    const rotateY = (mouseX / (width / 2)) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Return to the default left-tilt state
    setRotate(DEFAULT_TILT);
  };

  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] relative z-10">
      <SectionHeader
        label="OUR SERVICES"
        title={"OUR GOAL IS TO EMPOWER\nINDIVIDUALS TO JOIN\nTHE TOP 1% GLOBALLY."}
        titleWidth="w-full max-w-[800px]"
      />

      {/* 3D Tilt Container Wrapper */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full [perspective:1000px] select-none"
      >
        <div
          className="w-full transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Main Backplate Frame */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full p-4 md:p-6 lg:p-8 rounded-[2.5rem] bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/[0.06] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
            style={{ transform: "translateZ(30px)" }} // Pops the grid slightly off the back plane
          >
            {services.map((s, i) => (
              <div
                key={s.tag}
                className={`group relative flex flex-col p-8 md:p-10 lg:p-12 min-h-[340px] overflow-hidden rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/[0.06] transition-all duration-500 hover:border-[#A855F7]/40 hover:bg-white/[0.06] cursor-default ${s.colSpan}`}
                style={{ transform: "translateZ(60px)" }} // Huge pop out for extreme 3D depth
              >
                {/* Soft Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A855F7] opacity-0 group-hover:opacity-[0.12] blur-[120px] rounded-full transition-opacity duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                  <div className="flex justify-between items-start mb-auto">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
                      <span className="font-ibm-mono text-[9px] font-bold text-white tracking-[2px]">
                        {s.tag}
                      </span>
                    </div>
                    <span className="font-grotesk text-[14px] font-bold text-white/[0.15]">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="mt-16 lg:mt-24">
                    <h3 className="font-grotesk text-[28px] lg:text-[36px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] mb-4">
                      {s.title}
                    </h3>
                    <p className="font-ibm-mono text-[13px] md:text-[14px] text-[#888888] leading-[1.7] max-w-[440px]">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant CTA */}
      <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06] mt-4">
        <span className="font-ibm-mono text-[12px] text-[#666666] tracking-[2px] uppercase">
          DO YOU WANT TO BE A PART OF QPSI?
        </span>
        <a
          href={JOIN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 font-ibm-mono text-[12px] font-bold text-[#F5F5F0] tracking-[1px] hover:text-[#A855F7] transition-colors"
        >
          JOIN US TODAY
          <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#A855F7] flex items-center justify-center transition-colors">
            <span className="group-hover:translate-x-[2px] transition-transform">→</span>
          </span>
        </a>
      </div>
    </section>
  );
}
