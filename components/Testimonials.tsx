"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    lens: "THE CONFERENCE",
    headline: "Pushing\nfor growth.",
    quote:
      "My first experience with QPSI was the Kings Conference 2024 and it was an amazing meeting. I loved the fact that they are also pushing for growth.",
    name: "FAITHFUL ATEWE",
    role: "CONFERENCE ATTENDEE",
    footer: "THE ROOM CHANGED SOMETHING.",
  },
  {
    lens: "THE MASTERCLASS",
    headline: "What I am\nreally made of.",
    quote:
      "Queens Palm Masterclass helped me discover what I am really made of. I'm grateful to have learnt so much about Emotional Intelligence, Digital Media Literacy, Leadership Skills, and Personal Branding.",
    name: "JENNIFER DAVID",
    role: "MASTERCLASS PARTICIPANT",
    footer: "FOUR SKILLS. ONE SHIFT.",
  },
  {
    lens: "THE DISCIPLINE",
    headline: "Discipline\nover excuses.",
    quote:
      "Juggling SIWES and a demanding VA course was tough, but reminders like “discipline over excuses” kept me going. I learnt to prioritize, manage my time effectively, and build resilience.",
    name: "OLASHILE HASSAN",
    role: "MASTERCLASS PARTICIPANT",
    footer: "RESILIENCE IS BUILT, NOT GIVEN.",
  },
  {
    lens: "THE GRATITUDE",
    headline: "Golden\nnuggets.",
    quote:
      "Thank you so much QPSI, thank you Sabrina for impacting lives. It is a privilege to have received the golden nuggets shared all through the masterclass. I look forward to the next.",
    name: "PRISCILLA ADESOMO",
    role: "MASTERCLASS PARTICIPANT",
    footer: "GOD BLESS QPSI.",
  },
  {
    lens: "THE INSIGHT",
    headline: "Emotional\nintelligence.",
    quote:
      "Many thanks to Queens Palm Support Initiative for the free Masterclass. Personally, it was so insightful and informative. The class on Emotional Intelligence made a real impact on me.",
    name: "IRENE ADESOTU",
    role: "MASTERCLASS PARTICIPANT",
    footer: "INSIGHTFUL. INFORMATIVE.",
  },
  {
    lens: "THE LEADERSHIP",
    headline: "Beyond title\nor position.",
    quote:
      "The Masterclass session on Leadership skills had a profound impact on me. The topic Strategic Leadership was eye-opening, revealing that true leadership extends far beyond title or position.",
    name: "DEBORAH OLUKOTAN",
    role: "MASTERCLASS PARTICIPANT",
    footer: "LEAD WHERE YOU STAND.",
  },
];

/**
 * Fan geometry. Cards sit in a shallow arc; hovering one squares it up and
 * lifts it while its neighbours swing further out of the way.
 */
function fanStyle(i: number, count: number, active: number | null) {
  const mid = (count - 1) / 2;
  const offset = i - mid;

  const baseRot = offset * 3.2;
  const baseX = offset * 4;
  const baseY = Math.abs(offset) * 9;

  if (active === null) {
    return {
      transform: `translate3d(${baseX}px, ${baseY}px, 0) rotate(${baseRot}deg)`,
      zIndex: 10 + Math.round(count - Math.abs(offset)),
      opacity: 1,
    };
  }

  if (active === i) {
    return {
      transform: `translate3d(${baseX}px, ${baseY - 34}px, 0) rotate(0deg) scale(1.06)`,
      zIndex: 100,
      opacity: 1,
    };
  }

  // Neighbours stay organized in their fan but sink, fade slightly, and cascade under the active card
  const away = i < active ? -1 : 1;
  const falloff = Math.max(0, 3 - Math.abs(i - active)) / 3;
  return {
    transform:
      `translate3d(${baseX + away * (10 + 15 * falloff)}px, ${baseY + 16}px, 0) ` +
      `rotate(${baseRot}deg) scale(0.95)`,
    zIndex: 10 - Math.abs(i - active),
    opacity: 0.4,
  };
}

