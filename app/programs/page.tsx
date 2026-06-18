import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Services from "@/components/Services";

const programs = [
  {
    title: "LEADERSHIP DEVELOPMENT",
    description: "Our leadership development program is designed to inspire, guide, and empower the next generation of leaders. We believe leadership is not just about authority but about influence, collaboration, and vision. Through hands-on workshops, expert-led seminars, and personalized coaching, we equip individuals with the skills necessary to lead in any environment — business, communities, or organizations.",
    href: "/programs/leadership-development",
    tag: "LEADERSHIP",
  },
  {
    title: "ENTREPRENEURSHIP TRAINING",
    description: "Entrepreneurship is at the heart of innovation and economic growth. Our entrepreneurship training programs offer aspiring entrepreneurs the knowledge, tools, and resources to turn their ideas into successful ventures. Whether you're just starting or looking to grow an existing business, we provide comprehensive support through every stage of your entrepreneurial journey.",
    href: "/programs/entrepreneurship-training",
    tag: "ENTREPRENEURSHIP",
  },
  {
    title: "SOFT SKILL DEVELOPMENT",
    description: "Soft skills are the foundation of professional success in today's workplace. Our soft skill development programs help individuals sharpen essential skills — communication, problem-solving, emotional intelligence, and teamwork. We provide tailored workshops and training sessions that enable participants to excel in both their personal and professional lives.",
    href: "/programs/soft-skill-development",
    tag: "SOFT SKILLS",
  },
  {
    title: "MENTORSHIP",
    description: "Mentorship is a powerful tool that accelerates learning, personal growth, and career development. We connect individuals with experienced mentors who guide, support, and challenge them to reach their full potential. Our mentorship programs offer one-on-one guidance and create meaningful, long-lasting relationships that foster success.",
    href: "/programs/mentorship",
    tag: "MENTORSHIP",
  },
];

export default function ProgramsPage() {
  return (
    <main className="flex flex-col w-full bg-[#0A0A0A] pt-[96px]">
      
      {/* Intro */}
      <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] border-b border-[#1D1D1D]">
        <SectionHeader
          label="PROGRAMS"
          title={"BUILDING FUTURES.\nONE SKILL AT A TIME."}
          subtitle="EXPLORE OUR COMPREHENSIVE TRAINING PROGRAMS DESIGNED TO EQUIP YOU WITH THE ESSENTIAL SOFT SKILLS FOR SUCCESS."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
          {programs.map((prog, i) => (
            <div key={prog.title} className="flex flex-col gap-6 p-8 md:p-[40px] bg-[#111111] border border-[#2D2D2D] hover:border-[#A855F7] transition-colors group">
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">
                [{prog.tag}]
              </span>
              <h3 className="font-grotesk text-[20px] md:text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.15]">
                {prog.title}
              </h3>
              <p className="font-ibm-mono text-[12px] text-[#888888] tracking-[0.5px] leading-[1.7]">
                {prog.description}
              </p>
              <div className="mt-auto pt-4">
                <Link href={prog.href} className="flex items-center gap-2 font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px] hover:underline">
                  EXPLORE PROGRAM <span className="text-[14px] leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Services Section */}
      <Services />

    </main>
  );
}
