import Header from "@/layout/header";
import Hero from "@/components/hero";

const suitColors = [
  { name: "Burgundy", swatch: "bg-[#651326]" },
  { name: "Black", swatch: "bg-[#181817]" },
  { name: "Ivory", swatch: "bg-[#e8ddca]" },
  { name: "Sage", swatch: "bg-[#777b66]" },
  { name: "Cocoa", swatch: "bg-[#654331]" },
  { name: "Navy", swatch: "bg-[#17243a]" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section
          aria-labelledby="signature-title"
          className="flex min-h-[34rem] flex-col items-center justify-center bg-[#f3e9dd] px-8 py-24 text-center max-sm:min-h-0 max-sm:px-5 max-sm:py-[5.5rem]"
          id="signature-suit"
        >
          <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">The signature suit</p>
          <h2 className="mt-5 text-[clamp(3.25rem,6vw,6rem)] font-normal leading-[0.98] tracking-[-0.055em] text-primary max-sm:text-[clamp(3rem,11vw,5rem)]" id="signature-title">
            A single silhouette.
            <br />
            Six expressions.
          </h2>
          <p className="mt-6 text-[0.9rem] tracking-[0.04em] text-[#735c57] max-sm:max-w-[22rem] max-sm:text-[0.82rem] max-sm:leading-[1.6]" id="our-story">
            Thoughtfully tailored in Morocco. Made for every version of you.
          </p>
          <ul className="mt-12 grid w-full max-w-[58rem] grid-cols-6 gap-4 p-0 max-sm:mt-10 max-sm:grid-cols-3 max-sm:gap-y-6" aria-label="Available suit colors">
            {suitColors.map((color) => (
              <li className="flex flex-col items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-foreground" key={color.name}>
                <span
                  aria-hidden="true"
                  className={`block aspect-square w-[2.4rem] rounded-full border border-[rgb(56_20_28_/_12%)] ${color.swatch}`}
                />
                <span>{color.name}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex min-h-72 flex-col items-center justify-center gap-4 px-8 py-16 text-center max-sm:min-h-60 max-sm:px-6" id="journal">
          <p className="m-0 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-primary">The IMZA journal</p>
          <p className="m-0 font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] text-[#735c57]">Notes on tailoring, confidence, and finding your own standard.</p>
          <a className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary underline decoration-1 underline-offset-4" href="#top">Back to the beginning</a>
        </section>
      </main>
    </>
  );
}
