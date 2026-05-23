import { Phone, Calendar, Wrench, ShieldCheck, type LucideIcon } from "lucide-react";

interface LanderProcessStep {
  title: string;
  desc: string;
}

interface LanderProcessProps {
  /** 3-5 steps that map call → diagnose → quote → repair. */
  steps?: LanderProcessStep[];
  heading?: string;
}

const DEFAULT_STEPS: LanderProcessStep[] = [
  { title: "You call",      desc: "Real technician picks up. We confirm the issue and lock in a same-day or next-day slot." },
  { title: "We diagnose",   desc: "On-site camera inspection. We show you exactly what's wrong before any work begins." },
  { title: "Written quote", desc: "Flat-rate, line-itemed estimate. No hourly meter, no surprise add-ons." },
  { title: "We fix it",     desc: "Repair with code-compliant materials, then verify with a post-job camera check." },
];

const STEP_ICONS: LucideIcon[] = [Phone, Calendar, Wrench, ShieldCheck];

export default function LanderProcess({
  steps = DEFAULT_STEPS,
  heading = "What happens when you call",
}: LanderProcessProps) {
  if (!steps?.length) return null;

  return (
    <section className="bg-surface py-12 sm:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-brand mb-8 text-center tracking-tight">
          {heading}
        </h2>

        <ol className="relative space-y-4">
          {/* Vertical connector line */}
          <span
            aria-hidden
            className="absolute left-[1.125rem] top-3 bottom-3 w-px bg-accent/20"
          />

          {steps.map((s, i) => {
            const Icon = STEP_ICONS[i] ?? Wrench;
            return (
              <li
                key={s.title}
                className="relative flex items-start gap-4 bg-white border border-slate-200 rounded-xl px-4 py-3.5 shadow-sm"
              >
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                  <Icon size={16} strokeWidth={2} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-extrabold flex items-center justify-center tabular-nums">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-brand text-sm mb-0.5">{s.title}</p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
