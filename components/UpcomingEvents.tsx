'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { buildLandingUrl, buildTicketUrl, buildWideOpenTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';
import { FULL_LINEUP_DISPLAY } from '@/lib/festivalTimetable';

type TicketTarget = string | (() => string) | null;

type UpcomingEvent = {
  name: string;
  date: string;
  venue: string;
  lineup: string;
  description?: string;
  status: string;
  url: TicketTarget;
};

const events: UpcomingEvent[] = [
  {
    name: 'CLUB CURFEW INVITES THE REKORD KLUB',
    date: 'SAT 16 MAY',
    venue: 'Sint-Jacobsnieuwstraat 30 \u00B7 Ghent',
    lineup: 'Wide Open afterhours \u00B7 Deejames b2b Deejames \u00B7 Vinyl only',
    description: '10 hours and more. No handover, no feature, no shortcut.',
    status: 'MAY 16 TICKETS',
    url: buildWideOpenTicketUrl,
  },
  {
    name: 'CURFEW FESTIVAL 2026',
    date: 'SAT 6 JUNE',
    venue: 'Sport Vlaanderen \u00B7 Blaarmeersen \u00B7 Ghent',
    lineup: FULL_LINEUP_DISPLAY,
    description: 'Final timetable announced across Main and Hide Out.',
    status: 'FESTIVAL TICKETS',
    url: buildTicketUrl,
  },
  {
    name: 'CLUB CURFEW \u2014 GENTSE FEESTEN',
    date: 'FRI 17 JULY \u2013 SUN 26 JULY',
    venue: 'Sint-Jacobsnieuwstraat \u00B7 Ghent',
    lineup: '10 Days Off \u00B7 Lineup TBA',
    status: 'SOON',
    url: null,
  },
  {
    name: 'CURFEW \u00D7 PUSH IT OPEN AIR',
    date: 'SAT 25 SEPTEMBER',
    venue: 'Secret Location \u00B7 Ghent',
    lineup: 'Lineup TBA',
    status: 'SOON',
    url: null,
  },
  {
    name: 'CURFEW \u00D7 ???',
    date: 'SAT 31 OCTOBER',
    venue: 'Secret Location \u00B7 Ghent',
    lineup: 'Birthday of a very special label in house music \u00B7 TBA',
    status: 'SOON',
    url: null,
  },
  {
    name: "CURFEW \u00D7 MO'JUICE",
    date: 'SAT 7 NOVEMBER',
    venue: 'Club Wintercircus \u00B7 Ghent',
    lineup: 'Kamma & Masalo \u00B7 Forbidden Fruit \u00B7 Nico Juice & Mo\u2019Disko',
    status: 'SOON',
    url: null,
  },
];

export default function UpcomingEvents() {
  function handleEventClick(url: TicketTarget) {
    trackTicketClick();
    const target = typeof url === 'function' ? url() : url || buildLandingUrl();
    window.open(target, '_blank');
  }

  return (
    <section id="events" className="py-8 md:py-14 px-6">
      <div className="max-w-[900px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-4">UPCOMING EVENTS</h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="text-cream-muted text-center mb-8 tagline">
              Curfew beyond the festival.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="space-y-0">
              {events.map((event, i) => (
                <button
                  key={event.name}
                  onClick={() => handleEventClick(event.url)}
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
                      {event.description && (
                        <p className="text-cream-muted/45 text-xs md:text-sm mt-2 max-w-[620px]">
                          {event.description}
                        </p>
                      )}
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
                onClick={() => handleEventClick(null)}
                className="inline-block border border-golden text-cream px-8 py-3 text-xs tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
              >
                ALL EVENTS
              </button>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
