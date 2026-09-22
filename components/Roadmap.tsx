"use client";

import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const allImages = [
  "/images/_DSC0086.jpg", "/images/_DSC0097.jpg", "/images/_DSC0128.jpg",
  "/images/_DSC0168.jpg", "/images/_DSC0077.jpg", "/images/_DSC0138.jpg",
  "/images/_DSC0194.jpg", "/images/_DSC0046.jpg", "/images/_DSC0186.jpg",
  "/images/_DSC0051.jpg", "/images/_DSC0111.jpg", "/images/_DSC0040.jpg",
  "/images/_DSC0104.jpg", "/images/_DSC0121.jpg", "/images/_DSC0155.jpg",
  "/images/_DSC0080.jpg", "/images/_DSC0130.jpg", "/images/_DSC0175.jpg",
  "/images/_DSC0074.jpg", "/images/IMG_4485.jpg"
];

const roadmapData = [
  {
    year: "YEAR 1",
    title: "FOUNDATION & VISION",
    description: "Laying the groundwork for empowering young individuals. Initiated our first mentorship programs and began cultivating a community of future leaders.",
  },
  {
    year: "YEAR 2",
    title: "EXPANSION & ENGAGEMENT",
    description: "Scaling our impact across multiple regions. Hosted dynamic workshops, masterclasses, and reached thousands of students with essential soft skills.",
  },
  {
    year: "YEAR 3",
    title: "SCALING IMPACT & BEYOND",
    description: "Solidifying our footprint as a global force. Creating sustainable frameworks for leadership, emotional intelligence, and long-term community transformation.",
  }
];

export default function Roadmap() {
  const [randomImages, setRandomImages] = useState<string[]>(["", "", ""]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pick 3 random unique images
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 3));
    setMounted(true);
  }, []);

  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-16 relative z-10">
      <SectionHeader
        label="GROWTH TREE"
        title={"OUR ROADMAP."}
        subtitle="3 YEARS OF CONTINUOUS IMPACT AND TRANSFORMATION."
      />

      <div className="relative w-full max-w-[1000px] mx-auto mt-8">
        {/* Central glowing trunk (visible on md+) */}
        <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#A855F7] via-[#7C3AED] to-transparent md:-translate-x-1/2 z-0 animate-pulse-glow" />

        <div className="flex flex-col gap-12 md:gap-24 w-full">
          {roadmapData.map((node, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={node.year} className={`relative flex flex-col md:flex-row w-full items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                
                {/* Node Connector Point */}
                <div className="absolute left-[16px] md:left-1/2 w-[16px] h-[16px] rounded-full bg-[#0A0A0A] border-4 border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,1)] md:-translate-x-1/2 z-10" />

                {/* Smart Card Content */}
                <div className={`w-full md:w-[45%] pl-[56px] md:pl-0 ${isEven ? 'md:pr-[40px]' : 'md:pl-[40px]'} animate-float`} style={{ animationDelay: `${i * 1.5}s` }}>
                  <div className="group relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] hover:border-[#A855F7] overflow-hidden transition-all duration-700 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] cursor-pointer">
                    
                    {/* Background Image (Random) */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-[#0A0A0A]/70 group-hover:bg-[#0A0A0A]/20 transition-colors duration-700 z-10" />
                      {mounted && randomImages[i] && (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={randomImages[i]} alt={node.year} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" />
                        </>
                      )}
                    </div>

                    {/* Card Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-ibm-mono text-[10px] md:text-[12px] font-bold text-white tracking-[2px] bg-[#A855F7] px-3 py-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                          {node.year}
                        </span>
                      </div>
                      <h3 className="font-grotesk text-[20px] md:text-[28px] font-bold text-white tracking-[-0.5px] leading-tight mb-3 group-hover:text-[#A855F7] transition-colors duration-300 drop-shadow-md">
                        {node.title}
                      </h3>
                      <p className="font-ibm-mono text-[11px] md:text-[13px] text-[#DDDDDD] group-hover:text-white leading-[1.6] tracking-[0.5px] transition-colors duration-300 drop-shadow-md">
                        {node.description}
                      </p>
                    </div>

                    {/* Corner decorative accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#A855F7]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#A855F7]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
