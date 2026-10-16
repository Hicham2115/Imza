import { Feather, Flower2, Gem, Scissors } from "lucide-react";
import { brandValues } from "@/data/homepage";

const icons = [Scissors, Flower2, Gem, Feather];

export function BrandValuesSection() {
  return (
    <section aria-label="La différence IMZA" className="px-6 py-8 sm:px-10 lg:px-20">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 list-none border-y border-[#d6c7b7] p-0 sm:grid-cols-4">
        {brandValues.map((label, index) => {
          const Icon = icons[index];
          return (
            <li key={label} className="flex flex-col items-center gap-3 border-b border-r border-[#d6c7b7] px-3 py-5 text-center last:border-r-0 even:border-r-0 sm:border-b-0 sm:even:border-r sm:last:border-r-0">
              <Icon aria-hidden="true" className="size-5 text-[#9c7650]" strokeWidth={1.4} />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#735c57]">{label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
