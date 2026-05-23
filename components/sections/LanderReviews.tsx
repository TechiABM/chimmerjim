import { Star } from "lucide-react";

interface LanderReview {
  name: string;
  location: string;
  text: string;
}

interface LanderReviewsProps {
  reviews?: LanderReview[];
  heading?: string;
}

const DEFAULT_REVIEWS: LanderReview[] = [
  {
    name: "David M.",
    location: "Verified ChimmerJim customer",
    text: "Tech was here within 24 hours, found a cracked tile I didn't know about, and gave me a clear repair quote in writing. No upsells, no scare tactics.",
  },
  {
    name: "Sarah K.",
    location: "Verified ChimmerJim customer",
    text: "Booked a Level 2 inspection before closing on our home. The report had photos, was delivered same-day, and the inspector explained every finding.",
  },
  {
    name: "Mike T.",
    location: "Verified ChimmerJim customer",
    text: "Price matched the phone quote exactly. Drop cloths, HEPA vacuum, the whole nine. Will use every year.",
  },
];

export default function LanderReviews({
  reviews = DEFAULT_REVIEWS,
  heading = "What real customers say",
}: LanderReviewsProps) {
  if (!reviews?.length) return null;

  return (
    <section className="bg-surface py-12 sm:py-14 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-7 text-center">
          <div className="flex gap-0.5 mb-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={18} className="text-amber fill-amber" />
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-brand mb-1 tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-500 text-sm">
            <span className="font-bold text-brand">4.9</span> &middot; 500+ verified reviews
          </p>
        </div>

        <div className="space-y-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={12} className="text-amber fill-amber" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {r.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand text-xs leading-tight">
                    {r.name}
                  </p>
                  <p className="text-slate-400 text-[11px] leading-tight">
                    {r.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
