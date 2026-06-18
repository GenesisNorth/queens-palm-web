"use client";

import SectionHeader from "./SectionHeader";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

export default function Gallery() {
  return (
    <section className="flex flex-col w-full bg-[#050505] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px]">
      <SectionHeader
        label="OUR GALLERY"
        title={"MOMENTS OF IMPACT."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {images.map((src, i) => (
          <div
            key={i}
            className="group relative w-full aspect-[4/3] bg-[#111111] overflow-hidden border border-[#2D2D2D] hover:border-[#A855F7] transition-colors"
          >
            {/* Fallback pattern in case image doesn't load/exist yet */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center font-ibm-mono text-[#A855F7]">
              [IMAGE PLACEHOLDER]
            </div>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`QPSI Event ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              onError={(e) => {
                // Hide broken image icon if not found
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
