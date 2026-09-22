"use client";

import SectionHeader from "./SectionHeader";

const images = [
  // Rows 1-5
  { src: "/images/_DSC0086.jpg", className: "md:col-span-2 md:row-span-2", alt: "QPSI Volunteers" },
  { src: "/images/_DSC0097.jpg", className: "md:col-span-1 md:row-span-1", alt: "QPSI Products" },
  { src: "/images/_DSC0128.jpg", className: "md:col-span-1 md:row-span-2", alt: "Stage Speaker" },
  { src: "/images/_DSC0169.jpg", className: "md:col-span-1 md:row-span-1", alt: "Outdoor Event" },
  { src: "/images/_DSC0077.jpg", className: "md:col-span-1 md:row-span-1", alt: "Team Photo" },
  { src: "/images/_DSC0138.jpg", className: "md:col-span-2 md:row-span-1", alt: "Audience" },
  { src: "/images/_DSC0194.jpg", className: "md:col-span-1 md:row-span-1", alt: "Indoor Event" },
  { src: "/images/_DSC0046.jpg", className: "md:col-span-1 md:row-span-2", alt: "Mentorship" },
  { src: "/images/_DSC0186.jpg", className: "md:col-span-1 md:row-span-1", alt: "Student Engagement" },
  { src: "/images/_DSC0051.jpg", className: "md:col-span-2 md:row-span-2", alt: "Leadership" },
  { src: "/images/IMG_4485.jpg", className: "md:col-span-1 md:row-span-1", alt: "Awards Ceremony" },
];

export default function Gallery() {
  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] relative z-10">
      <SectionHeader
        label="OUR GALLERY"
        title={"MOMENTS OF IMPACT."}
        subtitle="A GLIMPSE INTO OUR JOURNEY OF EMPOWERING AND TRANSFORMING LIVES."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 w-full auto-rows-[250px] xl:auto-rows-[300px]">
        {images.map((item, i) => (
          <div
            key={i}
            className={`group relative w-full h-full bg-white/[0.02] backdrop-blur-lg overflow-hidden border border-white/[0.08] hover:border-[#A855F7] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] ${item.className || ''}`}
          >
            {/* Fallback pattern */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center font-ibm-mono text-[#A855F7] text-center p-4">
              [IMAGE PLACEHOLDER]
            </div>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = '0';
              }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#A855F7]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="font-ibm-mono text-[12px] font-bold text-white tracking-[2px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {item.alt.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full pt-4">
        <a href="/gallery" className="flex items-center justify-center w-full sm:w-[260px] h-[56px] bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-[#A855F7] transition-colors shadow-lg group">
          <span className="font-ibm-mono text-[12px] font-bold text-[#888888] group-hover:text-white tracking-[2px] transition-colors">
            VIEW FULL GALLERY &gt;
          </span>
        </a>
      </div>
    </section>
  );
}
