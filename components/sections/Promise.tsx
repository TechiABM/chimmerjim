import Image from "next/image";
import { ShieldCheck, DollarSign, FileCheck, ThumbsUp } from "lucide-react";

const promises = [
  {
    icon: DollarSign,
    title: "Upfront flat pricing",
    desc: "Written quote before any work starts. No add-ons, no surprise line items, no hourly meters running.",
  },
  {
    icon: FileCheck,
    title: "Written camera report",
    desc: "Every job ends with documented findings, photos, and the work performed — emailed within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "2-year workmanship warranty",
    desc: "All masonry, crown, and liner work is backed for two years. Liner installs carry a five-year warranty.",
  },
  {
    icon: ThumbsUp,
    title: "Not satisfied? We come back.",
    desc: "If something isn't right within 30 days, the same tech returns at no charge to make it right.",
  },
];

export default function OurPromise() {
  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Image panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_-15px_rgba(15,37,64,0.25)]">
              <Image
                src="/photos/chimney-liner-install.jpeg"
                alt="ChimmerJim technician installing a stainless steel chimney liner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent" />

              {/* Badge: floating in image */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-brand text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                <ShieldCheck size={13} className="text-accent" />
                The ChimmerJim Promise
              </div>

              {/* Caption: bottom */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/70 font-semibold mb-1">
                  In writing — on every job
                </p>
                <p className="font-bold text-lg leading-tight">
                  Documented. Warrantied. Backed by 50,000+ completed jobs.
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              aria-hidden
              className="hidden lg:block absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-3xl -z-10"
            />
            <div
              aria-hidden
              className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 border-2 border-accent/20 rounded-3xl -z-10"
            />
          </div>

          {/* Copy panel */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-amber text-xs font-semibold uppercase tracking-[0.18em] mb-3">
              <span className="w-8 h-px bg-amber" />
              Our Guarantee
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand mb-4 tracking-tight leading-[1.1]">
              Four promises every customer gets &mdash;{" "}
              <span className="text-accent">in writing</span>.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-9 max-w-2xl">
              ChimmerJim is built on competence — not theatrics. We don't use scare
              tactics or upsell scripts. Every customer in every metro gets the same
              calm, documented commitment.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {promises.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-brand text-base mb-1.5 tracking-tight">
                          {p.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