export default function Testimonials() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="flex flex-col w-full bg-transparent py-16 md:py-[100px] gap-12 md:gap-[48px] relative z-10 overflow-hidden">
      <div className="px-6 md:px-[120px]">
        <SectionHeader
          label="TESTIMONIALS"
          title={"REAL PEOPLE.\nREAL IMPACT."}
        />
      </div>

      {/* ---- Fanned deck (lg and up) ---- */}
      <div
        className="hidden lg:flex items-start justify-center w-full px-4 xl:px-10 pt-6 pb-16"
        onMouseLeave={() => setActive(null)}
      >
        <div className="flex items-start justify-center -space-x-[110px] xl:-space-x-[154px]">
          {testimonials.map((t, i) => {
            const s = fanStyle(i, testimonials.length, active);
            return (
              <article
                key={t.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
                aria-label={`Testimonial from ${t.name}`}
                className="group relative w-[230px] xl:w-[300px] shrink-0 origin-bottom cursor-pointer outline-none transition-[transform,opacity] duration-500 ease-out will-change-transform motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                style={s}
              >
                <div className="flex flex-col h-full min-h-[470px] xl:min-h-[520px] p-7 xl:p-8 rounded-[14px] bg-white/[0.035] backdrop-blur-xl border border-white/[0.1] group-hover:border-[#A855F7] group-focus-visible:border-[#A855F7] shadow-[0_18px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_44px_rgba(168,85,247,0.35)] transition-[border-color,box-shadow] duration-500">
                  {/* Eyebrow */}
                  <div className="flex items-baseline gap-2 pb-3 border-b border-white/[0.09]">
                    <span className="font-ibm-mono text-[9px] font-bold text-[#A855F7] tracking-[1.5px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-ibm-mono text-[9px] text-[#777] tracking-[1.5px] truncate">
                      / {t.lens}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-grotesk text-[27px] xl:text-[31px] font-bold text-[#F5F5F0] tracking-[-0.8px] leading-[1.1] whitespace-pre-line mt-5 group-hover:text-[#A855F7] transition-colors duration-300 break-words">
                    {t.headline}
                  </h3>

                  {/* Quote */}
                  <p className="font-ibm-mono text-[11.5px] xl:text-[12.5px] text-[#AAAAAA] leading-[1.75] tracking-[0.3px] mt-4 break-words">
                    {t.quote}
                  </p>

                  {/* Attribution */}
                  <div className="mt-auto pt-5">
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.09]">
                      <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#1A1A1A] border border-white/[0.1] shrink-0 font-grotesk text-[11px] font-bold text-[#A855F7]">
                        {t.name[0]}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="font-grotesk text-[13px] font-bold text-[#F5F5F0] tracking-[0.8px] truncate">
                          {t.name}
                        </span>
                        <span className="font-ibm-mono text-[9px] text-[#777] tracking-[1px] truncate">
                          {t.role}
                        </span>
                      </div>
                    </div>
                    <span className="block font-ibm-mono text-[8px] text-[#4a4a4a] tracking-[1.5px] mt-3 truncate">
                      {t.footer}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ---- Swipeable cards (below lg) ---- */}
      <div className="lg:hidden w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 px-6 pb-6">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              aria-label={`Testimonial from ${t.name}`}
              className="snap-center shrink-0 w-[84vw] max-w-[380px] flex flex-col p-6 sm:p-7 rounded-[14px] bg-white/[0.035] backdrop-blur-xl border border-white/[0.1] shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-baseline gap-2 pb-3 border-b border-white/[0.09]">
                <span className="font-ibm-mono text-[9px] font-bold text-[#A855F7] tracking-[1.5px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-ibm-mono text-[9px] text-[#777] tracking-[1.5px] truncate">
                  / {t.lens}
                </span>
              </div>

              <h3 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.15] whitespace-pre-line mt-4 break-words">
                {t.headline}
              </h3>

              <p className="font-ibm-mono text-[11px] text-[#AAAAAA] leading-[1.75] tracking-[0.3px] mt-3 break-words">
                {t.quote}
              </p>

              <div className="mt-auto pt-5">
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.09]">
                  <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#1A1A1A] border border-white/[0.1] shrink-0 font-grotesk text-[11px] font-bold text-[#A855F7]">
                    {t.name[0]}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-grotesk text-[12px] font-bold text-[#F5F5F0] tracking-[0.8px] truncate">
                      {t.name}
                    </span>
                    <span className="font-ibm-mono text-[9px] text-[#777] tracking-[1px] truncate">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="hidden lg:block text-center font-ibm-mono text-[10px] text-[#555555] tracking-[2px]">
        HOVER A CARD TO BRING IT FORWARD
      </p>
      <p className="lg:hidden text-center font-ibm-mono text-[10px] text-[#555555] tracking-[2px] px-6">
        SWIPE TO READ MORE
      </p>
    </section>
  );
}
