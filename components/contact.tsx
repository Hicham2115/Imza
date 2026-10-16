"use client";

import { useState, type FormEvent } from "react";
import { Gift, Gem, Ruler } from "lucide-react";

const contactTopics = [
  {
    icon: Gem,
    title: "Conseil personnalisé",
    detail: "Trouvez le tailleur qui vous ressemble.",
  },
  {
    icon: Ruler,
    title: "Taille et coupe",
    detail: "Nous vous aidons à choisir la bonne taille.",
  },
  {
    icon: Gift,
    title: "Cadeaux précieux",
    detail: "Offrez une attention inoubliable.",
  },
];

const fieldClassName =
  "mt-2 h-9 w-full border-0 border-b border-[#788478] bg-transparent px-0 font-sans text-base text-[#38141c] outline-none transition-colors placeholder:text-transparent focus:border-[#9c7650] focus:ring-0";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [
      `Nom : ${firstName} ${lastName}`.trim(),
      `E-mail : ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href =
      "mailto:hello@yourbrand.com?subject=" +
      encodeURIComponent("Une question pour la Maison IMZA") +
      "&body=" +
      encodeURIComponent(body);
    setSubmitted(true);
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="bg-[#38141c] px-3 py-10 sm:px-[4%] sm:py-16 lg:py-20"
      id="contact"
    >
      <div
        className="contact-paper mx-auto grid max-w-[1480px] overflow-hidden rounded-[22px] border border-[#e2d5bf] text-primary shadow-[0_24px_70px_rgba(0,0,0,0.18)] lg:grid-cols-[1.16fr_0.84fr]"
      >
        <div className="flex flex-col px-7 py-10 sm:px-12 sm:py-12 lg:min-h-[820px] lg:justify-between lg:px-[8%] lg:py-14">
          <div className="mx-auto max-w-[760px] text-center lg:mt-10">
            <p className="contact-script relative z-10 text-[clamp(3.5rem,6vw,6.7rem)] leading-[0.9] text-[#9c7650]">
              Un mot pour la Maison
            </p>
            <h2
              className="-mt-1 max-w-[14ch] font-serif text-[clamp(2.35rem,4vw,4.3rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#38141c] sm:mx-auto"
              id="contact-title"
            >
              Nous serions ravis d’échanger avec vous.
            </h2>
            <p className="mx-auto mt-7 max-w-[620px] text-[0.92rem] leading-[1.8] text-[#735c57] sm:text-base">
              Chaque création a son histoire. Pour trouver la coupe idéale,
              choisir votre tailleur signature ou préparer une attention
              particulière, notre équipe est là pour vous guider.
            </p>
            <div className="mx-auto mt-11 grid w-full max-w-[760px] grid-cols-1 border-y border-[#9c7650]/40 sm:grid-cols-3">
              {contactTopics.map(({ icon: Icon, title, detail }) => (
                <a
                  className="group flex min-h-[82px] items-center gap-3 border-b border-[#9c7650]/25 px-1 py-4 text-left transition-colors hover:bg-white/25 last:border-b-0 sm:min-h-[140px] sm:flex-col sm:items-start sm:justify-center sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0 lg:px-5"
                  href="#contact-form"
                  key={title}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-[18px] shrink-0 text-[#9c7650] transition-transform group-hover:-translate-y-0.5"
                    strokeWidth={1.4}
                  />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#55101f]">
                      {title}
                    </span>
                    <span className="mt-1 block font-serif text-[13px] leading-snug text-[#735c57]">
                      {detail}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-14 border-t border-[#9c7650]/45 pt-6 lg:mt-10">
            <p className="m-0 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#9c7650]">
              La promesse IMZA
            </p>
            <p className="mb-0 mt-3 font-serif text-[clamp(1.2rem,1.8vw,1.65rem)] italic leading-snug text-[#735c57]">
              Une attention particulière, à chaque étape.
            </p>
          </div>
        </div>

        <div className="border-t border-dashed border-[#a99a89] px-7 pb-10 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:flex lg:min-h-[820px] lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:px-[8%] lg:py-14">
          <div aria-hidden="true" className="contact-stamps mx-auto mb-8 h-[clamp(6rem,14vw,10rem)] w-full max-w-[540px] sm:mb-10" />
          <form
            className="space-y-5 sm:space-y-7"
            id="contact-form"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block font-serif text-[15px] text-[#735c57]" htmlFor="firstName">
                Prénom <span aria-hidden="true">*</span>
              </label>
              <input autoComplete="given-name" className={fieldClassName} id="firstName" maxLength={80} name="firstName" required />
            </div>
            <div>
              <label className="block font-serif text-[15px] text-[#735c57]" htmlFor="lastName">
                Nom
              </label>
              <input autoComplete="family-name" className={fieldClassName} id="lastName" maxLength={80} name="lastName" />
            </div>
            <div>
              <label className="block font-serif text-[15px] text-[#735c57]" htmlFor="email">
                E-mail <span aria-hidden="true">*</span>
              </label>
              <input autoComplete="email" className={fieldClassName} id="email" maxLength={254} name="email" required type="email" />
            </div>
            <div>
              <label className="block font-serif text-[15px] text-[#735c57]" htmlFor="message">
                Comment pouvons-nous vous aider ? <span aria-hidden="true">*</span>
              </label>
              <textarea className="contact-message-field mt-2 min-h-[90px] w-full resize-y border-0 border-b border-[#788478] bg-transparent px-0 pt-2 font-sans text-base text-[#38141c] outline-none transition-colors focus:border-[#9c7650] focus:ring-0" id="message" maxLength={1200} name="message" required rows={2} />
            </div>
            <div className="flex flex-col gap-3 pt-2 sm:items-end">
              <button className="inline-flex h-[52px] items-center justify-center self-end rounded-[12px] border border-[#55101f] bg-transparent px-8 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#55101f] transition-colors hover:bg-[#55101f] hover:text-[#f6efe6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c7650]" type="submit">
                Envoyer le message
              </button>
              <p aria-live="polite" className="m-0 text-right font-sans text-[11px] text-[#735c57]">
                {submitted
                  ? "Votre application de messagerie va s’ouvrir pour l’envoi."
                  : "Votre application de messagerie s’ouvrira pour l’envoi. Adresse provisoire à configurer."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
