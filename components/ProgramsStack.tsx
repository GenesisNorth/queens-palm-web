"use client";

import Link from "next/link";

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

export default function ProgramsStack() {
  // Duplicate for seamless infinite scrolling
  const duplicatedPrograms = [...programs, ...programs];

  return (
    <div className="relative w-full flex justify-start overflow-hidden py-16 px-4 md:px-8 [perspective:1600px]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes autoScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.25rem)); } /* -50% minus half the gap (gap-10 = 2.5rem, half = 1.25rem) */
        }
        .animate-scrollLeft {
          animation: autoScrollLeft 40s linear infinite;
        }
      `}} />

      {/* Fade edges for a premium look */}
      <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />

      <div className="flex flex-row items-center gap-6 md:gap-10 w-max animate-scrollLeft hover:[animation-play-state:paused]">
        {duplicatedPrograms.map((prog, index) => (
          <div 
            key={index}
            className="relative w-[320px] lg:w-[400px] h-[480px] lg:h-[600px] shrink-0 bg-[#d4d4d8] rounded-[2rem] p-[8px] md:p-[10px] shadow-[20px_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:[transform:rotateY(-5deg)_rotateX(2deg)] [transform:rotateY(-20deg)_rotateX(5deg)] origin-center group"
          >
            {/* Outer metallic edge highlight */}
            <div className="absolute inset-0 rounded-[2rem] border-[2px] border-white/60 pointer-events-none" />
            
            {/* The "Screen" */}
            <div className="relative w-full h-full bg-[#070707] rounded-[1.5rem] overflow-hidden flex flex-col shadow-inner">
              
              {/* Top Status/Header bar */}
              <div className="shrink-0 p-5 md:p-6 pb-4 border-b border-white/[0.06] flex items-center justify-between z-10 bg-[#070707]/90 backdrop-blur-md">
                <span className="font-ibm-mono text-[9px] md:text-[10px] font-bold text-[#A855F7] tracking-[2px]">
                  0{(index % programs.length) + 1} // {prog.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
              </div>

              {/* Content Area */}
              <div className="flex-1 p-5 md:p-8 flex flex-col justify-between z-0">
                <div className="flex flex-col gap-4">
                  <h3 className="font-grotesk text-[24px] lg:text-[32px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] group-hover:text-white transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <p className="font-ibm-mono text-[12px] lg:text-[13px] text-[#999999] leading-[1.7] line-clamp-6">
                    {prog.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center">
                  <Link href={prog.href} className="group/btn relative flex items-center justify-center w-[150px] md:w-[160px] h-[44px] md:h-[48px] rounded-full bg-white/[0.05] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
                    <span className="font-grotesk text-[10px] md:text-[11px] font-bold text-white group-hover/btn:text-black tracking-[2px] transition-colors">
                      READ MORE
                    </span>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
