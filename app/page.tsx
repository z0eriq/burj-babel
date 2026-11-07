import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HeroSection } from "@/components/home/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import { QuickContact } from "@/components/home/quick-contact";
import { SpecialtiesSection } from "@/components/home/specialties-section";
import { WhyUsSection } from "@/components/home/why-us-section";
import { StatsGrid } from "@/components/stats-grid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 lg:-mt-16">
        <div className="container-page">
          <StatsGrid />
        </div>
      </div>
      <AboutPreview />
      <SpecialtiesSection />
      <WhyUsSection />
      <FeaturedProducts />
      <PartnersSection />
      <QuickContact />
    </>
  );
}
