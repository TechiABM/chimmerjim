import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ChimmerJim",
  description: "ChimmerJim's privacy policy covers how we collect, use, and protect your personal information when you use our chimney services website.",
  alternates: { canonical: "https://chimmerjim.com/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 25, 2026";
const EMAIL = "privacy@chimmerjim.com";
const PHONE_DISPLAY = "(800) 555-3900";
const PHONE = "8005553900";

export default function PrivacyPage() {
  return (
    <div className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-brand mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">1. Who we are</h2>
            <p>
              ChimmerJim ("we," "us," or "our") provides professional chimney cleaning, inspection, repair, and
              fireplace services across 23 US metro areas. This Privacy Policy explains how we collect, use,
              disclose, and protect information when you visit <strong>chimmerjim.com</strong> or call us for service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">2. Information we collect</h2>
            <h3 className="font-semibold text-brand mb-2">Information you provide directly</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Name, phone number, email address, and service address when booking an appointment or submitting a contact form</li>
              <li>Payment information processed securely through our payment processor (we do not store card numbers)</li>
              <li>Any notes or details you share about your chimney or service needs</li>
            </ul>
            <h3 className="font-semibold text-brand mb-2">Information collected automatically</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Browser type, device type, IP address, and pages visited (via Google Analytics)</li>
              <li>Referral source and UTM parameters used to understand how you found us (used for call attribution and ad performance)</li>
              <li>Cookies set by Google Ads, Google Analytics, and our call-tracking provider for advertising attribution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">3. How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Schedule and dispatch chimney service appointments</li>
              <li>Send appointment confirmations, reminders, and service follow-ups</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Measure and improve the performance of our Google Ads campaigns (via call tracking and conversion imports)</li>
              <li>Analyze website usage to improve our pages and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">4. Cookies and tracking</h2>
            <p className="mb-3">
              We use cookies and similar technologies for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Google Analytics</strong> — measures page visits, traffic sources, and user behavior. Data is anonymized and aggregated.</li>
              <li><strong>Google Ads</strong> — tracks conversions from paid search ads (clicks and calls) to measure campaign effectiveness.</li>
              <li><strong>Call tracking (DNI)</strong> — dynamically replaces phone numbers on the page to attribute inbound calls to the correct traffic source. The static fallback number is always present in the page HTML.</li>
            </ul>
            <p className="mt-3">
              You can opt out of Google's advertising cookies at{" "}
              <a href="https://adssettings.google.com" className="text-accent underline" target="_blank" rel="noopener noreferrer">
                adssettings.google.com
              </a>. Most browsers also allow you to block or delete cookies through their settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">5. How we share your information</h2>
            <p className="mb-3">We do not sell your personal information. We share data only with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Service providers</strong> — our scheduling software, payment processor, and call-tracking platform, each bound by data processing agreements</li>
              <li><strong>Google</strong> — for Analytics and Ads measurement as described above</li>
              <li><strong>Legal authorities</strong> — when required by law, court order, or to protect our legal rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">6. Data retention</h2>
            <p>
              We retain customer records for up to 5 years for warranty and service-history purposes. Analytics data
              is retained per Google's default retention settings. You may request deletion at any time (see Section 8).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">7. California residents (CCPA)</h2>
            <p className="mb-3">
              If you are a California resident, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Know what personal information we collect and how we use it</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of personal information — <strong>we do not sell personal information</strong></li>
              <li>Not be discriminated against for exercising these rights</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us using the details in Section 8.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">8. Contact us about privacy</h2>
            <p>
              For any privacy-related questions, data access requests, or deletion requests, contact us at:
            </p>
            <ul className="list-none mt-3 space-y-1">
              <li>Email: <a href={`mailto:${EMAIL}`} className="text-accent underline">{EMAIL}</a></li>
              <li>Phone: <a href={`tel:+1${PHONE}`} className="text-accent underline">{PHONE_DISPLAY}</a></li>
              <li>Mail: ChimmerJim Privacy Team, United States</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">9. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page
              reflects the most recent revision. Continued use of our site after changes constitutes acceptance of
              the updated policy.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
          <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link>
          <Link href="/contact" className="text-accent hover:underline">Contact Us</Link>
          <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
