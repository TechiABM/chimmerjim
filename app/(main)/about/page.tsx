import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, Star, Users, MapPin, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About ChimmerJim | NFPA-Certified Chimney Experts",
  description: "ChimmerJim is a national chimney service company with NFPA 211-certified technicians across 23 US metros. Licensed, insured, and committed to honest chimney care.",
  alternates: { canonical: "https://chimmerjim.com/about" },
  openGraph: {
    title: "About ChimmerJim | NFPA-Certified Chimney Experts",
    description: "NFPA-certified chimney cleaning, inspection, and repair across 23 US metros. Licensed, insured, and honest.",
    url: "https://chimmerjim.com/about",
  },
};

const stats = [
  { label: "US metros served", value: "23" },
  { label: "5-star reviews", value: "500+" },
  { label: "Average rating", value: "4.9" },
  { label: "Workmanship warranty", value: "2 yr" },
];

const values = [
  {
    icon: Shield,
    title: "Licensed & insured everywhere we work",
    body: "Every ChimmerJim crew carries full liability and workers' compensation insurance in every state we operate. Documentation available on request — no exceptions.",
  },
  {
    icon: Award,
    title: "NFPA 211 certification — not optional",
    body: "The National Fire Protection Association's NFPA 211 standard is the benchmark for chimney safety in the US. Every technician we field is certified and kept current.",
  },
  {
    icon: CheckCircle,
    title: "Written quotes before any work starts",
    body: "We give you a flat-rate, itemized written estimate on-site before a single tool comes out. No bait-and-switch. No hourly surprises. No pressure.",
  },
  {
    icon: Star,
    title: "Honest recommendations — even if it costs us a job",
    body: "If your chimney doesn't need repair, we'll tell you so in writing. Our techs are paid on quality metrics, not upsell volume.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About ChimmerJim
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            We built ChimmerJim around one idea: chimney service should be honest,
            fast, and done right the first time. NFPA-certified crews in 23 US metros.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ label, value }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-accent">{value}</p>
              <p className="text-slate-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand mb-5">Our mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Chimney work has a bad reputation — pushy upsells, vague pricing, and technicians who disappear
            after the check clears. ChimmerJim was built to be the opposite of that.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            We operate full-service chimney crews in 23 major US metros, all staffed by NFPA 211-certified
            technicians. Every job gets a written, flat-rate quote before we start. Every repair gets a
            written warranty when we're done. And if your chimney is fine, we tell you so — in writing.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our goal is to be the chimney company you call without hesitation and recommend without reservation.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-brand mb-8 text-center">How we operate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-brand mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand mb-5">Certifications &amp; licensing</h2>
          <ul className="space-y-3">
            {[
              "NFPA 211 — Standard for Chimneys, Fireplaces, Vents, and Solid Fuel-Burning Appliances",
              "CSIA — Chimney Safety Institute of America training framework",
              "State-level contractor licensing in every metro we serve",
              "Full general liability and workers' compensation insurance",
              "Background-checked technicians in all markets",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-surface py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin size={28} className="text-accent mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-brand mb-3">Where we operate</h2>
          <p className="text-slate-500 mb-8">
            Full-service chimney crews in 23 US metro areas — with same-day and next-day availability in each.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Washington DC", "Houston", "Dallas", "Austin", "Chicago", "Phoenix", "Los Angeles",
              "San Diego", "Denver", "Atlanta", "Miami", "Charlotte", "Philadelphia", "Boston",
              "Seattle", "Portland", "Minneapolis", "Nashville", "Las Vegas", "Orlando",
              "Tampa", "Baltimore", "Detroit"].map((city) => (
              <span
                key={city}
                className="bg-white border border-slate-200 text-slate-600 text-sm px-3 py-1.5 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14 px-4 text-center text-white">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-3">Ready to schedule?</h2>
          <p className="text-white/60 mb-7">Same-day availability in 23 metros. Free written estimate.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-[0_0_24px_rgba(249,115,22,0.4)]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
