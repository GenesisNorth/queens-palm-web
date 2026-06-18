import ProgramDetailLayout from "@/components/ProgramDetailLayout";

export default function SoftSkillDevelopmentPage() {
  return (
    <ProgramDetailLayout
      title="SOFT SKILL DEVELOPMENT"
      tag="SOFT SKILLS"
      description="Soft skills are the foundation of professional success in today's workplace. Our soft skill development programs help individuals sharpen essential skills — communication, problem-solving, emotional intelligence, and teamwork."
    >
      <div className="flex flex-col gap-6">
        <h3 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px]">
          The Foundation of Professional Success
        </h3>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          We provide tailored workshops and training sessions that enable participants to excel in both
          their personal and professional lives. Hard skills might get you the job, but soft skills are
          what help you build a lasting and fulfilling career.
        </p>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          Our curriculum focuses heavily on communication (both verbal and non-verbal), emotional
          intelligence, and the ability to collaborate effectively in diverse environments.
        </p>
        
        <div className="flex flex-col gap-4 mt-4 p-6 bg-[#111111] border-l-2 border-l-[#A855F7]">
          <h4 className="font-grotesk text-[18px] font-bold text-[#F5F5F0]">Key Skills Covered:</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Verbal and Non-verbal Communication</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Emotional Intelligence and Self-Awareness</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Teamwork, Poise, and Professional Etiquette</span>
            </li>
          </ul>
        </div>
      </div>
    </ProgramDetailLayout>
  );
}
