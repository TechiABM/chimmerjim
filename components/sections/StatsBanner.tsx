import { Flame, Clock, MapPin, Users } from "lucide-react";

const stats = [
  { value: "50,000+", label: "Chimneys cleaned & repaired", icon: Flame },
  { value: "15+",     label: "Years of certified service",  icon: Clock },
  { value: "23",      label: "US metros served daily",      icon: MapPin },
  { value: "500+",    label: "5-star verified reviews",     icon: Users },
];

export default function StatsBanner() {
  return (
    <section className="relative bg-brand-dark text-white py-12 sm:py-14 overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Accent edges */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`text-center md:text-left md:px-6 ${
                  i > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <Icon size={20} className="text-accent mx-auto md:mx-0 mb-2.5" />
                <div className="text-3xl sm:text-4xl md:text-[2.5rem] font-extrabold text-white leading-none tracking-tight tabular-nums">
                  {s.value}
                </div>
                <div className="text-white/50 text-xs sm:text-sm mt-2 leading-snug">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
