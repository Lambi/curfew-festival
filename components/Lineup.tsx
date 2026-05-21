'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { FULL_LINEUP_NAMES } from '@/lib/festivalTimetable';

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
    <section id="lineup" className="py-8 md:py-14 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream text-center mb-4">LINEUP</h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="text-cream-muted text-center mb-8 tagline">
              Full line up A-Z. Sport Vlaanderen. Blaarmeersen.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="mx-auto mb-8 md:mb-12 max-w-[1040px] border-y border-cream/[0.08] py-8 md:py-10">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-x-8 md:gap-y-5">
                {FULL_LINEUP_NAMES.map((artist, index) => (
                  <span
                    key={artist}
                    className={`font-display text-[2.45rem] sm:text-[3.35rem] md:text-[4.4rem] lg:text-[5.2rem] font-black uppercase leading-[1.04] tracking-[0.045em] ${
                      index % 2 === 1 ? 'text-golden' : 'text-cream'
                    }`}
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="label text-golden mb-5 tracking-[0.2em] text-center">
              ARTIST STORIES
            </p>
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
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 90vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />

                      {/* Tag overlay */}
                      <div className={`absolute top-4 left-4 z-10 text-xs tracking-[0.2em] font-bold px-4 py-2 ${
                        artist.tag === 'LIVE'
                          ? 'bg-golden text-deep shadow-lg shadow-golden/30'
                          : 'border border-golden/50 text-golden bg-deep/70 backdrop-blur-sm'
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
        </ScrollReveal>
      </div>
    </section>
  );
}
