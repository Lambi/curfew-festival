'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';
import { trackNewsletterSignup } from '@/lib/analytics';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Subscription failed');
      }

      trackNewsletterSignup();
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.');
      setStatus('error');
    }
  }

  return (
    <section id="newsletter" className="relative py-8 md:py-14 px-6 overflow-hidden">
      {/* Background photo with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-103a9395.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-deep/80" />
      </div>

      <div className="max-w-[600px] mx-auto text-center relative z-10">
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
              <div className="py-6">
                <p className="text-golden text-lg font-bold tracking-wide mb-2">
                  You&apos;re in. See you soon. &#10003;
                </p>
                <p className="text-cream-muted text-sm">
                  Check your inbox for a confirmation.
                </p>
              </div>
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
              <p className="text-coral text-sm mt-4">{errorMsg}</p>
            )}
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
