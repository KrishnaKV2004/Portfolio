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
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        scale: 1.5,
        opacity: 0.1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(subTextRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle depth background - could be a video or canvas later */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gray-500)_0%,_transparent_70%)] opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-8xl md:text-[12rem] font-bold tracking-tighter leading-none text-white select-none"
        >
          AETHER
        </motion.h1>
        
        <motion.div
          ref={subTextRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 flex flex-col items-center"
        >
          <p className="text-xl md:text-2xl text-gray-400 font-medium tracking-tight">
            Crafting the next generation of digital products.
          </p>
          <div className="mt-12 animate-bounce">
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
