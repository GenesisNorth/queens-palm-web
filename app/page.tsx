import HeroSlider from "@/components/HeroSlider";
import AboutPreview from "@/components/AboutPreview";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#0A0A0A] pt-[96px]">
      <HeroSlider />
      <AboutPreview />
      <WhatWeDo />
      <Services />
      <Stats />
      <Highlights />
      <Testimonials />
      <ClosingCTA />
    </main>
  );
}
