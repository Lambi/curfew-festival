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
        <Lineup />
        <AtmosphereBreak
          src="/images/curfew-crowd-golden-hour.jpg"
          alt="Curfew festival crowd at golden hour"
        />
        <Experience />
        <Stats />
        <AtmosphereBreak
          src="/images/curfew-dj-discoballs-daytime.jpg"
          alt="Curfew DJ with disco balls in daytime"
        />
        <UpcomingEvents />
        <Newsletter />
        {/* <Partners /> — hidden until real partner logos are available */}
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
