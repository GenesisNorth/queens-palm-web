import SectionHeader from "./SectionHeader";

const highlights = [
  {
    title: "EMPOWERING YOUNG MINDS",
    description: "ESSENTIAL SOFT SKILLS FOR SUCCESS IN LIFE AND WORK.",
  },
  {
    title: "QUALITY EDUCATION",
    description: "COMMITTED TO ACCESS TO QUALITY EDUCATION, ALIGNED WITH UN SDG 4.",
  },
  {
    title: "PROVEN TRACK RECORD",
    description: "EMPOWERING YOUNG ADULTS IN LAGOS AND ABUJA.",
  },
  {
    title: "TRANSFORMATIVE IMPACT",
    description: "WITNESSED FIRSTHAND THE POWER OF SOFT SKILLS DEVELOPMENT.",
  },
  {
    title: "INSPIRATIONAL EVENTS",
    description: "IMPACTFUL WORKSHOPS AND CONFERENCES THAT CONNECT YOUNG MINDS.",
  },
  {
    title: "PERSONAL GROWTH",
    description: "GUIDING YOUNG PEOPLE ON A JOURNEY OF SELF-DISCOVERY.",
  },
  {
    title: "COMMUNITY BUILDING",
    description: "FOSTERING A SUPPORTIVE COMMUNITY OF POSITIVE CHANGE-MAKERS.",
  },
  {
    title: "PASSIONATE TEAM",
    description: "A DEDICATED TEAM EXTENDING POSITIVE IMPACT TO YOUNG PEOPLE.",
  },
];

export default function Highlights() {
  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px] relative z-10">
      <SectionHeader
        label="KEY HIGHLIGHTS"
        title={"WHY QPSI\nMATTERS."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-[2px]">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className={`flex flex-col gap-6 p-8 md:p-[40px] w-full border bg-white/[0.02] backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/[0.05] transition-colors ${
              i === 0 ? "border-white/[0.08]" : "border-white/[0.08]"
            }`}
          >
            <span
              className="font-ibm-mono text-[10px] font-bold tracking-[2px]"
              style={{ color: i % 2 === 0 ? "#A855F7" : "#7C3AED" }}
            >
              [{String(i + 1).padStart(2, "0")}]
            </span>
            <h3 className="font-grotesk text-[16px] font-bold text-[#F5F5F0] tracking-[0.5px] leading-[1.2]">
              {h.title}
            </h3>
            <p className="font-ibm-mono text-[11px] text-[#666666] tracking-[0.5px] leading-[1.6]">
              {h.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
