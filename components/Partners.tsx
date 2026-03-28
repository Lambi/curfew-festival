'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const partners = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
];

export default function Partners() {
  return (
    <section className="py-20 md:py-30 px-6">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-12 text-2xl md:text-3xl">
              PARTNERS & FRIENDS
            </h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="w-24 h-12 md:w-32 md:h-16 border border-cream/[0.08] flex items-center justify-center text-cream/30 text-xs tracking-widest hover:text-golden hover:border-golden/20 transition-all duration-300 opacity-50 hover:opacity-100"
                >
                  LOGO
                </div>
              ))}
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
