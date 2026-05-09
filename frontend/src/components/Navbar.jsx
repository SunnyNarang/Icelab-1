import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoCompact } from "./Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Collection", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Values", href: "#values" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#060A12]/85 backdrop-blur-xl" : "bg-transparent"
        }`}
        data-testid="site-navbar"
      >
        <div className="px-6 md:px-10 lg:px-16 py-4 lg:py-5 flex items-center justify-between">
          <LogoCompact />

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[10.5px] uppercase tracking-[0.32em] text-white/65 hover:text-ice-primary transition-colors"
                data-testid={`nav-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.32em] bg-ice-primary/0 hover:bg-ice-primary text-white hover:text-[#060A12] border border-ice-primary px-5 py-3 transition-colors"
            data-testid="nav-cta"
          >
            <span>Enquire</span>
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-2 text-white"
            data-testid="nav-menu-open"
          >
            <Menu strokeWidth={1.25} size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#060A12]/97 backdrop-blur-xl lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 flex items-center justify-between">
              <LogoCompact />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2"
                data-testid="nav-menu-close"
              >
                <X strokeWidth={1.25} size={22} />
              </button>
            </div>
            <nav className="px-6 py-12 flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-3xl tracking-tight uppercase font-light hover:text-ice-primary transition-colors flex items-center justify-between"
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                >
                  <span>{l.label}</span>
                  <ArrowUpRight size={18} strokeWidth={1.25} className="text-ice-primary" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
