'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

export default function Partners() {
  return (
    <section id="partners" className="py-10 md:py-16 px-6">
      <div className="max-w-[600px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <p className="label text-cream/30 text-center mb-8 tracking-[0.3em] text-xs">
              PARTNERS & FRIENDS
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex justify-center items-center gap-14 md:gap-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/toutbien-logo.svg"
                alt="Tout Bien"
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/yugen-logo.svg"
                alt="Yugen"
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
