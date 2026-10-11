"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaces in the server log / your monitoring provider.
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[70vh] px-6 pt-[120px] pb-24 text-center relative z-10">
      <span className="font-ibm-mono text-[11px] font-bold text-[#A855F7] tracking-[3px]">
        SOMETHING BROKE
      </span>
      <h1 className="font-grotesk text-[clamp(28px,6vw,52px)] font-bold text-[#F5F5F0] tracking-[-1.5px] leading-[1.05] mt-4 max-w-[700px]">
        WE HIT AN UNEXPECTED ERROR.
      </h1>
      <p className="font-ibm-mono text-[12px] md:text-[13px] text-[#888888] tracking-[1px] leading-[1.7] mt-5 max-w-[460px]">
        Try again — if it keeps happening, please let us know.
      </p>
      <button
        onClick={reset}
        className="flex items-center justify-center w-full sm:w-[200px] h-[54px] bg-[#A855F7] hover:bg-[#9333EA] transition-colors font-grotesk text-[12px] font-bold text-white tracking-[2px] mt-9"
      >
        TRY AGAIN
      </button>
    </main>
  );
}
