"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, X } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "/AWS.pdf"
  },
  {
    title: "Git Certification",
    issuer: "CodeSignal",
    date: "2024",
    link: "/CodeSignal Git.pdf"
  },
  {
    title: "Microsoft Azure",
    issuer: "Microsoft",
    date: "2024",
    link: "/MS Azure.pdf"
  },
  {
    title: "Microsoft Power BI",
    issuer: "Microsoft",
    date: "2024",
    link: "/Microsoft Power BI.pdf"
  },
  {
    title: "Full Stack Development",
    issuer: "Industry Standard",
    date: "2024",
    link: "/Full Stack.pdf"
  },
  {
    title: "Machine Learning",
    issuer: "Advanced AI",
    date: "2024",
    link: "/ML.pdf"
  }
];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section className="bg-black py-48 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Recognition</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white capitalize">
              Industry Certifications
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
            Validation of technical excellence across cloud, AI, and distributed systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedCert(cert)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#151515] border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 block cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-500 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-600 text-sm font-mono">{cert.date}</p>
              
              <div className="absolute top-8 right-8">
                <CheckCircle2 className="w-5 h-5 text-gray-800" />
              </div>

              <div className="mt-8 text-xs font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                View Certificate →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mac Window Modal */}
      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-zoom-out"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-6 md:inset-20 z-[101] flex items-center justify-center pointer-events-none"
            >
              <div className="bg-[#1a1a1a] w-full h-full max-w-5xl rounded-[1.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col pointer-events-auto">
                {/* Mac Header */}
                <div className="h-12 bg-[#252525] border-b border-white/5 flex items-center px-6 gap-2 shrink-0">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedCert(null)}
                      className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-75 transition-all flex items-center justify-center group"
                    >
                      <X className="w-2 h-2 text-black/40 opacity-0 group-hover:opacity-100" />
                    </button>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex-1 text-center pr-12">
                    <span className="text-[11px] text-gray-400 font-bold tracking-widest uppercase">
                      {selectedCert.title} - {selectedCert.issuer}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white relative">
                  <iframe
                    src={`${selectedCert.link}#toolbar=0`}
                    className="w-full h-full border-none"
                    title={selectedCert.title}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
