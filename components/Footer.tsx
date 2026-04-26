'use client';

import React from 'react';
import { portfolioData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-12 lg:px-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px]">
                {portfolioData.name.charAt(0)}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white leading-none">{portfolioData.name}</span>
            </div>
            <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-sm">
              Architecting high-performance digital systems for the next generation of global startups.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] block">Sitemap</span>
              <ul className="space-y-3">
                {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-xs text-zinc-400 hover:text-emerald-500 transition-colors font-mono uppercase tracking-widest">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] block">Socials</span>
              <ul className="space-y-3">
                <li><a href={portfolioData.socials.github} className="text-xs text-zinc-400 hover:text-emerald-500 transition-colors font-mono uppercase tracking-widest">GitHub</a></li>
                <li><a href={portfolioData.socials.linkedin} className="text-xs text-zinc-400 hover:text-emerald-500 transition-colors font-mono uppercase tracking-widest">LinkedIn</a></li>
                <li><a href={portfolioData.socials.twitter} className="text-xs text-zinc-400 hover:text-emerald-500 transition-colors font-mono uppercase tracking-widest">Twitter</a></li>
              </ul>
            </div>
            <div className="space-y-6 hidden sm:block">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] block">Location</span>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-widest">{portfolioData.location}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} {portfolioData.name} — Senior Product Engineer
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em]">Built with Next.js 15</span>
            <div className="w-1 h-1 rounded-full bg-emerald-500/30" />
            <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em]">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
