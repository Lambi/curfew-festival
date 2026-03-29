'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { buildTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';

const events = [
  {
    name: "MO'JUICE \u00D7 CURFEW",
    date: 'THU 16 OCTOBER',
    venue: 'Club Wintercircus \u00B7 Gent',
    lineup: 'Lineup TBA',
    status: 'SOON',
  },
  {
    name: 'CURFEW OPEN AIR',
    date: 'SUN 26 OCTOBER',
    venue: 'Location TBA',
    lineup: 'Lineup TBA',
    status: 'SOON',
  },
];

export default function UpcomingEvents() {
  function handleTicketClick() {
    trackTicketClick();
    window.open(buildTicketUrl(), '_blank');
  }

  return (
    <section id="events" className="py-20 md:py-30 px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-4">UPCOMING EVENTS</h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="text-cream-muted text-center mb-12 tagline">
              Curfew beyond the festival.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="space-y-0">
              {events.map((event, i) => (
                <button
                  key={event.name}
                  onClick={handleTicketClick}
                  className={`w-full text-left py-6 md:py-8 group hover:bg-cream/[0.02] transition-colors duration-300 px-4 -mx-4 ${i < events.length - 1 ? 'border-b border-cream/[0.08]' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3 className="font-display text-cream text-xl md:text-2xl font-bold tracking-wider mb-1 group-hover:text-golden transition-colors duration-300">
                        {event.name}
                      </h3>
                      <p className="text-cream-muted text-sm">
                        {event.date} &middot; {event.venue}
                      </p>
                      <p className="text-cream-muted/60 text-sm mt-1">{event.lineup}</p>
                    </div>
                    <span className="inline-flex self-start items-center gap-2 border border-golden text-golden px-4 py-1.5 text-xs tracking-[0.2em] font-bold group-hover:bg-golden group-hover:text-deep transition-all duration-300">
                      {event.status}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="text-center mt-10">
              <button
                onClick={handleTicketClick}
                className="inline-block border border-golden text-cream px-8 py-3 text-xs tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
              >
                GET TICKETS
              </button>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
