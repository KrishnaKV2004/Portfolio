"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statements = [
  "I don’t just build software.",
  "I build products.",
  "I build companies.",
  "I build the future."
];

export function FutureVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      textRefs.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(el,
          { opacity: 0.1, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black py-[40vh] px-6 md:px-12 flex flex-col items-center gap-24">
      {statements.map((text, i) => (
        <h2
          key={i}
          ref={(el) => { (textRefs.current[i] = el); }}
          className="text-5xl md:text-[6vw] font-bold tracking-tighter text-white text-center max-w-5xl leading-tight"
        >
          {text}
        </h2>
      ))}
    </div>
  );
}
