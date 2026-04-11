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
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.div className="absolute inset-0 scale-[1.15]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>

      {/* Top blend into deep */}
      <div
        className="absolute top-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,26,46,1) 0%, rgba(26,26,46,0.4) 50%, transparent 100%)',
        }}
      />

      {/* Bottom blend into deep */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(26,26,46,1) 0%, rgba(26,26,46,0.4) 50%, transparent 100%)',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(26,26,46,0.5) 100%)',
        }}
      />
    </div>
  );
}
