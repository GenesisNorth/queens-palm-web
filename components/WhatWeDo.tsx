import SectionHeader from "./SectionHeader";

const cards = [
  {
    tag: "01",
    title: "WORKSHOPS",
    description:
      "ENGAGING VIRTUAL, IN-PERSON, HYBRID, CUSTOMIZED, AND PUBLIC WORKSHOPS THAT EQUIP PARTICIPANTS WITH VITAL SOFT SKILLS THEY CAN APPLY IN REAL-WORLD SITUATIONS.",
    accent: "#A855F7",
  },
  {
    tag: "02",
    title: "CONFERENCES",
    description:
      "EVENTS THAT FOSTER PERSONAL GROWTH AND COLLABORATION AMONG PARTICIPANTS, CREATING SPACES FOR LEARNING AND CONNECTION.",
    accent: "#7C3AED",
  },
  {
    tag: "03",
    title: "EMPOWERMENT\nPROGRAMS",
    description:
      "PROGRAMS THAT EQUIP PARTICIPANTS WITH THE SKILLS, KNOWLEDGE, AND ATTITUDES TO BUILD SELF-CONFIDENCE, DEVELOP RESILIENCE, FOSTER A GROWTH MINDSET, AND COMMUNICATE EFFECTIVELY.",
    accent: "#A855F7",
  },
];

export default function WhatWeDo() {
  return (
    <section className="flex flex-col w-full bg-[#0D0D0D] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader
        label="WHAT WE DO"
        title={"BUILDING FUTURES.\nONE SKILL AT A TIME."}
      />

      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {cards.map((card) => (
          <div
            key={card.tag}
            className="flex flex-col gap-5 p-8 md:p-[32px] border w-full md:flex-1 md:h-[320px]"
            style={{ backgroundColor: "#111111", borderColor: card.accent }}
          >
            <div
              className="w-[40px] h-[40px] shrink-0"
              style={{ backgroundColor: card.accent }}
            />
            <h3 className="font-grotesk text-[18px] font-bold text-[#F5F5F0] tracking-[1px] leading-[1.2] whitespace-pre-line">
              {card.title}
            </h3>
            <p className="font-ibm-mono text-[12px] text-[#666666] tracking-[1px] leading-[1.6]">
              {card.description}
            </p>
            <div
              className="flex items-center justify-center h-[28px] px-[12px] bg-[#1A1A1A] border w-fit"
              style={{ borderColor: card.accent }}
            >
              <span
                className="font-ibm-mono text-[11px] tracking-[2px]"
                style={{ color: card.accent }}
              >
                [{card.tag}]
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
