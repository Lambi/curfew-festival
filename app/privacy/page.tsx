import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Curfew Festival — how we handle your data, cookies, and tracking.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-deep text-cream px-6 py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
        Privacy Policy
      </h1>
      <p className="text-cream/60 mb-12 text-sm">Last updated: 12 April 2026</p>

      <div className="space-y-10 text-cream/80 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">1. Who We Are</h2>
          <p>
            Curfew Festival is organized by <strong>VZW Lada</strong>, a non-profit organization based in Ghent, Belgium.
            Contact: <a href="mailto:info@curfew.events" className="text-amber-400 hover:underline">info@curfew.events</a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">2. What Data We Collect</h2>
          <p>When you visit curfew.events, we may collect:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Pages visited, time on site, and general browsing behavior (via analytics)</li>
            <li>Device type, browser, and approximate location (country/region)</li>
            <li>Interaction data when you click links to our ticket partner (TIQS)</li>
            <li>Email address and name if you subscribe to our newsletter (via MailerLite)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">3. Cookies & Tracking</h2>
          <p>We use the following services:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Google Analytics 4</strong> (measurement ID: G-NX0DWXZZBY) for website analytics</li>
            <li><strong>Meta Pixel</strong> (ID: 636940698616732) for measuring ad performance</li>
          </ul>
          <p className="mt-3">
            For visitors in the EU (Belgium, Netherlands, France, Germany), analytics and ad tracking are
            <strong> denied by default</strong> until you give consent. We use Google&rsquo;s Consent Mode v2 to ensure compliance.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">4. How We Use Your Data</h2>
          <p>We use collected data to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Understand how visitors use our website and improve the experience</li>
            <li>Measure the effectiveness of our advertising campaigns on Meta (Facebook/Instagram)</li>
            <li>Send you festival updates and ticket information if you subscribe to our newsletter</li>
          </ul>
          <p className="mt-3">We never sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">5. Third-Party Services</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>TIQS</strong> (ticketing) — processes ticket purchases under their own privacy policy</li>
            <li><strong>MailerLite</strong> (email marketing) — stores subscriber data for newsletter delivery</li>
            <li><strong>Google</strong> (analytics) — processes anonymized website usage data</li>
            <li><strong>Meta</strong> (advertising) — processes ad interaction data</li>
            <li><strong>Vercel</strong> (hosting) — hosts the website infrastructure</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">6. Your Rights (GDPR)</h2>
          <p>Under the General Data Protection Regulation, you have the right to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with the Belgian Data Protection Authority (GBA)</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email us at{' '}
            <a href="mailto:info@curfew.events" className="text-amber-400 hover:underline">info@curfew.events</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">7. Data Retention</h2>
          <p>
            Analytics data is retained for 14 months. Newsletter subscriber data is retained until you unsubscribe.
            We periodically review and delete data that is no longer necessary.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">8. Contact</h2>
          <p>
            VZW Lada — Ghent, Belgium<br />
            <a href="mailto:info@curfew.events" className="text-amber-400 hover:underline">info@curfew.events</a>
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-cream/10 text-center">
        <a href="/" className="text-amber-400 hover:underline text-sm">← Back to Curfew Festival</a>
      </div>
    </main>
  );
}
