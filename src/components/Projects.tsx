"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Orbit",
    tagline: "The Future of Collaboration",
    description: "A centralized workspace for modern engineering teams. Real-time, distributed, and incredibly fast.",
    color: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    features: ["Real-time Sync", "Edge Computing", "AI-First AI"],
    github: "#",
    link: "#"
  },
  {
    title: "Lumina",
    tagline: "Intelligence Redefined",
    description: "An AI-native design tool that understands context, intent, and aesthetic principles.",
    color: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2564",
    features: ["Context Awareness", "Generative Layouts", "System Sync"],
    github: "#",
    link: "#"
  },
  {
    title: "Aether",
    tagline: "Infinite Scalability",
    description: "Next-generation cloud infrastructure built for the decentralized web of tomorrow.",
    color: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2672",
    features: ["Zero-Trust", "Global Mesh", "Auto-Healing"],
    github: "#",
    link: "#"
  },
  {
    title: "Nova",
    tagline: "Visual Storytelling",
    description: "A digital canvas for high-end photography and cinematic content production pipelines.",
    color: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2671",
    features: ["Asset Management", "Workflow Engine", "4K Ready"],
    github: "#",
    link: "#"
  },
  {
    title: "Zenith",
    tagline: "Quantum Computing Interface",
    description: "Simplifying the complexity of quantum programming with a visual, intuitive interface.",
    color: "bg-emerald-600",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2670",
    features: ["Q-Gate Visualizer", "Simulated Runtime", "Hybrid Cloud"],
    github: "#",
    link: "#"
  }
];



export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray(".project-panel");
    
    panels.forEach((panel: any) => {
      const content = panel.querySelector(".project-content");
      const image = panel.querySelector(".project-image");
      
      gsap.fromTo(image, 
        { scale: 1.2, y: 100 },
        {
          scale: 1,
          y: 0,
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      gsap.fromTo(content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: panel,
            start: "top center",
            end: "center center",
            scrub: true,
          }
        }
      );
    });

  }, []);

  return (
    <div ref={containerRef} className="relative bg-black">
      <div className="px-6 md:px-12 max-w-7xl mx-auto py-24">
        <h2 className="text-gray-500 uppercase tracking-widest text-sm font-semibold mb-12">Selected Work</h2>
      </div>

      {projects.map((project, index) => (
        <section
          key={index}
          className="project-panel relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
        >
          <div className="project-image absolute inset-0 z-0">
             <div 
              className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity grayscale"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className={cn("absolute inset-0 opacity-20", project.color)} />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>

          <div className="project-content relative z-10 px-6 md:px-12 max-w-7xl w-full text-center">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              {project.tagline}
            </span>
            <h3 className="text-7xl md:text-[10vw] font-bold tracking-tighter text-white mb-8">
              {project.title}
            </h3>
            <p className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto leading-tight mb-12 text-balance">
              {project.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {project.features.map((feature, i) => (
                <span key={i} className="px-6 py-2 rounded-full border border-white/10 text-sm text-white font-medium bg-white/5 backdrop-blur-sm">
                  {feature}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href={project.github} 
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
              >
                <Terminal className="w-5 h-5" /> GitHub

              </a>
              <a 
                href={project.link} 
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all"
              >
                View Project <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
