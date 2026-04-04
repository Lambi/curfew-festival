'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + custom * 0.1,
      ease: 'easeOut' as const,
    },
  }),
};

export default function PabelsPage() {
  return (
    <div className="min-h-screen bg-deep text-cream">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 bg-deep/60 backdrop-blur-sm">
        <Link
          href="/#lineup"
          className="inline-flex items-center gap-2 text-cream/60 text-sm tracking-[0.15em] font-bold hover:text-golden transition-colors"
        >
          <span>&larr;</span> BACK TO LINEUP
        </Link>
      </nav>

      {/* Hero section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
        <Image
          src="/images/pabels-decks.jpg"
          alt="Pabels behind the decks"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" />

        <motion.div
          className="absolute bottom-12 left-6 md:left-16 right-6 z-10"
          initial="hidden"
          animate="visible"
        >
          <motion.div custom={0} variants={fadeUp} className="mb-3">
            <span className="inline-block border border-golden/40 text-golden text-[10px] tracking-[0.2em] font-bold px-3 py-1.5 bg-deep/60 backdrop-blur-sm">
              DJ SET
            </span>
          </motion.div>
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
          >
            PABELS
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-cream/50 text-sm md:text-base tracking-wide mt-2">
            Colombia
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <motion.section
        className="px-6 md:px-16 py-16 md:py-24 max-w-[900px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div custom={0} variants={fadeUp} className="mb-6">
          <span className="inline-block border border-golden/40 text-golden text-[10px] tracking-[0.2em] font-bold px-3 py-1">
            HOUSE · DISCO · BALEARIC
          </span>
        </motion.div>

        <motion.p custom={1} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
          A digger and DJ from Buenos Aires who has garnered worldwide praise through his unique selections and raw energy behind the decks. Pabels brings a sound that is equal parts crate-digging obsession and pure dancefloor intuition.
        </motion.p>

        <motion.p custom={2} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
          His Day Mix series has amassed hundreds of thousands of streams, blending house, disco, balearic, afrobeat, soul, and hip hop into something fresh. He has played at Calvi On The Rocks, Mareh Festival, Gop Tun, Lollapalooza, Pikes Ibiza, Le Bain NYC, and many more.
        </motion.p>

        <motion.p custom={3} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-12">
          In Argentina, Pabels is a driving force behind the house and disco scene through his event series Linea Caliente and Bonaire. His 2025 Euro Tour took him from KOKO London to Sisyphos Berlin, Pikes Ibiza, and beyond. Curfew is ready for the heat.
        </motion.p>

        {/* Links */}
        <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com/pabelspabels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-golden text-golden px-6 py-3 text-xs tracking-[0.2em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            INSTAGRAM
          </a>
          <a
            href="https://linktr.ee/pabels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream/20 text-cream px-6 py-3 text-xs tracking-[0.2em] font-bold hover:border-golden hover:text-golden transition-all duration-300"
          >
            LINKTREE
          </a>
        </motion.div>
      </motion.section>

      {/* Second photo */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/pabels-portrait.jpg"
          alt="Pabels portrait"
          fill
          className="object-cover object-top"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-deep/30" />
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-16 md:py-24 text-center">
        <p className="text-cream/40 text-sm tracking-[0.2em] mb-6">SAT 6 JUNE · BLAARMEERSEN · GHENT</p>
        <Link
          href="/#lineup"
          className="inline-block border border-cream/20 text-cream px-8 py-3 text-xs tracking-[0.25em] font-bold hover:border-golden hover:text-golden transition-all duration-300"
        >
          VIEW FULL LINEUP
        </Link>
      </section>
    </div>
  );
}
