"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const expertise = [
  {
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, performant digital experiences.",
    color: "from-blue-600/20 to-transparent",
    accent: "text-blue-400"
  },
  {
    title: "Cloud Infrastructure",
    description: "Architecting scalable, resilient systems on the edge.",
    color: "from-purple-600/20 to-transparent",
    accent: "text-purple-400"
  },
  {
    title: "AI Engineering",
    description: "Integrating intelligent systems into the product core.",
    color: "from-cyan-600/20 to-transparent",
    accent: "text-cyan-400"
  },
  {
    title: "Product Building",
    description: "Translating vision into market-ready technology.",
    color: "from-emerald-600/20 to-transparent",
    accent: "text-emerald-400"
  }
];

export function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    expertise.forEach((_, i) => {
      const el = itemsRef.current[i];
      if (!el) return;

      gsap.fromTo(el, 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "bottom center-=100",
            scrub: true,
          }
        }
      );
    });

  }, []);

  return (
    <div ref={containerRef} className="relative bg-black py-48">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-24">Expertise</h2>
        
        <div className="space-y-[30vh]">
          {expertise.map((item, index) => (
            <div
              key={index}
              ref={(el) => { (itemsRef.current[index] = el); }}
              className="group relative"
            >
              <div className={cn(
                "absolute -inset-10 bg-gradient-to-r opacity-0 transition-opacity duration-1000 group-hover:opacity-100 -z-10 blur-3xl",
                item.color
              )} />
              
              <h3 className={cn(
                "text-5xl md:text-8xl font-bold tracking-tight mb-6 transition-colors duration-500",
                "group-hover:text-white text-gray-700"
              )}>
                {item.title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-12 h-px w-full bg-gray-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
