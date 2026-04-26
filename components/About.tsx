'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { portfolioData } from '@/lib/data';

export default function About() {
  return (
    <section id="about-section" className="section-padding bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 group"
          >
            <Image
              src="https://picsum.photos/800/1000?random=200"
              alt="About me"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-10 left-10 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">Current Focus</p>
              <p className="text-white font-medium">Building scalable AI systems</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] block">The Architect</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                Beyond the <span className="text-zinc-600 italic">Code</span>
              </h2>
            </div>

            <div className="space-y-8 text-xl text-zinc-400 font-light leading-relaxed">
              <p>
                With over a decade of experience in software engineering, I've navigated the evolution of the web from monolithic structures to distributed, serverless architectures.
              </p>
              <p>
                My approach is rooted in <strong className="text-zinc-200 font-medium">pragmatic perfectionism</strong>. I believe that the best systems are those that balance elegant design with robust, real-world performance. I don't just write code; I craft digital ecosystems that scale gracefully under pressure.
              </p>
              <p>
                When I'm not architecting systems, you can find me exploring the intersection of design and technology, mentoring emerging developers, or diving deep into the latest advancements in artificial intelligence.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
              <div>
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">50+</p>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
