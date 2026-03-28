'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface CharacterRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const CharacterReveal = ({
  text,
  className = '',
  as = 'h2',
  delay = 0,
}: CharacterRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const characters = text.split('').map((char) => (char === ' ' ? '\u00A0' : char));

  const MotionComponent = motion[as as keyof typeof motion] as any;

  if (prefersReducedMotion) {
    return (
      <MotionComponent className={className} ref={ref}>
        {text}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent className={className} ref={ref}>
      {characters.map((char, index) => (
        <span key={index} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : { y: '110%' }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: delay + index * 0.02,
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
};

export const WordReveal = ({
  text,
  className = '',
  delay = 0,
}: WordRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const words = text.split(' ');

  if (prefersReducedMotion) {
    return (
      <p className={className} ref={ref}>
        {text}
      </p>
    );
  }

  return (
    <p className={className} ref={ref}>
      {words.map((word, index) => (
        <span key={index} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
              delay: delay + index * 0.03,
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </p>
  );
};
