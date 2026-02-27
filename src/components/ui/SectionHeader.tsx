import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, center = true, light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      <p className="font-montserrat text-[10px] font-semibold tracking-[4px] uppercase text-gold-400 mb-3">
        {label}
      </p>
      <div className={cn("flex items-center gap-4 mb-4", center && "justify-center")}>
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-gold-400" />
        <span className="text-gold-400 text-base">✦</span>
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-gold-400" />
      </div>
      <h2 className={cn("font-playfair text-4xl md:text-5xl leading-tight", light ? "text-white" : "text-gold-950")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("font-cormorant text-xl italic mt-4 max-w-xl leading-relaxed", center && "mx-auto", light ? "text-white/60" : "text-gold-700")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
