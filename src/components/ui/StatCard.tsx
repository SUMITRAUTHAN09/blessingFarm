interface StatCardProps {
  num: string;
  label: string;
}

export function StatCard({ num, label }: StatCardProps) {
  return (
    <div className="text-center px-6 border-r border-gold-400/15 last:border-r-0">
      <p className="shimmer-text font-playfair text-5xl font-bold mb-2">{num}</p>
      <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-white/50">{label}</p>
    </div>
  );
}
