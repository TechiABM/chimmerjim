import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import HomeHero from "@/components/sections/HomeHero";
import Certifications from "@/components/sections/Certifications";
import StatsBanner from "@/components/sections/StatsBanner";
import Services from "@/components/sections/Services";
import ProcessSteps from "@/components/sections/ProcessSteps";
import EmergencyBar from "@/components/sections/EmergencyBar";
import CommonProblems from "@/components/sections/CommonProblems";
import OurPromise from "@/components/sections/Promise";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import OurWork from "@/components/sections/OurWork";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import { metros } from "@/lib/data/metros";

export const metadata: Metadata = {
  title: { absolute: "ChimmerJim — Expert Chimney & Fireplace Services in 23 US Cities" },
  description:
    "ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, sweep, and fireplace services. Same-day available in 23 major US metro areas. Call now for a free estimate.",
  alternates: { canonical: "https://chimmerjim.com" },
  openGraph: {
    title: "ChimmerJim — Expert Chimney & Fireplace Services",
    description:
      "NFPA-certified chimney cleaning, inspection, repair, and fireplace services across 23 US metros. Licensed & insured.",
    url: "https://chimmerjim.com",
  },
};

const PHONE = "8005553900";
const PHONE_DISPLAY = "(800) 555-3900";

const homeFaqs = [
  {
    q: "How often should I have my chimney cleaned and inspected?",
    a: "The NFPA recommends an annual Level 1 inspection and cleaning for any wood-burning fireplace, and a Level 2 video-camera inspection whenever you buy or sell a home, after a chimney fire, or when changing your appliance or fuel type. Gas fireplaces should be serviced every 1–2 years.",
  },
  {
    q: "How quickly can ChimmerJim get a technician to my home?",
    a: "We hold same-day and next-day slots open every day across all 23 metros. Most non-emergency jobs are scheduled within 24–48 hours; emergency calls average under 90 minutes for on-site dispatch in our primary service zones.",
  },
  {
    q: "Will I get a real price before any work starts?",
    a: "Yes. After our camera diagnose, you receive a written, line-item quote — flat pricing with no hourly meter and no surprise add-ons. You decide whether to proceed before any tools come out of the truck.",
  },
  {
    q: "Are ChimmerJim technicians licensed and insured?",
    a: "Every ChimmerJim technician is NFPA-211 certified, CSIA-trained, and works under our state-level licensing and full liability + workers' comp insurance in every metro we serve. Documentation available on request.",
  },
  {
    q: "Do you offer a warranty on your work?",
    a: "Masonry, tuckpointing, crown, and waterproofing work carries a 2-year workmanship warranty. Stainless liner installations carry a 5-year warranty. If something isn't right within 30 days of a service call, the same tech returns at no charge.",
  },
  {
    q: "What does ChimmerJim charge for a chimney cleaning?",
    a: "Standard single-flue chimney cleaning ranges from $150–$300 depending on creosote buildup, access, and metro. Inspections start at $99. We quote the full price range over the phone before scheduling.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema
        name="ChimmerJim"
        description="NFPA-certified chimney cleaning, inspection, repair, and fireplace services across 23 US metro areas."
        phone={PHONE}
        city="United States"
        state="US"
        url="https://chimmerjim.com"
        areaServed={metros.map((m) => m.fullName)}
      />
      <FAQSchema items={homeFaqs} />

      <HomeHero
        h1="Expert Chimney Repair & Cleaning Across 23 US Cities"
        subtitle="ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services across 23 major US metro areas. Same-day appointments — no upsells, no surprises."
        phone={PHONE}
        phoneDisplay={PHONE_DISPLAY}
        bullets={[
          "NFPA 211 certified technicians",
          "Same-day & next-day availability",
          "Upfront flat pricing — no surprises",
          "2-year workmanship warranty",
        ]}
      />

      <Certifications />

      <StatsBanner />

      {/* Services — premium intro */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-amber text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              <span className="w-8 h-px bg-amber" />
              Full-Service Chimney Care
              <span className="w-8 h-px bg-amber" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand mb-3 tracking-tight">
              Twelve services. One certified team.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Every service is performed by an NFPA-certified ChimmerJim technician,
              priced flat, documented in writing, and guaranteed.
            </p>
          </div>
          {/* Reuse existing services grid (header hidden via prop pattern) */}
          <Services bare />
        </div>
      </section>

      <ProcessSteps />

      <EmergencyBar phone={PHONE} phoneDisplay={PHONE_DISPLAY} />

      <CommonProblems />

      <OurPromise />

      <OurWork />

      <WhyChooseUs />

      <Testimonials />

      {/* Metro selector — premium card layout */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <MapPin size={28} className="text-accent mx-auto mb-3" />
            <div className="inline-flex items-center gap-2 text-amber text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              <span className="w-8 h-px bg-amber" />
              23 Metros · Daily Dispatch
              <span className="w-8 h-px bg-amber" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand mb-3 tracking-tight">
              Find your metro &mdash; we&apos;re probably nearby
            </h2>
            <p className="text-slate-500 leading-relaxed">
              ChimmerJim runs full-service crews in 23 US metros. Click your area for
              local pricing, available slots, and the metro's direct line.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {metros.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="group flex flex-col items-center justify-center bg-white hover:bg-brand border border-slate-200 hover:border-brand rounded-xl px-4 py-5 transition-all text-center hover:shadow-[0_8px_28px_rgba(15,37,64,0.12)] hover:-translate-y-px"
              >
                <span className="text-sm font-bold text-brand group-hover:text-white transition-colors">
                  {m.name}
                </span>
                <span className="text-[11px] text-slate-400 group-hover:text-white/70 transition-colors mt-0.5">
                  {m.state}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={homeFaqs} />

      <CTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} />
      <StickyMobileCTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} />
    </>
  );
}
