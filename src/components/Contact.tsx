
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12"
        >
          Let’s Build Something Remarkable.
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
        >
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Start a Conversation</h3>
              <p className="text-gray-400 mb-8">
                Whether you have a specific project in mind or just want to explore possibilities, I’m always open to discussing new ideas.
              </p>

              <div className="space-y-4">
                <a href="mailto:hello@aether.com" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">hello@aether.com</span>
                </a>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>


            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>

        <footer className="mt-24 pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© 2026 Krishna All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
