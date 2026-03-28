'use client';

import { useState, FormEvent } from 'react';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { trackNewsletterSignup } from '@/lib/analytics';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      trackNewsletterSignup();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="newsletter" className="py-20 md:py-30 px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream mb-4">STAY IN THE LOOP</h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="tagline text-cream-muted mb-10">
              First to know. First in line.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            {status === 'success' ? (
              <p className="text-golden text-lg font-bold tracking-wide">
                You&apos;re in. See you soon. &#10003;
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-stretch">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-b-2 border-golden text-cream placeholder-cream/30 px-2 py-3 text-base outline-none focus:border-cream transition-colors duration-300"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-golden text-deep px-8 py-3 text-sm tracking-[0.2em] font-bold hover:bg-golden/90 transition-colors duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? '...' : 'SUBSCRIBE'}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-coral text-sm mt-4">Something went wrong. Try again.</p>
            )}
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
