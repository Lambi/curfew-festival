'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { buildTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 2.8 + i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function Hero() {
  function handleTicketClick() {
    trackTicketClick();
    window.open(buildTicketUrl(), '_blank');
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-deep">
      {/* Warm glow behind hero */}
      <div className="warm-glow absolute top-[-200px] left-1/2 -translate-x-1/2" />

      {/* Hero gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />

      {/* Hero image */}
      <motion.div
        className="relative z-10 w-[85vw] max-w-[700px] aspect-[4/3] md:aspect-[16/9] overflow-hidden mb-8 md:mb-12"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Image
          src="/images/curfew-crowd-golden-hour.jpg"
          alt="Curfew Festival crowd at golden hour"
          fill
          className="object-cover warm-grade"
          priority
          sizes="(max-width: 768px) 85vw, 700px"
        />
      </motion.div>

      {/* Text content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="label text-golden mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          IN HOUSE WE TRUST
        </motion.p>

        <motion.h1
          className="hero-title text-cream mb-4"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="block text-[clamp(2rem,5vw,4rem)] font-display font-700 tracking-[0.3em] mb-2">
            THE SOUND OF
          </span>
          CURFEW
        </motion.h1>

        <motion.p
          className="label text-cream/60 mb-8 tracking-[0.2em]"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          SAT 6 JUNE &middot; BLAARMEERSEN &middot; GENT
        </motion.p>

        <motion.button
          onClick={handleTicketClick}
          className="border-2 border-golden text-cream px-10 py-3 text-sm tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300 mb-6"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          GET TICKETS
        </motion.button>

        <motion.p
          className="tagline text-golden"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Where House Comes Home
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <motion.div
          className="w-px h-12 bg-cream/40 mx-auto"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
