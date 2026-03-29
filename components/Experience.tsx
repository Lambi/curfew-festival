'use client';

import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const cards = [
  {
    label: 'THE SOUND',
    title: 'Deep house that moves your soul.',
    description: 'Curated lineups. Underground selectors. Music that connects.',
    image: '/images/curfew-live-act-deck.jpg',
    alt: 'DJ performing at Curfew',
  },
  {
    label: 'THE PEOPLE',
    title: 'A family of music lovers.',
    description: 'No pretense. Just people who live for the groove.',
    image: '/images/curfew-crowd-stage-purple.jpg',
    alt: 'Curfew crowd enjoying the music',
  },
  {
    label: 'THE PLACE',
    title: 'Open air. Golden light.',
    description: 'Blaarmeersen, Gent. Where the city meets nature.',
    image: '/images/curfew-crowd-golden-hour.jpg',
    alt: 'Blaarmeersen at golden hour',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-cream text-center mb-16">THE EXPERIENCE</h2>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <ScrollRevealItem key={card.label}>
              <div className="group relative overflow-hidden aspect-[3/4]">
                {/* Photo background */}
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <p className="text-golden text-[10px] tracking-[0.3em] font-bold mb-3">{card.label}</p>
                  <h3 className="font-display text-cream text-xl md:text-2xl font-bold tracking-wide mb-2">
                    {card.title}
                  </h3>
                  <p className="text-cream/50 italic text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
