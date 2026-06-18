import ProgramDetailLayout from "@/components/ProgramDetailLayout";

export default function LeadershipDevelopmentPage() {
  return (
    <ProgramDetailLayout
      title="LEADERSHIP DEVELOPMENT"
      tag="LEADERSHIP"
      description="Our leadership development program is designed to inspire, guide, and empower the next generation of leaders. We believe leadership is not just about authority but about influence, collaboration, and vision."
    >
      <div className="flex flex-col gap-6">
        <h3 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px]">
          Empowering the Next Generation of Leaders
        </h3>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          Through hands-on workshops, expert-led seminars, and personalized coaching, we equip
          individuals with the skills necessary to lead in any environment — business, communities,
          or organizations.
        </p>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          We nurture, guide, lead, and inspire others to demonstrate integrity and fairness as
          transformative leaders. Our approach ensures that you not only understand the principles
          of leadership but can apply them practically to drive positive change.
        </p>
        
        <div className="flex flex-col gap-4 mt-4 p-6 bg-[#111111] border-l-2 border-l-[#A855F7]">
          <h4 className="font-grotesk text-[18px] font-bold text-[#F5F5F0]">What you will learn:</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Strategic Leadership and Vision Building</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Leading with Integrity and Empathy</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Conflict Resolution and Team Management</span>
            </li>
          </ul>
        </div>
      </div>
    </ProgramDetailLayout>
  );
}
