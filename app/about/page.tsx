import SectionHeader from "@/components/SectionHeader";
import Gallery from "@/components/Gallery";
import TeamGrid from "@/components/TeamGrid";
import Link from "next/link";

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
    <main className="flex flex-col w-full bg-transparent pt-[96px] relative z-10">
      
      {/* Intro Section */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
        <SectionHeader
          label="ABOUT US"
          title={"SHARE THE JOY OF\nACHIEVING GLORIOUS\nMOMENTS."}
          subtitle="2+ YEARS OF TRANSFORMATIVE IMPACT — TREMENDOUS IMPACT AND PROGRESS SO FAR."
        />

        <div className="flex flex-col gap-6 p-8 md:p-[40px] bg-[#111111] border border-[#2D2D2D] w-full max-w-[800px]">
          <p className="font-ibm-mono text-[12px] md:text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
            At QPSI, we're deeply committed to the values enshrined in the United Nations
            Sustainable Development Goal 4 (SDG 4) — ensuring everyone has access to quality
            education. We take this a step further by empowering young people, regardless of
            background, with essential soft skills that are critical for success in life and career.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row w-full gap-[2px]">
          <div className="flex flex-col gap-5 p-8 md:p-[40px] bg-[#A855F7] w-full md:flex-1">
            <span className="font-ibm-mono text-[11px] font-bold text-[rgba(255,255,255,0.7)] tracking-[2px]">
              OUR VISION
            </span>
            <h3 className="font-grotesk text-[22px] md:text-[26px] font-bold text-white tracking-[-1px] leading-[1.15]">
              TO EMPOWER INDIVIDUALS TO FLOURISH WITH PURPOSE AND IGNITE POSITIVE
              CHANGE IN THE WORLD.
            </h3>
          </div>
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

      {/* Gallery Section */}
      <Gallery />

      {/* Programs Preview Section */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px]">
        <SectionHeader
          label="PROGRAMS"
          title={"OUR INITIATIVES."}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {programs.map((prog, i) => (
            <div key={prog.title} className="flex flex-col gap-6 p-8 md:p-[40px] bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-[#A855F7] transition-colors group">
              <div className="flex items-center justify-between">
                <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
                  [0{i + 1}]
                </span>
                <Link href={prog.href} className="w-[32px] h-[32px] rounded-full border border-[#3D3D3D] group-hover:border-[#A855F7] flex items-center justify-center transition-colors">
                  <span className="font-grotesk text-[14px] text-[#888888] group-hover:text-[#A855F7] transition-colors">→</span>
                </Link>
              </div>
              
              <h3 className="font-grotesk text-[20px] md:text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.15]">
                {prog.title}
              </h3>
              
              <p className="font-ibm-mono text-[12px] text-[#888888] tracking-[0.5px] leading-[1.7] line-clamp-4">
                {prog.description}
              </p>
              
              <div className="mt-auto pt-4">
                <Link href={prog.href} className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px] hover:underline">
                  READ MORE &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <TeamGrid />

      {/* CTA Section */}
      <section className="flex flex-col items-center w-full bg-transparent py-16 px-6 md:p-[120px] gap-10 md:gap-[48px] border-t border-white/[0.08]">
        <h2 className="font-grotesk text-[36px] md:text-[56px] font-bold text-[#F5F5F0] tracking-[-2px] leading-none text-center w-full max-w-[800px]">
          BRIGHT FUTURE THAT WE CHERISH. WE THRIVE FOR SUCCESS.
        </h2>
        <a
          href={JOIN_FORM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full sm:w-[220px] h-[64px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors"
        >
          <span className="font-grotesk text-[13px] font-bold text-white tracking-[2px]">
            JOIN US
          </span>
        </a>
      </section>
      
    </main>
  );
}
