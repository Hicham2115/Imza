import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className="bg-[#f6efe6] px-6 py-20 text-primary sm:px-10 lg:px-20 lg:py-28" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_0.8fr] items-center gap-[clamp(2rem,8vw,8rem)] max-sm:grid-cols-1 max-sm:gap-8">
        <div className="max-w-[39rem]">
          <p className="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b7167]">A personal touch</p>
          <h2 className="mb-0 mt-4 font-serif text-[clamp(3.4rem,7vw,6rem)] font-normal leading-[0.92] tracking-[-0.055em]" id="contact-title">We’re here<br />for you.</h2>
          <p className="mb-0 mt-5 max-w-[27rem] text-sm leading-7 text-[#735c57]">Need a little guidance choosing your suit? Our team would love to help you find your expression.</p>
        </div>
        <div className="border border-[#d6c7b7] bg-[#f3e9dd] p-7 max-sm:p-5">
          <span className="flex size-11 items-center justify-center rounded-full border border-[#d6c7b7] text-primary"><Mail aria-hidden="true" className="size-5 stroke-[1.3]" /></span>
          <p className="mb-0 mt-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#8b7167]">Get in touch</p>
          <a className="group mt-2 flex items-center justify-between gap-3 border-b border-[#cbb8aa] pb-4 font-serif text-[clamp(1.25rem,2.6vw,2rem)] tracking-[-0.03em] text-primary no-underline focus-visible:outline-offset-4" href="mailto:hello@yourbrand.com">hello@yourbrand.com<ArrowUpRight aria-hidden="true" className="size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          <p className="mb-0 mt-4 text-[0.62rem] leading-[1.7] tracking-[0.04em] text-[#735c57]">Placeholder contact address — replace with your real email.</p>
        </div>
      </div>
    </section>
  );
}
