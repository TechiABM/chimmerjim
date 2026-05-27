import Image from "next/image";
import { Phone, Shield } from "lucide-react";

interface AdsHeaderProps {
  phone: string;
  phoneDisplay: string;
}

export default function AdsHeader({ phone, phoneDisplay }: AdsHeaderProps) {
  return (
    <header className="bg-brand text-white py-3 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Image
          src="/logo.webp"
          alt="ChimmerJim"
          width={140}
          height={37}
          className="brightness-0 invert"
          priority
        />
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden sm:flex items-center gap-1 text-white/80">
            <Shield size={14} className="text-amber" />
            Licensed &amp; Insured
          </span>
          <a
            href={`tel:+1${phone}`}
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <Phone size={15} />
            {phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
