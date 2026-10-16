import { ArrowUpRight, Plus } from "lucide-react";

const questions = [
  {
    question: "Où le tailleur IMZA est-il confectionné ?",
    answer:
      "Chaque tailleur signature est confectionné avec soin au Maroc. Une attention particulière est portée aux détails qui dessinent sa silhouette épurée et affirmée.",
  },
  {
    question: "Quelles sont les six couleurs proposées ?",
    answer:
      "La silhouette signature se décline en six couleurs choisies avec soin. Découvrez la collection et trouvez celle qui vous ressemble.",
  },
  {
    question: "La livraison est-elle offerte ?",
    answer: "La livraison est offerte pour toute commande supérieure à 800 MAD.",
  },
  {
    question: "Comment prendre soin de mon tailleur ?",
    answer:
      "Pour préserver votre tailleur, suivez les conseils d’entretien figurant sur l’étiquette et confiez-le à un professionnel si nécessaire.",
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[#f6efe6] px-[clamp(1.5rem,5vw,5rem)] py-24 text-primary max-sm:px-5 max-sm:py-16"
      id="faq"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-[0.8fr_1.2fr] gap-[clamp(2.5rem,9vw,9rem)] max-md:grid-cols-[0.9fr_1.1fr] max-sm:grid-cols-1 max-sm:gap-9">
        <div className="max-w-[27rem]">
          <p className="m-0 flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Quelques précisions
          </p>
          <h2
            className="mb-0 mt-5 font-serif text-[clamp(3.3rem,6vw,5.7rem)] font-normal leading-[0.92] tracking-[-0.06em] text-primary max-sm:mt-3 max-sm:text-[clamp(3.15rem,13vw,4.5rem)]"
            id="faq-title"
          >
            Bon à
            <br />
            savoir.
          </h2>
          <p className="mb-0 mt-5 max-w-[22rem] text-[0.88rem] leading-[1.75] tracking-[0.02em] text-muted-foreground max-sm:mt-4 max-sm:text-[0.84rem]">
            Les réponses à vos questions pour choisir votre signature.
          </p>
          <a
            className="store-button mt-7 inline-flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.17em] text-primary no-underline hover:opacity-70 max-sm:mt-5"
            href="#signature-suit"
          >
            Découvrez la collection
            <ArrowUpRight aria-hidden="true" className="size-4 stroke-[1.5]" />
          </a>
        </div>

        <div className="border-t border-[#cbb8aa]">
          {questions.map((item) => (
            <details
              className="group border-b border-[#cbb8aa]"
              key={item.question}
              name="imza-faq"
            >
              <summary className="flex min-h-[4.75rem] cursor-pointer list-none items-center justify-between gap-5 py-5 text-left marker:hidden focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden max-sm:min-h-[4.4rem] max-sm:py-4">
                <span className="font-serif text-[clamp(1.18rem,2vw,1.55rem)] leading-tight tracking-[-0.025em] text-primary">
                  {item.question}
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#cbb8aa] transition-colors group-open:border-primary group-open:bg-primary group-open:text-[#f6efe6]">
                  <Plus aria-hidden="true" className="size-4 stroke-[1.4] transition-transform duration-300 group-open:rotate-45" />
                </span>
              </summary>
              <p className="mb-0 max-w-[38rem] pb-6 pr-12 text-[0.86rem] leading-[1.8] tracking-[0.01em] text-muted-foreground max-sm:pb-5 max-sm:pr-8 max-sm:text-[0.82rem]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
