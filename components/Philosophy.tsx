'use client';

import React from 'react';
import { motion } from 'motion/react';

const principles = [
  {
    title: "Scalability First",
    description: "Architecting systems that don't just work today, but thrive under 100x load tomorrow. I prioritize statelessness and horizontal scaling."
  },
  {
    title: "Pragmatic Excellence",
    description: "Balancing the pursuit of perfect code with the reality of business goals. I choose the right tool for the job, not the trendiest one."
  },
  {
    title: "User-Centric Performance",
    description: "Performance is a feature. I optimize for the critical path, ensuring sub-second interactions and seamless user journeys."
  }
];

export default function Philosophy() {
  return (
    <section className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex flex-col md:flex-row justify-between items-end gap-10"
        >
          <div>
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Engineering Mindset</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85]">
              System <span className="text-zinc-600 italic">Philosophy</span>
            </h2>
          </div>
          <p className="text-xl text-zinc-500 font-light max-w-sm">
            Core principles that guide my architectural decisions and code quality standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-b from-zinc-900/50 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              <div className="relative p-12 bg-zinc-900/20 border border-white/5 rounded-[3rem] h-full flex flex-col justify-between backdrop-blur-sm hover:bg-zinc-900/40 transition-colors duration-500">
                <div className="mb-16">
                  <span className="text-7xl font-bold tracking-tighter text-zinc-800 group-hover:text-emerald-500/20 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{p.title}</h3>
                  <p className="text-lg text-zinc-400 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
