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
    <footer className="flex flex-col w-full bg-[#050505]">
      {/* Top */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-[60px] lg:gap-[80px] px-6 md:px-[120px] py-12 md:py-[64px]">
        {/* Brand */}
        <div className="flex flex-col gap-6 md:w-[280px] md:shrink-0">
          <div className="flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] bg-[#A855F7] shrink-0" />
            <span className="font-grotesk text-[16px] font-bold text-[#A855F7] tracking-[3px]">
              QPSI
            </span>
          </div>
          <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6] max-w-[260px]">
            EMPOWERING YOUNG PEOPLE WITH ESSENTIAL SOFT SKILLS THAT ARE TIMELESS
            AND INVALUABLE FOR SUCCESS IN LIFE AND CAREER.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+2348169105349"
              className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] hover:text-[#A855F7] transition-colors"
            >
              +234 816 910 5349
            </a>
            <a
              href="mailto:contact@queenspalmsi.com"
              className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] hover:text-[#A855F7] transition-colors"
            >
              CONTACT@QUEENSPALMSI.COM
            </a>
            <span className="font-ibm-mono text-[11px] text-[#555555] tracking-[1px] leading-[1.6]">
              11 JIMOH SOBOWALE ST, MAGODO PHASE 1, ISHERI, LAGOS
            </span>
          </div>

          {/* Social links */}
          <div className="flex gap-[12px]">
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
                className="flex items-center justify-center w-[36px] h-[36px] bg-[#111111] border border-[#2D2D2D] hover:border-[#A855F7] hover:text-[#A855F7] transition-colors"
              >
                <span className="font-grotesk text-[10px] font-bold text-[#AAAAAA]">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-1 gap-8 md:gap-[60px] lg:gap-[80px]">
          {[
            { heading: "PROGRAMS", links: programLinks },
            { heading: "EXPLORE", links: exploreLinks },
            { heading: "SUPPORT", links: supportLinks },
          ].map((col) => (
            <div key={col.heading} className="flex flex-col gap-4 md:gap-[20px]">
              <span className="font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-ibm-mono text-[12px] text-[#888888] tracking-[1px] hover:text-[#CCCCCC] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div className="flex flex-col gap-4 md:gap-[20px] col-span-2 sm:col-span-3 md:col-span-1 md:min-w-[220px]">
            <span className="font-grotesk text-[11px] font-bold text-[#F5F5F0] tracking-[2px]">
              NEWSLETTER
            </span>
            <p className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px] leading-[1.6]">
              BE THE FIRST TO LEARN ABOUT OUR LATEST EVENTS AND ACTIVITIES.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-0 w-full max-w-[320px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
                className="flex-1 h-[40px] px-3 bg-[#111111] border border-[#2D2D2D] border-r-0 font-ibm-mono text-[11px] text-[#F5F5F0] tracking-[1px] placeholder:text-[#444] outline-none focus:border-[#A855F7] transition-colors"
              />
              <button
                type="submit"
                className="h-[40px] px-4 bg-[#A855F7] hover:bg-[#9333EA] transition-colors font-grotesk text-[10px] font-bold text-white tracking-[1.5px] shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-6 md:px-[120px] py-4 md:h-[56px] border-t border-t-[#1D1D1D] gap-3 sm:gap-0">
        <span className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px]">
          © 2025 QUEENS PALMS SUPPORT INITIATIVE. ALL RIGHTS RESERVED.
        </span>
        <div className="flex items-center gap-6 md:gap-[32px]">
          <a
            href="https://queenspalmsi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] hover:text-[#AAAAAA] transition-colors"
          >
            QUEENSPALMSI.ORG
          </a>
          <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[1px]">
            SDG 4
          </span>
        </div>
      </div>
    </footer>
  );
}
