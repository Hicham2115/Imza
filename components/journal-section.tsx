import { ArrowRight } from "lucide-react";

export function JournalSection() {
  return (
    <section className="bg-[#55101f] px-6 py-20 text-[#f6efe6] sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#dfc3a9]">Le journal IMZA</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.05em]">Quelques notes sur le style, la confiance et l’art de définir ses propres codes.</h2>
        </div>
        <a href="#signature-suit" className="store-button inline-flex shrink-0 items-center gap-4 border-b border-[#dfc3a9] pb-3 text-[0.66rem] font-bold uppercase tracking-[0.17em] text-[#f6efe6] no-underline">Découvrez IMZA <ArrowRight aria-hidden="true" className="size-4" /></a>
      </div>
    </section>
  );
}
