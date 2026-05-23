import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David M.",
    location: "Houston, TX",
    stars: 5,
    text: "ChimmerJim was at my house within 24 hours. They cleaned the full flue, found a cracked tile I didn't know about, and gave me a clear repair quote. Professional from start to finish.",
  },
  {
    name: "Sarah K.",
    location: "Washington, DC",
    stars: 5,
    text: "Used them for a Level 2 inspection before closing on our home. The report was detailed with photos and the inspector was patient explaining everything. Highly recommend.",
  },
  {
    name: "Mike T.",
    location: "Chicago, IL",
    stars: 5,
    text: "Fast, clean, and honest. No upsells, no scare tactics — just a thorough sweep and a real inspection. The price matched the quote exactly. Will use every year.",
  },
  {
    name: "Jennifer L.",
    location: "Austin, TX",
    stars: 5,
    text: "My gas fireplace had a pilot light issue. ChimmerJim diagnosed it immediately, replaced the thermocouple, and had it working the same visit. Great service.",
  },
  {
    name: "Robert W.",
    location: "Boston, MA",
    stars: 5,
    text: "Crown was cracked and leaking water into the firebox. They repaired it in one afternoon and applied waterproofing. Two years later, still no leaks.",
  },
  {
    name: "Angela R.",
    location: "Seattle, WA",
    stars: 5,
    text: "I scheduled a dryer vent cleaning after noticing clothes taking forever to dry. After ChimmerJim came out, the difference was immediate. Should have done this years ago.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-3">
            What Homeowners Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[1,2,3,4,5].map((n) => (
              <Star key={n} size={20} className="text-amber fill-amber" />
            ))}
            <span className="ml-2 font-bold text-brand">4.9</span>
            <span className="text-slate-400 text-sm">· 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              {/* Quote mark */}
              <div className="text-[3.5rem] text-accent/25 font-serif leading-none select-none mb-1">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={15} className="text-amber fill-amber" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-brand text-sm leading-tight">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
