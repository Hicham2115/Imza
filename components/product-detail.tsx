"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, LockKeyhole, PackageCheck, Ruler, Truck } from "lucide-react";
import { productSlug, suitColors } from "@/data/homepage";
import { useCommerce } from "@/components/commerce-provider";

const sizes = ["XS", "S", "M", "L", "XL"];

type SuitColor = (typeof suitColors)[number];

export default function ProductDetail({ product }: { product: SuitColor }) {
  const [size, setSize] = useState("M");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const { addToCart, openPanel } = useCommerce();
  const relatedProducts = suitColors.filter((color) => color.name !== product.name);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-4 pb-14 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pb-20">
        <nav aria-label="Fil d’Ariane" className="mb-4 text-[0.58rem] uppercase tracking-[0.15em] text-[#735c57] sm:mb-6">
          <ol className="m-0 flex list-none items-center gap-2 p-0">
            <li><Link className="hover:text-primary" href="/">Accueil</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="hover:text-primary" href="/products">Tailleurs</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(330px,0.75fr)] md:items-start md:gap-10 lg:gap-16">
          <div className="relative aspect-[0.82] overflow-hidden bg-[#e9ded1] md:aspect-auto md:h-[min(76vh,850px)]">
            <Image
              alt={`Le tailleur signature IMZA en coloris ${product.name.toLowerCase()}`}
              className="object-cover object-[center_22%]"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 62vw"
              src={product.image}
            />
          </div>

          <div className="mx-auto w-full max-w-[480px] pb-6 md:sticky md:top-28 md:mx-0 md:py-5">
            <div className="mb-5 text-center">
              <Image
                alt="IMZA"
                className="mx-auto h-auto w-[118px]"
                height={70}
                src="/imza-logo.png"
                width={280}
              />
              <p className="mb-0 mt-2 text-[0.55rem] uppercase tracking-[0.28em] text-[#735c57]">
                Tailleurs contemporains · Maroc
              </p>
            </div>

            <p className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#9c7650]">
              La collection signature
            </p>
            <h1 className="mb-0 font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-normal leading-[1.02] tracking-[-0.04em] text-[#211512]">
              Le tailleur signature
            </h1>
            <p className="mb-0 mt-3 max-w-[30rem] font-serif text-sm leading-[1.65] text-[#735c57] sm:text-base">
              Une expression moderne de force et d’élégance. Une coupe pensée pour
              vous accompagner, de vos ambitions à tout ce qui les relie.
            </p>
            <p className="mb-0 mt-5 border-t border-[#bda984] pt-4 font-serif text-xl tracking-[0.08em] text-[#38141c]">
              1 390 MAD
            </p>

            <fieldset className="mt-5 border-0 p-0">
              <legend className="mb-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#735c57]">
                Coloris · {product.name}
              </legend>
              <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4">
                {suitColors.map((color) => {
                  const selected = color.name === product.name;
                  return (
                    <Link
                      aria-label={`Voir le tailleur ${color.name}`}
                      aria-current={selected ? "page" : undefined}
                      className="group flex min-w-0 flex-col items-center gap-2 text-[0.58rem] text-[#5b4a40] no-underline"
                      href={`/products/${productSlug(color.name)}`}
                      key={color.name}
                    >
                      <span
                        className={`size-8 rounded-full border border-black/10 outline outline-1 outline-offset-2 transition-[outline-color,transform] ${selected ? "outline-[#55101f]" : "outline-transparent group-hover:scale-105"}`}
                        style={{ backgroundColor: color.tone }}
                      />
                      {color.name}
                    </Link>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-5 border-t border-[#cbb9a5] pt-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="m-0 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#735c57]">
                  Taille
                </p>
                <button
                  aria-expanded={sizeGuideOpen}
                  className="inline-flex items-center gap-1 text-[0.64rem] text-[#5b4a40] underline decoration-[#bda984] underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c7650]"
                  onClick={() => setSizeGuideOpen((open) => !open)}
                  type="button"
                >
                  <Ruler aria-hidden="true" className="size-3.5" />
                  Guide des tailles
                </button>
              </div>
              <div aria-label="Choisir une taille" className="grid grid-cols-5 gap-2" role="group">
                {sizes.map((option) => (
                  <button
                    aria-pressed={size === option}
                    className={`min-h-11 border text-[0.7rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9c7650] ${size === option ? "border-[#55101f] bg-[#55101f] text-[#f6efe6]" : "border-[#cbb9a5] text-[#38141c] hover:border-[#55101f]"}`}
                    key={option}
                    onClick={() => setSize(option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
              {sizeGuideOpen && (
                <p className="mb-0 mt-3 border-l border-[#bda984] pl-3 text-xs leading-5 text-[#735c57]">
                  La coupe est pensée pour être portée avec aisance. Pour un conseil
                  personnalisé, <Link className="underline underline-offset-2" href="/#contact">écrivez à la Maison</Link>.
                </p>
              )}
            </div>

            <button
              className="store-button mt-5 inline-flex min-h-12 w-full items-center justify-between bg-[#55101f] px-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f6efe6] transition-colors hover:bg-[#43101c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c7650]"
              onClick={() => {
                addToCart(product, size);
                openPanel("cart");
              }}
              type="button"
            >
              Ajouter au panier <ArrowRight aria-hidden="true" className="size-4" />
            </button>

            <ul aria-label="Services inclus" className="m-0 mt-5 grid list-none grid-cols-3 divide-x divide-[#cbb9a5] border-b border-t border-[#cbb9a5] py-3 text-center text-[0.57rem] leading-[1.45] text-[#5b4a40]">
              <li className="flex flex-col items-center gap-1 px-1"><Truck aria-hidden="true" className="size-4" />Livraison offerte<br />dès 800 MAD</li>
              <li className="flex flex-col items-center gap-1 px-1"><PackageCheck aria-hidden="true" className="size-4" />Retours faciles<br />sous 14 jours</li>
              <li className="flex flex-col items-center gap-1 px-1"><LockKeyhole aria-hidden="true" className="size-4" />Paiement<br />sécurisé</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="border-t border-[#d6c7b7] bg-[#f1e8dc] px-4 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-2 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#9c7650]">
            À découvrir aussi
          </p>
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-3xl font-normal tracking-[-0.03em] sm:text-4xl" id="related-title">
              Les autres coloris
            </h2>
            <Link className="hidden items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#55101f] underline underline-offset-4 sm:inline-flex" href="/products">
              Toute la collection <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {relatedProducts.map((color) => (
              <li className="group min-w-0" key={color.name}>
                <Link className="block text-[#38141c] no-underline" href={`/products/${productSlug(color.name)}`}>
                  <div className="relative aspect-[0.78] overflow-hidden bg-[#e9ded1]">
                    <Image
                      alt={`Tailleur IMZA ${color.name.toLowerCase()}`}
                      className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                      fill
                      sizes="(max-width: 640px) 47vw, (max-width: 1024px) 30vw, 19vw"
                      src={color.image}
                    />
                  </div>
                  <div className="flex items-center justify-between border-b border-[#cbb9a5] py-3">
                    <span className="font-serif text-sm sm:text-base">Le tailleur signature</span>
                    <span aria-hidden="true" className="size-3 rounded-full border border-black/10" style={{ backgroundColor: color.tone }} />
                  </div>
                  <span className="mt-2 block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#735c57]">{color.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
