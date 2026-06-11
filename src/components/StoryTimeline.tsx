"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const timeline = [
  {
    tag: "The Spark",
    title: "Curious Student",
    description: "Started with a deep curiosity about how systems interact and how software could solve real-world problems.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2670"
  },
  {
    tag: "The Craft",
    title: "Relentless Builder",
    description: "Spent thousands of hours shipping production code, mastering the art of building fast, resilient systems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2670"
  },
  {
    tag: "The Vision",
    title: "Engineering Founder",
    description: "Bridging the gap between code and business, founding products that scale from zero to millions.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2670"
  }
];

export function StoryTimeline() {
  return (
    <section className="bg-black py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Narrative</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white">The Journey.</h2>
        </div>

        <div className="space-y-[30vh]">
          {timeline.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className={cn(
                "relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group",
                index % 2 !== 0 && "md:order-last"
              )}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="text-accent font-mono text-sm uppercase tracking-widest mb-6 block">
                  {item.tag}
                </span>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
