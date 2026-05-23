import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import { dcCities, dcServiceSlugs } from "@/lib/data/cities";
import { getServiceBySlug } from "@/lib/data/services";

const PHONE = "2025553300";
const PHONE_DISPLAY = "(202) 555-3300";
const BASE = "https://chimmerjim.com";

export const metadata: Metadata = {
  title: "Chimney Services in Washington DC, Maryland & Virginia",
  description:
    "ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services in Washington DC, Maryland, and Northern Virginia. Same-day available.",
  alternates: { canonical: `${BASE}/washington` },
  openGraph: {
    title: "Chimney Services in Washington DC, Maryland & Virginia",
    description: "NFPA-certified chimney services in DC, MD & VA. Same-day available. Call ChimmerJim for a free estimate.",
    url: `${BASE}/washington`,
  },
};

export default function WashingtonPage() {
  return (
    <>
      <LocalBusinessSchema
        name="ChimmerJim — Washington DC Metro"
        description="NFPA-certified chimney cleaning, inspection, repair, and fireplace services in Washington DC, Maryland, and Northern Virginia."
        phone={PHONE}
        city="Washington"
        state="DC"
        lat={38.9072}
        lng={-77.0369}
        url={`${BASE}/washington`}
        areaServed={dcCities.map((c) => c.displayName)}
      />
      <BreadcrumbSchema
        items={[
          { name: "ChimmerJim", url: BASE },
          { name: "Washington DC Metro", url: `${BASE}/washington` },
        ]}
      />

      <Hero
        h1="Chimney Services in Washington DC, Maryland & Virginia"
        subtitle="ChimmerJim's DC-area team provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services across Washington DC, Maryland, and Northern Virginia. Same-day and next-day appointments available."
        phone={PHONE}
        phoneDisplay={PHONE_DISPLAY}
        locationPill="Washington DC · Maryland · Northern Virginia"
        bgImage="/heroes/hero-washington.jpg"
        bullets={[
          "Serving DC, MD, and Northern VA",
          "NFPA-certified technicians",
          "Same-day & next-day slots",
          "Upfront written estimates",
        ]}
      />

      <TrustBadges />

      {/* City grid */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand mb-6 text-center">Areas We Serve in the DC Metro</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {dcCities.map((city) => (
              <Link
                key={city.slug}
                href={`/washington/${city.slug}`}
                className="bg-surface hover:bg-brand hover:text-white border border-slate-200 hover:border-brand rounded-xl p-4 text-center transition-all"
              >
                <p className="font-semibold text-sm text-brand hover:text-white">{city.name}</p>
                <p className="text-xs text-slate-400">{city.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service + city matrix */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand mb-6 text-center">Services by Area</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="p-3 text-left rounded-tl-lg">City</th>
                  {dcServiceSlugs.map((slug) => {
                    const s = getServiceBySlug(slug);
                    return <th key={slug} className="p-3 text-center">{s?.shortName}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {dcCities.map((city, i) => (
                  <tr key={city.slug} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="p-3 font-medium text-brand">{city.displayName}</td>
                    {dcServiceSlugs.map((slug) => (
                      <td key={slug} className="p-3 text-center">
                        <Link
                          href={`/washington/${slug}-${city.slug}`}
                          className="text-accent hover:underline font-medium"
                        >
                          ✓
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Services metroSlug="washington-dc" heading="DC Area Chimney Services" />
      <WhyChooseUs heading="Why DC-Area Homeowners Choose ChimmerJim" />
      <Testimonials />
      <CTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} heading="Book Chimney Service in the DC Metro" subheading="Serving Washington DC, Maryland, and Northern Virginia. Same-day appointments available." />
      <StickyMobileCTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} />
    </>
  );
}
