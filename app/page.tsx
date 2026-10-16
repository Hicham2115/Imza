import Header from "@/layout/header";
import Hero from "@/components/hero";
import FAQ from "@/components/faq";
import Reviews from "@/components/reviews";
import Contact from "@/components/contact";
import { BrandValuesSection } from "@/components/brand-values-section";
import { FeaturedSuitSection } from "@/components/featured-suit-section";
import { BrandStorySection } from "@/components/brand-story-section";
import { ServicesSection } from "@/components/services-section";
import { JournalSection } from "@/components/journal-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#f6efe6] text-primary">
        <Hero />
        <BrandValuesSection />
        <FeaturedSuitSection />
        <BrandStorySection />
        <ServicesSection />
        <JournalSection />
        <FAQ />
        <ContactSection />
      </main>
    </>
  );
}
