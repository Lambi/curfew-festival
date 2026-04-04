import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walashi (DJ SET) — Syria / Dubai',
  description:
    'Walashi brings Middle Eastern house grooves to Curfew Festival 2026 at Blaarmeersen, Ghent. Boiler Room alumni bridging Arabic melodies with deep, hypnotic house rhythms.',
  alternates: { canonical: 'https://curfew.events/artists/walashi' },
  openGraph: {
    title: 'Walashi DJ SET at Curfew Festival 2026',
    description:
      'Middle Eastern house at Blaarmeersen, Ghent. SAT 6 JUNE 2026.',
    images: [{ url: '/images/walashi-portrait.jpg', width: 800, height: 1067 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
