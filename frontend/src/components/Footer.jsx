import { LogoMark } from "./Logo";
import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative px-6 md:px-12 lg:px-20 py-20 lg:py-24 bg-[#060A12]"
      data-testid="footer"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <LogoMark size={48} />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-base tracking-[0.42em] uppercase text-white">
                ICELAB
              </span>
              <span className="mt-1.5 text-[10px] tracking-[0.42em] uppercase text-ice-primary/85">
                Invisible Luxury
              </span>
            </div>
          </div>
          <p className="font-heading text-2xl md:text-3xl tracking-tight font-light text-white max-w-md leading-tight">
            Pure ice.{" "}
            <span className="italic text-ice-primary">Perfect experiences.</span>
          </p>
          <p className="mt-5 text-white/50 text-sm font-light max-w-md leading-relaxed">
            Crafting the world&rsquo;s clearest ice for luxury bars, premium
            restaurants, hotels and event ateliers. From Gwalior to the world.
          </p>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/icelab.india", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@icelab.in", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 inline-flex items-center justify-center border border-ice-border hover:border-ice-primary hover:text-ice-primary transition-colors"
                data-testid={`footer-social-${label.toLowerCase()}`}
              >
                <Icon size={15} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.32em] uppercase font-medium text-[#BBD7FF] mb-5">Atelier</p>
          <p className="text-white/65 text-sm font-light leading-relaxed">
            Gwalior, Madhya Pradesh
            <br />
            India · 474001
          </p>
          <p className="mt-8 text-[11px] tracking-[0.32em] uppercase font-medium text-[#BBD7FF] mb-3">Trade</p>
          <a
            href="mailto:hello@icelab.in"
            className="text-white/65 hover:text-ice-primary text-sm font-light transition-colors"
            data-testid="footer-email"
          >
            hello@icelab.in
          </a>
          <p className="mt-2 text-white/45 text-xs font-light tracking-wide">
            Mon — Sat · 10:00 — 19:00 IST
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="otext-[11px] tracking-[0.32em] uppercase font-medium text-[#BBD7FF] mb-5">Sitemap</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-light">
            {[
              ["About", "#about"],
              ["Collection", "#products"],
              ["Process", "#process"],
              ["Values", "#values"],
              ["Stories", "#testimonials"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  className="text-white/65 hover:text-ice-primary transition-colors"
                  data-testid={`footer-link-${l.toLowerCase()}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 border border-ice-border bg-[#0B111E]">
            <p className="text-[11px] tracking-[0.32em] uppercase font-medium text-[#BBD7FF] mb-2">Whisper Letter</p>
            <p className="text-white/55 text-xs font-light leading-relaxed">
              Quiet dispatches on craftsmanship, bartender stories and limited
              releases. Sent only when worth your time.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-white/35">
        <span>© {year} ICELAB · Invisible Luxury · All rights reserved</span>
        <span>www.icelab.in</span>
      </div>
    </footer>
  );
};

export default Footer;
