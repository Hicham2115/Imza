const footerGroups = [
  {
    title: "La collection",
    links: [
      { label: "Le tailleur signature", href: "#signature-suit" },
      { label: "Nos six couleurs", href: "#signature-suit" },
      { label: "Notre approche", href: "#our-story" },
      { label: "Questions fréquentes", href: "#faq" },
    ],
  },
  {
    title: "La Maison",
    links: [
      { label: "Notre histoire", href: "#our-story" },
      { label: "Confection au Maroc", href: "#services" },
      { label: "Les avis de la communauté", href: "#reviews" },
      { label: "Nous contacter", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#38141c] px-6 pb-5 pt-16 text-[#f6efe6] sm:px-[5.5%] sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-12 border-b border-[#f6efe6]/20 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-16 lg:pb-16">
          <div className="max-w-[430px]">
            <a aria-label="IMZA, retour en haut de page" className="font-serif text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.045em]" href="#top">
              Le style qui vous ressemble.
            </a>
            <p className="mb-0 mt-6 max-w-[340px] font-serif text-lg leading-relaxed text-[#f6efe6]/65">
              Des pièces pensées avec soin, confectionnées au Maroc et faites pour vous accompagner.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h2 className="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#c8a46d]">
                {group.title}
              </h2>
              <ul className="m-0 mt-5 grid list-none gap-4 p-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a className="font-serif text-base text-[#f6efe6]/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8a46d]" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-5 py-6 text-xs text-[#f6efe6]/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© 2026 IMZA. Tous droits réservés.</p>
          <a className="transition-colors hover:text-[#c8a46d]" href="mailto:hello@yourbrand.com">
            hello@yourbrand.com
          </a>
          <a className="font-semibold uppercase tracking-[0.16em] text-[#c8a46d] hover:text-[#f6efe6]" href="#top">
            Retour en haut <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p aria-hidden="true" className="-mb-[0.12em] select-none whitespace-nowrap text-center font-serif text-[clamp(7rem,27vw,28rem)] font-medium leading-[0.72] tracking-[-0.09em] text-[#f6efe6]/[0.055]">
          IMZA
        </p>
      </div>
      <p className="mb-0 mt-5 text-center font-serif text-xs text-[#f6efe6]/55">
        Conçu et développé par Stallion Advertising
      </p>
    </footer>
  );
}
