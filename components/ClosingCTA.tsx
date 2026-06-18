"use client";

import GlitchText from "@/components/GlitchText";

export default function ClosingCTA() {
  return (
    <section className="flex flex-col items-center w-full bg-[#0A0A0A] py-16 px-6 md:p-[120px] gap-10 md:gap-[48px] border-t-2 border-t-[#A855F7]">
      {/* Badge */}
      <div className="flex items-center justify-center gap-[8px] h-[32px] px-[16px] bg-[#1A1A1A] border-2 border-[#A855F7]">
        <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
          <GlitchText text="[GET IN TOUCH]" speed={30} />
        </span>
      </div>

      {/* Title */}
      <h2 className="font-grotesk text-[36px] md:text-[64px] font-bold text-[#F5F5F0] tracking-[-2px] leading-none text-center w-full max-w-[900px] whitespace-pre-line">
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

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[16px] w-full sm:w-auto">
        <a
          href="tel:+2348169105349"
          className="flex items-center justify-center w-full sm:w-[260px] h-[64px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors"
        >
          <span className="font-grotesk text-[13px] font-bold text-white tracking-[2px]">
            +234 816 910 5349
          </span>
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center w-full sm:w-[220px] h-[64px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#888888] transition-colors"
        >
          <span className="font-ibm-mono text-[12px] text-[#666666] tracking-[2px]">
            CONTACT PAGE &gt;
          </span>
        </a>
      </div>
    </section>
  );
}
