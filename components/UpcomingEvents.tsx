'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

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
                <div
                  key={event.name}
                  className={`py-6 md:py-8 ${i < events.length - 1 ? 'border-b border-cream/[0.08]' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h3 className="font-display text-cream text-xl md:text-2xl font-bold tracking-wider mb-1">
                        {event.name}
                      </h3>
                      <p className="text-cream-muted text-sm">
                        {event.date} &middot; {event.venue}
                      </p>
                      <p className="text-cream-muted/60 text-sm mt-1">{event.lineup}</p>
                    </div>
                    <span className="inline-flex self-start border border-golden text-golden px-4 py-1.5 text-xs tracking-[0.2em] font-bold">
                      {event.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="text-cream-muted/40 text-sm text-center mt-8">
              All events to be confirmed.
            </p>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
