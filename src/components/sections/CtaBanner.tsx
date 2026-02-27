import { RESORT } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gold-900 to-gold-950 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-400/[0.06]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-gold-400/[0.08]" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-cormorant text-xl text-gold-400 italic mb-3">Plan Your Perfect Celebration</p>
        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-3">Ready to Create Memories?</h2>
        <p className="font-montserrat text-sm text-white/40 mb-10">
          Contact {RESORT.owner} for bookings and inquiries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${RESORT.phone1Raw}`}
            className="inline-flex items-center px-10 py-4 text-[12px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
          >
            📞 {RESORT.phone1}
          </a>
          <a
            href={`tel:${RESORT.phone2Raw}`}
            className="inline-flex items-center px-10 py-4 text-[12px] font-montserrat font-semibold tracking-widest uppercase border border-white/30 text-white/80 transition-all duration-300 hover:bg-white/10"
          >
            📞 {RESORT.phone2}
          </a>
        </div>
      </div>
    </section>
  );
}
