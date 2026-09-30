import SectionHeader from "@/components/SectionHeader";
import Gallery from "@/components/Gallery";
import TeamGrid from "@/components/TeamGrid";
import Link from "next/link";
import ProgramsStack from "@/components/ProgramsStack";

const JOIN_FORM = "https://forms.gle/fVccqtCVDxbuGPGw6";

const programs = [
  {
    title: "LEADERSHIP DEVELOPMENT",
    description: "Our leadership development program is designed to inspire, guide, and empower the next generation of leaders. We believe leadership is not just about authority but about influence, collaboration, and vision. Through hands-on workshops, expert-led seminars, and personalized coaching, we equip individuals with the skills necessary to lead in any environment — business, communities, or organizations.",
    href: "/programs/leadership-development",
  },
  {
    title: "ENTREPRENEURSHIP TRAINING",
    description: "Entrepreneurship is at the heart of innovation and economic growth. Our entrepreneurship training programs offer aspiring entrepreneurs the knowledge, tools, and resources to turn their ideas into successful ventures. Whether you're just starting or looking to grow an existing business, we provide comprehensive support through every stage of your entrepreneurial journey.",
    href: "/programs/entrepreneurship-training",
  },
  {
    title: "SOFT SKILL DEVELOPMENT",
    description: "Soft skills are the foundation of professional success in today's workplace. Our soft skill development programs help individuals sharpen essential skills — communication, problem-solving, emotional intelligence, and teamwork. We provide tailored workshops and training sessions that enable participants to excel in both their personal and professional lives.",
    href: "/programs/soft-skill-development",
  },
  {
    title: "MENTORSHIP",
    description: "Mentorship is a powerful tool that accelerates learning, personal growth, and career development. We connect individuals with experienced mentors who guide, support, and challenge them to reach their full potential. Our mentorship programs offer one-on-one guidance and create meaningful, long-lasting relationships that foster success.",
    href: "/programs/mentorship",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] relative z-10 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#A855F7]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[30%] right-[-10%] w-[600px] h-[600px] bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Intro Section */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] relative">
        <SectionHeader
          label="ABOUT US"
          title={"SHARE THE JOY OF\nACHIEVING GLORIOUS\nMOMENTS."}
          subtitle="5+ YEARS OF TRANSFORMATIVE IMPACT — TREMENDOUS IMPACT AND PROGRESS SO FAR."
        />

        <div className="flex flex-col gap-6 p-8 md:p-[48px] bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] w-full max-w-[900px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#A855F7]/10 blur-[80px] rounded-full pointer-events-none" />
          <p className="font-ibm-mono text-[13px] md:text-[15px] text-[#CCCCCC] tracking-[0.5px] leading-[1.8] relative z-10">
            At QPSI, we're deeply committed to the values enshrined in the United Nations
            Sustainable Development Goal 4 (SDG 4) — ensuring everyone has access to quality
            education. We take this a step further by empowering young people, regardless of
            background, with essential soft skills that are critical for success in life and career.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row w-full gap-6 lg:gap-8 mt-4">
          <div className="flex flex-col gap-5 p-8 md:p-[48px] bg-gradient-to-br from-[#A855F7] to-[#7C3AED] rounded-[2rem] shadow-[0_20px_40px_rgba(168,85,247,0.3)] w-full md:flex-1 md:min-w-0 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="font-ibm-mono text-[11px] font-bold text-white/80 tracking-[2px] relative z-10">
              OUR VISION
            </span>
            <h3 className="font-grotesk text-[22px] md:text-[24px] xl:text-[28px] font-bold text-white tracking-[-1px] leading-[1.2] break-words relative z-10">
              TO EMPOWER INDIVIDUALS TO FLOURISH WITH PURPOSE AND IGNITE POSITIVE
              CHANGE IN THE WORLD.
            </h3>
          </div>
          <div className="flex flex-col gap-5 p-8 md:p-[48px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-full md:flex-1 md:min-w-0 group hover:border-[#A855F7]/40 transition-colors duration-500">
            <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
              OUR MISSION
            </span>
            <h3 className="font-grotesk text-[22px] md:text-[24px] xl:text-[28px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.2] break-words">
              GUIDING YOUNG PEOPLE ON A JOURNEY OF SELF-DISCOVERY WHERE THEY
              CULTIVATE ESSENTIAL SOFT SKILLS FOR A FULFILLING LIFE.
            </h3>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Programs Preview Section */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px] relative">
        <SectionHeader
          label="PROGRAMS"
          title={"OUR INITIATIVES."}
        />
        
        <div className="w-full pt-8">
          <ProgramsStack />
        </div>
      </section>

      {/* Team Section */}
      <TeamGrid />

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center w-full bg-transparent py-24 px-6 md:py-[160px] md:px-[120px] gap-10 md:gap-[48px] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A855F7]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <h2 className="font-grotesk text-[clamp(32px,6vw,64px)] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#888] tracking-[-2px] leading-[1.1] text-center w-full max-w-[900px] break-words drop-shadow-xl">
          BRIGHT FUTURE THAT WE CHERISH. WE THRIVE FOR SUCCESS.
        </h2>
        
        <a
          href={JOIN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-full sm:w-[240px] h-[64px] rounded-full bg-[#F5F5F0] hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(245,245,240,0.1)] hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:scale-105"
        >
          <span className="font-grotesk text-[14px] font-bold text-[#0A0A0A] tracking-[2px]">
            JOIN US
          </span>
        </a>
      </section>
      
    </main>
  );
}
