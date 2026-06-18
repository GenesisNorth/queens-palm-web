const stats = [
  { value: "10+", label: "ENGAGING MASTERCLASSES", border: true },
  { value: "2+", label: "IMPACTFUL CONFERENCES", border: true },
  { value: "1000+", label: "EMPOWERED PARTICIPANTS", border: true },
  { value: "2+", label: "YEARS OF IMPACT", border: false },
];

export default function Stats() {
  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px] relative z-10">
      <span className="font-ibm-mono text-[12px] font-bold text-white tracking-[3px]">
        OUR IMPACT
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex w-full gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 items-center justify-center py-8 px-4 bg-white/[0.02] backdrop-blur-lg border border-white/[0.08] w-full rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
          >
            <span className="font-grotesk text-[40px] md:text-[64px] font-bold text-white tracking-[-2px] leading-none">
              {stat.value}
            </span>
            <span className="font-ibm-mono text-[10px] md:text-[12px] font-bold text-[rgba(255,255,255,0.7)] tracking-[2px] text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
