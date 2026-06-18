import ProgramDetailLayout from "@/components/ProgramDetailLayout";

export default function EntrepreneurshipTrainingPage() {
  return (
    <ProgramDetailLayout
      title="ENTREPRENEURSHIP TRAINING"
      tag="ENTREPRENEURSHIP"
      description="Entrepreneurship is at the heart of innovation and economic growth. Our entrepreneurship training programs offer aspiring entrepreneurs the knowledge, tools, and resources to turn their ideas into successful ventures."
    >
      <div className="flex flex-col gap-6">
        <h3 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] tracking-[-0.5px]">
          Turn Your Ideas Into Reality
        </h3>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          Whether you're just starting or looking to grow an existing business, we provide
          comprehensive support through every stage of your entrepreneurial journey. We help you
          build resilience, adapt to market changes, and execute your vision with precision.
        </p>
        <p className="font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          Our training covers everything from idea validation and business planning to financial
          literacy and marketing. You will learn to navigate the challenges of entrepreneurship
          with a strong community backing you up.
        </p>
        
        <div className="flex flex-col gap-4 mt-4 p-6 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-l-4 border-l-[#A855F7]">
          <h4 className="font-grotesk text-[18px] font-bold text-[#F5F5F0]">Core Components:</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Business Planning and Strategy Execution</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Financial Literacy and Resource Management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#A855F7] mt-[2px]">&gt;</span>
              <span className="font-ibm-mono text-[13px] text-[#888888] tracking-[0.5px] leading-[1.6]">Innovation and Market Adaptability</span>
            </li>
          </ul>
        </div>
      </div>
    </ProgramDetailLayout>
  );
}
