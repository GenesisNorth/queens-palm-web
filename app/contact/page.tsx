import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] min-h-screen relative z-10">
      
      <section className="flex flex-col lg:flex-row w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[64px]">
        {/* Left side: Intro & Details */}
        <div className="flex flex-col gap-12 w-full lg:w-1/2 min-w-0">
          <SectionHeader
            label="CONTACT US"
            title={"TO MAKE REQUESTS FOR\nFURTHER INFORMATION,\nCONTACT US NOW!"}
            subtitle="WE ARE ALWAYS READY TO HELP YOU BECOME OUTSTANDING! CONTACT US AND LET'S GET STARTED ON THE JOURNEY TO GREATNESS."
          />

          <div className="flex flex-col gap-8 p-6 sm:p-8 md:p-[32px] xl:p-[40px] bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border-l-4 border-l-[#A855F7]">
            <div className="flex flex-col gap-2">
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">PHONE</span>
              <a href="tel:+2348169105349" className="font-grotesk text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-bold text-[#F5F5F0] hover:text-[#A855F7] transition-colors break-words">
                +234 816 910 5349
              </a>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px]">EMAIL</span>
              <a href="mailto:contact@queenspalmsi.com" className="font-grotesk text-[14px] sm:text-[17px] md:text-[18px] xl:text-[22px] font-bold text-[#F5F5F0] hover:text-[#A855F7] transition-colors break-all">
                CONTACT@QUEENSPALMSI.COM
              </a>
            </div>

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
        <div className="flex flex-col w-full lg:w-1/2 min-w-0 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-8 md:p-[48px]">
          <h3 className="font-grotesk text-[22px] md:text-[32px] font-bold text-[#F5F5F0] tracking-[-1px] mb-8 break-words">
            SEND US A MESSAGE
          </h3>
          <ContactForm />
        </div>
      </section>

    </main>
  );
}
