import { Phone, CheckCircle } from "lucide-react";

interface CTAProps {
  phone: string;
  phoneDisplay: string;
  heading?: string;
  subheading?: string;
}

export default function CTA({
  phone,
  phoneDisplay,
  heading = "Ready to Schedule Your Service?",
  subheading = "Call now — most customers get an appointment within 24 hours.",
}: CTAProps) {
  return (
    <section id="contact" className="relative bg-brand text-white overflow-hidden">
      {/* Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,#2d5282,transparent)] opacity-60 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Top accent edge */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">{heading}</h2>
        <p className="text-white/65 mb-8 text-lg leading-relaxed max-w-xl mx-auto">{subheading}</p>

        <div className="flex justify-center mb-8">
          <a
            href={`tel:+1${phone}`}
            data-dni="primary-phone"
            data-dni-href="primary-phone"
            className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-[0_0_28px_rgba(249,115,22,0.4)] hover:shadow-[0_0_42px_rgba(249,115,22,0.65)] hover:-translate-y-px"
          >
            <Phone size={20} />
            Call <span data-dni="primary-phone" className="tabular-nums">{phoneDisplay}</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["Free estimates", "Upfront flat pricing", "Licensed & Insured", "NFPA 211 Certified"].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-white/40 text-xs">
              <CheckCircle size={12} className="text-accent/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
