import HeroSlider from "@/components/HeroSlider";
import CoverflowGallery from "@/components/CoverflowGallery";
import AboutPreview from "@/components/AboutPreview";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Roadmap from "@/components/Roadmap";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] relative z-10">
      <HeroSlider />
      <CoverflowGallery />
      <AboutPreview />
      <WhatWeDo />
      <Services />
      <Stats />
      <Roadmap />
      <Highlights />
      <Testimonials />
      <ClosingCTA />
    </main>
  );
}
