"use client";

import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const allImages = [
  // Rows 1-5 (from homepage)
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
  
  // Next 5 rows
  { src: "/images/_DSC0111.jpg", className: "md:col-span-2 md:row-span-1", alt: "Audience Seated" },
  { src: "/images/_DSC0040.jpg", className: "md:col-span-1 md:row-span-1", alt: "Volunteers Packing" },
  { src: "/images/_DSC0104.jpg", className: "md:col-span-1 md:row-span-1", alt: "Event Setup" },
  { src: "/images/_DSC0121.jpg", className: "md:col-span-1 md:row-span-1", alt: "People Talking" },
  { src: "/images/_DSC0155.jpg", className: "md:col-span-2 md:row-span-2", alt: "Stage Speaker" },
  { src: "/images/_DSC0080.jpg", className: "md:col-span-1 md:row-span-2", alt: "Group Posing" },
  { src: "/images/_DSC0130.jpg", className: "md:col-span-1 md:row-span-1", alt: "Crowd" },
  { src: "/images/_DSC0175.jpg", className: "md:col-span-1 md:row-span-2", alt: "Speaker In Blue" },
  { src: "/images/_DSC0074.jpg", className: "md:col-span-1 md:row-span-1", alt: "Volunteers" },
  { src: "/images/gallery-2.jpg", className: "md:col-span-2 md:row-span-1", alt: "Past Event" },
  { src: "/images/gallery-3.jpg", className: "md:col-span-1 md:row-span-1", alt: "Community" },
  { src: "/images/_DSC0188.jpg", className: "md:col-span-1 md:row-span-1", alt: "Student Workshop" },
  { src: "/images/_DSC0190.jpg", className: "md:col-span-1 md:row-span-1", alt: "Engaged Students" },

  // More rows to make it massive
  { src: "/images/_DSC0034.jpg", className: "md:col-span-2 md:row-span-2", alt: "Packing Goods" },
  { src: "/images/_DSC0044.jpg", className: "md:col-span-1 md:row-span-1", alt: "Smiling Woman" },
  { src: "/images/_DSC0057.jpg", className: "md:col-span-1 md:row-span-2", alt: "Event Speaker" },
  { src: "/images/_DSC0060.jpg", className: "md:col-span-1 md:row-span-1", alt: "Team Work" },
  { src: "/images/_DSC0084.jpg", className: "md:col-span-1 md:row-span-1", alt: "Group Posing" },
  { src: "/images/_DSC0087.jpg", className: "md:col-span-2 md:row-span-1", alt: "Posing Together" },
  { src: "/images/_DSC0094.jpg", className: "md:col-span-1 md:row-span-1", alt: "Panel Setup" },
  { src: "/images/_DSC0098.jpg", className: "md:col-span-1 md:row-span-2", alt: "Products" },
  { src: "/images/_DSC0109.jpg", className: "md:col-span-1 md:row-span-1", alt: "Event Banner" },
  { src: "/images/_DSC0147.jpg", className: "md:col-span-2 md:row-span-2", alt: "Engaging Speaker" },
  { src: "/images/_DSC0172.jpg", className: "md:col-span-1 md:row-span-1", alt: "Speaker" },
];

export default function GalleryPage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] min-h-screen relative z-10">
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] border-b border-white/[0.08]">
        <SectionHeader
          label="FULL GALLERY"
          title={"ALL MOMENTS OF IMPACT."}
          subtitle="EXPLORE OUR COMPREHENSIVE COLLECTION OF EMPOWERMENT AND TRANSFORMATION."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 w-full auto-rows-[250px] xl:auto-rows-[300px]">
          {allImages.map((item, i) => (
            <div
              key={i}
              className={`group relative w-full h-full bg-white/[0.02] backdrop-blur-lg overflow-hidden border border-white/[0.08] hover:border-[#A855F7] transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] ${item.className || ''}`}
            >
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

              <div className="absolute inset-0 bg-gradient-to-t from-[#A855F7]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="font-ibm-mono text-[12px] font-bold text-white tracking-[2px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.alt.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center w-full pt-16">
          <Link href="/" className="flex items-center justify-center w-full sm:w-[260px] h-[56px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#A855F7] transition-colors">
            <span className="font-ibm-mono text-[12px] font-bold text-[#888888] tracking-[2px]">
              &lt; BACK TO HOMEPAGE
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
