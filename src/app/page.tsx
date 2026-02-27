import { AboutPreview } from "@/components/sections/AboutPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FeatureStrip } from "@/components/sections/FeatureStrip";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImageSlider } from "@/components/sections/ImagSlider";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GALLERY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <AboutPreview />
      <ServicesPreview />
      <StatsSection />
      <ImageSlider images={GALLERY} title="Our Gallery"/>
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
