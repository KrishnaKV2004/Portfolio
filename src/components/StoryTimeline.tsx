"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  "Curious Student",
  "The Builder",
  "Software Developer",
  "Engineering Founder",
  "Creating The Future"
];

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pinning the entire sections container
      const panels = stagesRef.current;
      
      panels.forEach((panel, i) => {
        if (!panel) return;
        
        // Initial state for all but first
        if (i !== 0) {
          gsap.set(panel, { opacity: 0, scale: 0.8, y: 100 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top center+=100",
            end: "bottom center-=100",
            scrub: true,
          }
        });

        tl.to(panel, {
          opacity: 1,
          scale: 1.2,
          y: 0,
          duration: 1,
        });

        // Exit animation (unless it's the last one)
        if (i < panels.length - 1) {
          tl.to(panel, {
            opacity: 0,
            scale: 1.5,
            y: -100,
            duration: 1,
          }, "+=0.5");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black">
      {stages.map((stage, index) => (
        <div
          key={index}
          ref={(el) => { (stagesRef.current[index] = el); }}
          className="h-screen w-full flex items-center justify-center sticky top-0"
        >
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-white text-center px-4">
            {stage}
          </h2>
        </div>
      ))}
      {/* Spacer to allow scrolling through pinned sections */}
      <div className="h-[400vh]" />
    </div>
  );
}
