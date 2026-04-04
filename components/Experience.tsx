'use client';

import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const pillars = [
  {
    label: 'THE SOUND',
    title: 'Deep house that moves your soul.',
    description: 'Curated lineups. Underground selectors. Music that connects.',
  },
  {
    label: 'THE PEOPLE',
    title: 'A family of music lovers.',
    description: 'No pretense. Just people who live for the groove.',
  },
  {
    label: 'THE PLACE',
    title: 'Open air. Golden light.',
    description: 'Blaarmeersen, Gent. Where the city meets nature.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-8 md:py-14 px-6">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-cream text-center mb-10">THE EXPERIENCE</h2>
        </ScrollReveal>

        {/* Single wide cinematic photo */}
        <ScrollReveal>
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-10">
            <Image
              src="/images/curfew-dj-duo-blue.jpg"
              alt="DJ duo performing in blue lights at Curfew"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/20" />
          </div>
        </ScrollReveal>

        {/* Three text pillars */}
        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {pillars.map((pillar) => (
            <ScrollRevealItem key={pillar.label}>
              <div>
                <p className="text-golden text-[10px] tracking-[0.3em] font-bold mb-3">{pillar.label}</p>
                <h3 className="font-display text-cream text-xl md:text-2xl font-bold tracking-wide mb-2">
                  {pillar.title}
                </h3>
                <p className="text-cream/50 italic text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
