import { Phone, AlertTriangle, Clock3 } from "lucide-react";

interface EmergencyBarProps {
  phone: string;
  phoneDisplay: string;
}

export default function EmergencyBar({ phone, phoneDisplay }: EmergencyBarProps) {
  return (
    <section className="relative py-10 overflow-hidden bg-brick text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_80%_30%,rgba(249,115,22,0.35),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(255,255,255,0.5) 14px, rgba(255,255,255,0.5) 16px)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber/70 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start md:items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
              <AlertTriangle size={22} className="text-amber" strokeWidth={2.25} />
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber text-[11px] font-bold uppercase tracking-[0.18em] mb-1">
                <Clock3 size={12} />
                24/7 Emergency Response
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                Smell smoke? Water in the firebox? Don't wait.
              </h3>
              <p className="text-white/80 text-sm mt-1 max-w-2xl">
                Chimney fires double in size every 60 seconds. Call now for emergency
                inspection — average dispatch under 90 minutes in our service metros.
              </p>
            </div>
          </div>

          <a
            href={`tel:+1${phone}`}
            data-dni="emergency-phone"
            data-dni-href="emergency-phone"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 bg-white hover:bg-cream text-brick font-extrabold px-6 py-3.5 rounded-xl text-base sm:text-lg transition-all shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-px"
          >
            <Phone size={18} />
            <span data-dni="emergency-phone" className="tabular-nums">{phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
