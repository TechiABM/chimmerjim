import Image from "next/image";

const jobs = [
  {
    src: "/photos/crown-rebuild.jpg",
    alt: "Chimney crown rebuild completed by ChimmerJim",
    label: "Crown Rebuild",
    sub: "Cracked crown replaced with water-resistant crown coat",
  },
  {
    src: "/photos/chimney-liner-install.jpeg",
    alt: "Stainless steel chimney liner installation by ChimmerJim",
    label: "Liner Installation",
    sub: "316L stainless flex liner — NFPA 211 compliant",
  },
  {
    src: "/photos/chimney-caps-rusted.jpeg",
    alt: "Rusted chimney cap identified during ChimmerJim inspection",
    label: "Cap Replacement",
    sub: "Rusted galvanized cap swapped for stainless steel",
  },
];

const beforeAfter = {
  before: { src: "/photos/dryer-vent-before.jpeg", alt: "Clogged dryer vent before ChimmerJim cleaning" },
  after:  { src: "/photos/dryer-vent-after.jpeg",  alt: "Clear dryer vent after ChimmerJim cleaning" },
};

export default function OurWork() {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-3">Real Work. Real Results.</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Photos from actual ChimmerJim jobs — no stock imagery.
          </p>
        </div>

        {/* 3-up job photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {jobs.map((j) => (
            <div key={j.label} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={j.src} alt={j.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-brand text-sm">{j.label}</p>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{j.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After — dryer vent */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-2">
            {[beforeAfter.before, beforeAfter.after].map((img, i) => (
              <div key={i} className="relative">
                <div className="relative aspect-[3/2]">
                  <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-brand/40" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${i === 0 ? "bg-slate-700 text-white" : "bg-accent text-white"}`}>
                    {i === 0 ? "Before" : "After"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-5 py-4 border-t border-slate-100">
            <p className="font-semibold text-brand text-sm">Dryer Vent Cleaning</p>
            <p className="text-slate-500 text-xs mt-0.5">Lint-packed duct cleared — reduced drying time by half, eliminated fire risk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
