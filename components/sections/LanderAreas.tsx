import { MapPin } from "lucide-react";

interface LanderAreasProps {
  cities: string[];
  metroLabel: string;
}

export default function LanderAreas({ cities, metroLabel }: LanderAreasProps) {
  if (!cities?.length) return null;

  return (
    <section className="bg-white py-12 sm:py-14 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 mb-3">
          <MapPin size={20} className="text-accent" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-brand mb-2 tracking-tight">
          Local techs across {metroLabel}
        </h2>
        <p className="text-slate-500 text-sm mb-7 max-w-md mx-auto leading-relaxed">
          Real ChimmerJim crews dispatched daily to these neighborhoods.
          If you don&apos;t see yours, call &mdash; we probably cover it.
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {cities.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 bg-surface border border-slate-200 rounded-full px-3.5 py-1.5 text-sm text-brand font-medium"
            >
              <MapPin size={11} className="text-accent flex-shrink-0" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
