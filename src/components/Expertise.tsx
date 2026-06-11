"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Rocket, Database, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    title: "Engineering",
    icon: <Code2 className="w-8 h-8" />,
    items: ["React / Next.js", "TypeScript", "Node.js", "Python"],
    description: "Building scalable web architectures."
  },
  {
    title: "Intelligence",
    icon: <Brain className="w-8 h-8" />,
    items: ["NLP", "PyTorch", "OpenAI", "LangChain"],
    description: "Integrating modern AI capabilities."
  },
  {
    title: "Infrastructure",
    icon: <Cloud className="w-8 h-8" />,
    items: ["AWS / GCP", "Docker", "Kubernetes", "CI/CD"],
    description: "Reliable cloud deployments."
  },
  {
    title: "Product",
    icon: <Rocket className="w-8 h-8" />,
    items: ["Strategy", "MVP", "Growth", "UX Design"],
    description: "Shipping impactful experiences."
  },
  {
    title: "Data",
    icon: <Database className="w-8 h-8" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    description: "Managing state at scale."
  },
  {
    title: "Interface",
    icon: <Layout className="w-8 h-8" />,
    items: ["GSAP", "TailwindCSS", "Framer Motion", "Three.js"],
    description: "Crafting fluid interactions."
  }
];

export function Expertise() {
  return (
    <section className="bg-black py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 blur-[120px] rounded-full -mr-[25vw] -mt-[25vw]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Core Capabilities</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">Expertise.</h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl leading-snug">
            Bridging the gap between engineering excellence and product vision using modern technology stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] bg-[#0c0c0c] border border-white/5 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-accent/40 transition-all duration-700"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors duration-700">
                  <div className="text-gray-400 group-hover:text-accent transition-colors duration-700">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-700">
                  {skill.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
                  {skill.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 pt-8">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 font-mono">
                    {item}
                  </span>
                ))}
              </div>
              
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
