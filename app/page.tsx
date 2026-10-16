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
import { SignatureSuitCampaign } from "@/components/signature-suit-campaign";
import { IvorySuitCampaign } from "@/components/ivory-suit-campaign";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#f6efe6] text-primary">
        <Hero />
        <BrandValuesSection />
        <FeaturedSuitSection />

        <BrandStorySection />
        <SignatureSuitCampaign />
        <IvorySuitCampaign />
        <Reviews />
        {/* <JournalSection /> */}
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
