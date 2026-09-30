import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] min-h-screen relative z-10 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#A855F7]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <section className="flex flex-col lg:flex-row w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
        {/* Left side: Intro & Details */}
        <div className="flex flex-col gap-12 w-full lg:w-1/2 min-w-0">
          <SectionHeader
            label="CONTACT US"
            title={"TO MAKE REQUESTS FOR\nFURTHER INFORMATION,\nCONTACT US NOW!"}
            subtitle="WE ARE ALWAYS READY TO HELP YOU BECOME OUTSTANDING! CONTACT US AND LET'S GET STARTED ON THE JOURNEY TO GREATNESS."
          />

          <div className="flex flex-col gap-8 p-8 md:p-[40px] xl:p-[48px] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col gap-2 relative">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-[#A855F7] rounded-r-full shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">PHONE</span>
              <a href="tel:+2348169105349" className="font-grotesk text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-bold text-[#F5F5F0] hover:text-[#A855F7] transition-colors break-words">
                +234 816 910 5349
              </a>
            </div>
            
            <div className="w-full h-[1px] bg-white/[0.06]" />

            <div className="flex flex-col gap-2">
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">EMAIL</span>
              <a href="mailto:contact@queenspalmsi.com" className="font-grotesk text-[14px] sm:text-[17px] md:text-[18px] xl:text-[22px] font-bold text-[#F5F5F0] hover:text-[#A855F7] transition-colors break-all">
                CONTACT@QUEENSPALMSI.COM
              </a>
            </div>

            <div className="w-full h-[1px] bg-white/[0.06]" />

            <div className="flex flex-col gap-2">
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">ADDRESS</span>
              <p className="font-grotesk text-[15px] sm:text-[17px] md:text-[19px] xl:text-[22px] font-bold text-[#F5F5F0] break-words">
                11 JIMOH SOBOWALE ST,<br/>
                MAGODO PHASE 1, ISHERI,<br/>
                LAGOS, NIGERIA
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="flex flex-col w-full lg:w-1/2 min-w-0 bg-[#0A0A0A]/70 backdrop-blur-2xl border border-white/[0.06] rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.5)] p-8 md:p-[56px] relative overflow-hidden">
          {/* Form inner glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#A855F7]/[0.03] blur-[80px] rounded-full pointer-events-none" />
          
          <h3 className="font-grotesk text-[22px] md:text-[32px] font-bold text-[#F5F5F0] tracking-[-1px] mb-8 break-words relative z-10">
            SEND US A MESSAGE
          </h3>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
