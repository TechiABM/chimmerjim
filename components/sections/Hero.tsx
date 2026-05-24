import Image from "next/image";
import { Phone, CheckCircle, Shield, Star, Award, Clock, Users } from "lucide-react";

interface HeroProps {
  h1: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  bullets?: string[];
  locationPill?: string;
  ctaLabel?: string;
  /** Hero background image. Defaults to the generic chimney photo. */
  bgImage?: string;
}

const stats = [
  { value: "4.9", label: "Star Rating",      icon: Star,  iconClass: "text-amber fill-amber" },
  { value: "500+", label: "5-Star Reviews",  icon: Users, iconClass: "text-accent" },
  { value: "15+",  label: "Years Experience",icon: Clock, iconClass: "text-accent" },
  { value: "NFPA", label: "211 Certified",   icon: Award, iconClass: "text-accent" },
];

export default function Hero({
  h1,
  subtitle,
  phone,
  phoneDisplay,
  bullets = [],
  locationPill,
  ctaLabel = "Call for a Free Estimate",
  bgImage = "/heroes/hero-home-desktop.jpg",
}: HeroProps) {
  return (
    <section className="relative bg-brand text-white overflow-hidden min-h-[520px] flex items-center">
      {/* Background photo */}
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Navy overlay — photo reads as texture, not subject */}
      <div className="absolute inset-0 bg-brand/88" />
      {/* Radial depth layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_10%,rgba(45,82,130,0.6),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_90%,rgba(15,37,64,0.7),transparent)] pointer-events-none" />
      {/* Accent bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-14 xl:gap-20">

          {/* ── Left: copy + CTAs ─────────────────────────────── */}
          <div className="flex-1 min-w-0">
            {locationPill && (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-3 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                {locationPill}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl md:text-[3.35rem] font-extrabold leading-[1.08] tracking-tight mb-5">
              {h1}
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-7 max-w-lg">
              {subtitle}
            </p>

            {bullets.length > 0 && (
              <ul className="mb-8 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/90">
                    <CheckCircle size={17} className="text-accent flex-shrink-0" />
                    <span className="text-sm md:text-base">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={`tel:+1${phone}`}
                data-dni="primary-phone"
                data-dni-href="primary-phone"
                className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-xl text-lg transition-all shadow-[0_0_32px_rgba(249,115,22,0.4)] hover:shadow-[0_0_48px_rgba(249,115,22,0.65)] hover:-translate-y-px active:translate-y-0"
              >
                <Phone size={20} className="flex-shrink-0" />
                {ctaLabel} — <span data-dni="primary-phone">{phoneDisplay}</span>
              </a>
            </div>

            <p className="text-white/30 text-xs">
              Free estimates · No obligation · Licensed &amp; Insured
            </p>
          </div>

          {/* ── Right: stats card ─────────────────────────────── */}
          <div className="mt-10 lg:mt-0 lg:w-72 xl:w-80 flex-shrink-0">
            <div className="bg-white/[0.06] border border-white/15 rounded-2xl p-6 backdrop-blur-md">
              {/* Stars */}
              <div className="flex items-center gap-2 mb-5 pb-5 border-b border-white/10">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((n) => (
                    <Star key={n} size={17} className="text-amber fill-amber" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5</span>
                <span className="text-white/35 text-xs ml-auto">Google</span>
              </div>

              {/* 2×2 stat grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="bg-white/[0.05] border border-white/10 rounded-xl p-3.5 flex flex-col gap-1.5"
                    >
                      <Icon size={15} className={s.iconClass} />
                      <span className="text-[1.6rem] font-extrabold text-white leading-none tracking-tight">
                        {s.value}
                      </span>
                      <span className="text-white/45 text-[11px] leading-tight">{s.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Badges */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2.5">
                  <Shield size={13} className="text-accent flex-shrink-0" />
                  <span className="text-white/75 text-sm font-medium">Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2.5">
                  <Award size={13} className="text-accent flex-shrink-0" />
                  <span className="text-white/75 text-sm font-medium">NFPA 211 Certified</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
