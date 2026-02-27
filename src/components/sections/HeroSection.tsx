import Link from "next/link";
import { RESORT } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-gold-950 via-gold-900 to-[#1A0E00]">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-400/[0.07] blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-300/[0.05] blur-2xl" />
      </div>

      {/* Rotating ring */}
      <div
        className="pointer-events-none absolute w-[520px] h-[520px] rounded-full border border-gold-400/15 animate-rotateSlow"
        style={{ top: "50%", left: "50%", marginTop: "-260px", marginLeft: "-260px" }}
      />
      <div
        className="pointer-events-none absolute w-[720px] h-[720px] rounded-full border border-gold-400/[0.06]"
        style={{ top: "50%", left: "50%", marginTop: "-360px", marginLeft: "-360px" }}
      />

      {/* Diamond ornaments */}
      <div className="pointer-events-none absolute top-20 right-[10%] w-36 h-36 border border-gold-400/10 rotate-45" />
      <div className="pointer-events-none absolute bottom-24 left-[8%] w-20 h-20 border border-gold-400/10 rotate-45" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl animate-fadeUp">
        {/* Pre-title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-cormorant text-[12px] tracking-[4px] uppercase text-gold-400 italic">
            Est. Sitamarhi, Bihar
          </span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        {/* Title */}
        <h1 className="shimmer-text font-playfair leading-[1.08] mb-4" style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)" }}>
          {RESORT.name}
        </h1>

        {/* Taglines */}
        <p className="font-cormorant text-white/75 italic mb-2" style={{ fontSize: "clamp(1.1rem,3vw,1.6rem)" }}>
          &ldquo;{RESORT.tagline}&rdquo;
        </p>
        <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-white/35 mb-12">
          {RESORT.taglineEn}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects-services"
            className="inline-flex items-center px-10 py-4 text-[12px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)]"
          >
            Explore Services
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-10 py-4 text-[12px] font-montserrat font-semibold tracking-widest uppercase border border-white/30 text-white/80 transition-all duration-300 hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-montserrat text-[9px] tracking-[3px] uppercase text-white/30">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold-400 to-transparent" />
      </div>
    </section>
  );
}
