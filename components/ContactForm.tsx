'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import Magnetic from './Magnetic';
import { portfolioData } from '@/lib/data';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.4em] block">Get In Touch</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.8]">
                Let's build <span className="text-zinc-600 italic">together</span>
              </h2>
            </div>
            
            <p className="text-2xl text-zinc-400 font-light leading-tight tracking-tight max-w-md">
              Whether you're a startup looking for an MVP or an established firm scaling up, I'm here to help.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] block">Direct Contact</span>
                <a href={`mailto:${portfolioData.email}`} className="text-2xl text-white hover:text-emerald-500 transition-colors tracking-tight">{portfolioData.email}</a>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] block">Social Connectivity</span>
                <div className="flex gap-6">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((s) => (
                    <a key={s} href="#" className="text-zinc-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16 rounded-[3rem] bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-3xl"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold tracking-tighter">Message Received</h3>
                  <p className="text-zinc-400 font-light">I'll get back to you within 24 hours.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 rounded-full border border-zinc-800 text-zinc-500 font-mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] ml-4">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] ml-4">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-8 py-5 text-white focus:outline-none focus:border-emerald-500/50 transition-all placeholder:text-zinc-700"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] ml-4">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project scope and objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-8 py-6 text-white focus:outline-none focus:border-emerald-500/50 transition-all resize-none placeholder:text-zinc-700"
                  />
                </div>

                <Magnetic>
                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-white text-black py-6 rounded-full font-bold flex items-center justify-center gap-4 hover:bg-emerald-500 hover:text-white transition-all duration-700 disabled:opacity-50 group"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <span className="uppercase tracking-widest text-xs">Initialize Conversation</span>
                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </Magnetic>
                
                {status === 'error' && (
                  <p className="text-red-500 text-[10px] text-center font-mono uppercase tracking-widest">Transmission failed. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
