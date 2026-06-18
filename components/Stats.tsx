const stats = [
  { value: "10+", label: "ENGAGING MASTERCLASSES", border: true },
  { value: "2+", label: "IMPACTFUL CONFERENCES", border: true },
  { value: "1000+", label: "EMPOWERED PARTICIPANTS", border: true },
  { value: "2+", label: "YEARS OF IMPACT", border: false },
];

export default function Stats() {
  return (
    <section className="flex flex-col w-full bg-[#A855F7] py-12 px-6 md:py-[80px] md:px-[120px]">
      <span className="font-ibm-mono text-[12px] font-bold text-white tracking-[3px]">
        OUR IMPACT
      </span>
      <div className="h-8 md:h-[32px]" />
      <div className="grid grid-cols-2 md:flex w-full gap-[2px] md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-2 items-center justify-center py-6 md:py-0 md:h-[160px] md:flex-1
              ${stat.border ? "md:border-r-2 md:border-r-[rgba(0,0,0,0.3)]" : ""}
              ${i === 0 ? "md:pr-[40px]" : i === stats.length - 1 ? "md:pl-[40px]" : "md:px-[40px]"}
              ${i % 2 === 0 ? "border-r-2 border-r-[rgba(0,0,0,0.3)] pr-4 md:border-r-0 md:pr-0" : "pl-4 md:pl-0"}
              ${i >= 2 ? "border-t-2 border-t-[rgba(0,0,0,0.3)] pt-4 md:border-t-0 md:pt-0" : ""}
            `}
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
