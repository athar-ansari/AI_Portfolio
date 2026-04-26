'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10"
        >
          <div>
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Technical Arsenal</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85]">
              Expertise <span className="text-zinc-600 italic">& Stack</span>
            </h2>
          </div>
          <p className="text-xl text-zinc-500 font-light max-w-sm">
            A curated selection of technologies I use to build robust, scalable, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-b from-zinc-900/50 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              <div className="relative p-12 bg-zinc-900/20 border border-white/5 rounded-[3rem] h-full flex flex-col backdrop-blur-sm hover:bg-zinc-900/40 transition-colors duration-500">
                <div className="flex items-center justify-between mb-16">
                  <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-[0.4em] group-hover:text-emerald-500 transition-colors">
                    {skillGroup.category}
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                    <span className="text-[10px] font-mono text-zinc-600 group-hover:text-black transition-colors">0{index + 1}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {skillGroup.items.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-6 py-3 rounded-full bg-black/50 border border-zinc-800 text-zinc-300 text-sm font-mono hover:text-white hover:border-emerald-500/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
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
