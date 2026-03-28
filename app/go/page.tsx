'use client';

import { useEffect } from 'react';
import { buildTicketUrl } from '@/lib/ticketUrl';

export default function GoPage() {
  useEffect(() => {
    // Fire Meta Pixel PageView
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }

    // Redirect to Tiqs with UTM passthrough
    const url = buildTicketUrl();
    window.location.href = url;
  }, []);

  return (
    <div className="min-h-screen bg-deep flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-cream text-4xl font-bold tracking-wider mb-4">
          CURFEW
        </h1>
        <p className="text-cream-muted text-sm tracking-widest">
          Redirecting to tickets...
        </p>
      </div>
    </div>
  );
}
