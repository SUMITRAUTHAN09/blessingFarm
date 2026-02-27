import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gold-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Testimonials"
          title={<>What Our <span className="text-gold-400">Guests Say</span></>}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} quote={t.quote} name={t.name} event={t.event} />
          ))}
        </div>
      </div>
    </section>
  );
}
