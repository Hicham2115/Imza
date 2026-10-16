import { Star } from "lucide-react";

const reviews = [
  { quote: "Le tailleur qui rend chaque tenue évidente.", name: "Une coupe pensée pour soi", place: "Bordeaux" },
  { quote: "Tout est soigné, de la coupe jusqu’aux finitions.", name: "Confectionné avec soin", place: "Ivoire" },
  { quote: "Je m’y sens pleinement moi-même, avec encore plus d’assurance.", name: "Un nouveau favori", place: "Sauge" },
  { quote: "Je le porte dès que j’ai envie d’une élégance tout en confiance.", name: "L’assurance au quotidien", place: "Bleu nuit" },
];

function ReviewCard({ quote, name, place }: (typeof reviews)[number]) {
  return (
    <article className="review-card">
      <div>
        <div aria-label="5 out of 5 stars" className="flex gap-1 text-[#a17b3f]">
          {Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" className="size-4 fill-current" key={index} />)}
        </div>
        <blockquote className="m-0 mt-5 font-serif text-[clamp(1.25rem,2vw,1.75rem)] italic leading-[1.45] tracking-[-0.02em] text-[#392b25] max-sm:mt-3 max-sm:text-[1.1rem]">“{quote}”</blockquote>
      </div>
      <div className="mt-8 flex items-center gap-4 border-t border-[#bda984]/35 pt-5 max-sm:mt-5 max-sm:gap-3 max-sm:pt-4">
        <span aria-hidden="true" className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#bda984] font-serif text-xl text-[#80633a] max-sm:size-11">{name.charAt(0)}</span>
        <div>
          <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#382b25]">{name}</p>
        <p className="m-0 mt-1 text-sm text-[#4d3432]">La communauté IMZA · {place}</p>
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
    <section aria-labelledby="reviews-title" className="overflow-hidden bg-[#f6efe6] py-20 text-primary sm:py-24 max-sm:py-12" id="reviews">
      <div className="mx-auto mb-12 max-w-4xl px-6 text-center sm:mb-16 max-sm:mb-7 max-sm:px-5">
        <p className="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#9b7848]">La communauté IMZA</p>
        <h2 className="mb-0 mt-4 font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.05em] text-[#261b17] max-sm:mt-3 max-sm:text-[2.25rem]" id="reviews-title">Des mots qui nous ressemblent.</h2>
        <p className="mx-auto mb-0 mt-4 max-w-xl font-serif text-lg leading-relaxed text-[#4d3432] max-sm:mt-2 max-sm:text-base">Quelques impressions sur le plaisir de trouver son style.</p>
      </div>
      <div className="reviews-marquee-stack">
        <ReviewTrack label="Témoignages, première ligne" />
        <ReviewTrack label="Témoignages, deuxième ligne" reverse />
      </div>
      <p className="mx-auto mt-7 max-w-4xl px-6 text-center text-xs text-[#4d3432] max-sm:mt-4 max-sm:px-5">Avis de démonstration. À remplacer par des témoignages validés par les clientes avant publication.</p>
    </section>
  );
}
