"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Heart, SlidersHorizontal } from "lucide-react";
import { suitColors } from "@/data/homepage";

const featuredOrder = ["Bordeaux", "Cacao", "Ivoire", "Bleu nuit", "Sauge", "Noir"];

const palette = [...suitColors].sort(
  (a, b) => featuredOrder.indexOf(a.name) - featuredOrder.indexOf(b.name),
);

type SortMode = "featured" | "alphabetical";

export default function ProductsCollection() {
  const [activeFilter, setActiveFilter] = useState("Toutes");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [activeProduct, setActiveProduct] = useState("Bordeaux");
  const [favorites, setFavorites] = useState<string[]>([]);

  const products = useMemo(() => {
    const filtered = palette.filter(
      (product) => activeFilter === "Toutes" || product.name === activeFilter,
    );

    if (sortMode === "alphabetical") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "fr"));
    }

    return filtered;
  }, [activeFilter, sortMode]);

  function toggleFavorite(colorName: string) {
    setFavorites((current) =>
      current.includes(colorName)
        ? current.filter((color) => color !== colorName)
        : [...current, colorName],
    );
  }

  return (
    <section
      aria-labelledby="products-title"
      className="mx-auto max-w-[1600px] px-[clamp(1.25rem,3.4vw,3.5rem)] pb-24 pt-7 sm:pt-10 lg:pb-32"
    >
      <nav aria-label="Fil d’Ariane" className="text-center">
        <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-x-3 gap-y-1 p-0 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-[#735c57] sm:text-[0.63rem]">
          <li><Link className="hover:text-primary" href="/">Accueil</Link></li>
          <li aria-hidden="true">/</li>
          <li>Femme</li>
          <li aria-hidden="true">/</li>
          <li>Tailleurs</li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Le tailleur signature</li>
        </ol>
      </nav>

      <header className="mx-auto mt-7 max-w-3xl text-center sm:mt-8">
        <h1
          className="m-0 font-serif text-[clamp(2.4rem,5.3vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.055em] text-[#55101f] max-sm:text-[clamp(2.3rem,10vw,3.3rem)]"
          id="products-title"
        >
          Six couleurs. Une signature.
        </h1>
        <p className="mx-auto mb-0 mt-3 max-w-[40rem] text-[0.92rem] leading-[1.65] text-[#735c57] sm:text-base">
          Le tailleur IMZA, une coupe précise, des lignes intemporelles,
          <br className="hidden sm:block" /> six expressions de caractère. Pensé et confectionné au Maroc.
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-4 border-b border-[#d6c7b7] pb-4 sm:mt-10 sm:gap-5 sm:pb-5 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-3 overflow-hidden">
          <SlidersHorizontal aria-hidden="true" className="size-4 shrink-0 text-[#55101f]" strokeWidth={1.5} />
          <span className="shrink-0 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#55101f] sm:text-[0.62rem]">Couleur</span>
          <div aria-label="Filtrer par couleur" className="flex min-w-0 items-center gap-3 overflow-x-auto pb-1 sm:gap-4" role="group">
            <button
              aria-pressed={activeFilter === "Toutes"}
              className="product-filter"
              onClick={() => setActiveFilter("Toutes")}
              type="button"
            >
              <span aria-hidden="true" className={`product-filter__swatch bg-[#55101f] ${activeFilter === "Toutes" ? "product-filter__swatch--active" : ""}`} />
              Toutes
            </button>
            {palette.map((color) => (
              <button
                aria-pressed={activeFilter === color.name}
                className="product-filter"
                key={color.name}
                onClick={() => setActiveFilter(color.name)}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className={`product-filter__swatch ${activeFilter === color.name ? "product-filter__swatch--active" : ""}`}
                  style={{ backgroundColor: color.tone }}
                />
                {color.name}
              </button>
            ))}
          </div>
        </div>

        <label className="flex shrink-0 items-center gap-3 self-end text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#55101f] md:self-auto sm:text-[0.62rem]">
          Trier par
          <select
            aria-label="Trier les produits"
            className="product-sort bg-transparent py-2 text-[0.72rem] font-normal normal-case tracking-normal text-[#38141c] outline-none"
            onChange={(event) => setSortMode(event.target.value as SortMode)}
            value={sortMode}
          >
            <option value="featured">En vedette</option>
            <option value="alphabetical">Ordre alphabétique</option>
          </select>
        </label>
      </div>

      <p aria-live="polite" className="sr-only">
        {products.length} {products.length > 1 ? "coloris affichés" : "coloris affiché"}
      </p>

      <ul className="mt-5 grid list-none grid-cols-2 gap-x-3 gap-y-7 p-0 sm:gap-x-4 sm:gap-y-10 min-[760px]:grid-cols-4 min-[760px]:gap-x-5 min-[760px]:gap-y-8">
        {products.map((product) => {
          const isActive = activeProduct === product.name;
          const isFavorite = favorites.includes(product.name);
          const wideTile = product.name === "Sauge" || product.name === "Noir";

          return (
            <li
              className={`group min-w-0 ${wideTile ? "min-[760px]:col-span-2" : ""}`}
              key={product.name}
            >
              <div className="relative">
                <button
                  aria-label={`Sélectionner le tailleur ${product.name}`}
                  aria-pressed={isActive}
                  className={`product-image-button relative block w-full overflow-hidden bg-[#eee7dc] text-left ${wideTile ? "aspect-[0.62] min-[760px]:aspect-[1.08]" : "aspect-[0.62]"}`}
                  onClick={() => setActiveProduct(product.name)}
                  type="button"
                >
                  <Image
                    alt={`Le tailleur signature IMZA en coloris ${product.name.toLowerCase()}`}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                    fill
                    priority={product.name === "Bordeaux"}
                    sizes={wideTile ? "(max-width: 760px) 48vw, 50vw" : "(max-width: 760px) 48vw, 25vw"}
                    src={product.image}
                  />
                </button>
                <button
                  aria-label={isFavorite ? `Retirer ${product.name} des favoris` : `Ajouter ${product.name} aux favoris`}
                  aria-pressed={isFavorite}
                  className="store-button absolute right-2 top-2 z-10 flex size-9 items-center justify-center rounded-full bg-[#f6efe6]/90 text-[#55101f] backdrop-blur-sm sm:right-3 sm:top-3"
                  onClick={() => toggleFavorite(product.name)}
                  type="button"
                >
                  <Heart aria-hidden="true" className={`size-[18px] ${isFavorite ? "fill-current" : ""}`} strokeWidth={1.5} />
                </button>
              </div>

              <div className="pt-2 text-center sm:pt-3">
                <button
                  className="font-serif text-[clamp(0.92rem,1.45vw,1.2rem)] leading-tight text-[#38141c]"
                  onClick={() => setActiveProduct(product.name)}
                  type="button"
                >
                  Le tailleur signature
                </button>
                <p className="mb-0 mt-1 text-[0.56rem] font-medium uppercase tracking-[0.17em] text-[#735c57] sm:text-[0.62rem]">
                  {product.name}
                </p>
                <div aria-label={`Coloris sélectionné : ${product.name}`} className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
                  {palette.map((swatch) => (
                    <span
                      aria-hidden="true"
                      className={`product-color-dot ${swatch.name === product.name ? "product-color-dot--active" : ""}`}
                      key={swatch.name}
                      style={{ backgroundColor: swatch.tone }}
                    />
                  ))}
                </div>
                {isActive && (
                  <Link className="store-button mt-4 inline-flex min-h-10 items-center justify-center gap-3 bg-[#55101f] px-5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#f6efe6] no-underline hover:bg-[#43101c] sm:text-[0.62rem]" href="/#contact">
                    Voir le tailleur
                    <span aria-hidden="true" className="text-base leading-none">→</span>
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
