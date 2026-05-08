import { motion } from "framer-motion";
import { ArrowDown, Plus } from "lucide-react";
import HexagonMark from "./HexagonMark";
import Particles from "./Particles";

const HERO_IMAGE =
  "https://static.prod-images.emergentagent.com/jobs/c722b6d0-e96a-4482-92ab-5e24cb60d553/images/28ef96cd89af584a480b8d40511f65ca842a2e6a8206e01de28201751500b17b.png";

const META = [
  { k: "EST.", v: "Gwalior, IN" },
  { k: "SERVES", v: "Luxury Bars · Hotels · Events" },
  { k: "CRAFT", v: "72-hour Directional Freeze" },
];

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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726]/75 via-[#0E1726]/55 to-[#0E1726]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(58,141,255,0.18),transparent_60%)]" />

      {/* Logo hex mark — gigantic faded watermark */}
      <HexagonMark
        size={680}
        stroke="#8BD7FF"
        strokeWidth={1}
        opacity={0.06}
        animated
        className="hidden md:block absolute"
        style={{ right: "-8%", top: "10%" }}
      />
      <HexagonMark
        size={300}
        stroke="#8BD7FF"
        strokeWidth={1}
        opacity={0.04}
        className="hidden md:block absolute"
        style={{ left: "-6%", bottom: "20%" }}
      />

      {/* Ambient glows */}
      <div
        className="ambient-glow"
        style={{ width: 520, height: 520, top: "-15%", left: "-10%", background: "#3A8DFF" }}
      />
      <div
        className="ambient-glow"
        style={{ width: 600, height: 600, bottom: "-25%", right: "-15%", background: "#8BD7FF" }}
      />

      {/* Floating particles */}
      <Particles count={28} />

      {/* Light beam sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 h-full w-[30vw] beam-sweep"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,215,255,0.07), transparent)",
          }}
        />
      </div>

      {/* Side rails — corner ticks */}
      <div className="absolute top-32 left-6 lg:left-10 hidden md:flex flex-col items-start gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
        <span>N° 001</span>
        <span className="block w-px h-16 bg-white/15 mt-2" />
      </div>
      <div className="absolute top-32 right-6 lg:right-10 hidden md:flex flex-col items-end gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40">
        <span>MMXXIV</span>
        <span className="block w-px h-16 bg-white/15 mt-2" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-32 pb-12 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex items-center gap-4 mb-10"
            data-testid="hero-overline"
          >
            <p className="overline !text-white/85">
              ICELAB · Invisible Luxury
            </p>
            <span className="block w-1 h-1 rounded-full bg-ice-primary" />
            <p className="overline !text-white/55 hidden md:inline">
              Est. Gwalior · Worldwide
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="heading-display text-[15vw] md:text-[11vw] lg:text-[9.5vw] xl:text-[8.5rem] max-w-[1500px]"
            data-testid="hero-title"
          >
            <span className="block">Invisible</span>
            <span className="block">
              yet{" "}
              <span className="italic font-extralight text-ice-primary glow-text">
                extraordinary
              </span>
              <span className="text-ice-primary">.</span>
            </span>
          </motion.h1>

          <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.05 }}
              className="lg:col-span-6"
            >
              <p
                className="text-white/75 font-light text-base md:text-lg leading-relaxed max-w-xl"
                data-testid="hero-tagline"
              >
                Crafted with science. Defined by clarity. Elevated in every
                experience.{" "}
                <span className="text-white">This is invisible luxury.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="lg:col-span-6 flex flex-wrap gap-4 lg:justify-end"
            >
              <a
                href="#products"
                className="group inline-flex items-center gap-3 bg-ice-primary text-[#0E1726] hover:bg-ice-primaryHover px-9 py-4 text-[10.5px] uppercase tracking-[0.36em] font-medium transition-all duration-300"
                data-testid="hero-cta-primary"
              >
                Explore the Collection
                <span className="block w-2 h-2 rounded-full bg-[#0E1726] transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-ice-primary hover:text-ice-primary px-9 py-4 text-[10.5px] uppercase tracking-[0.36em] font-medium transition-all duration-300"
                data-testid="hero-cta-secondary"
              >
                Enquire for Trade
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip — meta data */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.45 }}
          className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center"
        >
          {META.map((m) => (
            <div key={m.k} className="flex items-center gap-3">
              <Plus size={11} strokeWidth={1.5} className="text-ice-primary" />
              <div>
                <div className="text-[9px] uppercase tracking-[0.32em] text-white/40">
                  {m.k}
                </div>
                <div className="text-[12px] tracking-wide text-white/85 mt-1 font-light">
                  {m.v}
                </div>
              </div>
            </div>
          ))}
          <a
            href="#about"
            className="hidden md:inline-flex items-center justify-end gap-3 text-[10px] uppercase tracking-[0.32em] text-white/55 hover:text-ice-primary transition-colors group"
            data-testid="hero-scroll-cue"
          >
            <ArrowDown
              size={14}
              strokeWidth={1.5}
              className="animate-bounce"
            />
            <span>Begin the experience</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
