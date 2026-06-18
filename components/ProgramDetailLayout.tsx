"use client";

import Link from "next/link";
import GlitchText from "@/components/GlitchText";
import SectionHeader from "@/components/SectionHeader";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

interface ProgramDetailLayoutProps {
  title: string;
  tag: string;
  description: string;
  children: React.ReactNode;
}

export default function ProgramDetailLayout({
  title,
  tag,
  description,
  children,
}: ProgramDetailLayoutProps) {
  return (
    <main className="flex flex-col w-full bg-[#0A0A0A] pt-[96px]">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] gap-8 border-b border-[#1D1D1D]">
        <div className="flex items-center justify-center gap-[8px] h-[32px] px-[16px] bg-[#1A1A1A] border border-[#A855F7]">
          <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
            <GlitchText text={`[${tag}]`} speed={30} />
          </span>
        </div>
        <h1 className="font-grotesk text-[32px] md:text-[56px] font-bold text-[#F5F5F0] tracking-[-1px] leading-none text-center w-full max-w-[800px] whitespace-pre-line">
          <GlitchText text={title} speed={40} delay={150} />
        </h1>
        <p className="font-ibm-mono text-[12px] md:text-[14px] text-[#888888] tracking-[0.5px] leading-[1.8] text-center w-full max-w-[700px]">
          {description}
        </p>
      </section>

      {/* Content */}
      <section className="flex flex-col items-center w-full bg-[#050505] py-16 px-6 md:py-[100px] gap-12">
        <div className="w-full max-w-[800px] flex flex-col gap-8">
          {children}
        </div>
        
        {/* Call to action */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <a
            href={JOIN_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-[260px] h-[56px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors"
          >
            <span className="font-grotesk text-[12px] font-bold text-white tracking-[2px]">
              APPLY FOR PROGRAM
            </span>
          </a>
          <Link
            href="/programs"
            className="flex items-center justify-center w-full sm:w-[220px] h-[56px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors"
          >
            <span className="font-ibm-mono text-[12px] text-[#666666] tracking-[2px]">
              &lt; BACK TO PROGRAMS
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
