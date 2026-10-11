import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[70vh] px-6 pt-[120px] pb-24 text-center relative z-10">
      <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[3px]">
        404
      </span>
      <h1 className="font-grotesk text-[clamp(32px,7vw,64px)] font-bold text-[#F5F5F0] tracking-[-1.5px] leading-[1.05] mt-4 max-w-[700px]">
        THIS PAGE WANDERED OFF.
      </h1>
      <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.7] mt-5 max-w-[460px]">
        The link may be out of date, or the page may have moved.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-9 w-full sm:w-auto">
        <Link
          href="/"
          className="flex items-center justify-center w-full sm:w-[200px] h-[54px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors font-grotesk text-[12px] font-bold text-white tracking-[2px]"
        >
          BACK HOME
        </Link>
        <Link
          href="/programs"
          className="flex items-center justify-center w-full sm:w-[200px] h-[54px] border border-white/[0.14] hover:border-white/[0.3] transition-colors font-ibm-mono text-[12px] text-[#888888] tracking-[2px]"
        >
          SEE PROGRAMS
        </Link>
      </div>
    </main>
  );
}
