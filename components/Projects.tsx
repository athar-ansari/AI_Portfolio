'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function ProjectImage({ src, title }: { src: string, title: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={ref} className="w-full lg:w-3/5 relative aspect-[16/10] overflow-hidden rounded-[3rem] bg-zinc-900">
      <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] mb-4 block">Strategic Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            Selected <span className="text-zinc-600 italic">Works</span>
          </h2>
        </motion.div>

        <div className="space-y-64">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-24 items-start`}>
                  <ProjectImage src={project.image} title={project.title} />

                  <div className="w-full lg:w-2/5 space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-zinc-900 flex items-center justify-center">
                          <span className="text-[10px] font-mono text-zinc-600">0{index + 1}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <span className={`px-3 py-1 rounded-full border text-[9px] font-mono uppercase tracking-widest ${project.type === 'Freelance' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-white/5 bg-white/5 text-zinc-400'}`}>
                            {project.type}
                          </span>
                          <div className="w-1 h-1 rounded-full bg-zinc-800" />
                          {project.tech.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[9px] font-mono uppercase tracking-widest text-zinc-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.85] group-hover:text-emerald-500 transition-colors duration-500">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-zinc-400 font-light leading-tight tracking-tight">
                      {project.description}
                    </p>

                    <div className="pt-4 flex items-center gap-4 text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em] group-hover:translate-x-4 transition-transform duration-500">
                      View Case Study <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
