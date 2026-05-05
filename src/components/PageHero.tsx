const PageHero = ({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent?: string; subtitle?: string }) => (
  <section className="relative bg-gradient-dark text-secondary-foreground py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero opacity-60" />
    <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-primary rounded-full blur-3xl opacity-30" />
    <div className="container relative text-center max-w-3xl">
      <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">{eyebrow}</p>
      <h1 className="text-5xl md:text-7xl font-black mb-5">
        {title} {accent && <span className="text-gradient-primary">{accent}</span>}
      </h1>
      {subtitle && <p className="text-lg opacity-80">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
