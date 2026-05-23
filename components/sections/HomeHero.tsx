import Image from "next/image";
import {
  Phone,
  CheckCircle,
  Shield,
  Star,
  Award,
  Clock,
  Flame,
  ArrowRight,
} from "lucide-react";
import {
  GoogleIcon,
  FacebookIcon,
  YelpIcon,
  AngiIcon,
  BbbIcon,
} from "@/components/icons/BrandIcons";
import type { SVGProps, ComponentType } from "react";

interface HomeHeroProps {
  h1: string;
  subtitle: string;
  phone: string;
  phoneDisplay: string;
  bullets?: string[];
  locationPill?: string;
  ctaLabel?: string;
  liveStatus?: string;
}

interface ProofBadge {
  label: string;
  rating: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const proofBadges: ProofBadge[] = [
  { label: "Google",   rating: "4.9", Icon: GoogleIcon },
  { label: "Facebook", rating: "4.9", Icon: FacebookIcon },
  { label: "Yelp",     rating: "4.8", Icon: YelpIcon },
  { label: "Angi",     rating: "A+",  Icon: AngiIcon },
  { label: "BBB",      rating: "A+",  Icon: BbbIcon },
];

export default function HomeHero({
  h1,
  subtitle,
  phone,
  phoneDisplay,
  bullets = [],
  locationPill,
  ctaLabel = "Call for a Free Estimate",
  liveStatus = "Technicians available now — same-day slots open",
}: HomeHeroProps) {
  return (
    <section className="relative bg-brand text-white overflow-hidden">
      {/* ── Background photo — art-directed per breakpoint ── */}
      {/* Mobile portrait: priority-preloaded (most local-service traffic is mobile) */}
      <Image
        src="/heroes/hero-home-mobile.png"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="md:hidden object-cover object-top"
      />
      {/* Desktop landscape: eager but no preload link — avoids double LCP penalty */}
      <Image
        src="/heroes/hero-home-desktop.png"
        alt=""
        fill
        loading="eager"
        sizes="100vw"
        className="hidden md:block object-cover object-center"
      />
      {/* Brand color washes — photo reads as texture */}
      <div className="absolute inset-0 bg-brand/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_15%,rgba(45,82,130,0.65),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_5%_85%,rgba(15,37,64,0.85),transparent)] pointer-events-none" />

      {/* Faint dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.95) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Glowing ember accent — top-right */}
      <div
        className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.6), rgba(249,115,22,0.0) 60%)",
        }}
      />
      {/* Bottom accent edge */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ── Left: editorial copy ─────────────────────────── */}
          <div className="lg:col-span-7 min-w-0">

            {/* Eyebrow / live status */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/15 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium pl-2.5 pr-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              {liveStatus}
            </div>

            {locationPill && (
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-5 ml-3">
                {locationPill}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4rem] font-extrabold leading-[1.04] tracking-[-0.025em] mb-6">
              {h1.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">
                  {h1.split(" ").slice(-2).join(" ")}
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-accent/25 -skew-x-6 z-0"
                />
              </span>
            </h1>

            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              {subtitle}
            </p>

            {bullets.length > 0 && (
              <ul className="mb-9 grid sm:grid-cols-2 gap-y-2.5 gap-x-6 max-w-2xl">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/90">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-accent" strokeWidth={3} />
                    </span>
                    <span className="text-sm md:text-base font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA — single, primary phone-call action */}
            <div className="mb-6 max-w-2xl">
              <a
                href={`tel:+1${phone}`}
                data-dni="primary-phone"
                data-dni-href="primary-phone"
                className="group inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-4 rounded-xl text-base sm:text-lg transition-all shadow-[0_0_40px_rgba(249,115,22,0.45)] hover:shadow-[0_0_56px_rgba(249,115,22,0.75)] hover:-translate-y-px active:translate-y-0"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                  <Phone size={16} className="flex-shrink-0" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider font-semibold text-white/75">
                    {ctaLabel}
                  </span>
                  <span data-dni="primary-phone" className="block text-lg font-extrabold tabular-nums">
                    {phoneDisplay}
                  </span>
                </span>
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <p className="text-white/40 text-xs flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Free estimates</span>
              <span className="text-white/20">·</span>
              <span>No obligation</span>
              <span className="text-white/20">·</span>
              <span>Licensed &amp; Insured</span>
              <span className="text-white/20">·</span>
              <span>NFPA 211 certified</span>
            </p>
          </div>

          {/* ── Right: stacked proof column ─────────────────── */}
          <div className="lg:col-span-5 lg:pl-2">

            {/* Top: stat card with photo collage */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">

              {/* Photo strip top */}
              <div className="relative h-44 sm:h-52">
                <div className="absolute inset-0 grid grid-cols-3 gap-1">
                  <div className="relative">
                    <Image
                      src="/photos/crown-rebuild.png"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 12vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/photos/chimney-caps-rusted.jpeg"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 12vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/photos/roofing-vent-install.png"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 12vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Gradient fade for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/30 to-brand" />

                {/* Floating badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-amber/95 text-brand-dark text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider">
                  <Flame size={12} strokeWidth={2.5} className="text-brand-dark" />
                  Real Work
                </div>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">

                {/* Rating header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} size={16} className="text-amber fill-amber" />
                      ))}
                    </div>
                    <span className="font-extrabold text-white text-base">4.9</span>
                  </div>
                  <span className="text-white/50 text-xs font-medium">
                    500+ verified reviews
                  </span>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "50k+", label: "Jobs done", icon: Flame },
                    { value: "15+",  label: "Years",     icon: Clock },
                    { value: "23",   label: "Metros",    icon: Award },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.label}
                        className="bg-white/[0.05] border border-white/10 rounded-xl px-2.5 py-3 flex flex-col items-center justify-center text-center"
                      >
                        <Icon size={13} className="text-accent mb-1" />
                        <span className="text-xl font-extrabold text-white leading-none tabular-nums">
                          {s.value}
                        </span>
                        <span className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Trust chips */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-lg px-2.5 py-2">
                    <Shield size={12} className="text-accent flex-shrink-0" />
                    <span className="text-white/80 text-[11px] font-semibold leading-tight">
                      Licensed &amp; Insured
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-lg px-2.5 py-2">
                    <Award size={12} className="text-accent flex-shrink-0" />
                    <span className="text-white/80 text-[11px] font-semibold leading-tight">
                      NFPA 211 Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review platform strip with real brand icons */}
            <div className="mt-4 grid grid-cols-5 gap-2">
              {proofBadges.map((p) => {
                const Icon = p.Icon;
                return (
                  <div
                    key={p.label}
                    className="group bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 rounded-lg p-2 flex flex-col items-center gap-1.5 transition-colors"
                    title={`${p.label}: ${p.rating}`}
                  >
                    <Icon className="w-7 h-7 rounded-md flex-shrink-0" />
                    <div className="flex items-center gap-1 leading-none">
                      <Star size={9} className="text-amber fill-amber" />
                      <span className="text-white text-[11px] font-extrabold tabular-nums">
                        {p.rating}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden lg:flex items-center justify-center mt-14">
          <div className="flex items-center gap-3 text-white/30 text-xs uppercase tracking-[0.2em] font-medium">
            <span className="w-12 h-px bg-white/15" />
            Trusted in 23 Metros
            <span className="w-12 h-px bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
