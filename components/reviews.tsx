import { Star } from "lucide-react";

const sampleReviews = [
  "The kind of suit that makes getting dressed feel effortless.",
  "Beautifully considered, from the fit to the finishing touches.",
  "I feel completely like myself in it — only more assured.",
];

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="bg-[#43101c] px-6 py-20 text-[#f6efe6] sm:px-10 lg:px-20 lg:py-28" id="reviews">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-8 max-sm:mb-8 max-sm:block">
          <div>
            <p className="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#dfc3a9]">Notes from the fitting room</p>
            <h2 className="mb-0 mt-4 font-serif text-[clamp(3.2rem,7vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]" id="reviews-title">Made to feel<br className="max-sm:hidden" /> like you.</h2>
          </div>
          <p className="mb-1 flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-[#dfc3a9] max-sm:mt-5">
            <span aria-hidden="true" className="flex gap-1">{Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" className="size-3.5 fill-current" key={index} />)}</span>
            Sample layout
          </p>
        </div>
        <div className="grid grid-cols-3 border-y border-[#f6efe6]/25 max-sm:grid-cols-1">
          {sampleReviews.map((quote, index) => (
            <figure className={`m-0 flex min-h-64 flex-col justify-between px-7 py-7 max-sm:min-h-0 max-sm:px-1 max-sm:py-6 ${index < 2 ? "border-r border-[#f6efe6]/25 max-sm:border-b max-sm:border-r-0" : ""}`} key={quote}>
              <div><span aria-hidden="true" className="font-serif text-5xl leading-none text-[#dfc3a9]">“</span><blockquote className="m-0 mt-2 max-w-[23rem] font-serif text-[clamp(1.35rem,2.2vw,1.8rem)] leading-[1.3] tracking-[-0.02em]">{quote}</blockquote></div>
              <figcaption className="mt-8">
                <span className="mb-2 inline-block border border-[#dfc3a9]/45 px-2 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.15em] text-[#dfc3a9]">Sample review</span>
                <p className="m-0 text-[0.63rem] font-semibold uppercase tracking-[0.13em]">IMZA customer</p>
                <p className="m-0 mt-1 text-[0.6rem] tracking-[0.07em] text-[#dfc3a9]">Replace with a verified review</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
