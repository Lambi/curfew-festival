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
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
      </motion.div>

      {/* Subtle vignette only */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(26,26,46,0.5) 100%)',
        }}
      />
    </div>
  );
}
