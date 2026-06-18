"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

const links = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "PUBLICATIONS", href: "/publications" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="flex items-center justify-center w-full h-[36px] bg-[#A855F7] px-4">
        <a
          href={JOIN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ibm-mono text-[10px] md:text-[11px] font-bold text-white tracking-[1px] md:tracking-[2px] hover:underline text-center"
        >
          ARE YOU DRIVEN AND MOTIVATED TO BE THE BEST? JOIN QPSI NOW! →
        </a>
      </div>

      {/* Floating Pill Wrapper */}
      <div className="w-full px-4 md:px-8 mt-4 md:mt-6 flex justify-center pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-[1000px] flex flex-col overflow-hidden transition-all duration-500"
          style={{
            borderRadius: "28px",
            background: "rgba(20, 20, 20, 0.4)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: scrolled ? "0 16px 40px 0 rgba(0,0,0,0.5)" : "0 8px 32px 0 rgba(0,0,0,0.2)",
          }}
        >
          {/* Main Nav Bar */}
          <div className="flex items-center justify-between h-[64px] px-6 md:px-8 shrink-0">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-[10px] shrink-0 group">
              <span className="w-[10px] h-[10px] bg-[#A855F7] group-hover:scale-110 transition-transform rounded-sm" />
              <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[2.5px]">
                QPSI
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-[28px] lg:gap-[36px]">
              {links.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    className="relative font-ibm-mono text-[10px] tracking-[1.5px] transition-colors duration-150"
                    style={{ color: isActive ? "#A855F7" : "#888" }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLAnchorElement).style.color = "#F5F5F0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = isActive
                        ? "#A855F7"
                        : "#888";
                    }}
                  >
                    {label}
                    <span
                      className="absolute left-0 -bottom-[3px] h-[1.5px] bg-[#A855F7] transition-all duration-300"
                      style={{ width: isActive ? "100%" : "0%" }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={JOIN_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk text-[11px] font-bold text-white bg-[#A855F7] tracking-[1.5px] px-[20px] py-[10px] rounded-full hover:bg-[#9333EA] hover:shadow-[0_0_16px_rgba(168,85,247,0.4)] transition-all"
              >
                JOIN QPSI
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-[32px] h-[32px]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-transform duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-opacity duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-[20px] h-[1.5px] bg-[#F5F5F0] transition-transform duration-300 origin-center"
                style={{
                  transform: menuOpen
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>

          {/* Mobile drawer (expands inside the pill) */}
          <div
            className="md:hidden overflow-hidden transition-all duration-500"
            style={{
              maxHeight: menuOpen ? "400px" : "0px",
              borderTop: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map(({ label, href }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center gap-3 w-full font-ibm-mono text-[11px] font-semibold tracking-[2px] py-[12px] transition-colors"
                    style={{ color: isActive ? "#F5F5F0" : "#888" }}
                  >
                    <span
                      className="w-[4px] h-[4px] rounded-full shrink-0 transition-colors"
                      style={{ background: isActive ? "#A855F7" : "transparent" }}
                    />
                    {label}
                  </Link>
                );
              })}
              <div className="flex flex-col pt-4 pb-2">
                <a
                  href={JOIN_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-grotesk text-[11px] font-bold text-white bg-[#A855F7] tracking-[1.5px] px-[18px] py-[12px] text-center rounded-full hover:bg-[#9333EA] transition-colors"
                >
                  JOIN QPSI
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
