import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Shield, Star, CheckCircle, Clock, Award } from "lucide-react";
import Image from "next/image";
import AdsHeader from "@/components/layout/AdsHeader";
import FAQ from "@/components/sections/FAQ";
import FAQSchema from "@/components/schema/FAQSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import PresetHero from "@/components/sections/PresetHero";
import ProofStat from "@/components/sections/ProofStat";
import LanderProblems from "@/components/sections/LanderProblems";
import LanderProcess from "@/components/sections/LanderProcess";
import LanderAreas from "@/components/sections/LanderAreas";
import LanderReviews from "@/components/sections/LanderReviews";
import { getLanderByCampaign, getAllCampaignSlugs } from "@/lib/data/landers";
import { getMetroBySlug } from "@/lib/data/metros";

type Props = { params: Promise<{ campaign: string }> };

export async function generateStaticParams() {
  return getAllCampaignSlugs().map((campaign) => ({ campaign }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { campaign } = await params;
  const l = getLanderByCampaign(campaign);
  if (!l) return {};
  const title = l.metaTitle ?? l.h1;
  const description = l.heroSubtitle.slice(0, 155);
  const ogImage = l.photos?.[0]
    ? { url: `https://chimmerjim.com${l.photos[0].src}`, alt: l.photos[0].alt, width: 1200, height: 800 }
    : undefined;
  return {
    title,
    description,
    keywords: `${l.keyword}, chimney repair, chimney service, ${l.city}`,
    alternates: { canonical: `https://chimmerjim.com/ads/${campaign}` },
    openGraph: {
      title,
      description,
      url: `https://chimmerjim.com/ads/${campaign}`,
      ...(ogImage && { images: [ogImage] }),
    },
    robots: { index: false, follow: false },
  };
}

export default async function AdsLanderPage({ params }: Props) {
  const { campaign } = await params;
  const l = getLanderByCampaign(campaign);
  if (!l) notFound();

  const phone = l.phone;
  const phoneDisplay = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;

  // Derive coverage cities from the metro if no override is set
  const metro = getMetroBySlug(l.metroSlug);
  const areasServed = l.areasServed ?? metro?.cities ?? [];
  const metroLabel = metro?.displayName ?? `${l.city}${l.state ? `, ${l.state}` : ""}`;

  return (
    <>
      <LocalBusinessSchema
        name="ChimmerJim"
        description={l.heroSubtitle}
        phone={phone}
        city={l.city}
        state={l.state}
        url={`https://chimmerjim.com/ads/${campaign}`}
      />
      <FAQSchema items={l.faqs} />

      <AdsHeader phone={phone} phoneDisplay={phoneDisplay} />

      {/* ── Hero (preset-aware) ───────────────────────────────────── */}
      <PresetHero lander={l} />

      {/* ── Optional proof stat ───────────────────────────────────── */}
      {l.proofStat && <ProofStat stat={l.proofStat} />}

      {/* ── Social proof strip ─────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-5 px-4">
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-3 items-center">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={16} className="text-amber fill-amber" />
              ))}
            </div>
            <span className="font-bold text-brand text-sm">4.9</span>
            <span className="text-slate-400 text-sm">(500+ reviews)</span>
          </div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Shield size={15} className="text-brand flex-shrink-0" />
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Award size={15} className="text-brand flex-shrink-0" />
            <span>NFPA 211 Certified</span>
          </div>
          <div className="w-px h-5 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-1.5 text-slate-600 text-sm">
            <Clock size={15} className="text-brand flex-shrink-0" />
            <span>Same-Day Available</span>
          </div>
        </div>
      </section>

      {/* ── Problem list — mirrors search-term language (QS: intent confirmation) ── */}
      {l.problems && l.problems.length > 0 && (
        <LanderProblems problems={l.problems} />
      )}

      {/* ── What's Included ────────────────────────────────────────── */}
      <section className="bg-surface py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-brand mb-8 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {l.bullets.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
              >
                <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle size={15} className="text-accent" />
                </div>
                <span className="text-sm text-brand font-medium leading-snug">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works (QS: in-home service anxiety reduction) ──── */}
      <LanderProcess steps={l.processSteps} />

      {/* ── Work proof photos (QS: original visual proof) ─────────── */}
      {l.photos && l.photos.length > 0 && (
        <section className="bg-white py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-brand mb-2 text-center">
              Chimney Repair Work in {l.city}
            </h2>
            <p className="text-slate-500 text-sm text-center mb-6">
              NFPA-certified repairs completed by our local technicians
            </p>
            <div className={`grid gap-4 ${l.photos.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
              {l.photos.map((photo, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    title={`Chimney Repair ${l.city} — ChimmerJim`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Mid-page CTA ───────────────────────────────────────────── */}
      <section className="relative bg-brand py-14 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,#2d5282,transparent)] opacity-50 pointer-events-none" />
        <div className="relative max-w-lg mx-auto">
          <p className="text-2xl font-bold mb-2">
            {l.midCtaHeading || "Ready to schedule?"}
          </p>
          <p className="text-white/60 text-sm mb-7">
            {l.midCtaSub || "It only takes 2 minutes. Our team picks up fast."}
          </p>
          <a
            href={`tel:+1${phone}`}
            data-dni="primary-phone"
            data-dni-href="primary-phone"
            className="inline-flex items-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:shadow-[0_0_36px_rgba(249,115,22,0.65)]"
          >
            <Phone size={20} />
            <span data-dni="primary-phone">{phoneDisplay}</span>
          </a>
          <p className="mt-4 text-white/35 text-xs">
            Free estimate · No obligation
          </p>
        </div>
      </section>

      {/* ── Reviews (QS: proof beyond star count) ─────────────────── */}
      <LanderReviews reviews={l.reviews} />

      {/* ── Areas served (QS: "near me" intent confirmation) ──────── */}
      {areasServed.length > 0 && (
        <LanderAreas cities={areasServed} metroLabel={metroLabel} />
      )}

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <FAQ items={l.faqs} heading="Common Questions" />

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="bg-brand-dark text-white py-8 px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-2 flex justify-center">
            <Image
              src="/logo.webp"
              alt="ChimmerJim"
              width={150}
              height={40}
              className="brightness-0 invert"
            />
          </div>
          <a
            href={`tel:+1${phone}`}
            data-dni="primary-phone"
            data-dni-href="primary-phone"
            className="text-accent font-bold text-lg hover:text-amber transition-colors"
          >
            <span data-dni="primary-phone">{phoneDisplay}</span>
          </a>
          <p className="text-white/40 text-xs mt-3">
            Licensed &amp; Insured · NFPA 211 Certified
            {l.city && ` · Serving ${l.city}`}
          </p>
          <p className="text-white/25 text-xs mt-1.5">
            © {new Date().getFullYear()} ChimmerJim
          </p>
        </div>
      </footer>

      {/* ── Sticky mobile call bar ─────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:+1${phone}`}
          data-dni="primary-phone"
          data-dni-href="primary-phone"
          className="flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold py-3.5 rounded-xl w-full text-base transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]"
        >
          <Phone size={18} />
          Call Now — <span data-dni="primary-phone">{phoneDisplay}</span>
        </a>
      </div>
    </>
  );
}
