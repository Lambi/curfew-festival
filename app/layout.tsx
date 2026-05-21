import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { FULL_LINEUP_DISPLAY, FULL_LINEUP_NAMES, FULL_LINEUP_SENTENCE } from '@/lib/festivalTimetable';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-NX0DWXZZBY';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1a2e',
};

export const metadata: Metadata = {
  title: {
    default: 'Curfew Festival 2026 — Open-Air House Music Festival in Ghent',
    template: '%s | Curfew Festival 2026',
  },
  description:
    `Curfew Festival 2026: Saturday 6 June at Sport Vlaanderen, Blaarmeersen, Ghent. Final timetable announced across Main and Hide Out: ${FULL_LINEUP_SENTENCE}. In House We Trust.`,
  metadataBase: new URL('https://curfew.events'),
  alternates: {
    canonical: 'https://curfew.events',
  },
  keywords: [
    'Curfew Festival',
    'Curfew Festival 2026',
    'house music festival',
    'Ghent festival',
    'Blaarmeersen',
    'open air festival Belgium',
    'deep house festival',
    'Ian Pooley live',
    'Pabels DJ',
    'Walashi DJ',
    'Borat Music Mania',
    'Sharon Deman',
    'Fonkituur',
    'Red D Jensen',
    'Deejames',
    'No Shit Like Deep',
    'Hide Out stage',
    'non-profit festival',
    'In House We Trust',
    'Curfew Gent',
    'house music Ghent',
    'summer festival Belgium 2026',
    'electronic music festival',
    'daytime festival',
  ],
  openGraph: {
    title: 'Curfew Festival 2026 — Open-Air Edition',
    description:
      `SAT 6 JUNE · Sport Vlaanderen, Blaarmeersen · Ghent. Final timetable announced: ${FULL_LINEUP_DISPLAY}.`,
    url: 'https://curfew.events',
    siteName: 'Curfew',
    images: [
      {
        url: '/images/og-curfew-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'Curfew Festival 2026 — Open-Air House Music at Blaarmeersen, Ghent',
      },
    ],
    type: 'website',
    locale: 'en_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curfew Festival 2026 — Open-Air Edition',
    description:
      `SAT 6 JUNE · Sport Vlaanderen, Blaarmeersen · Ghent. Final timetable announced across Main and Hide Out.`,
    images: ['/images/og-curfew-2026.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'music',
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;700;900&family=Work+Sans:ital,wght@0,300;0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/images/curfew-crowd-golden-hour.jpg"
        />

        {/* Schema.org: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Curfew',
              legalName: 'VZW Lada',
              url: 'https://curfew.events',
              logo: 'https://curfew.events/images/og-curfew-2026.jpg',
              description:
                'Non-profit house music collective based in Ghent, Belgium. Organizing events and festivals since 2015. In House We Trust.',
              foundingDate: '2015',
              email: 'info@curfew.events',
              sameAs: [
                'https://instagram.com/curfew.events',
                'https://facebook.com/curfew.events',
                'https://soundcloud.com/curfew-events',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ghent',
                addressRegion: 'East Flanders',
                addressCountry: 'BE',
              },
            }),
          }}
        />

        {/* Schema.org: MusicEvent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicEvent',
              name: 'Curfew Festival 2026',
              description:
                `Non-profit open-air house music festival at Sport Vlaanderen, Blaarmeersen, Ghent. Final timetable announced: ${FULL_LINEUP_SENTENCE}. In House We Trust.`,
              startDate: '2026-06-06T12:00:00+02:00',
              endDate: '2026-06-07T02:00:00+02:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode:
                'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Sport Vlaanderen, Blaarmeersen',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Zuiderlaan 14',
                  addressLocality: 'Ghent',
                  postalCode: '9000',
                  addressRegion: 'East Flanders',
                  addressCountry: 'BE',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 51.0375,
                  longitude: 3.6883,
                },
              },
              performer: FULL_LINEUP_NAMES.map((name) => ({
                '@type': 'MusicGroup',
                name,
              })),
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Early Bird Ticket',
                  url: 'https://www.tiqs.com/alfred/events/shop/4789',
                  price: '25',
                  priceCurrency: 'EUR',
                  availability: 'https://schema.org/SoldOut',
                  validFrom: '2026-04-08T18:00:00+02:00',
                },
                {
                  '@type': 'Offer',
                  name: 'Wave 1 Ticket',
                  url: 'https://www.tiqs.com/alfred/events/shop/4789',
                  price: '30',
                  priceCurrency: 'EUR',
                  availability: 'https://schema.org/InStock',
                },
              ],
              organizer: {
                '@type': 'Organization',
                name: 'Curfew',
                url: 'https://curfew.events',
              },
              image: 'https://curfew.events/images/og-curfew-2026.jpg',
            }),
          }}
        />

        {/* Schema.org: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Curfew Festival',
                  item: 'https://curfew.events',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Lineup',
                  item: 'https://curfew.events/#lineup',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Tickets',
                  item: 'https://www.tiqs.com/alfred/events/shop/4789',
                },
              ],
            }),
          }}
        />

        {/* Schema.org: FAQPage for AI/chatbot discoverability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is Curfew Festival?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Curfew is a non-profit open-air house music festival in Ghent, Belgium. Founded in 2015, it takes place at Sport Vlaanderen, Blaarmeersen, and celebrates deep, soulful house music. The 2026 edition is on Saturday 6 June.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'When and where is Curfew Festival 2026?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Saturday 6 June 2026, from 12:00 until 02:00 at Sport Vlaanderen, Blaarmeersen, Ghent, Belgium.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Who is playing at Curfew Festival 2026?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: `The final Curfew Festival 2026 timetable includes ${FULL_LINEUP_SENTENCE}, across the Main and Hide Out stages.`,
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much are tickets for Curfew Festival 2026?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Early Birds are sold out. Wave 1 tickets are €30 and are the current last tickets available. Later waves range from €35 to €40, with door sale at €45 if available. Tickets are available at tiqs.com.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Curfew Festival a non-profit event?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Curfew is organized by VZW Lada, a non-profit organization. All proceeds go back into the music, community, and experience.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-deep text-cream overflow-x-hidden">
        {/* GA4 — consent mode default (EU regions denied until user grants) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_personalization': 'denied',
              'ad_user_data': 'denied',
              'region': ['BE', 'NL', 'FR', 'DE']
            });
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
