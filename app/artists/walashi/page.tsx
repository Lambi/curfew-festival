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

export default function WalashiPage() {
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
          src="/images/walashi-live.jpg"
          alt="Walashi performing live"
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
            WALASHI
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-cream/50 text-sm md:text-base tracking-wide mt-2">
            Syria / Dubai
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
            MIDDLE EASTERN HOUSE
          </span>
        </motion.div>

        <motion.p custom={1} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
          Bridging the sounds of the Middle East with deep, hypnotic house grooves, Walashi creates something entirely new on the dancefloor. Born in Syria and now based in Dubai, his sound carries the weight of tradition while pushing forward into uncharted territory.
        </motion.p>

        <motion.p custom={2} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
          A Boiler Room alumni whose sets weave Arabic melodies, oud textures, and vocal samples through pulsing four-to-the-floor rhythms. His performances are journeys that connect continents and cultures through the universal language of the dancefloor.
        </motion.p>

        <motion.p custom={3} variants={fadeUp} className="body-text text-cream/70 text-lg md:text-xl leading-relaxed mb-12">
          At Curfew 2026, Walashi will bring that distinctive blend of Middle Eastern soul and European electronic energy to Blaarmeersen. Expect the unexpected.
        </motion.p>
      </motion.section>

      {/* Second photo */}
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/walashi-portrait.jpg"
          alt="Walashi portrait"
          fill
          className="object-cover object-center"
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
