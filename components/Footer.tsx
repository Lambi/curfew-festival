'use client';

import { ScrollReveal } from './ScrollReveal';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/curfew.events',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/curfew.events',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'SoundCloud',
    href: 'https://soundcloud.com/curfew-events',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 18v-6c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1s-1-.4-1-1zm4 0V9c0-.6.4-1 1-1s1 .4 1 1v9c0 .6-.4 1-1 1s-1-.4-1-1zm4 0V7c0-.6.4-1 1-1s1 .4 1 1v11c0 .6-.4 1-1 1s-1-.4-1-1zm4 .5V8c0-.6.4-1 1-1h5c2.8 0 5 2.2 5 5s-2.2 5-5 5h-5c-.6 0-1-.4-1-1z"/>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const handleWordmarkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 md:py-16 px-6 relative overflow-hidden">
      {/* Massive CURFEW wordmark background */}
      <button
        onClick={handleWordmarkClick}
        className="absolute inset-0 flex items-center justify-center text-cream/[0.03] hover:text-cream/[0.06] transition-colors duration-300 cursor-pointer font-black text-[clamp(6rem,25vw,20rem)] leading-none"
        aria-hidden="true"
      >
        CURFEW
      </button>

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <div className="h-px bg-golden/30 mb-12" />

        <ScrollReveal>
          <p className="label text-cream-muted mb-6 tracking-[0.3em]">
            CURFEW &middot; GHENT &middot; SINCE 2015
          </p>

          <p className="mb-8">
            <a
              href="mailto:info@curfew.events"
              className="text-cream-muted hover:text-golden transition-colors duration-300 text-sm tracking-wide"
            >
              info@curfew.events
            </a>
          </p>

          <div className="flex justify-center gap-6 mb-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-muted hover:text-golden hover:scale-110 transition-colors transition-transform duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-golden italic mb-8 text-xl md:text-2xl">See you in the sun.</p>

          <p className="text-cream-muted/40 text-sm">
            &copy; 2026 Curfew &middot; VZW Lada &nbsp;|&nbsp;{' '}
            <a href="#" className="hover:text-cream-muted transition-colors">Privacy</a> &nbsp;|&nbsp;{' '}
            <a href="#" className="hover:text-cream-muted transition-colors">Terms</a>
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
