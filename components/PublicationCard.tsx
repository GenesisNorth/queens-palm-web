"use client";

import Link from "next/link";

interface PublicationCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  href: string;
}

export default function PublicationCard({ title, excerpt, category, image, href }: PublicationCardProps) {
  return (
    <div className="flex flex-col w-full bg-[#111111] border border-[#2D2D2D] hover:border-[#A855F7] transition-colors group h-full">
      {/* Image container */}
      <div className="relative w-full aspect-[16/9] bg-[#0A0A0A] overflow-hidden border-b border-[#2D2D2D]">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center font-ibm-mono text-[#A855F7]">
          [COVER IMAGE]
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = '0';
          }}
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center justify-center h-[28px] px-[12px] bg-[#A855F7]">
          <span className="font-ibm-mono text-[10px] font-bold text-white tracking-[2px]">
            {category.toUpperCase()}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col p-6 md:p-[32px] gap-4 flex-1">
        <h3 className="font-grotesk text-[18px] md:text-[22px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.2]">
          {title}
        </h3>
        <p className="font-ibm-mono text-[12px] text-[#888888] tracking-[0.5px] leading-[1.7] line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-auto pt-4">
          <Link href={href} className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px] hover:underline">
            READ MORE &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}
