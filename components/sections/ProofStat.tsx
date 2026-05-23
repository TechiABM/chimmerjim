interface ProofStatProps {
  stat: string;
}

export default function ProofStat({ stat }: ProofStatProps) {
  return (
    <section className="bg-white border-b border-slate-100 py-10 px-4">
      <div className="max-w-2xl mx-auto flex items-center gap-4 justify-center">
        <div className="w-1.5 h-14 rounded-full bg-accent flex-shrink-0" />
        <p className="m-0 text-lg font-semibold text-brand leading-snug">
          {stat}
        </p>
      </div>
    </section>
  );
}
