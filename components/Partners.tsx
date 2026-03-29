'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

export default function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 px-6">
      <div className="max-w-[600px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <p className="label text-cream/30 text-center mb-10 tracking-[0.3em] text-xs">
              PARTNERS & FRIENDS
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex justify-center items-center gap-16 md:gap-24">
              {/* Tout Bien */}
              <div className="flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300" style={{ width: 120, height: 40 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/toutbien-logo.svg"
                  alt="Tout Bien"
                  style={{ width: 120, height: 40, objectFit: 'contain' }}
                  className="brightness-0 invert"
                />
              </div>

              {/* Yugen */}
              <div className="flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity duration-300" style={{ width: 120, height: 40 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/yugen-logo.svg"
                  alt="Yugen"
                  style={{ width: 120, height: 40, objectFit: 'contain' }}
                  className="brightness-0 invert"
                />
              </div>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
