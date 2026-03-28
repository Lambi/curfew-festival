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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-colors duration-300 ${
          scrolled ? 'bg-deep/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-[1400px] mx-auto">
          <span className="font-display text-cream text-xl tracking-wider font-bold">
            CURFEW
          </span>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs tracking-[0.25em] text-cream/60 hover:text-cream transition-colors duration-300 font-body"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleTicketClick}
              className="border border-golden text-cream px-5 py-2 text-xs tracking-[0.25em] font-bold hover:bg-golden hover:text-deep transition-all duration-300"
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
            className="fixed inset-0 z-[99] bg-deep flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-display text-cream text-3xl tracking-wider font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
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
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              GET TICKETS
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
