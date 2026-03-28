import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Curfew Festival 2026 — In House We Trust',
  description: 'SAT 6 JUNE · Blaarmeersen · Gent. Non-profit house music festival. In House We Trust.',
  metadataBase: new URL('https://curfew.events'),
  openGraph: {
    title: 'Curfew Festival 2026 — In House We Trust',
    description: 'SAT 6 JUNE · Blaarmeersen · Gent. Non-profit house music festival.',
    url: 'https://curfew.events',
    siteName: 'Curfew',
    images: [{ url: '/images/og-curfew-2026.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curfew Festival 2026 — In House We Trust',
    description: 'SAT 6 JUNE · Blaarmeersen · Gent. Non-profit house music festival.',
  },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700;900&family=Work+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/images/curfew-crowd-golden-hour.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicEvent',
              name: 'Curfew Festival 2026',
              description: 'Non-profit house music festival. In House We Trust.',
              startDate: '2026-06-06',
              location: {
                '@type': 'Place',
                name: 'Blaarmeersen',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Gent',
                  addressCountry: 'BE',
                },
              },
              performer: [{ '@type': 'MusicGroup', name: 'Ian Pooley' }],
              offers: {
                '@type': 'Offer',
                url: 'https://www.tiqs.com/alfred/upcoming_events/217350',
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock',
              },
              organizer: {
                '@type': 'Organization',
                name: 'Curfew',
                url: 'https://curfew.events',
              },
            }),
          }}
        />
      </head>
      <body className="bg-deep text-cream overflow-x-hidden">{children}</body>
    </html>
  );
}
