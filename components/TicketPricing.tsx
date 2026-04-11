'use client';

import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { buildTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';

const tiers = [
  { name: 'Pre-Release', price: '€20', status: 'sold-out' as const },
  { name: 'Early Birds', price: '€25', status: 'active' as const },
  { name: 'Wave 1', price: '€30', status: 'upcoming' as const },
  { name: 'Wave 2', price: '€35', status: 'upcoming' as const },
  { name: 'Final Wave', price: '€40', status: 'upcoming' as const },
  { name: 'Door Sale', price: '€45', status: 'upcoming' as const },
];

const groupTiers = [
  { name: 'Love Birds Duo Ticket', detail: '2 × €27.50', price: '€55' },
  { name: '5 Group Ticket', detail: '5 × €25.00', price: '€125' },
  { name: '10 Group Ticket', detail: '10 × €22.50', price: '€225' },
  { name: 'Bday Formula', detail: 'contact us for magic', price: null },
];

export default function TicketPricing() {
  function handleTicketClick() {
    trackTicketClick();
    window.open(buildTicketUrl(), '_blank');
  }

  return (
    <section className="py-8 md:py-14 px-6">
      <div className="max-w-[700px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-4">TICKETS</h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="tagline text-cream-muted text-center mb-10">
              SAT 6 JUNE 2026 &middot; BLAARMEERSEN &middot; GHENT
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="space-y-0">
              {tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`flex items-center justify-between py-4 px-4 -mx-4 ${
                    i < tiers.length - 1 ? 'border-b border-cream/[0.08]' : ''
                  } ${tier.status === 'active' ? 'bg-golden/[0.06]' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                        tier.status === 'sold-out'
                          ? 'bg-cream/20'
                          : tier.status === 'active'
                            ? 'bg-golden animate-pulse'
                            : 'bg-cream/10'
                      }`}
                    />
                    <span
                      className={`text-base font-semibold tracking-wide ${
                        tier.status === 'sold-out'
                          ? 'text-cream/30 line-through'
                          : tier.status === 'active'
                            ? 'text-cream'
                            : 'text-cream/50'
                      }`}
                    >
                      {tier.name}
                    </span>
                    {tier.status === 'sold-out' && (
                      <span className="text-[9px] tracking-[0.15em] font-bold text-coral/80 uppercase">
                        Sold Out
                      </span>
                    )}
                    {tier.status === 'active' && (
                      <span className="text-[9px] tracking-[0.15em] font-bold text-golden uppercase">
                        On Sale
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-display font-bold text-lg tracking-wide ${
                      tier.status === 'sold-out'
                        ? 'text-cream/20'
                        : tier.status === 'active'
                          ? 'text-golden'
                          : 'text-cream/40'
                    }`}
                  >
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <h3 className="text-cream text-center mt-12 mb-6 text-xs tracking-[0.3em] font-bold uppercase">Group Tickets</h3>
            <div className="space-y-0">
              {groupTiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`flex items-center justify-between py-4 px-4 -mx-4 ${
                    i < groupTiers.length - 1 ? 'border-b border-cream/[0.08]' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-base font-semibold tracking-wide text-cream/80">
                      {tier.name}
                    </span>
                    <span className="text-cream/40 text-xs mt-0.5">
                      {tier.detail}
                    </span>
                  </div>
                  {tier.price ? (
                    <span className="font-display font-bold text-lg tracking-wide text-cream/60">
                      {tier.price}
                    </span>
                  ) : (
                    <span className="text-golden text-xs tracking-wider font-semibold">
                      ASK US
                    </span>
                  )}
                </div>
              ))}
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="text-center mt-10">
              <button
                onClick={handleTicketClick}
                className="bg-golden text-deep px-10 py-4 text-sm tracking-[0.25em] font-bold hover:bg-golden/90 transition-all duration-300"
              >
                FESTIVAL TICKETS
              </button>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
