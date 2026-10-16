"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { href: "#signature-suit", label: "Collection" },
  { href: "#our-story", label: "Notre histoire" },
  { href: "#journal", label: "Journal" },
];

function BrandMark() {
  return (
    <a
      className="inline-flex h-[3.9rem] w-48 items-center justify-center max-sm:h-[min(13vw,4.2rem)] max-sm:w-[min(38vw,13rem)]"
      href="#top"
      aria-label="Accueil IMZA"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="h-full w-full object-contain"
        height={732}
        priority
        src="/imza-logo.png"
        width={2149}
      />
    </a>
  );
}

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 max-sm:relative max-sm:mb-2" id="top">
      <div
        aria-label="Livraison offerte dès 800 MAD · Confectionné au Maroc · Un style qui vous ressemble"
        className="flex h-8 items-center overflow-hidden bg-[#43101c] text-[0.66rem] font-medium tracking-[0.2em] text-[#f6efe6] max-sm:h-7 max-sm:text-[0.54rem] max-sm:tracking-[0.12em]"
      >
        <div aria-hidden="true" className="flex w-max animate-[announcement-scroll_24s_linear_infinite] motion-reduce:animate-none">
          {[0, 1, 2].map((copy) => (
            <div className="flex shrink-0 items-center" key={copy}>
              <span className="px-8">LIVRAISON OFFERTE DÈS 800 MAD</span>
              <span className="text-[#d9b7a0]" aria-hidden="true">✦</span>
              <span className="px-8">CONFECTIONNÉ AVEC SOIN AU MAROC</span>
              <span className="text-[#d9b7a0]" aria-hidden="true">✦</span>
              <span className="px-8">SIX COULEURS. TOUJOURS VOUS.</span>
              <span className="px-8 text-[#d9b7a0]" aria-hidden="true">✦</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid h-[4.5rem] grid-cols-[1fr_auto_1fr] items-center bg-transparent px-[clamp(1.5rem,5vw,5rem)] max-md:grid-cols-[1fr_auto_1fr] max-md:px-4 max-sm:h-20">
        <div className="flex items-center">
          <Button
            aria-expanded={menuOpen}
            aria-label={
              menuOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
            className="store-button mr-2 size-11 rounded-full bg-transparent p-0 text-primary hover:bg-[#efe5da] hover:text-[#8b3544] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            size="icon"
            variant="ghost"
          >
            <Menu aria-hidden="true" className="size-5" />
          </Button>
          <nav
            className="flex items-center gap-[clamp(0.8rem,2.5vw,2.75rem)] max-md:hidden"
            aria-label="Navigation principale"
          >
            {navigationLinks.map((link) => (
              <a
                className="group relative py-3 text-[0.84rem] font-medium tracking-[0.04em] text-primary no-underline transition-colors duration-200 hover:text-[#8b3544] focus-visible:outline-offset-4 max-sm:py-2 max-sm:text-[0.68rem]"
                href={link.href}
                key={link.label}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-[0.32rem] h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </a>
            ))}
          </nav>
        </div>
        <div className="translate-y-2 justify-self-center">
          <BrandMark />
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-2 max-md:gap-0">
            <Button
              aria-label="Favoris"
              className="store-button inline-flex size-10 items-center justify-center rounded-full bg-transparent p-0 text-primary max-md:size-9"
              size="icon"
              variant="link"
            >
              <Heart
                aria-hidden="true"
                className="size-[1.3rem] stroke-[1.4]"
              />
            </Button>
            <Button
              aria-label="Panier"
              className="store-button inline-flex size-10 items-center justify-center rounded-full bg-transparent p-0 text-primary max-md:size-9"
              size="icon"
              variant="link"
            >
              <ShoppingBag
                aria-hidden="true"
                className="size-[1.3rem] stroke-[1.4]"
              />
            </Button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-[#2b1017]/35 md:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
          role="presentation"
        >
          <nav
            aria-label="Navigation mobile"
            className="absolute inset-x-0 bottom-0 top-[6.25rem] overflow-y-auto bg-[#f6efe6] px-6 pb-10 pt-5 text-primary shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between border-b border-primary/15 pb-4">
              <p className="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/60">
                Découvrir IMZA
              </p>
              <Button
                aria-label="Fermer le menu"
                className="store-button size-10 rounded-full bg-transparent p-0 text-primary hover:bg-[#efe5da]"
                onClick={() => setMenuOpen(false)}
                size="icon"
                variant="ghost"
              >
                <X aria-hidden="true" className="size-5" />
              </Button>
            </div>
            <ul className="m-0 list-none divide-y divide-primary/15 p-0">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="group flex min-h-14 items-center justify-between py-3 text-[0.9rem] font-medium tracking-[0.04em] text-primary no-underline transition-colors hover:text-[#8b3544] focus-visible:outline-offset-4"
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
