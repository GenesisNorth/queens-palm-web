import SectionHeader from "./SectionHeader";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

const services = [
  {
    title: "LEADERSHIP SKILLS",
    description:
      "NURTURE, GUIDE, LEAD, AND INSPIRE OTHERS TO DEMONSTRATE INTEGRITY AND FAIRNESS AS A TRANSFORMATIVE LEADER.",
    tag: "[LEAD]",
  },
  {
    title: "COMMUNICATION SKILLS",
    description:
      "VERBAL COMMUNICATION, NON-VERBAL COMMUNICATION, AND ACTIVE LISTENING. EXPRESS WITH CONFIDENCE AND CLARITY.",
    tag: "[COMM]",
  },
  {
    title: "EMOTIONAL INTELLIGENCE",
    description:
      "RECOGNIZING AND MANAGING ONE'S EMOTIONS TO ACHIEVE BETTER UNDERSTANDING AND SELF-AWARENESS.",
    tag: "[EQ]",
  },
  {
    title: "POISE AND ETIQUETTE",
    description:
      "REFINED SKILLS AND BEHAVIORS THAT DEMONSTRATE CONFIDENCE, RESPECT, AND CONSIDERATION FOR OTHERS.",
    tag: "[POISE]",
  },
  {
    title: "INCLUSION",
    description:
      "CREATING AN ENVIRONMENT WHERE EVERYONE IS VALUED, RESPECTED, AND SUPPORTED, REGARDLESS OF THEIR DIFFERENCES.",
    tag: "[INCL]",
  },
];

export default function Services() {
  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px] relative z-10">
      <SectionHeader
        label="OUR SERVICES"
        title={"OUR GOAL IS TO EMPOWER\nINDIVIDUALS TO JOIN\nTHE TOP 1% GLOBALLY."}
        titleWidth="w-full max-w-[800px]"
      />

      <div className="flex flex-col w-full gap-[2px]">
        {/* Row 1 — 3 items */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          {services.slice(0, 3).map((s, i) => (
            <div
              key={s.tag}
              className={`flex flex-col gap-5 p-8 md:p-[40px] md:h-[280px] w-full md:flex-1 border bg-white/[0.02] backdrop-blur-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/[0.05] transition-colors ${
                i === 0
                  ? "border-white/[0.08] border-t-[#A855F7]"
                  : "border-white/[0.08]"
              }`}
            >
              <span
                className="font-ibm-mono text-[11px] font-bold tracking-[2px]"
                style={{ color: i === 0 ? "#A855F7" : "#7C3AED" }}
              >
                {s.tag}
              </span>
              <h3 className="font-grotesk text-[20px] md:text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.15]">
                {s.title}
              </h3>
              <p className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] leading-[1.6]">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2 — 2 items */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          {services.slice(3).map((s) => (
            <div
              key={s.tag}
              className="flex flex-col gap-5 p-8 md:p-[40px] md:h-[260px] bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] w-full md:flex-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/[0.05] transition-colors"
            >
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
                {s.tag}
              </span>
              <h3 className="font-grotesk text-[20px] md:text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.15]">
                {s.title}
              </h3>
              <p className="font-ibm-mono text-[11px] text-[#666666] tracking-[1px] leading-[1.6]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[1px]">
          DO YOU WANT TO BE A PART OF QPSI?
        </span>
        <a
          href={JOIN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ibm-mono text-[13px] font-bold text-[#A855F7] tracking-[1px] hover:underline"
        >
          JOIN US TODAY! →
        </a>
      </div>
    </section>
  );
}
