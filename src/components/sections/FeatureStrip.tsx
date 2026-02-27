import { FEATURES } from "@/lib/constants";

export function FeatureStrip() {
  return (
    <section className="bg-gradient-to-r from-gold-950 to-gold-900 border-t border-b border-gold-400/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-gold-400/10">
          {FEATURES.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-3 px-6 py-6 group">
              <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
              <span className="font-montserrat text-[11px] font-semibold tracking-[2px] uppercase text-gold-400">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
