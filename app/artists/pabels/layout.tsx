import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pabels (DJ SET) — Colombia',
  description:
    'Pabels brings house, disco, and balearic grooves to Curfew Festival 2026 at Blaarmeersen, Ghent. Known for Day Mix series and sets at Calvi On The Rocks, Lollapalooza, Pikes Ibiza.',
  alternates: { canonical: 'https://curfew.events/artists/pabels' },
  openGraph: {
    title: 'Pabels DJ SET at Curfew Festival 2026',
    description:
      'House, disco & balearic at Blaarmeersen, Ghent. SAT 6 JUNE 2026.',
    images: [{ url: '/images/pabels-portrait.jpg', width: 800, height: 1067 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
