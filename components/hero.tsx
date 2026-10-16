import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative isolate h-svh min-h-[680px] max-h-[1300px] overflow-hidden bg-[#f6efe6] max-sm:h-auto max-sm:min-h-0 max-sm:max-h-none max-sm:bg-[#f6efe6]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 max-sm:bottom-auto max-sm:h-[130vw] max-sm:max-h-[720px]">
        <Image
          alt="Une femme en tailleur bordeaux dans une cour marocaine ensoleillée"
          className="object-cover object-[center_top] max-sm:object-[85%_center]"
          fill
          priority
          sizes="100vw"
          src="/imza-hero-covered.png"
        />
      </div>
      <div aria-hidden="true" className="hidden max-sm:block max-sm:h-[130vw] max-sm:max-h-[720px]" />
      <div className="relative z-10 flex h-full w-full flex-col items-start justify-center pb-8 pl-[clamp(4rem,9vw,9rem)] pt-28 text-primary max-lg:pl-16 max-sm:h-auto max-sm:min-h-0 max-sm:justify-start max-sm:bg-[#f6efe6] max-sm:px-[6vw] max-sm:pb-9 max-sm:pt-8">
        <p className="hero-copy-reveal hero-copy-reveal--1 mb-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#735c57] max-sm:mb-0 max-sm:gap-2 max-sm:text-[clamp(0.58rem,1.9vw,0.68rem)] max-sm:tracking-[0.24em]">
          <span aria-hidden="true" className="h-px w-8 bg-primary" />
          Confectionné au Maroc
        </p>
        <h1
          className="hero-copy-reveal hero-copy-reveal--2 m-0 max-w-[9.5ch] font-serif text-[clamp(4.5rem,7vw,7.8rem)] font-normal leading-[0.91] tracking-[-0.045em] max-sm:mt-4 max-sm:max-w-none max-sm:whitespace-nowrap max-sm:text-[clamp(3.25rem,16.2vw,5.8rem)] max-sm:leading-[0.9] max-sm:tracking-[-0.055em] max-[390px]:text-[clamp(3rem,15.7vw,3.75rem)]"
          id="hero-title"
        >
          Une version
          <br />
          plus affirmée
        </h1>
        <span
          className="mt-8 hidden h-px w-[4.5rem] bg-current sm:block"
          aria-hidden="true"
        />
        <p className="hero-copy-reveal hero-copy-reveal--3 mt-6 w-[480px] text-[clamp(0.95rem,1.2vw,1.15rem)] font-semibold uppercase leading-[1.9] tracking-[0.27em] max-sm:mt-5 max-sm:w-full max-sm:text-[clamp(0.72rem,3vw,0.95rem)] max-sm:leading-[1.85] max-sm:tracking-[0.22em]">
          Un tailleur signature.
          <br />
          Six couleurs.
          <br />
          Toujours vous.
        </p>
        <Link
          className="hero-copy-reveal hero-copy-reveal--4 store-button relative z-20 mt-8 inline-flex min-h-[3.6rem] w-[20rem] items-center justify-between gap-2 bg-[#55101f] px-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] !text-[#f6efe6] no-underline hover:bg-[#43101c] max-sm:mt-5 max-sm:min-h-[clamp(3.4rem,14vw,4.75rem)] max-sm:w-full max-sm:gap-2 max-sm:px-[4vw] max-sm:text-[clamp(0.58rem,2.8vw,0.9rem)] max-sm:tracking-[0.11em]"
          href="/products"
        >
          <span className="block whitespace-nowrap">
            Découvrir le tailleur signature
          </span>
          <ArrowRight
            aria-hidden="true"
            className="size-5 shrink-0 stroke-[1.5] text-[#f6efe6]"
          />
        </Link>
      </div>
    </section>
  );
}
