'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface AtmosphereBreakProps {
  src: string;
  alt: string;
}

export default function AtmosphereBreak({ src, alt }: AtmosphereBreakProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div ref={ref} className="relative w-full min-h-[60vh] md:min-h-[80vh] overflow-hidden">
      <motion.div className="relative h-[120%] scale-110 overflow-hidden" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center warm-grade"
          style={{
            animation: 'kenBurns 20s ease-in-out infinite alternate',
          }}
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <div className="font-display font-black text-cream/[0.04] text-[clamp(5rem,15vw,12rem)] leading-none">
          CURFEW
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26,26,46,0.5) 100%)',
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}} />
    </div>
  );
}
