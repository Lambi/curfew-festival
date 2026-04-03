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
import Partners from '@/components/Partners';
import TicketPricing from '@/components/TicketPricing';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import CustomCursor from '@/components/CustomCursor';
import { initMetaPixel, initGA4 } from '@/lib/analytics';
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

    // Analytics
    initMetaPixel();
    initGA4();

    // Redirect check
    if (shouldRedirect()) {
      window.location.href = buildTicketUrl();
    }

    return () => lenis.destroy();
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
          src="/images/curfew-crowd-golden-hour.jpg"
          alt="Curfew crowd under golden hour light"
        />
        <Lineup />
        <AtmosphereBreak
          src="/images/curfew-stage-neon-wide.jpg"
          alt="Curfew neon sign with festival crowd"
        />
        <Experience />
        <Stats />
        <TicketPricing />
        <AtmosphereBreak
          src="/images/curfew-booth-red-lights.jpg"
          alt="DJ booth bathed in red lights at Curfew"
        />
        <UpcomingEvents />
        <Newsletter />
        <Partners />
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
