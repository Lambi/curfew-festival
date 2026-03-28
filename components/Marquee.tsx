'use client';

export default function Marquee() {
  const row1Text =
    'IN HOUSE WE TRUST · SAT 6 JUNE 2026 · BLAARMEERSEN GENT · DEEP HOUSE · NON-PROFIT · SINCE 2015 · ';
  const row2Text =
    'CURFEW FESTIVAL · WHERE HOUSE COMES HOME · GENT BELGIUM · 40.000+ PEOPLE UNITED · ';

  const row1Full = row1Text + row1Text + row1Text + row1Text;
  const row2Full = row2Text + row2Text + row2Text + row2Text;

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-row {
          animation-play-state: running;
          transition: animation-play-state 0.2s ease;
        }

        .marquee-container:hover .marquee-row {
          animation-play-state: paused;
        }

        .marquee-row-left {
          animation: scrollLeft 30s linear infinite;
        }

        .marquee-row-right {
          animation: scrollRight 35s linear infinite;
        }
      `}</style>

      <section className="w-full py-4 md:py-5 border-y border-cream/[0.06] bg-cream/[0.02] overflow-hidden marquee-container">
        {/* Row 1: Scrolling Left */}
        <div className="flex flex-nowrap whitespace-nowrap mb-4 marquee-row marquee-row-left">
          <div className="font-display uppercase tracking-[0.3em] text-cream/20 text-sm flex-shrink-0">
            {row1Full}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex flex-nowrap whitespace-nowrap marquee-row marquee-row-right">
          <div className="font-display uppercase tracking-[0.3em] text-cream/20 text-sm flex-shrink-0">
            {row2Full}
          </div>
        </div>
      </section>
    </>
  );
}
