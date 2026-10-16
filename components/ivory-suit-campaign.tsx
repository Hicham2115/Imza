import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function IvorySuitCampaign() {
  return (
    <section aria-labelledby="ivory-campaign-title" className="relative isolate min-h-[680px] overflow-hidden bg-[#55101f] text-[#f8f2e9] sm:min-h-[740px] lg:min-h-[min(860px,90svh)]">
      <picture className="absolute inset-0">
        <source media="(max-width: 639px)" srcSet="/imza-signature-ivory-campaign-mobile.webp" />
        <Image
          alt="Une femme portant le tailleur signature ivoire IMZA dans un riad ensoleillé"
          className="object-cover object-center"
          fill
          sizes="100vw"
          src="/imza-signature-ivory-campaign.png"
        />
      </picture>
      <div aria-hidden="true" className="absolute inset-0 -z-0 bg-[linear-gradient(270deg,rgba(31,12,16,0.9)_0%,rgba(49,18,25,0.76)_38%,rgba(49,18,25,0.08)_78%),linear-gradient(0deg,rgba(31,12,16,0.16),transparent_50%)] max-sm:bg-[linear-gradient(0deg,rgba(31,12,16,0.92)_0%,rgba(49,18,25,0.54)_52%,rgba(49,18,25,0.08)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1600px] items-center justify-end px-6 py-16 sm:min-h-[740px] sm:px-10 lg:min-h-[min(860px,90svh)] lg:px-[7vw]">
        <div className="max-w-[760px] pt-40 text-right sm:pt-24">
          <p className="flex items-center justify-end gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e8c78f]">
            <span aria-hidden="true" className="h-px w-9 bg-[#c9a15b]" />
            La signature IMZA
          </p>
          <h2 id="ivory-campaign-title" className="ml-auto mt-8 max-w-[13ch] font-serif text-[clamp(3.8rem,6.5vw,6.7rem)] leading-[0.86] tracking-[-0.06em] text-[#fbf6ed] max-sm:text-[clamp(3.4rem,12vw,4.8rem)]">
            Une élégance<br /><em className="font-normal text-[#e6c38c]">affirmée.</em>
          </h2>
          <p className="ml-auto mt-8 max-w-[31rem] font-serif text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.65] text-[#f5e9db]/90 max-sm:mt-6">
            Une interprétation plus douce du tailleur signature. Des lignes épurées, des détails soignés et une assurance naturelle qui s’accorde à tout.
          </p>
          <a href="#signature-suit" className="group ml-auto mt-10 inline-flex min-h-16 items-center justify-between gap-10 border border-[#e6c38c]/80 px-7 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#fbf6ed] no-underline transition-colors hover:bg-[#f6efe6] hover:text-[#38141c] focus-visible:outline-offset-4 max-sm:mt-7 max-sm:min-h-14 max-sm:gap-6 max-sm:px-5">
            Découvrez le tailleur ivoire
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
