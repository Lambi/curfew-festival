'use client';

import Image from 'next/image';
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
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain brightness-0 invert"
                    sizes="160px"
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
