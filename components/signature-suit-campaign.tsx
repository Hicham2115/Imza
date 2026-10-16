import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function SignatureSuitCampaign() {
  return (
    <section aria-labelledby="signature-campaign-title" className="relative isolate min-h-[680px] overflow-hidden bg-[#32121a] text-[#f8f2e9] sm:min-h-[740px] lg:min-h-[min(860px,90svh)]">
      <picture className="absolute inset-0">
        <source media="(max-width: 639px)" srcSet="/imza-signature-campaign-mobile.webp" />
        <Image
          alt="Une femme portant le tailleur signature bordeaux IMZA dans un riad ensoleillé"
          className="object-cover object-[64%_center]"
          fill
          sizes="100vw"
          priority
          src="/imza-signature-campaign.png"
        />
      </picture>
      <div aria-hidden="true" className="absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(31,12,16,0.88)_0%,rgba(49,18,25,0.72)_38%,rgba(49,18,25,0.1)_78%),linear-gradient(0deg,rgba(31,12,16,0.16),transparent_50%)] max-sm:bg-[linear-gradient(0deg,rgba(31,12,16,0.9)_0%,rgba(49,18,25,0.52)_50%,rgba(49,18,25,0.08)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1600px] items-center px-6 py-16 sm:min-h-[740px] sm:px-10 lg:min-h-[min(860px,90svh)] lg:px-[7vw]">
        <div className="max-w-[760px] pt-40 sm:pt-24">
          <p className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e8c78f]">
            <span aria-hidden="true" className="h-px w-9 bg-[#c9a15b]" />
            La signature IMZA
          </p>
          <h2 id="signature-campaign-title" className="mt-8 max-w-[13ch] font-serif text-[clamp(3.8rem,6.5vw,6.7rem)] leading-[0.86] tracking-[-0.06em] text-[#fbf6ed] max-sm:text-[clamp(3.4rem,12vw,4.8rem)]">
            Un tailleur<br />qui vous <em className="font-normal text-[#e6c38c]">ressemble.</em>
          </h2>
          <p className="mt-8 max-w-[31rem] font-serif text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.65] text-[#f5e9db]/90 max-sm:mt-6">
            Confectionné avec soin au Maroc. Six couleurs choisies avec attention. Une silhouette affirmée, pensée pour vous accompagner partout.
          </p>
          <a href="#signature-suit" className="group mt-10 inline-flex min-h-16 items-center justify-between gap-10 border border-[#e6c38c]/80 px-7 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#fbf6ed] no-underline transition-colors hover:bg-[#f6efe6] hover:text-[#38141c] focus-visible:outline-offset-4 max-sm:mt-7 max-sm:min-h-14 max-sm:gap-6 max-sm:px-5">
            Découvrez le tailleur signature
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
