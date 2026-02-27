import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServicesPreview() {
  const preview = SERVICES.slice(0, 6);
  return (
    <section className="py-24 px-6 bg-gold-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="What We Offer"
          title={<>Our <span className="text-gold-400">Premium</span> Services</>}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} features={s.features} highlight={s.highlight} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            href="/projects-services"
            className="inline-flex items-center px-10 py-4 text-[12px] font-montserrat font-semibold tracking-widest uppercase bg-gradient-to-r from-gold-700 via-gold-400 to-gold-300 text-gold-950 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
