"use client";

import { Phone } from "lucide-react";

interface StickyMobileCTAProps {
  phone: string;
  phoneDisplay: string;
}

export default function StickyMobileCTA({ phone, phoneDisplay }: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 p-3 shadow-2xl">
      <a
        href={`tel:+1${phone}`}
        className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-xl w-full text-base transition-colors"
      >
        <Phone size={18} />
        Call Now — {phoneDisplay}
      </a>
    </div>
  );
}
