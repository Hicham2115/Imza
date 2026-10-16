import { Star } from "lucide-react";

const reviews = [
  { quote: "The kind of suit that makes getting dressed feel effortless.", name: "A thoughtful fit", place: "Burgundy" },
  { quote: "Beautifully considered, from the fit to the finishing touches.", name: "Made with care", place: "Ivory" },
  { quote: "I feel completely like myself in it — only more assured.", name: "A new favorite", place: "Sage" },
  { quote: "A piece I reach for whenever I want to feel quietly confident.", name: "Everyday confidence", place: "Navy" },
];

function ReviewCard({ quote, name, place }: (typeof reviews)[number]) {
  return (
    <article className="review-card">
      <div>
        <div aria-label="5 out of 5 stars" className="flex gap-1 text-[#a17b3f]">
          {Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" className="size-4 fill-current" key={index} />)}
        </div>
        <blockquote className="m-0 mt-5 font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.45] tracking-[-0.02em] text-[#392b25]">“{quote}”</blockquote>
      </div>
      <div className="mt-8 flex items-center gap-4 border-t border-[#bda984]/35 pt-5">
        <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#bda984] font-serif text-xl text-[#80633a]">{name.charAt(0)}</span>
        <div>
          <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#382b25]">{name}</p>
          <p className="m-0 mt-1 text-sm text-[#806f62]">IMZA community · {place}</p>
        </div>
      </div>
      <span aria-hidden="true" className="review-card__quote-mark">“</span>
    </article>
  );
}

function ReviewTrack({ reverse = false, label }: { reverse?: boolean; label: string }) {
  return (
    <div aria-label={label} className={`reviews-marquee ${reverse ? "reviews-marquee--reverse" : ""}`}>
      <div className="reviews-marquee__track">
        {[0, 1].map((copy) => (
          <div aria-hidden={copy === 1 ? true : undefined} className="reviews-marquee__group" key={copy}>
            {reviews.map((review) => <ReviewCard key={`${copy}-${review.name}`} {...review} />)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="overflow-hidden bg-[#f1e9dd] py-20 text-primary sm:py-24" id="reviews">
      <div className="mx-auto mb-12 max-w-4xl px-6 text-center sm:mb-16">
        <p className="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#9b7848]">The IMZA community</p>
        <h2 className="mb-0 mt-4 font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.05em] text-[#261b17]" id="reviews-title">Words to wear close.</h2>
        <p className="mx-auto mb-0 mt-4 max-w-xl font-serif text-lg leading-relaxed text-[#806f62]">A few notes on finding a suit that feels like you.</p>
      </div>
      <div className="reviews-marquee-stack">
        <ReviewTrack label="Customer stories, first row" />
        <ReviewTrack label="Customer stories, second row" reverse />
      </div>
      <p className="mx-auto mt-7 max-w-4xl px-6 text-center text-xs text-[#806f62]">Sample reviews for layout preview. Replace with customer-approved testimonials before publishing.</p>
    </section>
  );
}
