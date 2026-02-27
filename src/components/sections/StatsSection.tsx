import { StatCard } from "@/components/ui/StatCard";
import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-gold-950 to-gold-900 border-t border-b border-gold-400/15">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 sm:text-2xl">
        {STATS.map(({ num, label }) => (
          <StatCard key={label} num={num} label={label} />
        ))}
      </div>
    </section>
  );
}
