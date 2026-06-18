"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import PublicationCard from "@/components/PublicationCard";

const publications = [
  {
    title: "Dear Queen, Here Are 10 Soft Skills You Need in 2025",
    excerpt: "We see you — balancing so many roles, navigating life's twists, showing up for others, and still trying to pour into yourself. It's not easy, but you're doing it with grace.",
    category: "Articles",
    image: "/images/crowd.jpg",
    href: "/publications/10-soft-skills-2025",
  },
  {
    title: "Newspaper Publications & Press Mentions",
    excerpt: "Media coverage of QPSI's King's Conference (Lagos, 2024) and its work empowering young women across Vanguard, The Guardian, and more.",
    category: "Press",
    image: "/images/IMG_4485.jpg",
    href: "/publications/press",
  },
];

export default function PublicationsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" 
    ? publications 
    : publications.filter(p => p.category === filter);

  return (
    <main className="flex flex-col w-full bg-transparent pt-[96px] min-h-screen relative z-10">
      
      {/* Intro */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-12 border-b border-white/[0.08]">
        <SectionHeader
          label="PUBLICATIONS"
          title={"CHECK OUT OUR\nAMAZING PUBLICATIONS."}
          subtitle="STAY UPDATED WITH OUR LATEST ARTICLES, INSIGHTS, AND MEDIA COVERAGE."
        />
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-4">
          {["All", "Articles", "Press"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="flex items-center justify-center h-[40px] px-[20px] border transition-colors"
              style={{
                borderColor: filter === f ? "#A855F7" : "rgba(255,255,255,0.08)",
                backgroundColor: filter === f ? "#A855F7" : "rgba(255,255,255,0.03)",
                color: filter === f ? "white" : "#888888",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="font-ibm-mono text-[11px] font-bold tracking-[1px] uppercase">
                {f}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[80px] md:px-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filtered.map(pub => (
            <PublicationCard key={pub.title} {...pub} />
          ))}
        </div>
      </section>

    </main>
  );
}
