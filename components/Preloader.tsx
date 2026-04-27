'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a short delay to allow 3D assets to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0a0a] text-white"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="text-5xl md:text-7xl font-bold tracking-tighter">Athar.</div>
            <div className="w-64 h-px bg-white/10 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.8, ease: "circOut" }}
                className="absolute inset-0 bg-emerald-500"
              />
            </div>
            <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em]">Loading Experience</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
