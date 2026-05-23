import { Shield, Clock, DollarSign, Star, Award, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "NFPA 211 Certified",
    desc: "Our technicians are certified to the NFPA 211 standard — the national code for chimney safety.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Fully licensed and insured in every state we serve. Your home is protected on every visit.",
  },
  {
    icon: Clock,
    title: "Same-Day & Next-Day",
    desc: "We keep slots open for urgent calls. Most customers get an appointment within 24 hours.",
  },
  {
    icon: DollarSign,
    title: "Upfront, Flat Pricing",
    desc: "No surprise invoices. You receive a written quote before any work begins.",
  },
  {
    icon: Star,
    title: "4.9-Star Rated",
    desc: "Over 500 verified reviews from homeowners across our 23 service markets.",
  },
  {
    icon: MapPin,
    title: "Local Technicians",
    desc: "Real neighborhood technicians who know your area's climate and home styles.",
  },
];

interface WhyChooseUsProps {
  heading?: string;
}

export default function WhyChooseUs({ heading = "Why Homeowners Choose ChimmerJim" }: WhyChooseUsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-3">{heading}</h2>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
            50,000+ families have trusted ChimmerJim for safe, clean chimneys.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(249,115,22,0.09)] transition-all duration-200 overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-12 h-12 bg-slate-100 group-hover:bg-accent/10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200">
                <r.icon size={22} className="text-brand group-hover:text-accent transition-colors duration-200" />
              </div>
              <h3 className="font-semibold text-brand mb-2 group-hover:text-accent transition-colors duration-200">
                {r.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
