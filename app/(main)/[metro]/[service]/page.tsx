import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FAQSchema from "@/components/schema/FAQSchema";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getMetroBySlug, getAllMetroSlugs } from "@/lib/data/metros";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { CheckCircle } from "lucide-react";

type Props = { params: Promise<{ metro: string; service: string }> };

export async function generateStaticParams() {
  const params: { metro: string; service: string }[] = [];
  for (const metro of getAllMetroSlugs()) {
    for (const service of getAllServiceSlugs()) {
      params.push({ metro, service });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { metro, service } = await params;
  const m = getMetroBySlug(metro);
  const s = getServiceBySlug(service);
  if (!m || !s) return {};
  const title = `${s.name} in ${m.fullName} | ChimmerJim`;
  const description = `ChimmerJim provides professional ${s.name.toLowerCase()} in ${m.fullName}. NFPA-certified, same-day available. ${s.priceRange}. Free estimate — call now.`;
  return {
    title,
    description,
    alternates: { canonical: `https://chimmerjim.com/${m.slug}/${s.slug}` },
    openGraph: { title, description, url: `https://chimmerjim.com/${m.slug}/${s.slug}` },
  };
}

export default async function ServiceMetroPage({ params }: Props) {
  const { metro, service } = await params;
  const m = getMetroBySlug(metro);
  const s = getServiceBySlug(service);
  if (!m || !s) notFound();

  const phone = m.phone;
  const phoneDisplay = `(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6)}`;
  const BASE = "https://chimmerjim.com";
  const canonical = `${BASE}/${m.slug}/${s.slug}`;

  return (
    <>
      <LocalBusinessSchema
        name={`ChimmerJim — ${s.name} ${m.fullName}`}
        description={`Professional ${s.name} in ${m.fullName}. NFPA-certified, same-day available.`}
        phone={phone}
        city={m.name}
        state={m.state}
        lat={m.lat}
        lng={m.lng}
        url={canonical}
        serviceType={s.name}
        areaServed={m.cities}
      />
      <BreadcrumbSchema
        items={[
          { name: "ChimmerJim", url: BASE },
          { name: m.displayName, url: `${BASE}/${m.slug}` },
          { name: s.name, url: canonical },
        ]}
      />
      <FAQSchema items={s.faqs} />

      <Hero
        h1={`${s.name} in ${m.fullName}`}
        subtitle={`${s.intro} Serving ${m.cities.slice(0,3).join(", ")} and the wider ${m.displayName}.`}
        phone={phone}
        phoneDisplay={phoneDisplay}
        locationPill={`${s.name} · ${m.displayName}`}
        bgImage="/heroes/hero-metro-service.webp"
        bullets={s.signs.slice(0, 4).map((sign) => `Signs you need this: ${sign}`)}
        ctaLabel={`Call for ${s.shortName} Service`}
      />

      <Breadcrumb items={[{ name: m.displayName, href: `${BASE}/${m.slug}` }, { name: s.name }]} />
      <TrustBadges />

      {/* Service intro & signs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-brand mb-3">About {s.name}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{s.intro}</p>
              <p className="text-sm text-slate-500">
                <strong>Duration:</strong> {s.duration}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-brand mb-3">Signs You Need {s.shortName}</h2>
              <ul className="space-y-2">
                {s.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-10 space-y-8">
            {s.sections.map((sec) => (
              <div key={sec.title}>
                <h3 className="text-lg font-semibold text-brand mb-2">{sec.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{sec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process
        steps={s.process}
        heading={`How Our ${s.name} Works`}
      />

      <WhyChooseUs heading={`Why ${m.fullName} Homeowners Choose ChimmerJim`} />
      <Testimonials />
      <FAQ items={s.faqs} heading={`${s.name} FAQs`} />

      {/* Related services */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-bold text-brand mb-4">
            More Services in {m.fullName}
          </h2>
          <Link
            href={`/${m.slug}`}
            className="inline-flex items-center gap-1 text-accent hover:underline text-sm font-medium"
          >
            ← View all {m.fullName} services
          </Link>
        </div>
      </section>

      <CTA
        phone={phone}
        phoneDisplay={phoneDisplay}
        heading={`Book ${s.name} in ${m.fullName}`}
        subheading={`Same-day and next-day appointments available. Call now for a free estimate.`}
      />
      <StickyMobileCTA phone={phone} phoneDisplay={phoneDisplay} />
    </>
  );
}
