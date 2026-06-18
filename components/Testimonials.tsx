"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    quote:
      "My first experience with QPSI was the Kings Conference 2024 and it was an amazing meeting. I loved the fact that they are also pushing for growth.",
    name: "FAITHFUL ATEWE",
    role: "CONFERENCE ATTENDEE",
  },
  {
    quote:
      "Queens Palms Masterclass helped me discover what I am really made of. I'm grateful to have learnt so much about Emotional Intelligence, Digital Media Literacy, Leadership Skills, and Personal Branding.",
    name: "JENNIFER DAVID",
    role: "MASTERCLASS PARTICIPANT",
  },
  {
    quote:
      "Discipline has been a game-changer for me! Juggling SIWES and a demanding VA course was tough, but reminders like \"discipline over excuses\" kept me going. I learnt to prioritize, manage my time effectively, and build resilience.",
    name: "OLASHILE HASSAN",
    role: "MASTERCLASS PARTICIPANT",
  },
  {
    quote:
      "Thank you so much QPSI, thank you Sabrina for impacting lives. It is a privilege to have received the golden nuggets shared all through the masterclass. I look forward to the next. God bless QPSI!",
    name: "PRISCILLA ADESOMO",
    role: "MASTERCLASS PARTICIPANT",
  },
  {
    quote:
      "Many thanks to Queens Palms Support Initiative for the free Masterclass. Personally, it was so insightful and informative. The class on \"Emotional Intelligence\" made a real impact on me.",
    name: "IRENE ADESOTU",
    role: "MASTERCLASS PARTICIPANT",
  },
  {
    quote:
      "The Masterclass session on Leadership skills had a profound impact on me. The topic \"Strategic Leadership\" was eye-opening, revealing that true leadership extends far beyond title or position.",
    name: "DEBORAH OLUKOTAN",
    role: "MASTERCLASS PARTICIPANT",
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-col w-full bg-transparent py-16 md:py-[100px] gap-12 md:gap-[48px] relative z-10 overflow-hidden">
      <div className="px-6 md:px-[120px]">
        <SectionHeader
          label="TESTIMONIALS"
          title={"REAL PEOPLE.\nREAL IMPACT."}
        />
      </div>

      <div className="relative w-full flex items-center mt-4">
        {/* Continuous sliding track */}
        <div className="flex w-max animate-slide-right hover:[animation-play-state:paused] gap-6 px-3">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex flex-col gap-6 p-8 md:p-[40px] shrink-0 border bg-white/[0.02] backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] w-[320px] md:w-[450px] border-white/[0.08] hover:border-[#A855F7] transition-colors duration-500 rounded-xl"
            >
              <p className="font-ibm-mono text-[13px] text-[#CCCCCC] tracking-[0.5px] leading-[1.7]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-[12px] mt-auto pt-4">
                <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A] border border-white/[0.08] shrink-0 flex items-center justify-center">
                  <span className="font-grotesk text-[12px] font-bold text-[#A855F7]">
                    {t.name[0]}
                  </span>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[1px]">
                    {t.name}
                  </span>
                  <span className="font-ibm-mono text-[11px] text-[#888888] tracking-[1px]">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
