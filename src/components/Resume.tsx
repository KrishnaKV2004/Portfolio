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
              Exploring the intersection of technical architecture and product strategy through years of engineering excellence.
            </p>

            <div className="flex flex-wrap gap-6">
              <button
                onClick={scrollToContact}
                className="flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-white font-bold hover:bg-white hover:text-black transition-all shadow-lg shadow-accent/20"
              >
                Hire Me <Send className="w-5 h-5" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-3 px-10 py-5 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
              >
                Download PDF <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
             whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="relative"
          >
            {/* Window Container */}
            <div className="relative aspect-[3.2/4.2] max-w-md mx-auto bg-[#1a1a1a] rounded-[1.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">

              {/* Mac-style Header */}
              <div className="h-8 bg-[#252525] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <div className="flex-1 text-center pr-12">
                   <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Resume</span>
                </div>
              </div>

              {/* Resume Image Preview Window */}
              <div className="relative w-full h-[calc(100%-2rem)] bg-[#1a1a1a] overflow-hidden">
                <img
                  src="/resume.jpg"
                  alt="Resume Preview"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Shine effect on the whole window */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
