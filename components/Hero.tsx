'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { portfolioData } from '@/lib/data';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Magnetic from '@/components/Magnetic';
import Image from 'next/image';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      const chars = text.split('');
      titleRef.current.innerHTML = chars
        .map((char) => `<span class="char inline-block origin-bottom">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      const tl = gsap.timeline();

      tl.fromTo(
        '.char',
        { y: '100%', rotateX: -90, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 1,
          ease: 'expo.out',
          delay: 0.2,
        }
      );

      tl.fromTo(
        '.hero-fade-in',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.5'
      );
    }
  }, []);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 lg:px-32 relative overflow-hidden bg-black">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(16,185,129,0.05)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 hero-fade-in"
          >
            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">Available for new opportunities</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            <h1 
              ref={titleRef}
              className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-[0.85] perspective-1000"
            >
              {portfolioData.name}
            </h1>
            <h2 className="text-2xl md:text-4xl text-zinc-400 font-light tracking-tight hero-fade-in">
              {portfolioData.role}
            </h2>
          </div>

          <div className="space-y-10 hero-fade-in">
            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-xl">
              Architecting <span className="text-zinc-300">scalable digital systems</span> and high-performance web applications for global startups and enterprise clients.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Magnetic>
                <a 
                  href="#projects" 
                  className="group relative flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold transition-all duration-500 hover:bg-emerald-500 hover:text-white"
                >
                  <span>View Strategic Works</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
              <Magnetic>
                <a 
                  href="#contact"
                  className="group flex items-center gap-3 border border-zinc-800 px-8 py-4 rounded-full font-bold text-white hover:bg-zinc-900 transition-all duration-500"
                >
                  Start a Conversation
                </a>
              </Magnetic>
              {/* <Magnetic>
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  className="group flex items-center gap-3 border border-emerald-500/30 px-8 py-4 rounded-full font-bold text-emerald-500 hover:bg-emerald-500/10 transition-all duration-500"
                >
                  Download CV
                </a>
              </Magnetic> */}
            </div>
          </div>
        </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden lg:flex justify-end items-center relative hero-fade-in"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[500px] h-[600px] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl shadow-emerald-500/5"
            >
              <Image 
                src="https://picsum.photos/1000/1200?random=100" 
                alt="Profile" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-500 block">Based in</span>
                  <p className="text-white font-medium tracking-wide">{portfolioData.location}</p>
                </div>
                
                <div className="flex gap-4">
                  <a href={portfolioData.socials.github} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-500 hover:scale-110 transition-all"><Github size={16} /></a>
                  <a href={portfolioData.socials.linkedin} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-500 hover:scale-110 transition-all"><Linkedin size={16} /></a>
                </div>
              </div>
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [-6, -4, -6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 top-32 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                      <Image src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="avatar" width={40} height={40} className="grayscale" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Trusted by</p>
                  <p className="text-zinc-400 text-xs">Global Founders</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

      </div>
    </section>
  );
}
