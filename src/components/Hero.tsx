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
        scale: 1.1,
        opacity: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(subTextRef.current, {
        y: -50,
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gray-600)_0%,_transparent_70%)] opacity-30" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-4"
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
            Portfolio © 2026
          </span>
        </motion.div>

        <motion.h1
          ref={textRef}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-[14vw] font-bold tracking-tight leading-none text-white select-none text-balance"
        >
          KRISHNA
        </motion.h1>

        <motion.div
          ref={subTextRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="text-lg md:text-2xl text-gray-400 font-medium tracking-tight max-w-2xl text-balance">
            Systems Architect & Software Engineer building the next generation of digital products.
          </p>
          <div className="mt-16">
            <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

