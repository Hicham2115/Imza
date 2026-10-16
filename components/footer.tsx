import { CurrentYear } from "@/components/CurrentYear";
import Link from "next/link";

const footerGroups = [
  {
    title: "La collection",
    links: [
      { label: "Le tailleur signature", href: "/#signature-suit" },
      { label: "Nos six couleurs", href: "/#signature-suit" },
      { label: "Notre approche", href: "/#our-story" },
      { label: "Questions fréquentes", href: "/#faq" },
    ],
  },
  {
    title: "La Maison",
    links: [
      { label: "Notre histoire", href: "/#our-story" },
      { label: "Confection au Maroc", href: "/#our-story" },
      { label: "Les avis de la communauté", href: "/#reviews" },
      { label: "Nous contacter", href: "/#contact" },
    ],
  },
  {
    title: "À votre écoute",
    links: [
      { label: "Questions fréquentes", href: "/#faq" },
      { label: "Conseil personnalisé", href: "/#contact" },
      { label: "Taille et coupe", href: "/#contact" },
      { label: "Nous contacter", href: "mailto:hello@imza.ma" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 overflow-hidden bg-[#4f101c] px-6 pb-4 pt-10 text-[#f6efe6] sm:mt-12 sm:px-[5.5%] sm:pt-12 lg:mt-16 lg:pt-14">
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-10 border-t border-[#c8a46d]/50 sm:mb-14" />
        <div className="grid gap-10 border-b border-[#f6efe6]/20 pb-10 sm:grid-cols-2 lg:grid-cols-[1.55fr_repeat(3,1fr)] lg:gap-12 lg:pb-12">
          <div className="max-w-[470px] lg:pr-8">
            <p className="mb-5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#c8a46d]">
              L’univers IMZA
            </p>
            <Link
              aria-label="IMZA, retour en haut de page"
              className="footer-link font-serif text-[clamp(2.7rem,4.3vw,4.2rem)] leading-[0.98] tracking-[-0.045em]"
              href="/#top"
            >
              L’élégance au quotidien. Un tailleur à garder.
            </Link>
            <p className="mb-0 mt-6 max-w-[360px] font-serif text-lg leading-relaxed text-[#f6efe6]/85">
              Confectionné avec soin au Maroc, pensé pour les moments qui vous ressemblent.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h2 className="m-0 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#c8a46d]">
                {group.title}
              </h2>
              <ul className="m-0 mt-6 grid list-none gap-4 p-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="footer-link footer-nav-link font-serif text-base text-[#f6efe6]/90 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8a46d]"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-b border-[#f6efe6]/20 py-5 text-xs text-[#f6efe6]/75 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            © <CurrentYear /> IMZA. Tous droits réservés.
          </p>
          <a
            className="footer-link transition-colors hover:text-[#c8a46d]"
            href="mailto:hello@imza.ma"
          >
            hello@imza.ma
          </a>
          <Link
            className="footer-link font-semibold uppercase tracking-[0.16em] text-[#c8a46d] hover:text-[#f6efe6]"
            href="/#top"
          >
            Retour en haut <span aria-hidden="true">↗</span>
          </Link>
        </div>

      </div>
      <p className="mx-auto mb-0 mt-4 max-w-[1320px] px-4 py-3 text-center text-[11px] text-white/90">
        Designed &amp; developed by{" "}
        <a
          href="https://www.stallionadvertising.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link footer-nav-link underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-white"
        >
          Stallion Advertising
        </a>
      </p>
    </footer>
  );
}
