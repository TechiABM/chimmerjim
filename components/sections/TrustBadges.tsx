import { Shield, Award, Clock, Star } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed & Insured",   sub: "All states we serve" },
  { icon: Award,  label: "NFPA 211 Certified",   sub: "CSIA-trained technicians" },
  { icon: Star,   label: "4.9 Stars",             sub: "500+ verified reviews" },
  { icon: Clock,  label: "Same-Day Available",    sub: "Call for scheduling" },
];

export default function TrustBadges() {
  return (
    <section className="bg-brand-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className={`flex items-center gap-3 px-4 py-2 ${i === 0 ? "pl-0" : ""}`}
            >
              <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                <b.icon size={17} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white leading-tight">{b.label}</p>
                <p className="text-xs text-white/60 mt-0.5">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
