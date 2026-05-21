'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

export default function Partners() {
  return (
    <section id="partners" className="py-6 md:py-10 px-6">
      <div className="max-w-[600px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <p className="label text-cream/30 text-center mb-8 tracking-[0.3em] text-xs">
              PARTNERS & FRIENDS
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/toutbien-logo.svg"
                alt="Tout Bien"
                className="max-h-8 w-auto max-w-[130px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 md:max-h-10 md:max-w-[220px]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/yugen-logo.svg"
                alt="Yugen"
                className="max-h-8 w-auto max-w-[130px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 md:max-h-10 md:max-w-[220px]"
              />
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
