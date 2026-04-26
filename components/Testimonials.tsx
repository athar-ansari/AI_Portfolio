'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Client Feedback</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Trusted by <span className="text-zinc-600 italic">Founders</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 rounded-[3rem] overflow-hidden">
          {portfolioData.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-16 bg-black flex flex-col justify-between group hover:bg-zinc-950 transition-all duration-700"
            >
              <div className="space-y-12">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, star) => (
                    <div key={star} className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors" />
                  ))}
                </div>
                <p className="text-2xl text-zinc-400 font-light leading-[1.3] tracking-tight group-hover:text-zinc-200 transition-colors duration-500">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-20 flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{t.name}</h4>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] group-hover:text-emerald-500 transition-colors">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
