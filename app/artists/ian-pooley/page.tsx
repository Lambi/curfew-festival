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

export default function IanPooleyPage() {
  return (
    <div className="min-h-screen bg-deep text-cream">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
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
          src="/images/ian-pooley-street.jpg"
          alt="Ian Pooley"
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
            <span className="inline-block bg-golden text-deep text-[10px] tracking-[0.2em] font-bold px-3 py-1.5">
              LIVE
            </span>
          </motion.div>
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider"
          >
            IAN POOLEY
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-cream/50 text-sm md:text-base tracking-wide mt-2">
            Germany
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
            DEEP HOUSE
          </span>
        </motion.div>

        <motion.p custom={1} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
          A pioneer of the Frankfurt sound, Ian Pooley has been shaping deep house and techno since the early &rsquo;90s. His productions blend Latin rhythms, jazz influences, and warm electronic grooves into something unmistakably his own.
        </motion.p>

        <motion.p custom={2} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
          For Curfew 2026 he brings an exclusive live set — performing his tracks live on stage with hardware, synthesizers, and that signature warmth that has filled dancefloors from Panorama Bar to Fabric and beyond.
        </motion.p>

        <motion.p custom={3} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-12">
          This is a rare opportunity to experience one of house music&rsquo;s most respected figures in an intimate, live performance setting at Blaarmeersen.
        </motion.p>

        {/* Links */}
        <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-4">
          <a
            href="https://open.spotify.com/artist/3dBKhZCi2cluaB0VW1XrBE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-golden text-golden px-6 py-3 text-xs tracking-[0.2em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            SPOTIFY
          </a>
        </motion.div>
      </motion.section>

      {/* Second photo */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/ian-pooley-portrait-new.jpg"
          alt="Ian Pooley portrait"
          fill
          className="object-cover object-center"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-deep/30" />
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-16 md:py-24 text-center">
        <p className="text-cream/40 text-sm tracking-[0.2em] mb-6">SAT 6 JUNE · BLAARMEERSEN · GENT</p>
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
