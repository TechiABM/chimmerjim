import Image from "next/image";
import {
  Phone, CheckCircle, Zap, Calendar, type LucideIcon,
} from "lucide-react";
import type { AdsLander, LanderPreset } from "@/lib/data/landers";

interface PresetTheme {
  bg: string;             // hero base
  urgencyBg: string;      // urgency pill bg
  urgencyBorder: string;
  urgencyText: string;
  bottomEdge: string;
  ctaShadowRest: string;
  ctaShadowHover: string;
  showOrangeFlare: boolean;
  showRedFlare: boolean;
}

const THEMES: Record<LanderPreset, PresetTheme> = {
  default: {
    bg: "bg-brand",
    urgencyBg: "bg-accent/20",
    urgencyBorder: "border-accent/30",
    urgencyText: "text-amber",
    bottomEdge: "from-transparent via-accent/40 to-transparent",
    ctaShadowRest: "shadow-[0_0_36px_rgba(249,115,22,0.45)]",
    ctaShadowHover: "hover:shadow-[0_0_52px_rgba(249,115,22,0.70)]",
    showOrangeFlare: true,
    showRedFlare: false,
  },
  "free-estimate": {
    bg: "bg-brand",
    urgencyBg: "bg-white/10",
    urgencyBorder: "border-white/20",
    urgencyText: "text-white/85",
    bottomEdge: "from-transparent via-accent/40 to-transparent",
    ctaShadowRest: "shadow-[0_0_36px_rgba(249,115,22,0.45)]",
    ctaShadowHover: "hover:shadow-[0_0_52px_rgba(249,115,22,0.70)]",
    showOrangeFlare: true,
    showRedFlare: false,
  },
  seasonal: {
    bg: "bg-brand",
    urgencyBg: "bg-amber/15",
    urgencyBorder: "border-amber/35",
    urgencyText: "text-amber",
    bottomEdge: "from-transparent via-amber/40 to-transparent",
    ctaShadowRest: "shadow-[0_0_36px_rgba(249,115,22,0.45)]",
    ctaShadowHover: "hover:shadow-[0_0_52px_rgba(249,115,22,0.70)]",
    showOrangeFlare: true,
    showRedFlare: false,
  },
  emergency: {
    bg: "bg-brand-dark",
    urgencyBg: "bg-[#a02822]/40",
    urgencyBorder: "border-[#a02822]",
    urgencyText: "text-white",
    bottomEdge: "from-[#a02822] via-[#a02822] to-[#a02822]",
    ctaShadowRest: "shadow-[0_0_36px_rgba(160,40,34,0.50)]",
    ctaShadowHover: "hover:shadow-[0_0_52px_rgba(160,40,34,0.75)]",
    showOrangeFlare: false,
    showRedFlare: true,
  },
  "real-estate": {
    bg: "bg-brand-dark",
    urgencyBg: "bg-white/8",
    urgencyBorder: "border-white/20",
    urgencyText: "text-white/85",
    bottomEdge: "from-transparent via-white/20 to-transparent",
    ctaShadowRest: "shadow-[0_0_28px_rgba(249,115,22,0.30)]",
    ctaShadowHover: "hover:shadow-[0_0_40px_rgba(249,115,22,0.50)]",
    showOrangeFlare: false,
    showRedFlare: false,
  },
};

const URGENCY_ICONS: Record<LanderPreset, LucideIcon> = {
  default: Zap,
  "free-estimate": Calendar,
  seasonal: Zap,
  emergency: Phone,
  "real-estate": Calendar,
};

interface PresetHeroProps {
  lander: AdsLander;
}

export default function PresetHero({ lander }: PresetHeroProps) {
  const theme = THEMES[lander.preset];
  const UrgencyIcon = URGENCY_ICONS[lander.preset];
  const phone = lander.phone;
  const phoneDisplay = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;

  return (
    <section className={`relative ${theme.bg} text-white overflow-hidden`}>
      {/* Hero background image */}
      <Image
        src="/heroes/hero-ads.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,#2d5282,transparent)] opacity-65 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_0%_100%,#0f2540,transparent)] pointer-events-none" />
      {theme.showRedFlare && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(160,40,34,0.4),transparent_60%)] pointer-events-none" />
      )}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${theme.bottomEdge}`}
      />

      <div className="relative max-w-2xl mx-auto px-4 py-14 sm:py-20 text-center">
        {/* Urgency pill */}
        <div
          className={`inline-flex items-center gap-2 ${theme.urgencyBg} border ${theme.urgencyBorder} ${theme.urgencyText} text-sm font-semibold px-3.5 py-1.5 rounded-full mb-6`}
        >
          <UrgencyIcon size={13} className="flex-shrink-0" />
          {lander.urgency}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4">
          {lander.h1}
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          {lander.heroSubtitle}
        </p>

        {/* Trust points — 2-col grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-9 max-w-sm mx-auto">
          {lander.trustPoints.map((t) => (
            <div
              key={t}
              className="flex items-center gap-2 bg-white/10 border border-white/15 text-white/85 text-sm px-3 py-2.5 rounded-xl"
            >
              <CheckCircle size={14} className="text-accent flex-shrink-0" />
              <span className="text-left leading-tight">{t}</span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href={`tel:+1${phone}`}
          data-dni="primary-phone"
          data-dni-href="primary-phone"
          className={`inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-5 rounded-2xl text-xl transition-all ${theme.ctaShadowRest} ${theme.ctaShadowHover} hover:-translate-y-px active:translate-y-0 w-full sm:w-auto`}
        >
          <Phone size={22} className="flex-shrink-0" />
          Call Now — <span data-dni="primary-phone">{phoneDisplay}</span>
        </a>
        <p className="mt-3 text-white/40 text-xs">
          Free estimate · No obligation · Licensed &amp; Insured
        </p>
      </div>
    </section>
  );
}
