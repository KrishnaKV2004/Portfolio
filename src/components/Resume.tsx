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

      <div className="max-w-7xl mx-auto relative z-10 px-0 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs lg:text-sm mb-4 lg:mb-6 block">Career Summary</span>
            <h2 className="text-5xl lg:text-8xl font-bold tracking-tight text-white mb-6 lg:mb-8">
              Resume.
            </h2>
            <p className="text-lg lg:text-2xl text-gray-400 leading-relaxed mb-10 lg:mb-12 max-w-xl">
              Exploring the intersection of technical architecture and product strategy through a decade of engineering excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 rounded-full bg-accent text-white font-bold hover:opacity-90 transition-all shadow-lg shadow-accent/20"
              >
                Hire Me <Send className="w-5 h-5" />
              </button>
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 rounded-full border border-white/10 text-white font-bold hover:bg-white/5 transition-all"
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
            className="relative order-1 lg:order-2"
          >
            {/* Window Container */}
            <div className="relative aspect-[3.2/4] lg:aspect-[3.2/4] max-w-[320px] sm:max-w-md lg:max-w-md mx-auto bg-[#1a1a1a] rounded-[1.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Mac-style Header */}
              <div className="h-8 bg-[#252525] border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <div className="flex-1 text-center pr-12">
                  <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">Resume</span>
                </div>
              </div>

              {/* PDF Preview Window */}
              <div className="relative w-full h-[calc(100%-2rem)] bg-white overflow-hidden">
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  title="Resume Preview"
                />
                {/* Subtle glass effect on top of frame to make it feel integrated */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 via-transparent to-transparent" />
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
