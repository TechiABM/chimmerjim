import {
  GoogleIcon,
  FacebookIcon,
  YelpIcon,
  AngiIcon,
  BbbIcon,
  NfpaIcon,
  CsiaIcon,
  StarSolid,
} from "@/components/icons/BrandIcons";
import type { SVGProps, ComponentType } from "react";

interface CertItem {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  sub: string;
  /** Optional rating (rendered as gold stars + value). */
  rating?: string;
}

const reviews: CertItem[] = [
  { Icon: GoogleIcon,   title: "Google",   sub: "500+ reviews", rating: "4.9" },
  { Icon: FacebookIcon, title: "Facebook", sub: "240+ reviews", rating: "4.9" },
  { Icon: YelpIcon,     title: "Yelp",     sub: "180+ reviews", rating: "4.8" },
  { Icon: AngiIcon,     title: "Angi",     sub: "Top Pro 2026"  },
  { Icon: BbbIcon,      title: "BBB",      sub: "A+ Accredited" },
];

const certs: CertItem[] = [
  { Icon: NfpaIcon, title: "NFPA 211", sub: "Certified national standard" },
  { Icon: CsiaIcon, title: "CSIA",     sub: "Sweep certification" },
];

function CertCard({ Icon, title, sub, rating }: CertItem) {
  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3.5 py-3 hover:border-accent/40 hover:shadow-[0_6px_22px_rgba(249,115,22,0.08)] transition-all">
      <Icon className="w-10 h-10 flex-shrink-0 rounded-lg" />
      <div className="min-w-0">
        {rating ? (
          <div className="flex items-center gap-1 leading-tight">
            <StarSolid className="w-3.5 h-3.5 text-amber" />
            <span className="font-extrabold text-brand text-sm tabular-nums">
              {rating}
            </span>
            <span className="text-slate-400 text-xs">· {title}</span>
          </div>
        ) : (
          <p className="font-bold text-brand text-sm leading-tight truncate">
            {title}
          </p>
        )}
        <p className="text-slate-400 text-[11px] mt-0.5 leading-tight truncate">
          {sub}
        </p>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="bg-surface border-y border-slate-200 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* Review platforms */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-shrink-0 sm:max-w-[12rem]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1">
              Reviewed everywhere
            </p>
            <p className="text-brand font-bold text-sm leading-snug">
              4.9 stars across every platform that matters.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {reviews.map((r) => (
              <CertCard key={r.title} {...r} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200" />

        {/* Trade certifications */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-shrink-0 sm:max-w-[12rem]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-1">
              Certified to code
            </p>
            <p className="text-brand font-bold text-sm leading-snug">
              Held to the national standard for chimney safety.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {certs.map((c) => (
              <CertCard key={c.title} {...c} />
            ))}
            {/* Filler: licensed & insured + 24/7 dispatch */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3.5 py-3 hover:border-accent/40 hover:shadow-[0_6px_22px_rgba(249,115,22,0.08)] transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center flex-shrink-0">
                <span className="text-amber font-extrabold text-[10px] tracking-wider">
                  L&amp;I
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-brand text-sm leading-tight truncate">
                  Licensed &amp; Insured
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5 leading-tight truncate">
                  Every state we serve
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3.5 py-3 hover:border-accent/40 hover:shadow-[0_6px_22px_rgba(249,115,22,0.08)] transition-all">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-extrabold text-[10px] tracking-wider">
                  24/7
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-brand text-sm leading-tight truncate">
                  24/7 Dispatch
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5 leading-tight truncate">
                  Same-day available
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3.5 py-3 hover:border-accent/40 hover:shadow-[0_6px_22px_rgba(249,115,22,0.08)] transition-all">
              <div className="w-10 h-10 rounded-lg bg-amber/15 flex items-center justify-center flex-shrink-0">
                <span className="text-amber font-extrabold text-[10px] tracking-wider">
                  15Y
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-brand text-sm leading-tight truncate">
                  15+ Years
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5 leading-tight truncate">
                  Of certified service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
