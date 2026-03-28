'use client';

import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

interface Artist {
  name: string;
  tag: string;
  tagLabel: string;
  origin: string;
  bio: string;
  image: string;
  spotifyUrl?: string;
  instagramUrl?: string;
}

const artists: Artist[] = [
  {
    name: 'IAN POOLEY',
    tag: 'EXCLUSIVE LIVE SET',
    tagLabel: 'DEEP HOUSE',
    origin: 'UK · Berlin',
    bio: 'A pioneer of the Frankfurt sound, Ian Pooley has been shaping deep house and techno since the early \u201990s. For Curfew 2026 he brings an exclusive live set — warm grooves, Latin-tinged rhythms, and timeless dancefloor energy performed live on stage.',
    image: '/images/ian-pooley-portrait.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3dBKhZCi2cluaB0VW1XrBE',
  },
  {
    name: 'PABELS',
    tag: 'DJ SET',
    tagLabel: 'HOUSE · DISCO · BALEARIC',
    origin: 'Buenos Aires, Argentina',
    bio: 'A digger and DJ who has garnered worldwide praise through his unique selections and energy behind the decks. Known for his Day Mix series blending house, disco, balearic, afrobeat, soul and hip hop — from Calvi On The Rocks to Lollapalooza, Pabels brings the heat.',
    image: '/images/curfew-booth-red-lights.jpg',
    instagramUrl: 'https://www.instagram.com/pabelspabels/',
  },
  {
    name: 'WALASHI',
    tag: 'DJ SET',
    tagLabel: 'MIDDLE EASTERN HOUSE',
    origin: 'Syria · Dubai · Boiler Room',
    bio: 'Bridging the sounds of the Middle East with deep, hypnotic house grooves. A Boiler Room alumni whose sets weave Arabic melodies through pulsing four-to-the-floor rhythms — creating something entirely new on the dancefloor.',
    image: '/images/curfew-dj-duo-blue.jpg',
  },
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-20 md:py-30 px-6">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-12 md:mb-16">LINEUP</h2>
          </ScrollRevealItem>

          {/* Featured artist — Ian Pooley horizontal on desktop */}
          <ScrollRevealItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border border-cream/[0.06] bg-cream/[0.02] p-6 md:p-0 md:pr-10 overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[400px] overflow-hidden group">
                <Image
                  src={artists[0].image}
                  alt={artists[0].name}
                  fill
                  className="object-cover warm-grade transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  loading="lazy"
                />
                {/* LIVE SET badge */}
                <div className="absolute top-4 left-4 z-10 bg-golden text-deep text-[10px] tracking-[0.2em] font-bold px-3 py-1.5">
                  EXCLUSIVE LIVE SET
                </div>
              </div>

              {/* Info */}
              <div className="py-4 md:py-10">
                <span className="inline-block border border-golden/40 text-golden text-[10px] tracking-[0.2em] font-bold px-3 py-1 mb-4">
                  {artists[0].tagLabel}
                </span>
                <h3 className="font-display text-cream text-3xl md:text-5xl font-bold tracking-wider mb-2">
                  {artists[0].name}
                </h3>
                <p className="text-cream-muted text-sm tracking-wide mb-6">
                  {artists[0].origin}
                </p>
                <p className="body-text text-cream-muted mb-8 max-w-md">
                  {artists[0].bio}
                </p>
                <a
                  href={artists[0].spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-golden text-sm tracking-[0.15em] font-bold"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  LISTEN ON SPOTIFY
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </div>
          </ScrollRevealItem>

          {/* Artist cards grid — Pabels & Walashi */}
          <ScrollRevealItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {artists.slice(1).map((artist) => (
                <div
                  key={artist.name}
                  className="group border border-cream/[0.06] bg-cream/[0.02] overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover warm-grade transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 90vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />

                    {/* Tag overlay */}
                    <div className="absolute top-3 left-3 z-10 border border-golden/40 text-golden text-[9px] tracking-[0.2em] font-bold px-2.5 py-1 bg-deep/60 backdrop-blur-sm">
                      {artist.tag}
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-display text-cream text-2xl md:text-3xl font-bold tracking-wider leading-none">
                        {artist.name}
                      </h3>
                      <p className="text-cream/50 text-xs tracking-wide mt-1">
                        {artist.origin}
                      </p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <span className="inline-block border border-cream/[0.08] text-cream/40 text-[9px] tracking-[0.2em] font-bold px-2.5 py-1 mb-3">
                      {artist.tagLabel}
                    </span>
                    <p className="body-text text-cream-muted text-sm mb-4 line-clamp-3">
                      {artist.bio}
                    </p>
                    {artist.spotifyUrl && (
                      <a
                        href={artist.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-golden text-xs tracking-[0.15em] font-bold"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        SPOTIFY
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                      </a>
                    )}
                    {artist.instagramUrl && (
                      <a
                        href={artist.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-golden text-xs tracking-[0.15em] font-bold"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                        INSTAGRAM
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealItem>

          {/* Coming soon — remaining mystery slots */}
          <ScrollRevealItem>
            <div className="mt-6">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square border border-cream/[0.06] bg-cream/[0.015] flex items-center justify-center"
                  >
                    <span className="text-cream/[0.12] font-display text-4xl md:text-5xl font-bold">?</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="label text-golden mb-6 tracking-[0.2em]">
                  MORE ARTISTS DROPPING SOON
                </p>
                <a
                  href="#newsletter"
                  className="inline-block border border-golden text-cream px-8 py-3 text-xs tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
                >
                  SIGN UP FOR UPDATES
                </a>
              </div>
            </div>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
