'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { grantConsent } from '@/lib/analytics';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('curfew_cookie_consent');
    if (!consent) {
      // 7500ms total: 2500ms preloader + 5000ms delay after
      const timer = setTimeout(() => setShow(true), 7500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem('curfew_cookie_consent', 'accepted');
    grantConsent();
    setShow(false);
  }

  function decline() {
    localStorage.setItem('curfew_cookie_consent', 'declined');
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[9997] bg-deep/95 backdrop-blur-sm border-t border-cream/[0.08] px-6 py-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream/60 text-sm">
              We use cookies for analytics.
            </p>
            <div className="flex gap-3">
              <button
                onClick={accept}
                className="bg-golden text-deep px-6 py-2 text-xs tracking-[0.2em] font-bold hover:bg-golden/90 transition-colors"
              >
                ACCEPT
              </button>
              <button
                onClick={decline}
                className="border border-cream/20 text-cream/60 px-6 py-2 text-xs tracking-[0.2em] hover:text-cream hover:border-cream/40 transition-colors"
              >
                DECLINE
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
