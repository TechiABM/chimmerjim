import {
  Droplets,
  Wind,
  Flame,
  Bird,
  Hammer,
  Snowflake,
  CloudRain,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";

interface Problem {
  icon: LucideIcon;
  text: string;
  hint: string;
}

const problems: Problem[] = [
  { icon: Wind,           text: "Smoke coming back into the room",       hint: "Draft, damper, or flue blockage. Same-day diagnosis." },
  { icon: Droplets,       text: "Water leaking into the firebox",        hint: "Cracked crown, failed flashing, or mortar failure." },
  { icon: Hammer,         text: "Crumbling mortar or loose bricks",      hint: "Tuckpointing, repointing, or partial rebuild." },
  { icon: Bird,           text: "Animal sounds or nesting in the flue",  hint: "Safe removal, then cap installation." },
  { icon: CloudRain,      text: "Strong sooty smell after storms",       hint: "Cap, crown, or liner moisture entry." },
  { icon: Flame,          text: "Hard to start or sustain a fire",       hint: "Draft, creosote buildup, or sizing issue." },
  { icon: AlertTriangle,  text: "Cracked or rusted chimney cap",         hint: "Stainless steel replacement, lifetime warranty." },
  { icon: Snowflake,      text: "Cold downdraft pulling winter air in",  hint: "Damper, cap, or top-sealing solution." },
];

interface CommonProblemsProps {
  heading?: string;
  subheading?: string;
}

export default function CommonProblems({
  heading = "Sound familiar? You're in the right place.",
  subheading = "These are the issues we diagnose every day. If yours is on the list, we can usually be on-site within 24 hours.",
}: CommonProblemsProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-amber text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            <span className="w-8 h-px bg-amber" />
            Common Issues
            <span className="w-8 h-px bg-amber" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand mb-3 tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-500 leading-relaxed">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.text}
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-accent/40 hover:shadow-[0_8px_28px_rgba(249,115,22,0.09)] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 group-hover:bg-accent/15 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <p className="font-bold text-brand text-sm leading-snug mb-2 tracking-tight">
                  {p.text}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {p.hint}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
