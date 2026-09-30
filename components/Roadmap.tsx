"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const allImages = [
  "/images/_DSC0086.jpg", "/images/_DSC0097.jpg", "/images/_DSC0128.jpg",
  "/images/_DSC0168.jpg", "/images/_DSC0077.jpg", "/images/_DSC0138.jpg",
  "/images/_DSC0194.jpg", "/images/_DSC0046.jpg", "/images/_DSC0186.jpg",
  "/images/_DSC0051.jpg", "/images/_DSC0111.jpg", "/images/_DSC0040.jpg",
  "/images/_DSC0104.jpg", "/images/_DSC0121.jpg", "/images/_DSC0155.jpg",
  "/images/_DSC0080.jpg", "/images/_DSC0130.jpg", "/images/_DSC0175.jpg",
  "/images/_DSC0074.jpg", "/images/_DSC0092.jpg", "/images/_DSC0117.jpg",
  "/images/_DSC0134.jpg", "/images/_DSC0147.jpg", "/images/_DSC0163.jpg",
];

const roadmapData = [
  {
    year: "YEAR 1",
    title: "FOUNDATION & VISION",
    description: "Laying the groundwork for empowering young individuals. Initiated our first mentorship programs and began cultivating a community of future leaders.",
  },
  {
    year: "YEAR 2",
    title: "EXPANSION & ENGAGEMENT",
    description: "Scaling our impact across multiple regions. Hosted dynamic workshops, masterclasses, and reached thousands of students with essential soft skills.",
  },
  {
    year: "YEAR 3",
    title: "SCALING IMPACT & BEYOND",
    description: "Solidifying our footprint as a global force. Creating sustainable frameworks for leadership, emotional intelligence, and long-term community transformation.",
  }
];

const IMAGES_PER_NODE = 3;

/**
 * Resting + hover transform for one layer of the stacked deck.
 * Index 0 is the front card (carries the text); 1 and 2 peek out behind it.
 * `dir` flips the fan so it always leans away from the centre line.
 * Returned as CSS custom properties so hover stays pure CSS (no re-render).
 */
function layerVars(layer: number, dir: 1 | -1) {
  if (layer === 0) {
    return {
      "--tr": "translate3d(0,0,0) rotate(0deg)",
      "--tr-h": "translate3d(0,-6px,0) rotate(0deg)",
    } as React.CSSProperties;
  }
  const build = (spread: number, rotBoost: number) => {
    const r1 = (n: number) => Math.round(n * 10) / 10;
    const x = r1(dir * (layer === 1 ? 17 : 32) * spread);
    const y = r1(-(layer === 1 ? 13 : 25) * spread);
    const rot = r1(dir * (layer === 1 ? 3 : 6.5) * rotBoost);
    const scale = 1 - layer * 0.04;
    return `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${scale})`;
  };
  return {
    "--tr": build(1, 1),
    "--tr-h": build(1.9, 1.45),
  } as React.CSSProperties;
}

