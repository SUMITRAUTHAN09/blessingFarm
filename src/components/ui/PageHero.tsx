import type { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-950 to-gold-900 pt-40 pb-20 px-6 text-center">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-[50%] border border-gold-400/[0.08]" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="font-montserrat text-[10px] font-semibold tracking-[4px] uppercase text-gold-400 mb-4">
          {label}
        </p>
        <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-6" />
        <h1 className="font-playfair text-5xl md:text-6xl text-white leading-tight mb-5">{title}</h1>
        {subtitle && (
          <p className="font-cormorant text-xl italic text-white/60 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
