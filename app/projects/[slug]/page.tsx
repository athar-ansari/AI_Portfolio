'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';

export default function ProjectCaseStudy() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-emerald-500 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <ThreeBackground />
      <Navbar />

      <div className="pt-48 pb-32 px-6 md:px-12 lg:px-32 max-w-7xl mx-auto relative z-10">
        <motion.button
          onClick={() => router.back()}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-zinc-500 hover:text-white transition-all duration-500 mb-16 group"
        >
          <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest">Back to Portfolio</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 border border-emerald-500/20 px-5 py-2 rounded-full bg-emerald-500/5 backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-16 leading-[0.85]">
              {project.title}
            </h1>

            <div className="aspect-[16/9] relative rounded-[3rem] overflow-hidden mb-32 border border-zinc-900 group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="space-y-40">
              <section>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em]">01</span>
                  <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em]">The Challenge</h2>
                </div>
                <p className="text-3xl md:text-5xl text-zinc-100 font-light leading-[1.1] tracking-tight max-w-4xl">
                  {project.caseStudy?.problem}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em]">02</span>
                  <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em]">Strategic Solution</h2>
                </div>
                <p className="text-3xl md:text-5xl text-zinc-100 font-light leading-[1.1] tracking-tight max-w-4xl">
                  {project.caseStudy?.solution}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em]">03</span>
                  <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em]">Technical Impact</h2>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative glass p-16 md:p-24 rounded-[3rem] border-emerald-500/10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                      <CheckCircle2 size={200} className="text-emerald-500" />
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={32} className="text-black" />
                      </div>
                      <p className="text-4xl md:text-6xl text-white font-bold leading-[1] tracking-tighter">
                        {project.caseStudy?.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {project.caseStudy?.architecture && (
                <section>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em]">04</span>
                    <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em]">Architecture Deep-Dive</h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <h3 className="text-4xl font-bold tracking-tight text-white">{project.caseStudy.architecture.title}</h3>
                      <p className="text-2xl text-zinc-400 font-light leading-relaxed">
                        {project.caseStudy.architecture.description}
                      </p>
                    </div>
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800">
                      <Image
                        src={project.caseStudy.architecture.image}
                        alt="Architecture Diagram"
                        fill
                        className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-6 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono uppercase tracking-widest">
                          System Design Schema
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              <section className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-20 border-t border-zinc-900">
                <div>
                  <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-10">Architecture Focus</h3>
                  <ul className="space-y-8">
                    {['Distributed Scalability', 'End-to-End Type Safety', 'Edge Performance Optimization', 'High Availability Design'].map((item) => (
                      <li key={item} className="flex items-center gap-6 text-2xl text-zinc-400 font-light group">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em] mb-10">Key Technologies</h3>
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-8 py-4 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-300 text-sm font-mono hover:border-emerald-500/30 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block space-y-16 sticky top-48 h-fit"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] block">Role</span>
              <span className="text-xl text-zinc-200 font-light">Lead Full Stack Engineer</span>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] block">Timeline</span>
              <span className="text-xl text-zinc-200 font-light">4-6 Months Development</span>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] block">Deliverables</span>
              <ul className="space-y-3 text-xl text-zinc-400 font-light">
                <li className="hover:text-white transition-colors cursor-default">System Architecture</li>
                <li className="hover:text-white transition-colors cursor-default">API Documentation</li>
                <li className="hover:text-white transition-colors cursor-default">Frontend Design System</li>
                <li className="hover:text-white transition-colors cursor-default">Cloud Infrastructure</li>
              </ul>
            </div>
            <div className="pt-10">
              <a 
                href="#" 
                className="block w-full text-center bg-white text-black py-6 rounded-full font-bold hover:bg-emerald-500 hover:text-white transition-all duration-500 shadow-2xl shadow-white/5"
              >
                View Live Deployment
              </a>
            </div>
          </motion.aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
