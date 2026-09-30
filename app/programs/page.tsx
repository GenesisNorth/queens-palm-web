import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Services from "@/components/Services";
import ProgramsStack from "@/components/ProgramsStack";

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
    <main className="flex flex-col w-full bg-transparent pt-[96px] relative z-10">
      
      {/* Intro */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px] border-b border-white/[0.08]">
        <SectionHeader
          label="PROGRAMS"
          title={"BUILDING FUTURES.\nONE SKILL AT A TIME."}
          subtitle="EXPLORE OUR COMPREHENSIVE TRAINING PROGRAMS DESIGNED TO EQUIP YOU WITH THE ESSENTIAL SOFT SKILLS FOR SUCCESS."
        />
        
        <div className="w-full pt-8">
          <ProgramsStack />
        </div>
      </section>

      {/* Embedded Services Section */}
      <Services />

    </main>
  );
}
