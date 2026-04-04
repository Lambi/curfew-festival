'use client';

import { useState, FormEvent } from 'react';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Try again.');
      setStatus('error');
    }
  }

  const inputClass =
    'w-full bg-transparent border-b-2 border-golden/60 text-cream placeholder-cream/30 px-2 py-3 text-base outline-none focus:border-golden transition-colors duration-300';

  return (
    <section id="contact" className="relative py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-[600px] mx-auto text-center relative z-10">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <h2 className="section-title text-cream mb-4">GET IN TOUCH</h2>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="tagline text-cream-muted mb-6">
              Questions, collabs, or just want to say hi?
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <p className="text-cream-muted mb-10 text-sm">
              Drop us a line at{' '}
              <a
                href="mailto:info@curfew.events"
                className="text-golden hover:text-cream transition-colors duration-300 underline underline-offset-4"
              >
                info@curfew.events
              </a>{' '}
              or use the form below.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            {status === 'success' ? (
              <div className="py-8">
                <p className="text-golden text-lg font-bold tracking-wide mb-2">
                  Message received. &#10003;
                </p>
                <p className="text-cream-muted text-sm">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                <div className="flex flex-col sm:flex-row gap-6">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`${inputClass} sm:w-1/2`}
                  />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputClass} sm:w-1/2`}
                  />
                </div>

                <textarea
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-golden text-deep px-10 py-3 text-sm tracking-[0.2em] font-bold hover:bg-golden/90 transition-colors duration-300 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
            {status === 'error' && (
              <p className="text-coral text-sm mt-4 text-center">{errorMsg}</p>
            )}
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
