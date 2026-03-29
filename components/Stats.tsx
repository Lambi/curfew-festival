'use client';

import CountUp from './CountUp';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

const stats = [
  { number: 10, suffix: '+', label: 'YEARS', sublabel: 'OF HOUSE' },
  { number: 100, suffix: '+', label: 'EVENTS', sublabel: 'HOSTED' },
  { number: 40000, suffix: '+', label: 'PEOPLE', sublabel: 'UNITED' },
];

export default function Stats() {
  return (
    <section className="py-14 md:py-24 px-6 relative">
      <div className="warm-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          {stats.map((stat) => (
            <ScrollRevealItem key={stat.label}>
              <div>
                <p className="font-display font-black text-golden leading-none mb-3" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
                  <CountUp target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="label text-cream tracking-[0.25em] text-sm">{stat.label}</p>
                <p className="label text-cream/40 tracking-[0.25em] mt-1 text-xs">{stat.sublabel}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>

      {/* Golden divider */}
      <div className="max-w-[200px] mx-auto mt-12 md:mt-16">
        <div className="h-px bg-golden/30" />
      </div>
    </section>
  );
}
