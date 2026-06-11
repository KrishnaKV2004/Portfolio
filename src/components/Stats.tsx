"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects Built", value: 42 },
  { label: "Clients Served", value: 15 },
  { label: "Years Coding", value: 8 },
  { label: "Internships", value: 3 },
  { label: "OS Contributions", value: 120 }
];

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    stats.forEach((stat, i) => {
      const el = numbersRef.current[i];
      if (!el) return;

      gsap.fromTo(el, 
        { innerText: 0 },
        {
          innerText: stat.value,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="bg-black py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span 
                ref={(el) => { (numbersRef.current[i] = el); }}
                className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2"
              >
                0
              </span>
              <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
