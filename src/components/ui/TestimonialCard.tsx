import { GoldDivider } from "@/components/ui/GoldDivider";

interface TestimonialCardProps {
  quote: string;
  name: string;
  event: string;
}

export function TestimonialCard({ quote, name, event }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-gold-950 to-gold-900 border border-gold-400/25 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,168,76,0.2)]">
      <p className="font-cormorant text-5xl text-gold-400 leading-none mb-4">"</p>
      <p className="font-cormorant text-lg italic text-white/85 leading-relaxed mb-6">{quote}</p>
      <GoldDivider className="mb-5" />
      <p className="font-montserrat text-sm font-semibold text-gold-400">{name}</p>
      <p className="font-montserrat text-[10px] tracking-widest uppercase text-white/40 mt-1">{event}</p>
    </div>
  );
}
