import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ChimmerJim",
  description: "ChimmerJim's terms of service govern your use of our website and chimney services including scheduling, payment, warranties, and liability.",
  alternates: { canonical: "https://chimmerjim.com/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "May 25, 2026";
const PHONE_DISPLAY = "(800) 555-3900";
const PHONE = "8005553900";

export default function TermsPage() {
  return (
    <div className="bg-white py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-brand mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">1. Acceptance of terms</h2>
            <p>
              By using the ChimmerJim website (<strong>chimmerjim.com</strong>) or engaging our chimney services,
              you agree to these Terms of Service. If you do not agree, please do not use our site or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">2. Services provided</h2>
            <p>
              ChimmerJim provides professional chimney cleaning, inspection, repair, relining, waterproofing, and
              related fireplace services. All fieldwork is performed by NFPA 211-certified technicians. Service
              availability, pricing, and scheduling vary by metro area.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">3. Estimates and pricing</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phone or online estimates are preliminary ranges only. Final pricing is provided in a written, on-site quote before any work begins.</li>
              <li>Written quotes are flat-rate and itemized. No work starts without your explicit approval.</li>
              <li>Quotes are valid for 60 days from the date of issue unless otherwise noted.</li>
              <li>Additional findings discovered during service (e.g., hidden liner damage) will be quoted separately before proceeding.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">4. Scheduling and cancellations</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Appointments may be cancelled or rescheduled with at least 24 hours notice at no charge.</li>
              <li>Cancellations with less than 24 hours notice may incur a dispatch fee of up to $75 in some markets.</li>
              <li>ChimmerJim reserves the right to reschedule due to weather, crew availability, or safety conditions. We will notify you as early as possible.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">5. Payment</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Payment is due upon completion of service unless otherwise agreed in writing.</li>
              <li>We accept major credit cards, debit cards, and check. Cash accepted in some markets.</li>
              <li>Unpaid balances are subject to a 1.5% monthly finance charge after 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">6. Warranties</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Workmanship warranty:</strong> Masonry, crown repair, tuckpointing, and waterproofing work carries a 2-year workmanship warranty against defects in labor.</li>
              <li><strong>Liner warranty:</strong> Stainless steel liner installations carry a 5-year workmanship warranty.</li>
              <li><strong>Service calls:</strong> If a defect is identified within 30 days of a cleaning or inspection, the same technician will return at no charge.</li>
              <li>Warranties are void if the chimney is modified, damaged, or serviced by a third party after our work.</li>
              <li>Manufacturer warranties on parts (caps, dampers, inserts) are passed through to the customer and subject to the manufacturer's terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">7. Limitation of liability</h2>
            <p>
              ChimmerJim's total liability for any claim arising from our services is limited to the amount paid
              for the specific service giving rise to the claim. We are not liable for indirect, incidental,
              consequential, or punitive damages, including damage to property resulting from pre-existing
              chimney conditions not disclosed prior to service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">8. Customer responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide safe, unobstructed access to the chimney, fireplace, and rooftop as needed.</li>
              <li>Disclose known defects, prior repairs, or chimney fires before service begins.</li>
              <li>Do not use the fireplace between a diagnostic inspection and scheduled repair without written clearance from ChimmerJim.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">9. Website use</h2>
            <p>
              The chimmerjim.com website and all its content are owned by ChimmerJim and protected by copyright.
              You may not reproduce, scrape, or redistribute content without written permission. We make no
              warranty that the website will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">10. Governing law</h2>
            <p>
              These Terms are governed by the laws of the United States. Disputes will be resolved in the
              jurisdiction where the service was performed. Any claim must be brought within one year of the
              date the cause of action arose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">11. Changes to these terms</h2>
            <p>
              We may revise these Terms at any time. The updated version will be posted at chimmerjim.com/terms
              with a revised "Last updated" date. Continued use of our services constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand mb-3">12. Contact</h2>
            <p>
              Questions about these Terms? Call us at{" "}
              <a href={`tel:+1${PHONE}`} className="text-accent underline">{PHONE_DISPLAY}</a> or visit our{" "}
              <Link href="/contact" className="text-accent underline">Contact page</Link>.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
          <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="text-accent hover:underline">Contact Us</Link>
          <Link href="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
