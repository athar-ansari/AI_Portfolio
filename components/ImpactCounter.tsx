'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { portfolioData } from '@/lib/data';

function Counter({ value, suffix }: { value: string, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const target = parseFloat(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, { maximumFractionDigits: target % 1 === 0 ? 0 : 1 })}
      {suffix}
    </span>
  );
}

export default function ImpactCounter() {
  return (
    <section className="pb-32 pt-10 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 rounded-[3rem] overflow-hidden">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-16 flex flex-col items-center justify-center text-center group hover:bg-zinc-950 transition-colors duration-500"
            >
              <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 group-hover:scale-110 transition-transform duration-700">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] group-hover:text-emerald-500 transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
