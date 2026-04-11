'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import VideoHero from '@/components/VideoHero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Lineup from '@/components/Lineup';
import AtmosphereBreak from '@/components/AtmosphereBreak';
import Experience from '@/components/Experience';
import Stats from '@/components/Stats';
import UpcomingEvents from '@/components/UpcomingEvents';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Partners from '@/components/Partners';
import TicketPricing from '@/components/TicketPricing';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import CustomCursor from '@/components/CustomCursor';
import { initMetaPixel, trackContentView } from '@/lib/analytics';
import { shouldRedirect } from '@/lib/redirectConfig';
import { buildTicketUrl } from '@/lib/ticketUrl';

export default function Home() {
  useEffect(() => {
    // Smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Analytics — GA4 loaded in layout.tsx via next/script
    initMetaPixel();

    // Section view tracking
    const sections = [
      { id: 'lineup', name: 'Lineup' },
      { id: 'experience', name: 'Experience' },
      { id: 'events', name: 'UpcomingEvents' },
      { id: 'newsletter', name: 'Newsletter' },
      { id: 'contact', name: 'Contact' },
    ];
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id, name }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            trackContentView(name);
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    // Redirect check
    if (shouldRedirect()) {
      window.location.href = buildTicketUrl();
    }

    return () => {
      lenis.destroy();
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navigation />

      <main>
        <VideoHero />
        <Marquee />
        <About />
        <AtmosphereBreak
          src="/images/banner-curfew-hero.jpg"
          alt="Curfew crowd dancing under golden hour light"
        />
        <Lineup />
        <Experience />
        <Stats />
        <TicketPricing />
        <AtmosphereBreak
          src="/images/banner-curfew-deep.jpg"
          alt="Curfew geodesic dome with disco ball and crowd"
        />
        <UpcomingEvents />
        <Newsletter />
        <Contact />
        <Partners />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
