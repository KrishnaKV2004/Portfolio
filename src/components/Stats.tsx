"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Projects Built", value: 10, prefix: "" },
  { label: "Clients Served", value: 3, prefix: "" },
  { label: "Years Coding", value: 5, prefix: "" },
  { label: "Satisfied Users", value: 50, prefix: "+" }
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
          duration: 2.5,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full -ml-[20vw]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Proven Impact</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-12">
              The Results.
            </h2>
            <div className="space-y-12">
              <p className="text-2xl text-gray-400 leading-snug text-balance">
                Building technology is more than just code. It's about delivering measurable value and solving complex problems at scale.
              </p>
              <div className="h-[2px] w-24 bg-accent" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                 <div className="flex items-baseline gap-1">
                  <span className="text-accent text-3xl font-bold">{stat.prefix}</span>
                  <span 
                    ref={(el) => { (numbersRef.current[i] = el); }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-white"
                  >
                    0
                  </span>
                </div>
                <span className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-4">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
