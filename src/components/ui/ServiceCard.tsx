import { cn } from "@/lib/utils";
import { GoldLine } from "@/components/ui/GoldDivider";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  features: readonly string[];
  highlight?: boolean;
  className?: string;
}

export function ServiceCard({ icon, title, desc, features, highlight = false, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "relative p-10 transition-all duration-300 hover:-translate-y-2 overflow-hidden",
      highlight
        ? "bg-gradient-to-br from-gold-950 to-gold-900 border border-gold-400/40"
        : "bg-gold-50 border border-gold-400/20 hover:shadow-[0_20px_60px_rgba(201,168,76,0.15)]",
      className,
    )}>
      {highlight && (
        <span className="absolute top-4 right-4 bg-gold-400 text-gold-950 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
          Popular
        </span>
      )}
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className={cn("font-playfair text-xl mb-3", highlight ? "text-white" : "text-gold-950")}>{title}</h3>
      <GoldLine className="mb-4" />
      <p className={cn("text-sm leading-relaxed mb-6", highlight ? "text-white/70" : "text-gold-700")}>{desc}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((f) => (
          <span key={f} className="text-[10px] px-3 py-1 tracking-wide border border-gold-400/30 text-gold-400 bg-gold-400/10">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
