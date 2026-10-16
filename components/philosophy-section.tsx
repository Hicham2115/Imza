import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PhilosophySection() {
  return (
    <section
      aria-labelledby="philosophy-title"
      className="relative isolate min-h-[620px] overflow-hidden bg-[#d9aa7a] sm:min-h-[700px] md:h-[clamp(360px,40vw,560px)] md:min-h-0"
    >
      <picture className="absolute inset-0 -z-10">
        <source
          media="(max-width: 767px)"
          srcSet="/imza-philosophy-mobile.jpg"
        />
        <Image
          alt="Une femme porte un tailleur bordeaux dans la lumière dorée d’un riad marocain"
          className="object-cover object-[58%_center] md:object-center"
          fill
          quality={88}
          sizes="100vw"
          src="/imza-philosophy-desktop.jpg"
        />
      </picture>

      <div className="flex min-h-[620px] items-start px-6 pt-12 sm:min-h-[700px] sm:px-12 sm:pt-16 md:min-h-0 md:h-full md:items-center md:px-[6.5vw] md:pt-0">
        <div className="max-w-[52vw] text-[#381c16] sm:max-w-[min(76vw,30rem)] md:max-w-[min(42vw,42rem)]">
          <p className="mb-4 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#684b39] sm:text-[0.64rem]">
            Notre philosophie
          </p>
          <h2
            className="mb-0 max-w-[9ch] font-serif text-[clamp(2.1rem,5.5vw,3.5rem)] font-normal uppercase leading-[0.98] tracking-[-0.04em] md:max-w-[16ch]"
            id="philosophy-title"
          >
            Plus qu’une garde-robe
          </h2>
          <span
            aria-hidden="true"
            className="mt-5 block h-px w-8 bg-[#805a42]"
          />
          <p className="mb-0 mt-4 max-w-[min(52vw,22rem)] font-serif text-[0.88rem] leading-[1.55] tracking-[0.04em] text-[#614a3b] sm:max-w-[26rem] sm:text-base">
            Des pièces qui vous accompagnent, pensées pour toutes les femmes que
            vous devenez.
          </p>
          <a
            className="group mt-6 inline-flex items-center gap-4 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#4f3527] underline decoration-[#9b7652] underline-offset-4 transition-colors hover:text-[#55101f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55101f]"
            href="#our-story"
          >
            Notre histoire
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
