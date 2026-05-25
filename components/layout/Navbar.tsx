"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Chimney Cleaning", href: "/services/chimney-cleaning" },
  { label: "Chimney Inspection", href: "/services/chimney-inspection" },
  { label: "Chimney Repair", href: "/services/chimney-repair" },
  { label: "Chimney Relining", href: "/services/chimney-relining" },
  { label: "Masonry Repair", href: "/services/masonry-repair" },
  { label: "Gas Fireplace Service", href: "/services/gas-fireplace-service" },
  { label: "Dryer Vent Cleaning", href: "/services/dryer-vent-cleaning" },
];

interface NavbarProps {
  phone?: string;
  phoneDisplay?: string;
}

export default function Navbar({ phone = "8005553900", phoneDisplay = "(800) 555-3900" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-brand text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="ChimmerJim — home">
            <Image
              src="/logo.webp" unoptimized
              alt="ChimmerJim"
              width={154}
              height={41}
              className="brightness-0 invert transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-amber transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              >
                Services <ChevronDown size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-brand rounded-lg shadow-xl py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm hover:bg-surface hover:text-accent transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/washington-dc" className="hover:text-amber transition-colors">Locations</Link>
            <Link href="/#about" className="hover:text-amber transition-colors">About</Link>
            <Link href="/#faq" className="hover:text-amber transition-colors">FAQ</Link>
          </nav>

          {/* Phone CTA */}
          <a
            href={`tel:+1${phone}`}
            data-dni="primary-phone"
            data-dni-href="primary-phone"
            className="hidden md:flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <Phone size={16} />
            <span data-dni="primary-phone" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: phoneDisplay }} />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <a
              href={`tel:+1${phone}`}
              data-dni="primary-phone"
              data-dni-href="primary-phone"
              className="flex items-center gap-2 bg-accent text-white font-semibold px-4 py-3 rounded-lg w-full justify-center mb-4"
            >
              <Phone size={16} />
              Call <span data-dni="primary-phone" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: phoneDisplay }} />
            </a>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2 rounded hover:bg-white/10 text-sm"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <Link href="/washington-dc" className="block px-3 py-2 rounded hover:bg-white/10 text-sm" onClick={() => setOpen(false)}>
              Locations
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
