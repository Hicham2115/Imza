import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function IvorySuitCampaign() {
  return (
    <section aria-labelledby="ivory-campaign-title" className="relative isolate min-h-[680px] overflow-hidden bg-[#32121a] text-[#f8f2e9] sm:min-h-[740px] lg:min-h-[min(860px,90svh)]">
      <Image
        alt="A woman wearing the IMZA ivory signature suit in a sunlit Moroccan riad"
        className="object-cover object-[center_center] max-sm:object-[27%_center]"
        fill
        sizes="100vw"
        src="/imza-signature-ivory-campaign.png"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-0 bg-[linear-gradient(270deg,rgba(31,12,16,0.9)_0%,rgba(49,18,25,0.76)_38%,rgba(49,18,25,0.08)_78%),linear-gradient(0deg,rgba(31,12,16,0.16),transparent_50%)] max-sm:bg-[linear-gradient(0deg,rgba(31,12,16,0.92)_0%,rgba(49,18,25,0.54)_52%,rgba(49,18,25,0.08)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1600px] items-center justify-end px-6 py-16 sm:min-h-[740px] sm:px-10 lg:min-h-[min(860px,90svh)] lg:px-[7vw]">
        <div className="max-w-[760px] pt-40 text-left sm:pt-24 md:text-right">
          <p className="flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#e8c78f] md:justify-end">
            <span aria-hidden="true" className="h-px w-9 bg-[#c9a15b]" />
            The IMZA signature
          </p>
          <h2 id="ivory-campaign-title" className="mt-8 ml-0 max-w-[13ch] font-serif text-[clamp(3.8rem,6.5vw,6.7rem)] leading-[0.86] tracking-[-0.06em] text-[#fbf6ed] md:ml-auto max-sm:text-[clamp(3.4rem,12vw,4.8rem)]">
            Quietly bold.<br /><em className="font-normal text-[#e6c38c]">Always you.</em>
          </h2>
          <p className="mt-8 max-w-[31rem] font-serif text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.65] text-[#f5e9db]/90 max-sm:mt-6 md:ml-auto">
            A softer expression of the signature suit. Clean lines, considered detail, and an effortless confidence that goes with everything.
          </p>
          <a href="#signature-suit" className="group mt-10 inline-flex min-h-16 items-center justify-between gap-10 border border-[#e6c38c]/80 px-7 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#fbf6ed] no-underline transition-colors hover:bg-[#f6efe6] hover:text-[#38141c] focus-visible:outline-offset-4 max-sm:mt-7 max-sm:min-h-14 max-sm:gap-6 max-sm:px-5">
            Explore the ivory suit
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
