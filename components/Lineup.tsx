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
}

const artists: Artist[] = [
  {
    name: 'IAN POOLEY',
    slug: 'ian-pooley',
    tag: 'LIVE',
    tagLabel: 'DEEP HOUSE',
    origin: 'Germany',
    bio: 'A pioneer of the Frankfurt sound, Ian Pooley has been shaping deep house and techno since the early \u201990s. For Curfew 2026 he brings an exclusive live set — warm grooves, Latin-tinged rhythms, and timeless dancefloor energy performed live on stage.',
    image: '/images/ian-pooley-portrait-new.jpg',
  },
  {
    name: 'PABELS',
    slug: 'pabels',
    tag: 'DJ SET',
    tagLabel: 'HOUSE · DISCO · BALEARIC',
    origin: 'Colombia',
    bio: 'A digger and DJ who has garnered worldwide praise through his unique selections and energy behind the decks. Known for his Day Mix series blending house, disco, balearic, afrobeat, soul and hip hop — from Calvi On The Rocks to Lollapalooza, Pabels brings the heat.',
    image: '/images/pabels-portrait.jpg',
  },
  {
    name: 'WALASHI',
    slug: 'walashi',
    tag: 'DJ SET',
    tagLabel: 'MIDDLE EASTERN HOUSE',
    origin: 'Syria / Dubai',
    bio: 'Bridging the sounds of the Middle East with deep, hypnotic house grooves. A Boiler Room alumni whose sets weave Arabic melodies through pulsing four-to-the-floor rhythms — creating something entirely new on the dancefloor.',
    image: '/images/walashi-portrait.jpg',
  },
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-12 md:py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-12 md:mb-16">LINEUP</h2>
          </ScrollRevealItem>

          {/* All 3 artists in a row on desktop */}
          <ScrollRevealItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {artists.map((artist) => (
                <Link href={`/artists/${artist.slug}`} key={artist.name} className="block group">
                  <div className="border border-cream/[0.06] bg-cream/[0.02] overflow-hidden hover:border-cream/[0.12] transition-colors duration-500">
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        fill
                        className="object-cover object-top warm-grade transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 90vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />

                      {/* Tag overlay */}
                      <div className={`absolute top-3 left-3 z-10 text-[9px] tracking-[0.2em] font-bold px-2.5 py-1 ${
                        artist.tag === 'LIVE'
                          ? 'bg-golden text-deep'
                          : 'border border-golden/40 text-golden bg-deep/60 backdrop-blur-sm'
                      }`}>
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
