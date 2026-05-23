import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface border-b border-slate-200">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 flex-wrap text-sm text-slate-500">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 hover:text-brand transition-colors">
            <Home size={13} className="flex-shrink-0" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-slate-300 flex-shrink-0" />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-brand transition-colors truncate max-w-[160px]">
                {item.name}
              </Link>
            ) : (
              <span className="text-brand font-medium truncate max-w-[200px]" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
