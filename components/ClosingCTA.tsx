"use client";

import GlitchText from "@/components/GlitchText";

export default function ClosingCTA() {
  return (
    <section className="flex flex-col items-center w-full bg-transparent py-16 px-6 md:p-[120px] gap-10 md:gap-[48px] border-t border-t-white/[0.08] relative z-10">
      {/* Badge */}
      <div className="flex items-center justify-center gap-[8px] h-[32px] px-[16px] bg-[#1A1A1A] border-2 border-[#A855F7]">
        <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
          <GlitchText text="[GET IN TOUCH]" speed={30} />
        </span>
      </div>

      {/* Title */}
      <h2 className="font-grotesk text-[clamp(28px,6.5vw,64px)] font-bold text-[#F5F5F0] tracking-[-2px] leading-none text-center w-full max-w-[900px] whitespace-pre-line break-words">
        <GlitchText
          text={"TO MAKE REQUESTS FOR\nFURTHER INFORMATION,\nCONTACT US."}
          speed={40}
          delay={200}
        />
      </h2>

      {/* Subtitle */}
      <p className="font-ibm-mono text-[11px] md:text-[14px] text-[#666666] tracking-[0.5px] md:tracking-[2px] text-center w-full max-w-[500px]">
        WE JUST NEED A COUPLE OF HOURS!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[16px] w-full sm:w-auto">
        <a
          href="tel:+2348169105349"
          className="group relative flex items-center justify-center w-full sm:w-[260px] h-[64px] rounded-full bg-[#F5F5F0] hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(245,245,240,0.1)] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:scale-105"
        >
          <span className="font-grotesk text-[14px] font-bold text-[#0A0A0A] tracking-[2px]">
            +234 816 910 5349
          </span>
          <div className="absolute inset-0 rounded-full border border-black/10 pointer-events-none" />
        </a>
        
        <a
          href="/contact"
          className="group flex items-center justify-center w-full sm:w-[240px] h-[64px] rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.1] hover:bg-white/[0.08] hover:border-[#A855F7]/50 transition-all duration-300 hover:scale-105"
        >
          <span className="font-ibm-mono text-[13px] text-[#CCCCCC] group-hover:text-white tracking-[2px] transition-colors">
            CONTACT PAGE
          </span>
        </a>
      </div>
    </section>
  );
}
