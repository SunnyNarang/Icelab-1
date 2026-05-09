import { motion } from "framer-motion";
import { tileBg, TILES } from "../lib/brandkit";

const STATS = [
  { k: "72h", v: "Directional freeze" },
  { k: "0", v: "Impurities, by design" },
  { k: "120+", v: "Premium venues" },
  { k: "100%", v: "Pan-India cold-chain" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 bg-[#060A12]"
      data-testid="about-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overline mb-8"
          >
            About · 01
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-4xl md:text-5xl lg:text-[64px] mb-10"
            data-testid="about-title"
          >
            From Gwalior to the world,
            <br />
            <span className="italic font-extralight text-ice-primary">
              raising the bar,
            </span>
            <br />
            one cube at a time.
          </motion.h2>

          <div className="space-y-6 text-white/65 font-light leading-relaxed text-[15px] max-w-xl">
            <p>
              ICELAB began with a quiet conviction — the most overlooked
              ingredient in any great drink is also the most important. We
              treat ice as material, not garnish.
            </p>
            <p>
              Every piece we craft is the product of triple-filtered water,
              directional freezing and hand-finishing. The result is ice with
              gallery-grade clarity and a melt rate built for the serve.
            </p>
          </div>

          <p className="mt-12 text-[11px] uppercase tracking-[0.4em] text-ice-primary/80">
            Local Pride · Global Quality · Trusted Partner
          </p>
        </div>

        {/* Brand-kit Tile 07 — Urban Gwalior campaign */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                ...tileBg(...TILES.urban),
                filter: "brightness(0.45) contrast(1.1) saturate(0.8)",
              }}
            />
            {/* Heavy edge masks to suppress kit labels/baked text */}
            <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-[#060A12] via-[#060A12]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#060A12] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-[6%] bg-[#060A12] pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[6%] bg-[#060A12] pointer-events-none" />
            <div className="absolute inset-0 bg-[#060A12]/35 pointer-events-none" />
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.32em] text-white/85">
              N° 002 · The Atelier
            </div>
          </div>

          {/* Stats card overlay */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-10 lg:-left-10 lg:right-auto bg-[#0B111E] border border-ice-border p-8 lg:p-10 lg:max-w-md">
            <p className="overline mb-6">By the Numbers</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {STATS.map((s) => (
                <div key={s.k}>
                  <div className="font-heading text-3xl text-white tracking-tight font-light">
                    {s.k}
                  </div>
                  <div className="mt-1.5 text-[10px] text-white/55 uppercase tracking-[0.16em] leading-relaxed">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
