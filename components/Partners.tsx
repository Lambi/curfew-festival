'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const partners = [
  { name: 'Tout Bien', logo: '/images/toutbien-logo.svg' },
  { name: 'Yugen', logo: '/images/yugen-logo.svg' },
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
            <div className="flex justify-center items-center gap-16 md:gap-24">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                  style={{ width: 160, height: 60 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
