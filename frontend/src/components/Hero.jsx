import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { HERO_CUBE } from "../lib/brandkit";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-12 w-full overflow-hidden bg-[#060A12]"
      data-testid="hero-section"
    >
      {/* Hero crystal cube — bottom-anchored with top padding */}
      <div
  className="absolute inset-0 opacity-55 lg:opacity-100"
  style={{
    backgroundImage: `url(${HERO_CUBE})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 90%",
    backgroundPosition: "85% bottom",
  }}
/>

      <div className="absolute inset-0 bg-gradient-to-r from-[#060A12]/95 via-[#060A12]/70 via-[55%] to-transparent" />

<div className="absolute inset-0 bg-gradient-to-b from-[#060A12]/50 via-transparent to-[#060A12]" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-24 pb-12 lg:pb-20">
         
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="heading-display text-[clamp(1rem,10vw,8rem)] leading-[0.9]"
            data-testid="hero-title"
          >
            Invisible
            <br />
            yet{" "}
           <motion.span
  className="italic font-extralight text-ice-primary inline-block"
  style={{
  filter: "drop-shadow(0 0 10px rgba(180,240,255,0.35))",
}}
  animate={{
    textShadow: [
      "0 0 4px rgba(180,240,255,0.15)",
      "0 0 12px rgba(180,240,255,0.45)",
      "0 0 6px rgba(180,240,255,0.22)",
    ],
    opacity: [0.92, 1, 0.95],
  }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  extraordinary
</motion.span>
            <span className="text-ice-primary">.</span>
          </motion.h1>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <p
                className="text-white/75 font-light text-base md:text-lg leading-relaxed max-w-xl"
                data-testid="hero-tagline"
              >
                Crafted with science. Defined by clarity. Elevated in every
                experience. <span className="text-white">This is invisible luxury.</span>
              </p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.36em] text-ice-primary/80">
                Pure · Premium · Pristine
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="lg:col-span-6 flex flex-wrap gap-4 lg:justify-end"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-3 bg-ice-primary text-[#060A12] hover:bg-ice-primaryHover px-9 py-4 text-[10.5px] uppercase tracking-[0.36em] font-medium transition-colors"
                data-testid="hero-cta-primary"
              >
                Explore the Collection
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-ice-primary hover:text-ice-primary px-9 py-4 text-[10.5px] uppercase tracking-[0.36em] font-medium transition-colors"
                data-testid="hero-cta-secondary"
              >
                Enquire for Trade
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="px-6 md:px-10 lg:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-[10px] uppercase tracking-[0.32em] text-white/45"
        >
          <span>N° 001 · Est. Gwalior</span>
          <span className="hidden md:inline">72-Hour Directional Freeze</span>
          <span className="hidden md:inline">Pan-India Cold-Chain</span>
          <a
            href="#about"
            className="inline-flex items-center justify-end gap-2 hover:text-ice-primary transition-colors"
            data-testid="hero-scroll-cue"
          >
            <ArrowDown size={13} strokeWidth={1.5} />
            <span>Begin</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
