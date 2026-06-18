import ProgramDetailLayout from "@/components/ProgramDetailLayout";

export default function MentorshipPage() {
  return (
    <ProgramDetailLayout
      title="MENTORSHIP"
      tag="MENTORSHIP"
      description="Mentorship is a powerful tool that accelerates learning, personal growth, and career development. We connect individuals with experienced mentors who guide, support, and challenge them to reach their full potential."
    >
      <div className="flex flex-col gap-6">
        <h3 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px]">
          Accelerate Your Growth
        </h3>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          Our mentorship programs offer one-on-one guidance and create meaningful, long-lasting
          relationships that foster success. Whether you need career advice, help navigating
          workplace challenges, or simply someone to bounce ideas off of, our mentors are here
          for you.
        </p>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          We match you with industry professionals who share your values and understand your goals,
          ensuring a mutually beneficial partnership that drives real-world results.
        </p>
        
        <div className="flex flex-col gap-4 mt-4 p-6 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-l-4 border-l-[#A855F7]">
          <h4 className="font-grotesk text-[18px] font-bold text-[#F5F5F0]">The Mentorship Advantage:</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Personalized Guidance and Coaching</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Expanded Professional Network</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Accelerated Skill Acquisition</span>
            </li>
          </ul>
        </div>
      </div>
    </ProgramDetailLayout>
  );
}
