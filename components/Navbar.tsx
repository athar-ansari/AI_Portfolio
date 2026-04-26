'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '@/lib/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'} pointer-events-none`}>
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center pointer-events-auto transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-3xl border border-white/5 py-3 rounded-full' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-[10px] group-hover:bg-emerald-500 transition-colors duration-500">
            {portfolioData.name.charAt(0)}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white leading-none">{portfolioData.name}</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-2 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-1 rounded-full">
          {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a 
            href="#contact" 
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-[9px] font-mono uppercase tracking-[0.2em] font-bold hover:bg-emerald-500 hover:text-white transition-all duration-500"
          >
            Connect <ArrowUpRight size={12} />
          </a>
          <button 
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 bg-zinc-900/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden md:hidden pointer-events-auto shadow-2xl"
          >
            <div className="p-10 flex flex-col gap-8">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-bold tracking-tighter text-zinc-600 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="h-px bg-white/5 my-4" />
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-emerald-500 font-mono text-xs uppercase tracking-widest">Available for projects</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
