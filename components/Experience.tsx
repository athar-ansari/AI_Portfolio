'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Career Trajectory</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Professional <span className="text-zinc-600 italic">Tenure</span>
          </h2>
        </motion.div>

        <div className="space-y-40">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-20 group"
            >
              <div className="space-y-10 group-hover:translate-x-4 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors duration-500">
                    <span className="text-[10px] font-mono text-zinc-600 group-hover:text-emerald-500 transition-colors duration-500">0{index + 1}</span>
                  </div>
                  <div className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em]">
                    {exp.period}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none group-hover:text-white transition-colors duration-500">{exp.role}</h3>
                  <div className="flex items-center gap-3">
                    <p className="text-xl font-light italic text-zinc-500">{exp.company}</p>
                    {exp.company === "Freelance / Independent" && (
                      <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[9px] font-mono uppercase tracking-widest">Consulting</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-20">
                <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-tight tracking-tight max-w-4xl">
                  {exp.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 rounded-[2rem] overflow-hidden">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="group/highlight p-10 bg-black hover:bg-zinc-950 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mb-8 group-hover/highlight:scale-150 group-hover/highlight:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all" />
                      <p className="text-lg text-zinc-500 font-light leading-relaxed group-hover/highlight:text-zinc-300 transition-colors">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
