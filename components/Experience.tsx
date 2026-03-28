'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const cards = [
  {
    label: 'THE SOUND',
    title: 'Deep house that moves your soul.',
    description: 'Curated lineups. Underground selectors. Music that connects.',
    gradient: 'radial-gradient(ellipse at 30% 80%, rgba(200,164,90,0.10) 0%, transparent 60%)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-golden/60">
        <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
  },
  {
    label: 'THE PEOPLE',
    title: 'A family of music lovers.',
    description: 'No pretense. Just people who live for the groove.',
    gradient: 'radial-gradient(ellipse at 70% 80%, rgba(85,135,200,0.08) 0%, transparent 60%)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue/60">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'THE PLACE',
    title: 'Open air. Golden light.',
    description: 'Blaarmeersen, Gent. Where the city meets nature.',
    gradient: 'radial-gradient(ellipse at 50% 80%, rgba(90,160,90,0.07) 0%, transparent 60%)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream/40">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-30 px-6">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-cream text-center mb-16">THE EXPERIENCE</h2>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <ScrollRevealItem key={card.label}>
              <div
                className="group relative border border-cream/[0.08] bg-cream/[0.02] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-golden/20 overflow-hidden"
              >
                {/* Unique background gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: card.gradient }}
                />

                <div className="relative z-10">
                  <div className="mb-5">{card.icon}</div>
                  <p className="label text-golden mb-4">{card.label}</p>
                  <h3 className="font-display text-cream text-xl md:text-2xl font-bold tracking-wide mb-3">
                    {card.title}
                  </h3>
                  <p className="text-cream-muted italic text-sm leading-relaxed">
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
