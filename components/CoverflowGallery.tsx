"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/_DSC0034.jpg", label: "OUTREACH" },
  { src: "/images/_DSC0044.jpg", label: "MASTERCLASS" },
  { src: "/images/_DSC0050.jpg", label: "CONFERENCE" },
  { src: "/images/_DSC0057.jpg", label: "MENTORSHIP" },
  { src: "/images/_DSC0060.jpg", label: "COMMUNITY" },
  { src: "/images/_DSC0084.jpg", label: "WORKSHOP" },
  { src: "/images/_DSC0087.jpg", label: "TEAM" },
  { src: "/images/_DSC0094.jpg", label: "LEADERSHIP" },
  { src: "/images/_DSC0095.jpg", label: "IMPACT" },
  { src: "/images/_DSC0098.jpg", label: "GROWTH" },
];

/** Perspective depth of the stage; kept in JS so the maths and CSS cannot drift. */
const PERSP = 1500;

/** Deterministic pseudo-random in [-1, 1] so the hover pattern is stable. */
function jitter(i: number, salt: number) {
  const v = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return (v - Math.floor(v)) * 2 - 1;
}

export default function CoverflowGallery() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const ringRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef(0);          // ring rotation, radians
  const bloomRef = useRef(0);         // 0 = tight ring, 1 = hovered / bloomed
  const liftRef = useRef<number[]>(images.map(() => 0)); // per-card zoom, eased
  const hoverRef = useRef<number | null>(null);
  const [front, setFront] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const n = images.length;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min(64, now - last) / 1000;
      last = now;

      const w = wrap.clientWidth || 1;
      const h = wrap.clientHeight || 1;

      // Card size and ring radii scale with the stage, so the hole in the
      // middle stays open from 320px up to ultrawide.
      const cardW = Math.max(104, Math.min(w * 0.155, 210));
      const cardH = cardW * (4 / 3);
      const rz = 190;

      // Cards at the front sit closer to the camera, so perspective magnifies
      // both their size and their offset. Fold that into the radii.
      const mag = PERSP / (PERSP - rz);
      const halfW = (cardW / 2) * 1.05;   // small allowance for the z-tilt
      const halfH = (cardH / 2) * 1.06;

      const tEl = textRef.current;
      const tHalfW = tEl ? tEl.offsetWidth / 2 : 140;
      const tHalfH = tEl ? tEl.offsetHeight / 2 : 110;

      // Inner bound keeps the middle open; outer bound keeps cards on stage.
      const minRx = (tHalfW + 18) / mag + halfW;
      const maxRx = (w / 2 - 6) / mag - halfW;
      const minRy = (tHalfH + 18) / mag + halfH;
      const maxRy = (h / 2 - 6) / mag - halfH;

      const rx = Math.max(cardW * 0.62, Math.min(Math.max(w * 0.34, minRx), maxRx));
      const ry = Math.max(cardH * 0.62, Math.min(Math.max(h * 0.3, minRy), maxRy));

      const holding = hoverRef.current !== null;
      if (!reduced && !holding) spinRef.current += dt * 0.022;

      // Ease between the tight ring and the bloomed hover arrangement
      bloomRef.current += ((holding ? 1 : 0) - bloomRef.current) * Math.min(1, dt * 5);
      const b = bloomRef.current;

      // How large a hovered photo grows, capped so it always stays on stage
      const zoomScale = Math.max(
        1.25,
        Math.min(2.5, (h * 0.86) / cardH, (w * 0.62) / cardW)
      );

      let frontIdx = 0;
      let frontZ = -Infinity;
      let maxLift = 0;

      for (let i = 0; i < n; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        const a = (i / n) * Math.PI * 2 + spinRef.current;

        // a = 0 sits at the top/back of the ring, a = PI at the bottom/front
        const depth = -Math.cos(a);                 // -1 (back) .. 1 (front)

        // Ease this card's zoom toward 1 while hovered, back to 0 when not
        const want = hoverRef.current === i ? 1 : 0;
        liftRef.current[i] += (want - liftRef.current[i]) * Math.min(1, dt * 6);
        const L = liftRef.current[i];
        if (L > maxLift) maxLift = L;

        // Bloom pushes the ring outward and adds a little per-card wobble
        const ex = 1 + 0.08 * b;
        const ey = 1 + 0.03 * b;

        const rx0 = Math.sin(a) * rx * ex + jitter(i, 1) * 16 * b;
        const ry0 = depth * ry * ey + jitter(i, 2) * 8 * b;

        // Zoomed card eases toward the middle of the stage and comes forward
        const x = rx0 * (1 - 0.82 * L);
        const y = ry0 * (1 - 0.82 * L);
        const z = depth * rz * (1 - L) + L * 215;

        const ringScale = (0.7 + 0.3 * ((depth + 1) / 2)) * (1 - 0.04 * b);
        const scale = ringScale + (zoomScale - ringScale) * L;
        const tilt = (jitter(i, 3) * 7 * b + -Math.sin(a) * 8) * (1 - L);

        // Below sm only even cards render, so the counter must ignore the rest
        const visible = w >= 640 || i % 2 === 0;
        if (visible && z > frontZ) {
          frontZ = z;
          frontIdx = i;
        }

        el.style.transform =
          `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px) ` +
          `rotateZ(${tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        const ringOpacity = 0.4 + 0.6 * ((depth + 1) / 2);
        el.style.opacity = (ringOpacity + (1 - ringOpacity) * L).toFixed(3);
        el.style.zIndex = String(Math.round(400 + depth * 100 + L * 300));
        const blur = depth < -0.2 ? (-depth - 0.2) * 2.4 * (1 - L) : 0;
        el.style.filter = blur > 0.05 ? `blur(${blur.toFixed(1)}px)` : "none";
      }

      // While a photo is zoomed, lift the whole ring above the centre copy and
      // fade that copy back so nothing competes with the image.
      const ring = ringRef.current;
      if (ring) ring.style.zIndex = maxLift > 0.01 ? "700" : "auto";
      const tWrap = tEl ? tEl.parentElement : null;
      if (tWrap) {
        tWrap.style.opacity = (1 - 0.88 * maxLift).toFixed(3);
      }

      setFront((p) => (p === frontIdx ? p : frontIdx));
      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="relative w-full bg-transparent overflow-hidden border-y border-white/[0.08] mt-16 md:mt-[80px] py-12 md:py-16 z-10"
      aria-label="Moments from QPSI events"
    >
      <div
        ref={wrapRef}
        className="relative w-full h-[620px] sm:h-[720px] md:h-[860px] lg:h-[980px]"
        style={{ perspective: `${PERSP}px` }}
        onPointerLeave={() => { hoverRef.current = null; }}
      >
        {/* ---- The words inside the ring ---- */}
        <div className="absolute inset-0 z-[600] flex items-center justify-center pointer-events-none px-6">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(78vw,620px)] h-[min(58vh,420px)] rounded-full"
            style={{ background: "radial-gradient(ellipse at center, rgba(8,6,14,0.92) 0%, rgba(8,6,14,0.72) 42%, rgba(8,6,14,0) 72%)" }}
          />
          <div ref={textRef} className="relative flex flex-col items-center text-center max-w-[178px] sm:max-w-[290px] md:max-w-[380px]">
            <div className="flex items-center gap-2">
              <span className="w-[6px] h-[6px] bg-[#A855F7] shrink-0" />
              <span className="font-ibm-mono text-[9px] md:text-[11px] font-bold text-[#A855F7] tracking-[3px]">
                IN THE ROOM
              </span>
            </div>

            <h2 className="font-grotesk text-[clamp(23px,4.6vw,52px)] font-bold text-[#F5F5F0] tracking-[-1.5px] leading-[1.02] mt-4 break-words">
              MOMENTS
              <br />
              THAT STAYED.
            </h2>

            <p className="font-ibm-mono text-[10px] md:text-[12px] text-[#888888] tracking-[1px] leading-[1.7] mt-4 break-words">
              EVERY FACE HERE CAME FOR SOMETHING
              <br className="hidden sm:block" /> AND LEFT WITH MORE.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <span className="font-ibm-mono text-[10px] font-bold text-[#A855F7] tracking-[2px]">
                {String(front + 1).padStart(2, "0")}
              </span>
              <span className="w-[34px] h-[1px] bg-white/[0.18]" />
              <span className="font-ibm-mono text-[10px] text-[#666666] tracking-[2px]">
                {String(images.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* ---- The ring of cards ---- */}
        <div ref={ringRef} className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {images.map((img, i) => (
            <div
              key={img.src}
              ref={(el) => { cardRefs.current[i] = el; }}
              onPointerEnter={() => { hoverRef.current = i; }}
              onMouseEnter={() => { hoverRef.current = i; }}
              onPointerLeave={() => { if (hoverRef.current === i) hoverRef.current = null; }}
              onMouseLeave={() => { if (hoverRef.current === i) hoverRef.current = null; }}
              className={`group absolute w-[15.5vw] min-w-[104px] max-w-[210px] aspect-[3/4] cursor-pointer will-change-transform [backface-visibility:hidden] transition-[filter] duration-300 ${i % 2 ? "hidden sm:block" : ""}`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[8px] border border-white/[0.12] group-hover:border-[#A855F7] bg-[#0A0A0A] shadow-[0_18px_46px_rgba(0,0,0,0.55)] group-hover:shadow-[0_0_38px_rgba(168,85,247,0.5)] transition-[border-color,box-shadow] duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`QPSI — ${img.label.toLowerCase()}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-ibm-mono text-[10px] md:text-[11px] text-[#555555] tracking-[2px] mt-6 px-6">
        <span className="hidden lg:inline">HOVER A PHOTO TO HOLD THE CIRCLE</span>
        <span className="lg:hidden">TAP A PHOTO TO BRING IT FORWARD</span>
      </p>
    </section>
  );
}
