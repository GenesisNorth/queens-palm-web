import Link from "next/link";
import GlitchText from "@/components/GlitchText";

const pressLinks = [
  { name: "Vanguard", title: "Queens Palm Support Initiative Empowers Young Women With Leadership & Life Skills", url: "https://www.vanguardngr.com/2025/03/queens-palm-support-initiative-empowers-young-women-with-leadership-life-skills/" },
  { name: "The Guardian Nigeria", title: "Empowering Young Women to Lead in Nigeria", url: "https://guardian.ng/news/queens-palm-support-initiative-empowering-young-women-to-lead-in-nigeria/" },
  { name: "Daily News Cover", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://dailynewscover.com/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "Society Radar", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "http://www.society-radar.com/2024/05/queens-palm-support-initiative-hosts.html" },
  { name: "Beth News Media", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://bethnewsmedia.com.ng/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "News Carte", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://newscarte.com.ng/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "Pentalk360", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://www.pentalk360.com.ng/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "The Genius Media", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://www.thegeniusmedia.com.ng/2024/05/29/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "1steleven9jaTV", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://1steleven9jatv.com/queens-palm-support-initiative-hosts-kings-conference-in-lagos-1steleven9jatv/" },
  { name: "Sahara Weekly", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://saharaweeklyng.com/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "Ojutole News", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://ojutolenews.com/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "De-Reportorial", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://www.de-reportorial.com.ng/2024/05/queens-palm-support-initiative-hosts.html" },
  { name: "Naija Society News", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://naijasocietynews.com/queens-palm-support-initiative-hosts-kings-conference-in-lagos/" },
  { name: "Owutu Online", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "http://owutuonline.blogspot.com/2024/05/queens-palm-support-initiative-hosts.html" },
  { name: "Boseri", title: "Queens Palm Support Initiative Hosts Kings Conference in Lagos", url: "https://www.boseri.com.ng/2024/05/queens-palm-support-initiative-hosts.html" },
];

export default function PressPage() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] min-h-screen relative z-10">
      {/* Hero */}
      <section className="flex flex-col items-center w-full bg-transparent py-16 px-6 md:py-[100px] gap-8 border-b border-white/[0.08]">
        <div className="flex items-center justify-center gap-[8px] h-[32px] px-[16px] bg-[#A855F7]">
          <span className="font-ibm-mono text-[11px] font-bold text-white tracking-[2px]">
            <GlitchText text="[PRESS]" speed={30} />
          </span>
        </div>
        <h1 className="font-grotesk text-[32px] md:text-[56px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.1] text-center w-full max-w-[900px] whitespace-pre-line">
          <GlitchText text="NEWSPAPER PUBLICATIONS & PRESS MENTIONS" speed={40} delay={150} />
        </h1>
        <p className="font-ibm-mono text-[12px] md:text-[14px] text-[#888888] tracking-[0.5px] leading-[1.8] text-center w-full max-w-[700px]">
          Media coverage of QPSI's King's Conference (Lagos, 2024) and its work empowering young women.
        </p>
      </section>

      {/* Press List */}
      <section className="flex flex-col items-center w-full bg-transparent py-16 px-6 md:py-[100px] gap-12">
        <div className="w-full max-w-[900px] flex flex-col gap-[2px]">
          {pressLinks.map((press) => (
            <a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:border-[#A855F7] hover:bg-white/[0.05] group transition-colors"
            >
              <div className="flex flex-col gap-2">
                <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[2px] uppercase">
                  {press.name}
                </span>
                <h4 className="font-grotesk text-[18px] md:text-[20px] font-bold text-[#F5F5F0] tracking-[-0.5px] leading-[1.2]">
                  {press.title}
                </h4>
              </div>
              <div className="flex items-center justify-center w-[40px] h-[40px] border border-[#3D3D3D] group-hover:border-[#A855F7] shrink-0 transition-colors">
                <span className="font-ibm-mono text-[14px] text-[#888888] group-hover:text-[#A855F7] transition-colors">↗</span>
              </div>
            </a>
          ))}
        </div>

        {/* Back Link */}
        <div className="w-full max-w-[900px] mt-8 pt-8 border-t border-[#1D1D1D]">
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
