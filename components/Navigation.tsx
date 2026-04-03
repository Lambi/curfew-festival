'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildTicketUrl } from '@/lib/ticketUrl';
import { trackTicketClick } from '@/lib/analytics';

const navLinks = [
  { label: 'FESTIVAL', href: '#hero' },
  { label: 'LINEUP', href: '#lineup' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'EVENTS', href: '#events' },
  { label: 'PARTNERS', href: '#partners' },
  { label: 'NEWSLETTER', href: '#newsletter' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleTicketClick() {
    trackTicketClick();
    window.open(buildTicketUrl(), '_blank');
  }

  function scrollTo(href: string) {
    setMenuOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  function handleLogoClick() {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? 'bg-deep/95 backdrop-blur-sm shadow-lg shadow-deep/50' : 'bg-deep/30 backdrop-blur-[2px]'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-[1400px] mx-auto">
          <button
            onClick={handleLogoClick}
            className="font-display text-cream text-xl tracking-wider font-bold hover:text-golden transition-colors duration-300"
          >
            CURFEW
          </button>

          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm tracking-[0.2em] text-cream/60 hover:text-cream transition-colors duration-300 font-body font-semibold"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleTicketClick}
              className="border border-golden text-cream px-5 py-2 text-sm tracking-[0.2em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
            >
              GET TICKETS
            </button>

            <button
              className="md:hidden text-cream text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? '\u2715' : '\u2630'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-deep flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Top bar with logo and close */}
            <div className="flex justify-between items-center px-6 py-4">
              <button
                onClick={handleLogoClick}
                className="font-display text-cream text-xl tracking-wider font-bold hover:text-golden transition-colors duration-300"
              >
                CURFEW
              </button>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-cream text-2xl hover:text-golden transition-colors duration-300"
                aria-label="Close menu"
              >
                &#10005;
              </button>
            </div>

            {/* Menu items centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-display text-cream text-3xl tracking-wider font-bold hover:text-golden transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => {
                  setMenuOpen(false);
                  handleTicketClick();
                }}
                className="mt-4 border border-golden text-cream px-8 py-3 text-sm tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                GET TICKETS
              </motion.button>
            </div>

            {/* Swipe/arrow hint at left edge to close */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2 px-2 py-8 text-cream/30 hover:text-cream/60 transition-colors duration-300"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
