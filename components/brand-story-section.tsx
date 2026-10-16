import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BrandStorySection() {
  return (
    <section id="our-story" aria-labelledby="story-title" className="grid bg-[#eee3d7] md:grid-cols-2">
      <div className="relative min-h-[420px] md:min-h-[640px]">
        <Image alt="IMZA tailoring in a sunlit Moroccan courtyard" className="object-cover object-[65%_center]" fill sizes="(max-width: 768px) 100vw, 50vw" src="/imza-hero.png" />
      </div>
      <div className="flex items-center px-8 py-16 sm:px-14 lg:px-24 lg:py-24">
        <div className="max-w-lg">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b7167]">Made with intention</p>
          <h2 id="story-title" className="mt-4 font-serif text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.95] tracking-[-0.05em]">The art of<br />showing up.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#735c57]">A modern wardrobe foundation, shaped by thoughtful tailoring and the quiet confidence of a perfect fit. Designed in Morocco for wherever you are going.</p>
          <a href="#services" className="mt-8 inline-flex items-center gap-4 border-b border-primary pb-3 text-[0.66rem] font-bold uppercase tracking-[0.17em] no-underline">Our approach <ArrowRight aria-hidden="true" className="size-4" /></a>
        </div>
      </div>
    </section>
  );
}
