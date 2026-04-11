'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { buildTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';

export default function About() {
  function handleTicketClick() {
    trackTicketClick();
    window.open(buildTicketUrl(), '_blank');
  }

  return (
    <section className="py-8 md:py-14 px-6">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal stagger>
          {/* Centered text */}
          <div className="text-center max-w-[700px] mx-auto">
            <ScrollRevealItem>
              <p className="body-text text-cream/70 mb-5 text-lg leading-relaxed">
                It started in 2015 with a simple idea: create a space where house music
                feels like home. A group of friends in Gent, Belgium, who believed the
                dancefloor could be something more than a night out — it could be a community.
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="body-text text-cream/70 mb-5 text-lg leading-relaxed">
                Curfew is a non-profit movement. Every event we organize goes back into
                the music, the people, and the experience. No investors, no corporate
                agenda — just a crew that lives for deep, soulful house and the
                connections it creates.
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="body-text text-cream/70 mb-6 text-lg leading-relaxed">
                Over 10 years, 100+ events, and 40.000 people later, the mission
                hasn&apos;t changed. We bring people together under open skies and golden
                light, and we let the music do the rest.
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <p className="text-golden font-bold italic text-xl md:text-2xl mb-8">
                In House We Trust.
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <button
                onClick={handleTicketClick}
                className="inline-block border border-golden text-cream px-8 py-3 text-xs tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
              >
                GET TICKETS
              </button>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
