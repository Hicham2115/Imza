import { ArrowDownRight, Plus } from "lucide-react";

const questions = [
  {
    question: "Where is the IMZA suit made?",
    answer:
      "Each signature suit is thoughtfully tailored in Morocco, with care given to the details that shape its clean, confident silhouette.",
  },
  {
    question: "What are the six expressions?",
    answer:
      "The signature silhouette comes in six considered colors. Explore the collection to find the expression that feels most like you.",
  },
  {
    question: "Is delivery complimentary?",
    answer: "Orders over 800 MAD qualify for complimentary delivery.",
  },
  {
    question: "How should I care for my suit?",
    answer:
      "For the best care, follow the instructions on the garment label and use a trusted professional cleaner when needed.",
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[#eee3d7] px-[clamp(1.5rem,5vw,5rem)] py-24 text-primary max-sm:px-5 max-sm:py-16"
      id="faq"
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-[0.8fr_1.2fr] gap-[clamp(2.5rem,9vw,9rem)] max-md:grid-cols-[0.9fr_1.1fr] max-sm:grid-cols-1 max-sm:gap-9">
        <div className="max-w-[27rem]">
          <p className="m-0 flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            A few details
          </p>
          <h2
            className="mb-0 mt-5 font-serif text-[clamp(3.3rem,6vw,5.7rem)] font-normal leading-[0.92] tracking-[-0.06em] text-primary max-sm:mt-3 max-sm:text-[clamp(3.15rem,13vw,4.5rem)]"
            id="faq-title"
          >
            Good to
            <br />
            know.
          </h2>
          <p className="mb-0 mt-5 max-w-[22rem] text-[0.88rem] leading-[1.75] tracking-[0.02em] text-muted-foreground max-sm:mt-4 max-sm:text-[0.84rem]">
            Thoughtful answers to help you choose your signature.
          </p>
          <a
            className="mt-7 inline-flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.17em] text-primary no-underline transition-opacity hover:opacity-70 focus-visible:outline-offset-4 max-sm:mt-5"
            href="#signature-suit"
          >
            Explore the collection
            <ArrowDownRight aria-hidden="true" className="size-4 stroke-[1.5]" />
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
