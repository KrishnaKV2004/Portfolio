"use client";

import { motion } from "framer-motion";
import { FileText, Send, Download } from "lucide-react";

export function Resume() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-48 px-6 md:px-12 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gray-600)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-6 block">Career Summary</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8">
              Resume.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-xl">
              Exploring the intersection of technical architecture and product strategy through a decade of engineering excellence.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={scrollToContact}
                className="flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-white font-bold hover:bg-blue-600 transition-all shadow-lg shadow-accent/20"
              >
                Hire Me <Send className="w-5 h-5" />
              </button>
              <a 
                href="#" 
                className="flex items-center gap-3 px-10 py-5 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
              >
                Download PDF <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto bg-[#111] rounded-[2rem] border border-white/5 p-8 shadow-2xl overflow-hidden group">
              {/* Artistic Resume Mockup */}
              <div className="space-y-6 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                <div className="w-24 h-3 bg-accent/40 rounded-full" />
                <div className="space-y-3">
                  <div className="w-full h-2 bg-white/5 rounded-full" />
                  <div className="w-full h-2 bg-white/5 rounded-full" />
                  <div className="w-3/4 h-2 bg-white/5 rounded-full" />
                </div>
                <div className="pt-8 space-y-4">
                   <div className="w-32 h-2.5 bg-white/10 rounded-full" />
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-white/5 rounded-2xl" />
                      <div className="h-20 bg-white/5 rounded-2xl" />
                   </div>
                </div>
                <div className="pt-8 space-y-3">
                  <div className="w-full h-2 bg-white/5 rounded-full" />
                  <div className="w-5/6 h-2 bg-white/5 rounded-full" />
                </div>
              </div>

              {/* Reveal Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                  <FileText className="w-8 h-8" />
                </div>
              </div>

              <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
