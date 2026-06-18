import SectionHeader from "./SectionHeader";

export default function AboutPreview() {
  return (
    <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
      <SectionHeader
        label="ABOUT US"
        title={"DISCOVER MORE ABOUT\nWHO WE ARE."}
        subtitle="AT QPSI, WE'RE DEEPLY COMMITTED TO THE VALUES ENSHRINED IN THE UNITED NATIONS SUSTAINABLE DEVELOPMENT GOAL 4 (SDG 4) — ENSURING EVERYONE HAS ACCESS TO QUALITY EDUCATION."
      />

      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {/* About body */}
        <div className="flex flex-col gap-6 p-8 md:p-[40px] bg-[#111111] border border-[#2D2D2D] w-full md:flex-1">
          <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
            We take this a step further by empowering young people, regardless of
            background, with essential soft skills that are critical for success in
            life and career. Our programs are designed to build confidence, develop
            leadership, and foster a growth mindset.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col gap-5 p-8 md:p-[40px] bg-[#A855F7] w-full md:flex-1">
          <span className="font-ibm-mono text-[11px] font-bold text-[rgba(255,255,255,0.7)] tracking-[2px]">
            OUR VISION
          </span>
          <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-white tracking-[-1px] leading-[1.15]">
            TO EMPOWER INDIVIDUALS TO FLOURISH WITH PURPOSE AND IGNITE POSITIVE
            CHANGE IN THE WORLD.
          </h3>
        </div>

        {/* Mission */}
        <div className="flex flex-col gap-5 p-8 md:p-[40px] bg-[#0F0F0F] border-2 border-[#7C3AED] w-full md:flex-1">
          <span className="font-ibm-mono text-[11px] font-bold text-[#7C3AED] tracking-[2px]">
            OUR MISSION
          </span>
          <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.15]">
            GUIDING YOUNG PEOPLE ON A JOURNEY OF SELF-DISCOVERY WHERE THEY
            CULTIVATE ESSENTIAL SOFT SKILLS FOR A FULFILLING LIFE.
          </h3>
        </div>
      </div>
    </section>
  );
}
