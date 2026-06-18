"use client";

import Link from "next/link";
import GlitchText from "@/components/GlitchText";

export default function ArticlePage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] min-h-screen relative z-10">
      {/* Hero */}
      <section className="flex flex-col items-center w-full bg-transparent py-16 px-6 md:py-[100px] gap-8 border-b border-white/[0.08]">
        <div className="flex items-center justify-center gap-[8px] h-[32px] px-[16px] bg-[#A855F7]">
          <span className="font-ibm-mono text-[11px] font-bold text-white tracking-[2px]">
            <GlitchText text="[ARTICLE]" speed={30} />
          </span>
        </div>
        <h1 className="font-grotesk text-[32px] md:text-[56px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] text-center w-full max-w-[900px] whitespace-pre-line">
          <GlitchText text="DEAR QUEEN, HERE ARE 10 SOFT SKILLS YOU NEED IN 2025" speed={40} delay={150} />
        </h1>
        
        {/* Cover Image */}
        <div className="w-full max-w-[900px] aspect-[16/9] mt-8 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/crowd.jpg"
            alt="Crowd"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).style.opacity = '0';
            }}
          />
        </div>
      </section>

      {/* Article Body */}
      <section className="flex flex-col items-center w-full bg-transparent py-16 px-6 md:py-[100px] gap-12">
        <div className="w-full max-w-[800px] flex flex-col gap-8 font-ibm-mono text-[14px] text-[#AAAAAA] tracking-[0.5px] leading-[1.8]">
          <p>Hey Queen,</p>
          <p>
            We see you — balancing so many roles, navigating life's twists, showing up for others, and still
            trying to pour into yourself. It's not easy, but you're doing it with grace. And as the world keeps
            changing, so must we — especially in the way we show up, grow, and communicate.
          </p>
          <p>
            At Queens Palms Support Initiative, we believe every woman should have the tools — not just to
            survive, but to truly thrive. So we've put together a list of soft skills that can help you rise
            confidently in 2025, in your career, personal life, and purpose. Let's grow together, shall we?
          </p>
          
          <div className="flex flex-col gap-10 mt-8">
            {[
              { title: "1. Emotional Intelligence (EQ)", desc: "Understanding how you feel, why you feel that way, and how to respond, not react. EQ helps you set boundaries, build stronger relationships, and lead with compassion." },
              { title: "2. Adaptability & Flexibility", desc: "The women who learn to flow, shift, and grow are the ones who flourish. Flexibility doesn't mean weakness — it means wisdom." },
              { title: "3. Critical Thinking", desc: "Ask questions, think deeply, and make choices that align with your values. You deserve to make informed, empowered decisions." },
              { title: "4. Communication Skills", desc: "Whether writing an email, speaking on a panel, or setting boundaries, being able to express yourself clearly and confidently is gold." },
              { title: "5. Collaboration & Teamwork", desc: "Great things happen when we lift each other up, share ideas, and work together with kindness and clarity. Unity is our strength." },
              { title: "6. Creativity & Innovation", desc: "In a world that tries to put women in a box, creativity is how we break out and create something better." },
              { title: "7. Resilience & Stress Management", desc: "Strength also means rest. Learn to pause, breathe, and protect your peace while you chase purpose." },
              { title: "8. Leadership Mindset", desc: "You don't need a title to lead. Leadership is about showing up with vision, integrity, and heart." },
              { title: "9. Time Management & Prioritization", desc: "Your time is precious, Queen. Use it with intention." },
              { title: "10. Cultural Intelligence", desc: "Understanding and respecting different backgrounds makes you a more powerful force for change." }
            ].map(item => (
              <div key={item.title} className="flex flex-col gap-3 p-6 md:p-8 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-l-4 border-l-[#A855F7]">
                <h4 className="font-grotesk text-[20px] font-bold text-[#F5F5F0]">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-[#1D1D1D]">
            <h4 className="font-grotesk text-[24px] font-bold text-[#F5F5F0] mb-4">Final Words, From One Queen to Another</h4>
            <p className="mb-6">
              The world needs more women who are emotionally strong, purpose-driven, and deeply aware of their power. These soft skills aren't just "nice to have" — they're tools for building the future you deserve. Take your time. Grow in your own way. And remember: you're already enough, and still becoming more.
            </p>
            <p>With love and strength,<br/>Queens Palms Support Initiative</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="w-full max-w-[800px] mt-8 pt-8 border-t border-[#1D1D1D]">
          <Link href="/publications" className="flex items-center justify-center w-full sm:w-[260px] h-[56px] bg-[#0A0A0A] border-2 border-[#3D3D3D] hover:border-[#A855F7] transition-colors">
            <span className="font-ibm-mono text-[12px] font-bold text-[#888888] tracking-[2px]">
              &lt; BACK TO PUBLICATIONS
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
