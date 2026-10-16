import Image from "next/image";
import { suitColors } from "@/data/homepage";

export function FeaturedSuitSection() {
  return (
    <section id="signature-suit" aria-labelledby="collection-title" className="px-6 pb-24 pt-20 sm:px-10 lg:px-20 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-8 max-sm:block">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b7167]">The signature collection</p>
            <h2 id="collection-title" className="mt-3 font-serif text-[clamp(3.2rem,7vw,6rem)] leading-[0.94] tracking-[-0.05em]">Six expressions.</h2>
          </div>
          <p className="max-w-sm pb-1 text-sm leading-7 text-[#735c57] max-sm:mt-4">One considered silhouette, tailored in Morocco and made to feel like you.</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {suitColors.map((color) => (
            <li key={color.name} className="group min-w-0">
              <a href="#contact" className="block text-primary no-underline">
                <div className="relative aspect-[0.58] overflow-hidden" style={{ backgroundColor: color.tone }}>
                  <Image alt={`${color.name} IMZA suit`} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" fill sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 16vw" src={color.image} />
                </div>
                <div className="flex items-center justify-between border-b border-[#d6c7b7] py-3">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.15em]">{color.name}</span>
                  <span aria-hidden="true" className="size-3 rounded-full border border-black/10" style={{ backgroundColor: color.tone }} />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
