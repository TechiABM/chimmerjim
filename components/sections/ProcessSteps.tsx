import { Phone, Calendar, Wrench, ShieldCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Phone,
    title: "Call Us",
    desc: "Reach a real ChimmerJim coordinator. Describe the issue or service you need. We'll quote price ranges over the phone before scheduling.",
  },
  {
    n: "02",
    icon: Calendar,
    title: "Same-Day or Next-Day Visit",
    desc: "We hold open slots every day for fast scheduling. Most homes get a tech on-site within 24 hours of the first call.",
  },
  {
    n: "03",
    icon: Wrench,
    title: "Camera Diagnose & Quote",
    desc: "An NFPA-certified tech runs a full camera inspection, walks you through findings, and prints a clear, line-item written quote on the spot.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Repair, Clean, & Verify",
    desc: "Work is done with HEPA containment and code-compliant materials, then verified with a post-job camera check. Warranties documented in writing.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-amber text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            <span className="w-8 h-px bg-amber" />
            How It Works
            <span className="w-8 h-px bg-amber" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand mb-3 tracking-tight">
            From Phone Call to Clean Chimney in 4 Steps
          </h2>
          <p className="text-slate-500 leading-relaxed">
            No mystery, no upsells. Every ChimmerJim job follows the same calm,
            documented process — so you know exactly what's happening at every step.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="relative text-center">
                  {/* Number ring */}
                  <div className="relative inline-flex items-center justify-center mb-5">
                    <div className="absolute inset-0 bg-accent/15 rounded-full blur-xl" />
                    <div className="relative w-[5.25rem] h-[5.25rem] rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-[0_8px_28px_rgba(15,37,64,0.08)]">
                      <Icon size={26} className="text-brand" strokeWidth={1.8} />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-[11px] font-extrabold w-7 h-7 rounded-full flex items-center justify-center shadow-lg tabular-nums">
                      {s.n}
                    </span>
                  </div>

                  <h3 className="font-bold text-brand text-base sm:text-lg mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[18rem] mx-auto">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
