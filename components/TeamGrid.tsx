import SectionHeader from "./SectionHeader";

const placeholders = [
  { id: 1, name: "JOHN DOE", role: "DIRECTOR" },
  { id: 2, name: "JANE SMITH", role: "PROGRAM MANAGER" },
  { id: 3, name: "ALEX JOHNSON", role: "LEAD MENTOR" },
  { id: 4, name: "SARAH WILLIAMS", role: "COMMUNITY LEAD" },
];

export default function TeamGrid() {
  return (
    <section className="flex flex-col w-full bg-[#0A0A0A] py-16 px-6 md:py-[100px] md:px-[120px] gap-12 md:gap-[48px]">
      <SectionHeader
        label="OUR TEAM"
        title={"VIEW ALL TEAM"}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {placeholders.map((member) => (
          <div key={member.id} className="flex flex-col gap-4">
            {/* Photo placeholder */}
            <div className="w-full aspect-[3/4] bg-[#111111] border border-[#2D2D2D] flex flex-col items-center justify-center gap-2">
              <span className="font-ibm-mono text-[10px] text-[#555] tracking-[2px]">
                [TEAM PHOTO]
              </span>
            </div>
            
            {/* Details */}
            <div className="flex flex-col gap-1">
              <h4 className="font-grotesk text-[16px] font-bold text-[#F5F5F0] tracking-[0.5px]">
                {member.name}
              </h4>
              <span className="font-ibm-mono text-[11px] text-[#A855F7] tracking-[1px]">
                {member.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
