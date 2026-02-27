import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent", className)} />
  );
}

export function GoldLine({ className }: { className?: string }) {
  return <div className={cn("h-0.5 w-10 bg-gold-400", className)} />;
}
