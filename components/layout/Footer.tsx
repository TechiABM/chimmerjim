"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin } from "lucide-react";
import { metros } from "@/lib/data/metros";
import { services } from "@/lib/data/services";

function fmtPhone(digits: string): string {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

interface FooterProps {
  phone?: string;
  phoneDisplay?: string;
}

export default function Footer({ phone = "8005553900", phoneDisplay = "(800) 555-3900" }: FooterProps) {
  const pathname = usePathname();
  const slug = pathname.split("/")[1];
  const metro = metros.find((m) => m.slug === slug);
  const effectivePhone = metro?.phone ?? phone;
  const effectiveDisplay = metro ? fmtPhone(metro.phone) : phoneDisplay;

  const half = Math.ceil(metros.length / 2);
  const col1 = metros.slice(0, half);
  const col2 = metros.slice(half);

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.webp" unoptimized
                alt="ChimmerJim"
                width={180}
                height={48}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm mb-4">
              Your neighborhood chimney experts. NFPA-certified, licensed &amp; insured across 23 metro areas.
            </p>
            <a
              href={`tel:+1${effectivePhone}`}
              data-dni="primary-phone"
              data-dni-href="primary-phone"
              className="flex items-center gap-2 text-accent font-semibold hover:text-amber transition-colors"
            >
              <Phone size={16} />
              <span data-dni="primary-phone" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: effectiveDisplay }} />
            </a>
            <p className="text-white/50 text-xs mt-3">
              Mon–Sat 7am–8pm · Sun 8am–6pm
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-amber mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations col 1 */}
          <div>
            <h3 className="font-semibold text-amber mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {col1.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/${m.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {m.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations col 2 */}
          <div>
            <div aria-hidden="true" className="mb-4 h-[1.375rem]" />
            <ul className="space-y-2">
              {col2.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/${m.slug}`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {m.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} ChimmerJim. All rights reserved. Licensed &amp; Insured.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
