'use client';

import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

export default function About() {
  return (
    <section className="py-20 md:py-30 px-6">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream mb-12 md:mb-16">CURFEW</h2>
          </ScrollRevealItem>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Text column */}
            <div>
              <ScrollRevealItem>
                <p className="body-text text-cream-muted mb-6">
                  It started in 2015 with a simple idea: create a space where house music
                  feels like home. A group of friends in Gent, Belgium, who believed the
                  dancefloor could be something more than a night out — it could be a community.
                </p>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="body-text text-cream-muted mb-6">
                  Curfew is a non-profit movement. Every event we organize goes back into
                  the music, the people, and the experience. No investors, no corporate
                  agenda — just a crew that lives for deep, soulful house and the
                  connections it creates.
                </p>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="body-text text-cream-muted mb-8">
                  Over 10 years, 100+ events, and 40.000 people later, the mission
                  hasn&apos;t changed. We bring people together under open skies and golden
                  light, and we let the music do the rest.
                </p>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="text-golden font-bold italic text-lg md:text-xl mb-8">
                  In House We Trust.
                </p>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <a
                  href="#newsletter"
                  className="group inline-flex items-center gap-2 text-golden text-sm tracking-[0.2em] font-bold relative"
                >
                  BECOME A GROOVE ARCHITECT
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-golden transition-all duration-300 group-hover:w-full" />
                </a>
              </ScrollRevealItem>
            </div>

            {/* Photo column */}
            <ScrollRevealItem>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/curfew-stage-discoball.jpg"
                  alt="Curfew stage with disco ball at golden hour"
                  fill
                  className="object-cover warm-grade"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
