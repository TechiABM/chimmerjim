import Link from "next/link";
import { Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PHONE = "8005553900";
const PHONE_DISPLAY = "(800) 555-3900";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20 px-4 bg-surface">
        <div className="max-w-md text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-3xl font-bold text-brand mb-3">Page Not Found</h1>
          <p className="text-slate-600 mb-8">
            That page doesn't exist — but we can help you find what you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="bg-brand text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-dark transition-colors">
              Go to Homepage
            </Link>
            <a href={`tel:+1${PHONE}`} className="flex items-center justify-center gap-2 bg-accent text-white font-semibold px-5 py-3 rounded-xl hover:bg-accent-dark transition-colors">
              <Phone size={16} />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
