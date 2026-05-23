import Link from "next/link";
import { MapPin } from "lucide-react";
import { metros } from "@/lib/data/metros";

interface ServiceAreasProps {
  heading?: string;
  highlight?: string;
}

export default function ServiceAreas({ heading = "We Serve 23 Metro Areas", highlight }: ServiceAreasProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <MapPin size={32} className="text-accent mx-auto mb-3" />
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-2">{heading}</h2>
          <p className="text-slate-600 text-sm">
            ChimmerJim operates in 23 major metros across the United States.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {metros.map((m) => (
            <Link
              key={m.slug}
              href={`/${m.slug}`}
              className={`text-center px-3 py-2 rounded-lg text-sm transition-colors ${
                highlight === m.slug
                  ? "bg-accent text-white font-semibold"
                  : "bg-surface hover:bg-brand/5 text-brand hover:text-accent border border-slate-200"
              }`}
            >
              {m.fullName}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
