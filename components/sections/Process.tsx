interface ProcessStep {
  step: string;
  detail: string;
}

interface ProcessProps {
  steps?: ProcessStep[];
  heading?: string;
}

const defaultSteps: ProcessStep[] = [
  { step: "Book in minutes", detail: "Call or submit online — we confirm your appointment same-day." },
  { step: "Arrival & setup", detail: "Your technician arrives on time and protects your floors before starting." },
  { step: "Inspection first", detail: "We inspect before cleaning so we know exactly what we're dealing with." },
  { step: "Service & clean", detail: "We complete the work and leave your home cleaner than we found it." },
  { step: "Written report", detail: "You receive a detailed report with photos and any follow-up recommendations." },
];

export default function Process({ steps = defaultSteps, heading = "What to Expect" }: ProcessProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-3">{heading}</h2>
          <p className="text-slate-600">Simple, professional, and mess-free from start to finish.</p>
        </div>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {i + 1}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-brand mb-1">{s.step}</h3>
                <p className="text-slate-600 text-sm">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
