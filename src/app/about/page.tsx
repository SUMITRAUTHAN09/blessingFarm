import { RESORT, VALUES, CONTACT_INFO } from "@/lib/constants";
import { SectionHeader }  from "@/components/ui/SectionHeader";
import { GoldDivider, GoldLine } from "@/components/ui/GoldDivider";
import { CtaBanner }      from "@/components/sections/CtaBanner";
import { MapPin, Phone, Clock } from "lucide-react";

const ICON_MAP = { Address: MapPin, "Primary Contact": Phone, "Alternate Contact": Phone, Availability: Clock } as const;

const VISION_MISSION = [
  {
    icon: "🌟",
    title: "Our Vision",
    text:  "To be Bihar's most celebrated event venue — a place where families create memories that are passed down through generations, rooted in tradition and elevated by excellence.",
  },
  {
    icon: "🎯",
    title: "Our Mission",
    text:  "To provide exceptional hospitality, world-class facilities, and personalized service that transforms every celebration into an extraordinary, once-in-a-lifetime experience.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-gold-950 to-gold-900 pt-40 pb-20 px-6 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-gold-400/[0.08]" />
        <div className="pointer-events-none absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full border border-gold-400/[0.06]" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="font-montserrat text-[10px] tracking-[4px] uppercase text-gold-400 mb-3">Our Story</p>
            <div className="h-px w-20 bg-gradient-to-r from-gold-400 to-transparent mb-7" />
            <h1 className="font-playfair text-5xl md:text-6xl text-white leading-tight mb-6">
              About <span className="shimmer-text">Blessing Farm</span> &amp; Resort
            </h1>
            <p className="font-cormorant text-xl italic text-white/60 leading-relaxed">
              &ldquo;{RESORT.tagline}&rdquo; — A place where tradition meets elegance, and every
              celebration becomes a treasured legacy.
            </p>
          </div>

          <div className="relative bg-gold-400/[0.06] border border-gold-400/20 p-10">
            <div className="absolute inset-4 border border-gold-400/10 pointer-events-none" />
            <div className="space-y-5">
              {[
                { label: "Location",       value: RESORT.addressShort },
                { label: "Contact Person", value: RESORT.owner },
                { label: "Primary Phone",  value: RESORT.phone1 },
                { label: "Alternate Phone",value: RESORT.phone2 },
              ].map(({ label, value }, i, arr) => (
                <div key={label} className={`pb-5 ${i < arr.length - 1 ? "border-b border-gold-400/10" : ""}`}>
                  <p className="font-montserrat text-[9px] tracking-[3px] uppercase text-gold-400 mb-1.5">{label}</p>
                  <p className="font-cormorant text-lg text-white/80">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="dot-pattern py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {VISION_MISSION.map(({ icon, title, text }) => (
              <div key={title} className="gold-inset-card bg-gold-50 p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(201,168,76,0.12)]">
                <div className="text-4xl mb-5">{icon}</div>
                <h2 className="font-playfair text-2xl text-gold-950 mb-4">{title}</h2>
                <GoldLine className="mb-5" />
                <p className="font-cormorant text-lg leading-relaxed text-gold-800">{text}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <SectionHeader
            label="What We Stand For"
            title={<>Our <span className="text-gold-400">Values</span></>}
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {VALUES.map(({ icon, value, desc }) => (
              <div key={value} className="text-center p-9 bg-gold-100 border border-gold-400/20 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-playfair text-xl text-gold-950 mb-3">{value}</h3>
                <GoldDivider className="w-8 mx-auto mb-3" />
                <p className="font-montserrat text-[12px] text-gold-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Owner ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-gold-950 to-gold-900">
        <div className="max-w-lg mx-auto text-center">
          <SectionHeader label="Leadership" title={<>Meet the <span className="shimmer-text">Host</span></>} light className="mb-14" />

          <div className="relative bg-gold-400/[0.06] border border-gold-400/25 p-14">
            <div className="absolute inset-4 border border-gold-400/10 pointer-events-none" />
            <div className="mx-auto mb-7 w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-4xl animate-pulseGold">
              👨‍💼
            </div>
            <h3 className="font-playfair text-3xl text-white mb-2">{RESORT.owner}</h3>
            <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-gold-400 mb-5">Founder &amp; Host</p>
            <GoldDivider className="mb-6" />
            <p className="font-cormorant text-lg italic text-white/65 leading-relaxed mb-8">
              With deep roots in Sitamarhi and a passion for bringing people together, Mr. Singh founded
              Blessing Farm &amp; Resort to create a space where tradition, elegance, and heartfelt hospitality
              converge for every family that visits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${RESORT.phone1Raw}`}
                className="inline-flex items-center px-8 py-3.5 text-[11px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all hover:brightness-110"
              >
                📞 {RESORT.phone1}
              </a>
              <a
                href={`tel:${RESORT.phone2Raw}`}
                className="inline-flex items-center px-8 py-3.5 text-[11px] font-montserrat font-semibold tracking-widest uppercase border border-white/30 text-white/80 transition-all hover:bg-white/10"
              >
                📞 {RESORT.phone2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-24 px-6 bg-gold-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Find Us" title={<>Our <span className="text-gold-400">Location</span></>} className="mb-14" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact card */}
            <div className="gold-inset-card bg-gold-100 p-12">
              <h3 className="font-playfair text-2xl text-gold-950 mb-8">Get In Touch</h3>
              <div className="space-y-7">
                {CONTACT_INFO.map(({ label, text, href }, i) => {
                  const Icon = label === "Address" ? MapPin : label === "Availability" ? Clock : Phone;
                  return (
                    <div key={label} className={`flex gap-5 ${i < CONTACT_INFO.length - 1 ? "pb-7 border-b border-gold-400/15" : ""}`}>
                      <Icon size={18} className="text-gold-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat text-[9px] tracking-[3px] uppercase text-gold-400 mb-1.5">{label}</p>
                        {href ? (
                          <a href={href} className="font-cormorant text-lg text-gold-800 hover:text-gold-500 transition-colors">{text}</a>
                        ) : (
                          <p className="font-cormorant text-lg text-gold-800 leading-relaxed">{text}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map card + quick book */}
            <div className="flex flex-col">
              <div className="relative bg-gradient-to-br from-gold-950 to-gold-900 flex flex-col items-center justify-center text-center px-10 py-16 overflow-hidden flex-1">
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-gold-400/10" />
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-gold-400/15" />
                <div className="text-5xl mb-5 animate-float">📍</div>
                <h3 className="font-playfair text-2xl text-gold-400 mb-3">Sitamarhi, Bihar</h3>
                <p className="font-montserrat text-[12px] text-white/50 leading-relaxed mb-6">
                  Near Ramnagra Rice Mill<br />Sonbarsa Road, Sitamarhi
                </p>
                <div className="border border-gold-400/30 px-5 py-2.5">
                  <p className="font-montserrat text-[10px] tracking-[3px] uppercase text-gold-400">Blessing Farm &amp; Resort</p>
                </div>
              </div>
              <div className="bg-gold-400 py-8 px-10 text-center">
                <p className="font-playfair text-xl text-gold-950 mb-1">Ready to Book?</p>
                <p className="font-montserrat text-[11px] text-gold-950/60 tracking-wide mb-5">Call us now for instant availability</p>
                <a
                  href={`tel:${RESORT.phone1Raw}`}
                  className="inline-flex items-center px-8 py-3 bg-gold-950 text-gold-400 font-montserrat font-semibold text-[11px] tracking-widest uppercase transition-all hover:bg-gold-900"
                >
                  CALL NOW: {RESORT.phone1}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
