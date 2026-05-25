import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, Award, MapPin } from "lucide-react";
import { metros } from "@/lib/data/metros";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Contact ChimmerJim | Chimney Repair & Cleaning — Call Now",
  description: "Contact ChimmerJim for chimney cleaning, inspection, and repair across 23 US metros. Same-day appointments available. Call (800) 555-3900 for a free estimate.",
  alternates: { canonical: "https://chimmerjim.com/contact" },
  openGraph: {
    title: "Contact ChimmerJim | Chimney Services in 23 US Cities",
    description: "Same-day chimney cleaning, inspection, and repair. Call or text for a free estimate.",
    url: "https://chimmerjim.com/contact",
  },
};

const PHONE = "8005553900";
const PHONE_DISPLAY = "(800) 555-3900";
const EMAIL = "service@chimmerjim.com";

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema
        name="ChimmerJim"
        description="NFPA-certified chimney cleaning, inspection, repair, and fireplace services across 23 US metro areas."
        phone={PHONE}
        city="United States"
        state="US"
        url="https://chimmerjim.com/contact"
        areaServed={metros.map((m) => m.fullName)}
      />

      {/* Hero */}
      <section className="bg-brand py-14 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Contact ChimmerJim
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Same-day chimney repair, cleaning &amp; inspection across 23 US metros.
            A real person picks up — no menus, no waiting.
          </p>
          <a
            href={`tel:+1${PHONE}`}
            data-dni="primary-phone"
            data-dni-href="primary-phone"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-xl transition-all shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:shadow-[0_0_36px_rgba(249,115,22,0.65)]"
          >
            <Phone size={22} />
            <span data-dni="primary-phone">{PHONE_DISPLAY}</span>
          </a>
          <p className="mt-4 text-white/40 text-sm">Free estimate · No obligation</p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left — contact details */}
          <div>
            <h2 className="text-2xl font-bold text-brand mb-6">Get in touch</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-brand text-sm">Phone</p>
                  <a
                    href={`tel:+1${PHONE}`}
                    data-dni="primary-phone"
                    data-dni-href="primary-phone"
                    className="text-accent font-bold text-lg hover:underline"
                  >
                    <span data-dni="primary-phone">{PHONE_DISPLAY}</span>
                  </a>
                  <p className="text-slate-400 text-xs mt-0.5">Call or text anytime during business hours</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-brand text-sm">Hours</p>
                  <p className="text-slate-700">Mon–Sat: 7:00 am – 8:00 pm</p>
                  <p className="text-slate-700">Sunday: 8:00 am – 6:00 pm</p>
                  <p className="text-slate-400 text-xs mt-0.5">Emergency dispatch available outside hours</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-brand text-sm">Email</p>
                  <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a>
                  <p className="text-slate-400 text-xs mt-0.5">We respond within 1 business day</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                <Shield size={14} className="text-brand" />
                <span className="text-xs font-medium text-brand">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                <Award size={14} className="text-brand" />
                <span className="text-xs font-medium text-brand">NFPA 211 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                <Clock size={14} className="text-brand" />
                <span className="text-xs font-medium text-brand">Same-Day Available</span>
              </div>
            </div>
          </div>

          {/* Right — service areas */}
          <div>
            <h2 className="text-2xl font-bold text-brand mb-6">Service areas</h2>
            <p className="text-slate-500 text-sm mb-4">
              We run full-service crews in 23 US metros. Click your area for local scheduling and pricing.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {metros.map((m) => (
                <Link
                  key={m.slug}
                  href={`/${m.slug}`}
                  className="text-sm text-slate-600 hover:text-accent transition-colors py-1"
                >
                  {m.fullName}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-surface py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-brand mb-6 text-center">Quick answers</h2>
          <div className="space-y-4">
            {[
              {
                q: "How quickly can someone come out?",
                a: "Most markets have same-day or next-day availability. Call us and we'll check current slots in your area immediately.",
              },
              {
                q: "Is the estimate really free?",
                a: "Yes — the on-site visit, inspection, and written quote are all free. You only pay if you choose to proceed.",
              },
              {
                q: "Do I need to be home during the service?",
                a: "Yes. A responsible adult (18+) must be present for safety and to review the written quote before work starts.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white border border-slate-200 rounded-xl p-5">
                <p className="font-semibold text-brand text-sm mb-1">{q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
