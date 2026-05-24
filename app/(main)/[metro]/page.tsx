import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CommonProblems from "@/components/sections/CommonProblems";
import { getMetroBySlug, getAllMetroSlugs } from "@/lib/data/metros";

type Props = { params: Promise<{ metro: string }> };

export async function generateStaticParams() {
  return getAllMetroSlugs().map((metro) => ({ metro }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metro } = await params;
  const m = getMetroBySlug(metro);
  if (!m) return {};
  const title = `Chimney Services in ${m.displayName} | ChimmerJim`;
  const description = `ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services in the ${m.displayName}. Same-day available — call for a free estimate.`;
  return {
    title,
    description,
    alternates: { canonical: `https://chimmerjim.com/${m.slug}` },
    openGraph: { title, description, url: `https://chimmerjim.com/${m.slug}` },
  };
}

export default async function MetroPage({ params }: Props) {
  const { metro } = await params;
  const m = getMetroBySlug(metro);
  if (!m) notFound();

  const phone = m.phone;
  const phoneDisplay = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`;
  const BASE = "https://chimmerjim.com";

  return (
    <>
      <LocalBusinessSchema
        name={`ChimmerJim — ${m.displayName}`}
        description={`NFPA-certified chimney cleaning, inspection, repair, and fireplace services in the ${m.displayName}.`}
        phone={phone}
        city={m.name}
        state={m.state}
        lat={m.lat}
        lng={m.lng}
        url={`${BASE}/${m.slug}`}
        areaServed={m.cities}
      />
      <BreadcrumbSchema
        items={[
          { name: "ChimmerJim", url: BASE },
          { name: m.displayName, url: `${BASE}/${m.slug}` },
        ]}
      />

      <Hero
        h1={`Chimney Repair & Cleaning in ${m.displayName}`}
        subtitle={`ChimmerJim serves the ${m.displayName} with NFPA-certified chimney cleaning, inspection, repair, and fireplace service. ${m.weatherNote}`}
        phone={phone}
        phoneDisplay={phoneDisplay}
        locationPill={m.displayName}
        bgImage="/heroes/hero-metro.webp"
        bullets={[
          `Serving ${m.cities.slice(0, 3).join(", ")} & more`,
          "NFPA-certified technicians",
          "Same-day & next-day slots",
          "Free written estimate",
        ]}
      />

      <Breadcrumb items={[{ name: m.displayName }]} />
      <TrustBadges />

      <Services
        metroSlug={m.slug}
        heading={`Chimney Services in ${m.fullName}`}
        subheading={`Every ChimmerJim service is available in the ${m.displayName}. Pick what you need.`}
      />

      {/* Cities we serve */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-brand mb-4">
            Cities We Serve in the {m.displayName}
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {m.cities.map((c) => (
              <span
                key={c}
                className="bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm text-brand"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CommonProblems
        heading="Sound familiar? We're probably nearby."
        subheading={`These are the chimney issues ChimmerJim diagnoses every day in the ${m.displayName}. Same-day slots available.`}
      />
      <WhyChooseUs heading={`Why ${m.fullName} Homeowners Choose ChimmerJim`} />
      <Process />
      <Testimonials />
      <CTA
        phone={phone}
        phoneDisplay={phoneDisplay}
        heading={`Book Chimney Service in ${m.fullName}`}
        subheading={`Same-day and next-day appointments available across the ${m.displayName}. Call now for a free estimate.`}
      />
      <StickyMobileCTA phone={phone} phoneDisplay={phoneDisplay} />
    </>
  );
}
