'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const letters = 'CURFEW'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-deep"
          exit={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Flash effect */}
          <motion.div
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ delay: 1.8, duration: 0.2, ease: 'easeInOut' }}
            style={{ backgroundColor: '#F5EFE1' }}
          />

          {/* Warm glow pulse behind text */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(200,164,90,0.08) 0%, transparent 60%)',
            }}
          />

          <div className="relative flex gap-1 md:gap-2">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="text-cream font-display text-5xl md:text-7xl font-black tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="mt-6 h-px bg-golden"
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          <motion.div
            className="fixed inset-0 pointer-events-none z-[9999]"
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