export default function Roadmap() {
  const [decks, setDecks] = useState<string[][]>([]);
  const [progress, setProgress] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [nodeStops, setNodeStops] = useState<number[]>([]);

  // Pick unique images for every card in every deck (client-only, avoids hydration mismatch)
  useEffect(() => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    setDecks(
      roadmapData.map((_, i) =>
        shuffled.slice(i * IMAGES_PER_NODE, (i + 1) * IMAGES_PER_NODE)
      )
    );
  }, []);

  const handleDeckClick = (index: number) => {
    setDecks((prev) => {
      const next = [...prev];
      const deck = [...next[index]];
      if (deck.length > 0) {
        deck.push(deck.shift()!);
        next[index] = deck;
      }
      return next;
    });
  };

  // Drive the travelling marker from scroll position
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    const measure = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      if (!rect.height) return;

      // The "playhead" sits a little above the middle of the viewport.
      const anchor = window.innerHeight * 0.55;
      const p = (anchor - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));

      // Where each node dot sits along the track, as a 0-1 fraction
      setNodeStops(
        nodeRefs.current.map((n) =>
          n ? (n.offsetTop + n.offsetHeight / 2) / el.offsetHeight : 1
        )
      );
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [decks.length]);

  return (
    <section className="flex flex-col w-full bg-transparent py-16 px-6 md:py-[100px] md:px-[120px] gap-16 relative z-10">
      <SectionHeader
        label="GROWTH TREE"
        title={"OUR ROADMAP."}
        subtitle="3 YEARS OF CONTINUOUS IMPACT AND TRANSFORMATION."
      />

      <div ref={trackRef} className="relative w-full max-w-[1000px] mx-auto mt-8">
        {/* Trunk — dim base rail */}
        <div className="absolute left-[23px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.09] lg:-translate-x-1/2 z-0" />

        {/* Trunk — lit portion, grows as you scroll */}
        <div
          className="absolute left-[23px] lg:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#A855F7] via-[#A855F7] to-[#7C3AED] lg:-translate-x-1/2 z-0 shadow-[0_0_12px_rgba(168,85,247,0.7)]"
          style={{ height: `${progress * 100}%` }}
        />

        {/* Trunk — the object that rides down the line with scroll */}
        <div
          className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          style={{ top: `${progress * 100}%` }}
          aria-hidden="true"
        >
          {/* trailing comet wash */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[6px] w-[2px] h-[70px] bg-gradient-to-t from-[#A855F7] to-transparent opacity-70" />
          {/* outer halo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-[#A855F7]/20 blur-[6px] animate-pulse-glow motion-reduce:animate-none" />
          {/* ring */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full border border-[#A855F7]/70" />
          {/* core */}
          <div className="relative w-[11px] h-[11px] rounded-full bg-white shadow-[0_0_14px_4px_rgba(168,85,247,0.95)]" />
        </div>

        <div className="flex flex-col gap-12 lg:gap-24 w-full">
          {roadmapData.map((node, i) => {
            const isEven = i % 2 === 0;
            // Fan the deck away from the centre rail
            const dir: 1 | -1 = isEven ? 1 : -1;
            const deck = decks[i] ?? [];
            const reached = nodeStops[i] !== undefined && progress >= nodeStops[i];

            return (
              <div
                key={node.year}
                ref={(el) => { nodeRefs.current[i] = el; }}
                className={`relative flex flex-col lg:flex-row w-full items-center ${isEven ? "lg:justify-start" : "lg:justify-end"}`}
              >
                {/* Node connector point — lights up once the marker passes it */}
                <div
                  className="absolute left-[16px] lg:left-1/2 w-[16px] h-[16px] rounded-full lg:-translate-x-1/2 z-10 transition-all duration-500"
                  style={{
                    background: reached ? "#A855F7" : "#0A0A0A",
                    border: "4px solid #A855F7",
                    boxShadow: reached
                      ? "0 0 22px rgba(168,85,247,1)"
                      : "0 0 8px rgba(168,85,247,0.35)",
                  }}
                />

                {/* Stacked deck of 3 images.
                    Extra padding on the fan side reserves room for the rotated
                    back cards so they never push past the viewport. */}
                <div
                  className={`w-full lg:w-[46%] pl-[56px] pr-[40px] ${
                    isEven ? "lg:pl-0 lg:pr-[48px]" : "lg:pr-0 lg:pl-[48px]"
                  }`}
                >
                  <div
                    className="group relative w-full cursor-pointer animate-float motion-reduce:animate-none"
                    style={{ animationDelay: `${i * 1.5}s` }}
                    onClick={() => handleDeckClick(i)}
                  >
                    {/* Back layers — decorative photos peeking out of the deck */}
                    {[2, 1].map((layer) => (
                      <div
                        key={layer}
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden border border-white/[0.1] bg-[#0A0A0A] shadow-[0_8px_28px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out will-change-transform [transform:var(--tr)] group-hover:[transform:var(--tr-h)] motion-reduce:transition-none"
                        style={{ ...layerVars(layer, dir), zIndex: 10 - layer }}
                      >
                        {deck[layer] && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={deck[layer]}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-45"
                          />
                        )}
                        <div className="absolute inset-0 bg-[#0A0A0A]/55" />
                      </div>
                    ))}

                    {/* Front card — carries the copy */}
                    <div
                      className="relative z-20 w-full overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/[0.1] group-hover:border-[#A855F7] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-700 ease-out will-change-transform [transform:var(--tr)] group-hover:[transform:var(--tr-h)] motion-reduce:transition-none"
                      style={layerVars(0, dir)}
                    >
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[#0A0A0A]/70 group-hover:bg-[#0A0A0A]/60 transition-colors duration-700 z-10" />
                        {deck[0] && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={deck[0]}
                            alt={node.year}
                            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                          />
                        )}
                      </div>

                      <div className="relative z-20 flex flex-col justify-end min-h-[240px] sm:min-h-[270px] lg:min-h-[290px] p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-ibm-mono text-[10px] md:text-[12px] font-bold text-white tracking-[2px] bg-[#A855F7] px-3 py-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                            {node.year}
                          </span>
                        </div>
                        <h3 className="font-grotesk text-[20px] md:text-[28px] font-bold text-white tracking-[-0.5px] leading-tight mb-3 group-hover:text-[#A855F7] transition-colors duration-300 drop-shadow-md break-words">
                          {node.title}
                        </h3>
                        <p className="font-ibm-mono text-[11px] md:text-[13px] text-[#DDDDDD] group-hover:text-white leading-[1.6] tracking-[0.5px] transition-colors duration-300 drop-shadow-md break-words">
                          {node.description}
                        </p>
                      </div>

                      {/* Corner decorative accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#A855F7]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#A855F7]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
