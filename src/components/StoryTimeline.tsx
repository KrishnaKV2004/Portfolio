"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const timeline = [
  {
    tag: "The Spark",
    title: "Curious Student",
    description: "Started with a deep curiosity about how systems interact and how software could solve real-world problems.",
  },
  {
    tag: "The Craft",
    title: "Relentless Builder",
    description: "Spent thousands of hours shipping production code, mastering the art of building fast, resilient systems.",
  },
  {
    tag: "The Vision",
    title: "Systems Thinker",
    description: "Bridging the gap between code and design, focusing on building modular, scalable, and human-centric software.",
  },
  {
    tag: "The Horizon",
    title: "AI Architect",
    description: "Architecting the future of intelligent systems, where human intuition meets agentic AI precision.",
  }
];

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the path for the paper plane
  // Path: M100,0 C150,250 50,750 100,1000
  const planeY = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  const planeLeft = useTransform(smoothProgress, [0.1, 0.35, 0.65, 0.9], ["50%", "75%", "25%", "50%"]);

  // PLANE OFFSET SYSTEM:
  // Dynamically shifting the plane's horizontal offset from the dotted path.
  // We move the plane to the OPPOSITE side of the text for EVERY milestone.
  // Milestones alternate: 0(L), 1(R), 2(L), 3(R)
  const pathOffset = useTransform(
    smoothProgress,
    [0.1, 0.25, 0.45, 0.65, 0.8, 0.9],
    [0, 100, -100, 100, -100, 0] // Offset in pixels from the base path x
  );

  // Rotation follows the winding direction
  const planeRotate = useTransform(
    smoothProgress,
    [0.1, 0.25, 0.35, 0.5, 0.65, 0.75, 0.9],
    [135, 155, 135, 115, 135, 155, 135]
  );

  return (
    <section ref={containerRef} className="bg-black py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 relative z-10 text-center md:text-left">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Narrative</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-4">The Journey.</h2>
        </div>

        <div className="relative min-h-[250vh]">
          {/* Path and Plane Container */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-full max-w-4xl pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 200 1000" preserveAspectRatio="none" className="h-full w-full">
              <path
                id="journey-path"
                d="M100,0 C150,250 50,750 100,1000"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 8"
                className="opacity-10"
              />
              <motion.path
                d="M100,0 C150,250 50,750 100,1000"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="4 8"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>

            {/* Paper Plane - Offset from the path to avoid text */}
            <motion.div
              style={{
                top: planeY,
                left: planeLeft,
                x: pathOffset, // THE REQUESTED OFFSET
                translateX: "-50%",
                translateY: "-50%",
              }}
              className="absolute z-30 hidden md:block"
            >
              <motion.div style={{ rotate: planeRotate }}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: "drop-shadow(0 0 8px var(--accent))" }}
                >
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Items */}
          <div className="relative z-10 space-y-[45vh] pt-32">
            {timeline.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 items-center relative">
                {/* Horizontal marker line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 md:w-24 h-px bg-accent/20 hidden md:block" />

                {/* Center Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-accent relative shadow-[0_0_10px_rgba(0,113,227,0.5)]">
                    <div className="absolute inset-x-[-150%] inset-y-[-150%] bg-accent rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                <div className={cn(
                  "flex flex-col",
                  index % 2 === 0 ? "md:text-right md:pr-12 items-end" : "md:col-start-2 md:text-left md:pl-12 items-start"
                )}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-md relative z-10"
                  >
                    <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">
                      {item.tag}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full" />
      </div>
    </section>
  );
}
