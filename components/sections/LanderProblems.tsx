import {
  Droplets,
  Wind,
  AlertTriangle,
  Flame,
  Bird,
  Snowflake,
  CloudRain,
  Hammer,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  leak: Droplets,
  smoke: Wind,
  draft: Wind,
  fire: Flame,
  fires: Flame,
  animal: Bird,
  birds: Bird,
  cold: Snowflake,
  rain: CloudRain,
  water: Droplets,
  crack: Hammer,
  masonry: Hammer,
  damage: AlertTriangle,
  default: AlertTriangle,
};

function iconFor(text: string): LucideIcon {
  const t = text.toLowerCase();
  for (const key of Object.keys(ICONS)) {
    if (t.includes(key)) return ICONS[key];
  }
  return ICONS.default;
}

interface LanderProblemsProps {
  /** 6–8 short, search-term-language problem phrases. */
  problems: string[];
  heading?: string;
  subheading?: string;
}

export default function LanderProblems({
  problems,
  heading = "Common chimney problems we fix daily",
  subheading = "If you're searching because something's wrong, you're in the right place. Here's what we see most:",
}: LanderProblemsProps) {
  if (!problems?.length) return null;

  return (
    <section className="bg-white py-12 sm:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-brand mb-2 tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {problems.map((p) => {
            const Icon = iconFor(p);
            return (
              <div
                key={p}
                className="flex items-start gap-3 bg-surface border border-slate-200 rounded-xl px-3.5 py-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                  <Icon size={16} className="text-accent" />
                </div>
                <span className="text-sm text-brand font-medium leading-snug">
                  {p}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
