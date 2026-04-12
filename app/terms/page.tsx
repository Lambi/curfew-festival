import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Curfew Festival website and ticket purchases.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-deep text-cream px-6 py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
        Terms of Service
      </h1>
      <p className="text-cream/60 mb-12 text-sm">Last updated: 12 April 2026</p>

      <div className="space-y-10 text-cream/80 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">1. General</h2>
          <p>
            By using the website curfew.events, you agree to these terms. The website is operated by
            <strong> VZW Lada</strong>, a non-profit organization registered in Ghent, Belgium.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">2. Website Use</h2>
          <p>
            This website provides information about Curfew Festival events, lineup announcements,
            and links to ticket sales. The content is provided &ldquo;as is&rdquo; and we make reasonable
            efforts to keep it accurate and up to date.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">3. Ticket Purchases</h2>
          <p>
            Ticket sales are processed by our partner <strong>TIQS</strong>. When you purchase a ticket,
            you enter into an agreement with TIQS and are subject to their terms and conditions.
            Curfew Festival (VZW Lada) is responsible for the event itself.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Tickets are personal and non-transferable unless stated otherwise</li>
            <li>Refund policies are communicated at the time of purchase</li>
            <li>The organizer reserves the right to change the lineup or event details</li>
            <li>In case of cancellation by the organizer, ticket holders will be refunded</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">4. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design, is owned by
            VZW Lada or its licensors and is protected by copyright. You may not reproduce or
            distribute any content without written permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">5. Newsletter</h2>
          <p>
            If you subscribe to our newsletter, we will send you updates about Curfew events.
            You can unsubscribe at any time by clicking the unsubscribe link in any email
            or by contacting us directly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">6. Limitation of Liability</h2>
          <p>
            VZW Lada is not liable for any damages arising from the use of this website.
            We are not responsible for the content or practices of third-party websites
            linked from curfew.events (including TIQS, social media platforms, and streaming services).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold uppercase text-cream mb-3">7. Applicable Law</h2>
          <p>
            These terms are governed by Belgian law. Any disputes shall be submitted to the
            competent courts of Ghent, Belgium.
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
