import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTA from "@/components/sections/CTA";
import StickyMobileCTA from "@/components/sections/StickyMobileCTA";
import FAQSchema from "@/components/schema/FAQSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { metros } from "@/lib/data/metros";
import { CheckCircle } from "lucide-react";

type Props = { params: Promise<{ service: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = getServiceBySlug(service);
  if (!s) return {};
  const title = `Professional ${s.name} Services Across 23 US Cities | ChimmerJim`;
  const description = `ChimmerJim provides professional ${s.name.toLowerCase()} across 23 US metro areas. NFPA-certified, same-day available. ${s.priceRange}. Free estimate.`;
  return {
    title,
    description,
    alternates: { canonical: `https://chimmerjim.com/services/${s.slug}` },
    openGraph: { title, description, url: `https://chimmerjim.com/services/${s.slug}` },
  };
}

const PHONE = "8005553900";
const PHONE_DISPLAY = "(800) 555-3900";

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = getServiceBySlug(service);
  if (!s) notFound();
  const BASE = "https://chimmerjim.com";

  return (
    <>
      <LocalBusinessSchema
        name="ChimmerJim"
        description={`Professional ${s.name} services across 23 US metro areas. NFPA-certified, same-day available.`}
        phone={PHONE}
        city="United States"
        state="US"
        url={`${BASE}/services/${s.slug}`}
        serviceType={s.name}
      />
      <FAQSchema items={s.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "ChimmerJim", url: BASE },
          { name: "Services", url: `${BASE}/services` },
          { name: s.name, url: `${BASE}/services/${s.slug}` },
        ]}
      />

      <Hero
        h1={`Professional ${s.name} Services`}
        subtitle={s.intro}
        phone={PHONE}
        phoneDisplay={PHONE_DISPLAY}
        bgImage="/heroes/hero-service.jpg"
        bullets={[
          `Service duration: ${s.duration}`,
          "NFPA-certified technicians",
          "Available in 23 US metros",
        ]}
        ctaLabel={`Schedule ${s.shortName}`}
      />

      <Breadcrumb items={[{ name: "Services", href: `${BASE}/services` }, { name: s.name }]} />
      <TrustBadges />

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h2 className="text-xl font-bold text-brand mb-3">When to Schedule {s.name}</h2>
              <ul className="space-y-2">
                {s.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand/5 rounded-xl p-5">
              <h2 className="text-xl font-bold text-brand mb-3">At a Glance</h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-brand">Typical Price</dt>
                  <dd className="text-slate-600">{s.priceRange}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand">Duration</dt>
                  <dd className="text-slate-600">{s.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand">Certification</dt>
                  <dd className="text-slate-600">NFPA 211 / CSIA-certified technicians</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand">Coverage</dt>
                  <dd className="text-slate-600">23 US metro areas</dd>
                </div>
              </dl>
            </div>
          </div>

          {s.sections.map((sec) => (
            <div key={sec.title} className="mb-8">
              <h2 className="text-xl font-bold text-brand mb-3">{sec.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Process steps={s.process} heading={`How Our ${s.name} Process Works`} />
      <WhyChooseUs />
      <Testimonials />
      <FAQ items={s.faqs} heading={`${s.name} FAQs`} />

      {/* Find in your city */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand mb-4 text-center">
            Find {s.name} in Your City
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {metros.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}/${s.slug}`}
                className="text-center px-3 py-2 bg-white hover:bg-brand hover:text-white border border-slate-200 hover:border-brand rounded-lg text-sm text-brand transition-all"
              >
                {m.fullName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} heading={`Book ${s.name} Today`} subheading="Available in 23 metro areas. Most customers get an appointment within 24 hours." />
      <StickyMobileCTA phone={PHONE} phoneDisplay={PHONE_DISPLAY} />
    </>
  );
}
