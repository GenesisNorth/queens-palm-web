"use client";

import { useState } from "react";
import Link from "next/link";

const programLinks = [
  { label: "Leadership Skills", href: "/programs/leadership-development" },
  { label: "Communication Skills", href: "/programs/soft-skill-development" },
  { label: "Emotional Intelligence", href: "/programs/soft-skill-development" },
  { label: "Financial Literacy", href: "/programs/entrepreneurship-training" },
  { label: "Community Building", href: "/programs" },
];

const exploreLinks = [
  { label: "Networking Strategies", href: "/programs" },
  { label: "Soft Skills", href: "/programs/soft-skill-development" },
  { label: "Mentorship Opportunities", href: "/programs/mentorship" },
  { label: "Where to Find Us", href: "/contact" },
];

const supportLinks = [
  { label: "Help & FAQ", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
  { label: "Publications", href: "/publications" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://forms.gle/fVccqtCVDxbuGPGw6`,
      "_blank"
    );
    setEmail("");
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-16 lg:pt-32 relative z-10 flex justify-center">
      <footer className="flex flex-col w-full max-w-[1400px] bg-[#0A0A0A]/70 backdrop-blur-2xl border border-white/[0.06] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[40px] xl:gap-[56px] px-8 md:px-[64px] xl:px-[80px] py-12 md:py-[64px] relative">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A855F7] opacity-[0.05] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

          {/* Brand */}
          <div className="flex flex-col gap-6 lg:w-[200px] xl:w-[240px] lg:shrink-0 relative z-10">
            <div className="flex items-center gap-[12px]">
              <div className="w-[32px] h-[32px] bg-gradient-to-br from-[#A855F7] to-[#7C3AED] rounded-lg shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
              <span className="font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[3px]">
                QPSI
              </span>
            </div>
            <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.7] max-w-[260px]">
              EMPOWERING YOUNG PEOPLE WITH ESSENTIAL SOFT SKILLS THAT ARE TIMELESS
              AND INVALUABLE FOR SUCCESS IN LIFE AND CAREER.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="tel:+2348169105349"
                className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] hover:text-[#A855F7] transition-colors"
              >
                +234 816 910 5349
              </a>
              <a
                href="mailto:contact@queenspalmsi.com"
                className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] hover:text-[#A855F7] transition-colors break-all"
              >
                CONTACT@QUEENSPALMSI.COM
              </a>
              <span className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px] leading-[1.6]">
                11 JIMOH SOBOWALE ST, MAGODO PHASE 1, ISHERI, LAGOS
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-[12px] mt-2">
              {[
                {
                  label: "IG",
                  href: "https://www.instagram.com/queenspalmsi/",
                },
                {
                  label: "LI",
                  href: "https://www.linkedin.com/company/queen-palm-si/",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#A855F7] hover:bg-[#A855F7]/10 hover:text-[#A855F7] transition-all duration-300"
                >
                  <span className="font-grotesk text-[10px] font-bold text-[#AAAAAA] group-hover:text-[#A855F7]">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-1 gap-8 lg:gap-[28px] xl:gap-[40px] relative z-10">
            {[
              { heading: "PROGRAMS", links: programLinks },
              { heading: "EXPLORE", links: exploreLinks },
              { heading: "SUPPORT", links: supportLinks },
            ].map((col) => (
              <div key={col.heading} className="flex flex-col gap-5 min-w-0 lg:flex-1 lg:min-w-[112px]">
                <span className="font-ibm-mono text-[10px] font-bold text-white tracking-[2px]">
                  {col.heading}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-ibm-mono text-[12px] text-[#777777] tracking-[1px] hover:text-[#A855F7] transition-colors break-words"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Newsletter */}
            <div className="flex flex-col gap-5 col-span-2 sm:col-span-3 lg:col-span-1 min-w-0 lg:flex-[1.3] lg:min-w-[170px]">
              <span className="font-ibm-mono text-[10px] font-bold text-white tracking-[2px]">
                NEWSLETTER
              </span>
              <p className="font-ibm-mono text-[11px] text-[#777777] tracking-[1px] leading-[1.7]">
                BE THE FIRST TO LEARN ABOUT OUR LATEST EVENTS AND ACTIVITIES.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 w-full max-w-[320px] mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className="w-full h-[44px] px-4 rounded-xl bg-white/[0.03] border border-white/[0.08] font-ibm-mono text-[11px] text-[#F5F5F0] tracking-[1px] placeholder:text-[#555] outline-none focus:border-[#A855F7] transition-colors"
                />
                <button
                  type="submit"
                  className="h-[44px] px-6 rounded-xl bg-[#F5F5F0] hover:bg-[#A855F7] text-[#050505] hover:text-white transition-all duration-300 font-grotesk text-[11px] font-bold tracking-[1.5px] w-full"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-8 md:px-[64px] xl:px-[80px] py-6 border-t border-white/[0.06] bg-black/20 gap-4">
          <span className="font-ibm-mono text-[10px] text-[#666666] tracking-[1px] break-words uppercase">
            © 2026 QUEENS PALM SUPPORT INITIATIVE. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-6 md:gap-[32px]">
            <a
              href="https://queenspalmsi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ibm-mono text-[10px] text-[#666666] tracking-[1px] hover:text-[#A855F7] transition-colors uppercase"
            >
              QUEENSPALMSI.ORG
            </a>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
              <span className="font-ibm-mono text-[10px] font-bold text-white tracking-[1px]">
                SDG 4
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
