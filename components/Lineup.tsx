'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

interface Artist {
  name: string;
  slug: string;
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
    slug: 'ian-pooley',
    tag: 'EXCLUSIVE LIVE SET',
    tagLabel: 'DEEP HOUSE',
    origin: 'UK · Berlin',
    bio: 'A pioneer of the Frankfurt sound, Ian Pooley has been shaping deep house and techno since the early \u201990s. For Curfew 2026 he brings an exclusive live set — warm grooves, Latin-tinged rhythms, and timeless dancefloor energy performed live on stage.',
    image: '/images/ian-pooley-portrait-new.jpg',
    spotifyUrl: 'https://open.spotify.com/artist/3dBKhZCi2cluaB0VW1XrBE',
  },
  {
    name: 'PABELS',
    slug: 'pabels',
    tag: 'DJ SET',
    tagLabel: 'HOUSE · DISCO · BALEARIC',
    origin: 'Buenos Aires, Argentina',
    bio: 'A digger and DJ who has garnered worldwide praise through his unique selections and energy behind the decks. Known for his Day Mix series blending house, disco, balearic, afrobeat, soul and hip hop — from Calvi On The Rocks to Lollapalooza, Pabels brings the heat.',
    image: '/images/pabels-portrait.jpg',
    instagramUrl: 'https://www.instagram.com/pabelspabels/',
  },
  {
    name: 'WALASHI',
    slug: 'walashi',
    tag: 'DJ SET',
    tagLabel: 'MIDDLE EASTERN HOUSE',
    origin: 'Syria · Dubai · Boiler Room',
    bio: 'Bridging the sounds of the Middle East with deep, hypnotic house grooves. A Boiler Room alumni whose sets weave Arabic melodies through pulsing four-to-the-floor rhythms — creating something entirely new on the dancefloor.',
    image: '/images/walashi-portrait.jpg',
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
            <Link href={`/artists/${artists[0].slug}`} className="block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border border-cream/[0.06] bg-cream/[0.02] p-6 md:p-0 md:pr-10 overflow-hidden hover:border-cream/[0.12] transition-colors duration-500">
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
                  <span className="inline-flex items-center gap-2 text-golden text-sm tracking-[0.15em] font-bold">
                    VIEW ARTIST
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          </ScrollRevealItem>

          {/* Artist cards grid — Pabels & Walashi */}
          <ScrollRevealItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {artists.slice(1).map((artist) => (
                <Link href={`/artists/${artist.slug}`} key={artist.name} className="block group">
                  <div className="border border-cream/[0.06] bg-cream/[0.02] overflow-hidden hover:border-cream/[0.12] transition-colors duration-500">
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
                      <span className="inline-flex items-center gap-2 text-golden text-xs tracking-[0.15em] font-bold">
                        VIEW ARTIST
                        <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </Link>
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
