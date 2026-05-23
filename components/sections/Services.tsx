import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Search,
  Wrench,
  Wind,
  Layers,
  Home,
  Droplets,
  Flame,
  Zap,
  Hammer,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data/services";

const iconMap: Record<string, LucideIcon> = {
  "chimney-cleaning": Sparkles,
  "chimney-inspection": Search,
  "chimney-repair": Wrench,
  "chimney-sweep": Wind,
  "chimney-relining": Layers,
  "chimney-cap-installation": Home,
  "chimney-waterproofing": Droplets,
  "fireplace-repair": Flame,
  "dryer-vent-cleaning": Zap,
  "masonry-repair": Hammer,
  "gas-fireplace-service": Gauge,
};

interface ServicesProps {
  metroSlug?: string;
  heading?: string;
  subheading?: string;
  limit?: number;
  /** When true, renders only the cards grid — no section wrapper, no heading. */
  bare?: boolean;
}

export default function Services({
  metroSlug,
  heading = "Our Chimney Services",
  subheading = "Professional, NFPA-certified service for every chimney need.",
  limit,
  bare = false,
}: ServicesProps) {
  const list = limit ? services.slice(0, limit) : services;

  if (bare) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((s) => {
          const href = metroSlug ? `/${metroSlug}/${s.slug}` : `/services/${s.slug}`;
          const Icon = iconMap[s.slug] ?? Wrench;
          return (
            <Link
              key={s.slug}
              href={href}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 flex flex-col transition-all duration-200 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(249,115,22,0.11)] hover:-translate-y-0.5"
            >
              <span className="absolute top-4 right-4 text-[11px] font-semibold text-accent bg-orange-50 border border-accent/20 px-2 py-0.5 rounded-full leading-5">
                {s.priceRange}
              </span>
              <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center mb-4 transition-colors duration-200 flex-shrink-0">
                <Icon
                  size={21}
                  className="text-brand group-hover:text-accent transition-colors duration-200"
                />
              </div>
              <h3 className="font-semibold text-brand text-base mb-1.5 group-hover:text-accent transition-colors pr-20">
                {s.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                {s.tagline}
              </p>
              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                Learn more
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-150"
                />
              </span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-3">{heading}</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((s) => {
            const href = metroSlug ? `/${metroSlug}/${s.slug}` : `/services/${s.slug}`;
            const Icon = iconMap[s.slug] ?? Wrench;
            return (
              <Link
                key={s.slug}
                href={href}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 flex flex-col transition-all duration-200 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(249,115,22,0.11)] hover:-translate-y-0.5"
              >
                {/* Icon box */}
                <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-orange-50 flex items-center justify-center mb-4 transition-colors duration-200 flex-shrink-0">
                  <Icon
                    size={21}
                    className="text-brand group-hover:text-accent transition-colors duration-200"
                  />
                </div>

                <h3 className="font-semibold text-brand text-base mb-1.5 group-hover:text-accent transition-colors pr-20">
                  {s.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                  {s.tagline}
                </p>

                <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-150"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
