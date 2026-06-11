"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !subTextRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();
      tl.fromTo(textRef.current, 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "expo.out" }
      )
      .fromTo(subTextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out" },
        "-=1"
      );

      // Scroll Animations
      gsap.fromTo(textRef.current,
        { scale: 1, opacity: 1 },
        {
          scale: 1.1,
          opacity: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(subTextRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "50% top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gray-600)_0%,_transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <div 
          ref={statusRef}
          className="mb-8 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md flex items-center gap-2 group hover:bg-accent/10 transition-colors cursor-default"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-accent font-bold tracking-widest uppercase text-[10px]">
            Available for new projects
          </span>
        </div>


        <h1
          ref={textRef}
          className="text-7xl md:text-[14vw] font-bold tracking-tight leading-none text-white select-none text-balance"
        >
          KRISHNA
        </h1>

        <div
          ref={subTextRef}
          className="mt-8 flex flex-col items-center"
        >
          <p className="text-lg md:text-2xl text-gray-400 font-medium tracking-tight max-w-2xl text-balance">
            Systems Architect & Software Engineer building the next generation of digital products.
          </p>
          <div className="mt-16">
            <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}


