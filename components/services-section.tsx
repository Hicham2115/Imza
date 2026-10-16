export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b7167]">Une attention personnelle</p>
          <h2 id="services-title" className="mt-4 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.05em]">À votre image.</h2>
          <p className="mt-5 text-sm leading-7 text-[#4d3432]">Trouver votre style signature mérite autant de soin que sa confection.</p>
        </div>
        <div className="grid gap-px bg-[#d6c7b7] md:grid-cols-3">
          {[
            ["01", "Trouvez votre coupe", "Des conseils attentifs pour choisir la silhouette et la taille qui vous correspondent."],
            ["02", "Choisissez votre couleur", "Six teintes soigneusement choisies, chacune avec son caractère."],
            ["03", "Un style bien à vous", "Une pièce élégante qui trouvera naturellement sa place dans votre quotidien."],
          ].map(([number, title, copy]) => (
            <article className="bg-[#f6efe6] px-8 py-9 sm:px-10 sm:py-11" key={number}>
              <span className="font-serif text-2xl text-[#a17b55]">{number}</span>
              <h3 className="mt-8 font-serif text-3xl tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-[#4d3432]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
