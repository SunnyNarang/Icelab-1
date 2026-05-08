export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t border-ice-border px-6 md:px-12 lg:px-20 py-16 lg:py-20"
      data-testid="footer"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-ice-primary glow-soft animate-glow-pulse" />
            <span className="font-heading text-base tracking-[0.4em] uppercase">
              ICELAB
            </span>
          </div>
          <p className="font-heading text-2xl md:text-3xl tracking-tight font-light text-white max-w-md leading-tight">
            Invisible yet
            <span className="italic text-ice-primary"> extraordinary</span>.
          </p>
          <p className="mt-6 text-white/55 text-sm font-light max-w-md leading-relaxed">
            Crafting the world&rsquo;s clearest ice for luxury bars, premium
            restaurants, hotels, and event ateliers since 2024.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="overline mb-5">Atelier</p>
          <p className="text-white/70 text-sm font-light leading-relaxed">
            Gwalior, Madhya Pradesh
            <br />
            India — 474001
          </p>
          <p className="mt-6 overline mb-3">Contact</p>
          <a
            href="mailto:hello@icelab.co"
            className="text-white/70 hover:text-ice-primary text-sm font-light transition-colors"
            data-testid="footer-email"
          >
            hello@icelab.co
          </a>
        </div>

        <div className="md:col-span-4">
          <p className="overline mb-5">Sitemap</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-light">
            {[
              ["About", "#about"],
              ["Products", "#products"],
              ["Process", "#process"],
              ["Values", "#values"],
              ["Stories", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  className="text-white/70 hover:text-ice-primary transition-colors"
                  data-testid={`footer-link-${l.toLowerCase()}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 lg:mt-20 pt-8 border-t border-ice-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-white/40">
        <span>© {year} ICELAB · All rights reserved</span>
        <span>From Gwalior to the world</span>
      </div>
    </footer>
  );
};

export default Footer;
