import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ian Pooley (LIVE) — Germany',
  description:
    'Ian Pooley performs an exclusive live set at Curfew Festival 2026, Blaarmeersen, Ghent. A pioneer of the Frankfurt sound, shaping deep house and techno since the early 90s.',
  alternates: { canonical: 'https://curfew.events/artists/ian-pooley' },
  openGraph: {
    title: 'Ian Pooley LIVE at Curfew Festival 2026',
    description:
      'Exclusive live hardware set at Blaarmeersen, Ghent. SAT 6 JUNE 2026.',
    images: [{ url: '/images/ian-pooley-portrait-new.jpg', width: 800, height: 1067 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
