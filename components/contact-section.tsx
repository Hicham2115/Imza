import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 text-center sm:px-10 lg:py-32">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b7167]">Votre signature commence ici</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-[clamp(3.2rem,7vw,6rem)] leading-[0.95] tracking-[-0.05em]">Trouvez le tailleur qui vous ressemble.</h2>
      <a href="#signature-suit" className="mt-8 inline-flex min-h-14 items-center gap-8 bg-primary px-7 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#f6efe6] no-underline transition-colors hover:bg-[#43101c]">Découvrez la collection <ArrowRight aria-hidden="true" className="size-4" /></a>
    </section>
  );
}
