'use client';

import { motion } from 'framer-motion';
import { buildTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';
import Countdown from './Countdown';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.5 + custom * 0.1,
      ease: 'easeOut' as const,
    },
  }),
};

const scrollIndicator = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 2.2,
    },
  },
};

const scrollPulse = {
  animate: {
    scaleY: [1, 1.3, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export default function VideoHero() {
  function handleTicketClick() {
    trackTicketClick();
    window.open(buildTicketUrl(), '_blank');
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes videoPulse {
          0%, 100% { filter: brightness(1) saturate(1.1); }
          50% { filter: brightness(1.08) saturate(1.15); }
        }
      `}} />

      <section className="relative min-h-[100svh] w-full overflow-hidden bg-deep">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: 'videoPulse 8s ease-in-out infinite' }}
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep/20 via-deep/40 to-deep/90" />

        {/* Content Layer */}
        <motion.div
          className="relative z-10 min-h-[100svh] flex flex-col items-center justify-end pb-20 md:pb-16 px-6 text-center"
          initial="hidden"
          animate="visible"
        >
          {/* "IN HOUSE WE TRUST" Label */}
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-golden tracking-widest text-sm font-semibold mb-4"
          >
            IN HOUSE WE TRUST
          </motion.p>

          {/* "CURFEW" Title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display font-black text-cream leading-none mb-6"
            style={{ fontSize: 'clamp(6rem, 20vw, 16rem)' }}
          >
            CURFEW
          </motion.h1>

          {/* Event Details Label */}
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-cream/60 text-sm tracking-wide mb-8"
          >
            SAT 6 JUNE · BLAARMEERSEN · GHENT
          </motion.p>

          {/* Get Tickets Button */}
          <motion.button
            custom={3}
            variants={fadeUp}
            onClick={handleTicketClick}
            className="border-2 border-golden text-golden px-8 py-3 font-semibold tracking-wide hover:bg-golden hover:text-deep transition-colors duration-300 mb-8"
          >
            EARLY BIRD TICKETS
          </motion.button>

          {/* Countdown */}
          <motion.div custom={4} variants={fadeUp} className="mb-6">
            <Countdown />
          </motion.div>

          {/* Tagline */}
          <motion.p
            custom={5}
            variants={fadeUp}
            className="text-golden italic text-sm"
          >
            Where House Comes Home
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollIndicator}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate="animate"
              variants={scrollPulse}
              className="w-px h-12 bg-cream/40 origin-center"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
