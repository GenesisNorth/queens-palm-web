import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import EventRegistrationForm from "@/components/EventRegistrationForm";

export const metadata: Metadata = {
  title: "Register · QPSI 3rd Anniversary Event",
  description:
    "Register now for the Queens Palm Support Initiative (QPSI) 3rd Anniversary event. Join us to celebrate 3 years of youth empowerment, soft skills development, and impactful leadership.",
  openGraph: {
    title: "Register · QPSI 3rd Anniversary Event",
    description:
      "Reserve your place for the QPSI 3rd Anniversary. Empowering young individuals with vital soft skills, emotional intelligence, and transformative leadership.",
    images: [{ url: "/images/qpsi-anniversary.jpg", width: 1080, height: 1350, alt: "QPSI 3rd Anniversary" }],
  },
};

const faqs = [
  {
    q: "Who is eligible to attend the 3rd Anniversary Event?",
    a: "Everyone! Whether you are a student, emerging professional, entrepreneur, previous QPSI participant, or simply someone passionate about personal growth and community impact, you are warmly invited to register.",
  },
  {
    q: "Is there any fee to register or attend?",
    a: "Registration is completely free! However, seats and venue capacities are strictly allocated on a first-come, first-reserved basis.",
  },
  {
    q: "Where does registration take place?",
    a: "Registration is hosted directly right here on this website! Fill out the official form above to secure your seat. You will instantly receive a confirmation Pass ID, and your details are recorded directly with QPSI.",
  },
  {
    q: "Can I volunteer or support the anniversary celebration?",
    a: "Yes! On the registration form, there is a dedicated question where you can indicate your interest in volunteering or partnering with QPSI for this and future programmes.",
  },
];

