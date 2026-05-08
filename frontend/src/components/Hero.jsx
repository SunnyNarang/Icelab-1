import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE =
  "https://static.prod-images.emergentagent.com/jobs/c722b6d0-e96a-4482-92ab-5e24cb60d553/images/28ef96cd89af584a480b8d40511f65ca842a2e6a8206e01de28201751500b17b.png";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden grain"
      data-testid="hero-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Tonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726]/70 via-[#0E1726]/55 to-[#0E1726]" />
      {/* Ambient glows */}
      <div
        className="ambient-glow"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          left: "-10%",
          background: "#3A8DFF",
        }}
      />
      <div
        className="ambient-glow"
        style={{
          width: 600,
          height: 600,
          bottom: "-20%",
          right: "-10%",
          background: "#8BD7FF",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-20 pt-40 pb-16 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="overline mb-8"
            data-testid="hero-overline"
          >
            <span className="inline-block w-8 h-px bg-ice-primary align-middle mr-3" />
            ICELAB · EST. GWALIOR
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.7, 0, 0.3, 1] }}
            className="heading-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[7.5rem] max-w-[1400px]"
            data-testid="hero-title"
          >
            Invisible
            <br />
            yet{" "}
            <span className="italic font-light text-ice-primary glow-text">
              extraordinary
            </span>
            .
          </motion.h1>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="lg:col-span-6 lg:col-start-1 text-white/75 font-light text-base md:text-lg leading-relaxed max-w-xl"
              data-testid="hero-tagline"
            >
              Crafted with science. Defined by clarity. Elevated in every
              experience. This is invisible luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.15 }}
              className="lg:col-span-5 lg:col-start-8 flex flex-wrap gap-4 lg:justify-end"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-3 bg-ice-primary text-[#0E1726] hover:bg-ice-primaryHover px-8 py-4 text-[11px] uppercase tracking-[0.32em] font-medium transition-all duration-300"
                data-testid="hero-cta-primary"
              >
                Explore the Collection
                <span className="w-2 h-2 rounded-full bg-[#0E1726]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-ice-primary hover:text-ice-primary px-8 py-4 text-[11px] uppercase tracking-[0.32em] font-medium transition-all duration-300"
                data-testid="hero-cta-secondary"
              >
                Enquire for Trade
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-white/55"
        >
          <span className="hidden sm:inline">Scroll</span>
          <a
            href="#about"
            className="inline-flex items-center gap-3 hover:text-ice-primary transition-colors"
            data-testid="hero-scroll-cue"
          >
            <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
            <span>Begin the experience</span>
          </a>
          <span className="hidden sm:inline">India · Worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
