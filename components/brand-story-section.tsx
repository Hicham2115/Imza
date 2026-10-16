import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BrandStorySection() {
  return (
    <section id="our-story" aria-labelledby="story-title" className="bg-[#f6efe6] text-primary md:grid md:min-h-[680px] md:grid-cols-[1.08fr_0.92fr]">
      <div className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] md:min-h-[680px]">
        <picture className="absolute inset-0">
          <source
            media="(max-width: 767px)"
            srcSet="/imza-story-sage-mobile.png"
          />
          <Image
          alt="Une femme portant le tailleur sauge IMZA, confectionné au Maroc"
          className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
            fill
            sizes="(max-width: 767px) 100vw, 54vw"
            src="/imza-story-sage-desktop.png"
          />
        </picture>
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#210b10]/55 to-transparent" />
        <p className="absolute bottom-6 left-6 m-0 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#f6efe6]/90 sm:bottom-8 sm:left-8">
          IMZA · Confectionné au Maroc
        </p>
      </div>

      <div className="relative flex items-center px-7 py-16 sm:px-12 sm:py-20 lg:px-[clamp(3rem,7vw,7.5rem)]">
        <span aria-hidden="true" className="absolute bottom-10 left-0 top-10 hidden w-px bg-[#c9a15b]/75 md:block" />
        <div className="max-w-xl">
          <p className="m-0 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#8b7167]">
            <span aria-hidden="true" className="h-px w-7 bg-[#c9a15b] md:hidden" />
            Pensé avec intention
          </p>
          <h2 id="story-title" className="mb-0 mt-6 max-w-[10ch] font-serif text-[clamp(3.5rem,5.8vw,6rem)] font-normal leading-[0.9] tracking-[-0.055em] text-primary max-sm:mt-4">
            L’art de <em className="font-normal text-[#9a7047]">s’affirmer.</em>
          </h2>
          <p className="mb-0 mt-7 max-w-[27rem] text-[0.9rem] leading-[1.85] tracking-[0.01em] text-[#4d3432] sm:text-base">
            Une pièce essentielle et moderne, façonnée avec soin pour vous offrir une allure juste et une confiance sereine. Imaginée au Maroc, pour vous accompagner partout.
          </p>

          <div className="mt-9 grid max-w-md grid-cols-2 border-y border-[#d6c7b7] py-4">
            <p className="m-0 pr-4 text-[0.6rem] font-semibold uppercase leading-[1.7] tracking-[0.17em] text-[#8b7167]">
              Confectionné<br />avec soin
            </p>
            <p className="m-0 border-l border-[#d6c7b7] pl-5 text-[0.6rem] font-semibold uppercase leading-[1.7] tracking-[0.17em] text-[#8b7167]">
              Fabriqué<br />au Maroc
            </p>
          </div>

          <a href="#signature-suit" className="story-approach-link store-button group relative mt-8 inline-flex min-h-11 items-center gap-4 border-b border-[#c9a15b] px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary no-underline">
            Découvrez notre approche
            <ArrowRight aria-hidden="true" className="size-4 text-[#e6c38c] transition-transform duration-300 group-hover:translate-x-1" />
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-48 origin-left scale-x-50 bg-[#c9a15b] transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
      </div>
    </section>
  );
}