export default function RegisterPage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[100px] md:pt-[120px] relative z-10 overflow-hidden min-h-screen">
      {/* Ambient Glows */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[500px] bg-gradient-to-b from-[#A855F7]/20 via-[#7C3AED]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#A855F7]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="flex flex-col items-center w-full px-6 md:px-[60px] lg:px-[100px] py-12 md:py-16 max-w-[1400px] mx-auto">
        {/* Floating Eyebrow Pill */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.1] shadow-[0_4px_24px_rgba(0,0,0,0.3)] mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]"></span>
          </span>
          <span className="font-ibm-mono text-[11px] md:text-[12px] font-bold text-[#F5F5F0] tracking-[2px] uppercase">
            Official Event Registration · Free Admission
          </span>
        </div>

        {/* Big Typography Header */}
        <h1 className="font-grotesk text-[clamp(36px,7vw,84px)] font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F5F5F0] to-[#999999] tracking-[-2px] md:tracking-[-3px] leading-[1.0] max-w-[1100px] drop-shadow-2xl">
          QPSI 3RD ANNIVERSARY<br />
          <span className="text-[#A855F7]">ANTICIPATE &amp; CELEBRATE</span>
        </h1>

        <p className="font-ibm-mono text-[13px] md:text-[16px] text-[#A0A0A0] tracking-[0.5px] leading-[1.8] text-center max-w-[820px] mt-6">
          Three years of transformative impact, empowered minds, and lasting change.
          Register directly below to secure your badge and be part of an unforgettable celebration.
        </p>

        {/* Spotlight Grid: Left Sticky Info + Right Live Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full mt-12 md:mt-16 items-start">
          
          {/* Left Column: Artwork & Event Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-[120px]">
            <div className="group relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/[0.12] bg-[#0A0A0A]/60 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.6)] hover:border-[#A855F7] transition-all duration-700 flex items-center justify-center">
              <Image
                src="/images/qpsi-anniversary.jpg"
                alt="Queens Palm Support Initiative 3rd Anniversary Official Artwork"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Quick Highlights Card */}
            <div className="p-6 rounded-[2rem] bg-white/[0.02] backdrop-blur-md border border-white/[0.08] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="font-ibm-mono text-[11px] font-bold text-white tracking-[2px] uppercase">
                  Event Snapshot
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-ibm-mono text-[9px] text-[#888] tracking-[1px] block">ADMISSION</span>
                  <span className="font-grotesk text-[13px] font-bold text-[#A855F7]">Free / Required</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-ibm-mono text-[9px] text-[#888] tracking-[1px] block">FORMAT</span>
                  <span className="font-grotesk text-[13px] font-bold text-white">Conference &amp; Gala</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-ibm-mono text-[9px] text-[#888] tracking-[1px] block">COMMUNITY</span>
                  <span className="font-grotesk text-[13px] font-bold text-white">Youth &amp; Leaders</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="font-ibm-mono text-[9px] text-[#888] tracking-[1px] block">CONFIRMATION</span>
                  <span className="font-grotesk text-[13px] font-bold text-[#A855F7]">Instant Pass ID</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between font-ibm-mono text-[11px] text-[#888]">
                <span>Questions? Contact us:</span>
                <a href="mailto:queenspalmsi@gmail.com" className="text-[#A855F7] hover:underline">
                  queenspalmsi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Registration Form */}
          <div className="lg:col-span-7 w-full">
            <EventRegistrationForm />
          </div>
        </div>
      </section>

      {/* Photo Highlights / Milestones Gallery (Showing New Images Cleanly Without Text Overlays) */}
      <section className="flex flex-col w-full py-16 px-6 md:py-[100px] md:px-[120px] max-w-[1400px] mx-auto border-t border-white/[0.08]">
        <SectionHeader
          label="OUR JOURNEY SO FAR"
          title={"THREE YEARS OF\nUNFORGETTABLE MOMENTS."}
          subtitle="GLIMPSES INTO OUR MILESTONE CELEBRATIONS, TEAM DEDICATION, AND COMMUNITY REACH."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 w-full auto-rows-[260px] xl:auto-rows-[300px] mt-12 md:mt-16">
          
          {/* Card 1: gen.jpg */}
          <div className="group relative w-full h-full sm:col-span-2 sm:row-span-2 rounded-[2rem] overflow-hidden border border-white/[0.08] hover:border-[#A855F7] transition-all duration-500 shadow-2xl">
            <Image
              src="/images/gen.jpg"
              alt="QPSI Executive & Leadership Team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          {/* Card 2: 0fba7acf... Anniversary Cake */}
          <div className="group relative w-full h-full sm:col-span-2 sm:row-span-1 rounded-[2rem] overflow-hidden border border-white/[0.08] hover:border-[#A855F7] transition-all duration-500 shadow-2xl">
            <Image
              src="/images/0fba7acf-a79e-4691-9cd9-f48bf3ab9988.jpg"
              alt="QPSI Anniversary Celebration & Award Plaque"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          {/* Card 3: 4d991eac... Flagship Launch Women Leaders */}
          <div className="group relative w-full h-full sm:col-span-1 sm:row-span-1 rounded-[2rem] overflow-hidden border border-white/[0.08] hover:border-[#A855F7] transition-all duration-500 shadow-2xl">
            <Image
              src="/images/4d991eac-7ef3-49e5-806a-3d4cefd4eaed.jpg"
              alt="Flagship Launch Women Leaders"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          {/* Card 4: 647045ef... Youth Celebration */}
          <div className="group relative w-full h-full sm:col-span-1 sm:row-span-1 rounded-[2rem] overflow-hidden border border-white/[0.08] hover:border-[#A855F7] transition-all duration-500 shadow-2xl">
            <Image
              src="/images/647045ef-6e3c-4905-b9f0-b5b691e4244c.jpg"
              alt="Youth Empowerment & Community"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

        </div>

        <div className="flex justify-center w-full pt-10">
          <Link
            href="/gallery"
            className="flex items-center justify-center px-8 py-4 rounded-full bg-white/[0.02] border border-white/[0.08] hover:border-[#A855F7] hover:bg-white/[0.05] transition-all group"
          >
            <span className="font-ibm-mono text-[12px] font-bold text-[#888888] group-hover:text-white tracking-[2px] transition-colors">
              VIEW FULL GALLERY ARCHIVE →
            </span>
          </Link>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="flex flex-col w-full py-16 px-6 md:py-[100px] md:px-[120px] max-w-[1200px] mx-auto border-t border-white/[0.08]">
        <SectionHeader
          label="FREQUENTLY ASKED QUESTIONS"
          title={"COMMON QUESTIONS\nABOUT REGISTRATION."}
        />

        <div className="flex flex-col gap-4 w-full mt-12 md:mt-16">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] hover:border-[#A855F7]/40 transition-colors"
            >
              <h3 className="font-grotesk text-[18px] md:text-[20px] font-bold text-[#F5F5F0] tracking-[-0.5px] mb-3 flex items-start gap-3">
                <span className="text-[#A855F7] shrink-0 font-ibm-mono text-[14px] mt-0.5">
                  Q{idx + 1}.
                </span>
                {faq.q}
              </h3>
              <p className="font-ibm-mono text-[13px] md:text-[14px] text-[#888888] leading-[1.8] pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Registration Banner */}
      <section className="flex flex-col items-center justify-center w-full py-20 px-6 md:py-[140px] md:px-[120px] border-t border-white/[0.08] relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A855F7]/15 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
          <span className="font-ibm-mono text-[10px] font-bold text-white tracking-[2px] uppercase">
            Limited Capacity · Early Booking
          </span>
        </div>

        <h2 className="font-grotesk text-[clamp(32px,6vw,64px)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#A0A0A0] tracking-[-2px] leading-[1.1] max-w-[850px] drop-shadow-xl">
          BE PART OF OUR HISTORIC 3RD ANNIVERSARY.
        </h2>

        <p className="font-ibm-mono text-[12px] md:text-[15px] text-[#888888] tracking-[0.5px] max-w-[620px] mt-4 mb-8">
          Fill out the official registration form above to confirm your seat and receive your pass.
        </p>

        <a
          href="#register-form"
          className="group relative flex items-center justify-center px-10 py-5 rounded-full bg-[#A855F7] hover:bg-[#9333EA] text-white transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] hover:scale-105"
        >
          <span className="font-grotesk text-[14px] font-bold tracking-[2px]">
            COMPLETE REGISTRATION FORM ↑
          </span>
        </a>

        {/* Support hotline & email */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-12 pt-8 border-t border-white/[0.08] font-ibm-mono text-[11px] text-[#777777]">
          <span>Need help with registration?</span>
          <a href="tel:+2348169105349" className="hover:text-[#A855F7] transition-colors">
            +234 816 910 5349
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:queenspalmsi@gmail.com" className="hover:text-[#A855F7] transition-colors">
            queenspalmsi@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
