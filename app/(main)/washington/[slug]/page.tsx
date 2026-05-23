import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import { getDcCityBySlug, getAllDcCitySlugs, dcServiceSlugs } from "@/lib/data/cities";
import { getServiceBySlug } from "@/lib/data/services";

type Props = { params: Promise<{ slug: string }> };

// Slugs: either just a city slug (e.g., "arlington-va")
// or service-city combo (e.g., "chimney-repair-arlington-va")
function parseSlug(slug: string) {
  const citySlugs = getAllDcCitySlugs();
  // Try pure city match first
  const city = getDcCityBySlug(slug);
  if (city) return { city, service: null };

  // Try service-city combo: find which city slug suffix matches
  for (const citySlug of citySlugs) {
    const servicePart = slug.replace(`-${citySlug}`, "");
    if (servicePart !== slug) {
      const service = getServiceBySlug(servicePart);
      const cityData = getDcCityBySlug(citySlug);
      if (service && cityData) return { city: cityData, service };
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const citySlug of getAllDcCitySlugs()) {
    params.push({ slug: citySlug });
    for (const serviceSlug of dcServiceSlugs) {
      params.push({ slug: `${serviceSlug}-${citySlug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};
  const { city, service } = parsed;
  const PHONE = "2025553300";
  const BASE = "https://chimmerjim.com";

  const title = service
    ? `${service.name} in ${city.displayName}`
    : `Chimney Services in ${city.displayName}`;
  const description = service
    ? `ChimmerJim provides professional ${service.name.toLowerCase()} in ${city.displayName}. NFPA-certified, same-day available. Free estimate.`
    : `ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services in ${city.displayName}. Call for a same-day appointment.`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE}/washington/${slug}` },
    openGraph: { title, description, url: `${BASE}/washington/${slug}` },
  };
}

const PHONE = "2025553300";
const PHONE_DISPLAY = "(202) 555-3300";

export default async function WashingtonCityPage({ params }: Props) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();
  const { city, service } = parsed;
  const BASE = "https://chimmerjim.com";

  const h1 = service
    ? `${service.name} in ${city.displayName}`
    : `Chimney Services in ${city.displayName}`;
  const subtitle = service
    ? `${service.intro} Available in ${city.displayName} and surrounding areas: ${city.serviceAreas.slice(0, 3).join(", ")}.`
    : `ChimmerJim provides NFPA-certified chimney cleaning, inspection, repair, and fireplace services in ${city.displayName} and surrounding ${city.state} areas.`;

  const faqs = service
    ? service.faqs
    : [
        { q: `Do you provide chimney services in ${city.displayName}?`, a: `Yes — ChimmerJim serves ${city.displayName} and the broader ${city.county} area with same-day and next-day appointments.` },
        { q: "What chimney services do you offer?", a: "We provide chimney cleaning, inspection (Level 1 & 2), repair, relining, cap installation, waterproofing, gas fireplace service, and dryer vent cleaning." },
        { q: "How quickly can I get an appointment?", a: "Most customers in the DC area get an appointment within 24 hours. Same-day slots are often available." },
      ];

  return (
    <>
      <LocalBusinessSchema
        name={`ChimmerJim — ${city.displayName}`}
        description={subtitle}
        phone={PHONE}
        city={city.name}
        state={city.state}
        url={`${BASE}/washington/${slug}`}
        serviceType={service?.name ?? "Chimney Services"}
        areaServed={city.serviceAreas}
      />
      <BreadcrumbSchema
        items={[
          { name: "ChimmerJim", url: BASE },
          { name: "Washington DC Metro", url: `${BASE}/washington` },
          ...(service ? [{ name: city.displayName, url: `${BASE}/washington/${city.slug}` }] : []),
          { name: service ? service.name : city.displayName, url: `${BASE}/washington/${slug}` },
        ]}
      />
      <FAQSchema items={faqs} />

      <Hero
        h1={h1}
        subtitle={subtitle}
        phone={PHONE}
        phoneDisplay={PHONE_DISPLAY}
        locationPill={city.displayName}
        bgImage="/heroes/hero-washington-city.jpg"
        bullets={[
          `Serving ${city.serviceAreas.slice(0, 2).join(", ")} & more`,
          "NFPA-certified technicians",
          "Same-day availability",
          "Free written estimate",
        ]}
      />
      <TrustBadges />
      {service && <Process steps={service.process} heading={`How Our ${service.name} Works`} />}
      <WhyChooseUs heading={`Why ${city.displayName} Homeowners Choose ChimmerJim`} />
      <FAQ items={faqs} />
      <section className="py-10 bg-surface text-center">
        <p className="text-sm text-slate-500 mb-2">Also serving these nearby areas</p>
        <div className="flex flex-wrap gap-2 justify-center max-w-xl mx-auto px-4">
          {city.serviceAreas.map((a) => (
            <span key={a} className="bg-white border border-slate-200 rounded-full px-3 py-1 text-sm text-brand">{a}</span>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/washington" className="text-accent text-sm hover:underline">← All DC Metro Areas</Link>
        </div>
      </section>
      <CTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} heading={`Book Service in ${city.displayName}`} subheading="Same-day appointments available. Call now for a free written estimate." />
      <StickyMobileCTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} />
    </>
  );
}
