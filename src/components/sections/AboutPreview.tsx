import Link from "next/link";
import { RESORT } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function AboutPreview() {
  return (
    <section className="dot-pattern py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Text */}
        <div>
          <SectionHeader
            label="Welcome to"
            title={<>Where Memories<br /><span className="text-gold-400">Are Crafted</span></>}
            center={false}
            className="mb-6"
          />
          <p className="font-cormorant text-xl leading-relaxed text-gold-800 mb-4">
            Nestled near Ramnagra Rice Mill on Sonbarsa Road, Sitamarhi,{" "}
            <strong className="text-gold-600">Blessing Farm &amp; Resort</strong> is
            Sitamarhi&apos;s premier destination for grand celebrations and cherished gatherings.
          </p>
          <p className="font-montserrat text-sm leading-[1.9] text-gold-700 mb-10">
            From intimate family functions to grand weddings, we offer world-class hospitality
            with the warmth of our cultural heritage — making every event an unforgettable memory
            etched in the hearts of all who attend.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-3.5 text-[11px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
          >
            Our Story
          </Link>
        </div>

        {/* Quote card */}
        <div className="relative bg-gradient-to-br from-gold-950 to-gold-900 p-12 overflow-hidden">
          <div className="absolute inset-4 border border-gold-400/15 pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-gold-400/10" />
          <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full border border-gold-400/[0.08]" />

          <p className="font-cormorant text-7xl text-gold-400 leading-none mb-4">&ldquo;</p>
          <p className="font-cormorant text-2xl text-white/90 italic leading-relaxed mb-4">{RESORT.tagline}</p>
          <p className="font-cormorant text-lg text-white/55 italic leading-relaxed mb-6">— {RESORT.taglineEn}</p>
          <GoldDivider className="mb-5" />
          <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-gold-400">{RESORT.name}</p>
        </div>
      </div>
    </section>
  );
}
