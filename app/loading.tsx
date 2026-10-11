export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[70vh] px-6 pt-[120px] relative z-10">
      <div className="flex items-center gap-3" role="status" aria-live="polite">
        <span className="w-[8px] h-[8px] bg-[#A855F7] animate-pulse" />
        <span className="font-ibm-mono text-[11px] text-[#666666] tracking-[3px]">
          LOADING
        </span>
      </div>
    </main>
  );
}
