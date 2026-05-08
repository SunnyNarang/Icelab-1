import { LogoFull } from "./Logo";
import { Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative px-6 md:px-12 lg:px-20 py-20 lg:py-24 overflow-hidden"
      data-testid="footer"
    >
      <div
        className="ambient-glow"
        style={{
          width: 480,
          height: 480,
          left: "30%",
          bottom: "-60%",
          background: "#3A8DFF",
          opacity: 0.18,
        }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="md:col-span-5">
          <LogoFull
            className="block w-32 h-32 lg:w-36 lg:h-36"
            style={{ objectFit: "contain" }}
          />
          <p className="mt-6 font-heading text-2xl md:text-3xl tracking-tight font-light text-white max-w-md leading-tight">
            Invisible yet
            <span className="italic text-ice-primary"> extraordinary</span>.
          </p>
          <p className="mt-5 text-white/55 text-sm font-light max-w-md leading-relaxed">
            Crafting the world&rsquo;s clearest ice for luxury bars, premium
            restaurants, hotels, and event ateliers. From Gwalior to the world.
          </p>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@icelab.co", label: "Email" },
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
          <p className="overline mb-5">Atelier</p>
          <p className="text-white/70 text-sm font-light leading-relaxed">
            Gwalior, Madhya Pradesh
            <br />
            India — 474001
          </p>
          <p className="mt-8 overline mb-3">Trade</p>
          <a
            href="mailto:hello@icelab.co"
            className="text-white/70 hover:text-ice-primary text-sm font-light transition-colors"
            data-testid="footer-email"
          >
            hello@icelab.co
          </a>
          <p className="mt-2 text-white/50 text-xs font-light tracking-wide">
            Mon — Sat · 10:00 — 19:00 IST
          </p>
        </div>

        <div className="md:col-span-4">
          <p className="overline mb-5">Sitemap</p>
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
                  className="text-white/70 hover:text-ice-primary transition-colors"
                  data-testid={`footer-link-${l.toLowerCase()}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 border border-ice-border bg-ice-surface/50 backdrop-blur-xl">
            <p className="overline mb-2">Whisper Letter</p>
            <p className="text-white/65 text-xs font-light leading-relaxed">
              Quiet dispatches on craftsmanship, bartender stories and limited
              releases. Sent only when worth your time.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mt-20 mb-8" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-white/40">
        <span>© {year} ICELAB · Invisible Luxury · All rights reserved</span>
        <span>Crafted with clarity in India</span>
      </div>
    </footer>
  );
};

export default Footer;
