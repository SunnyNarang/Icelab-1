import { motion } from "framer-motion";
import HexagonMark from "./HexagonMark";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1777791375148-5d568498cec2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwYmFyJTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3ODIyNzgxOHww&ixlib=rb-4.1.0&q=85";

const STATS = [
  { k: "72h", v: "Directional freeze" },
  { k: "0", v: "Impurities, by design" },
  { k: "120+", v: "Premium venues served" },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="about-section"
    >
      <HexagonMark
        size={520}
        stroke="#8BD7FF"
        strokeWidth={1}
        opacity={0.05}
        animated
        className="hidden lg:block absolute"
        style={{ left: "-10%", top: "15%" }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <p className="overline">About — 01</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-6 text-white/70 font-light leading-relaxed text-[15px] md:text-base max-w-xl"
          >
            <p>
              ICELAB began with a quiet conviction — the most overlooked
              ingredient in any great drink is also the most important. We
              treat ice as material, not garnish.
            </p>
            <p>
              Every piece we craft is the product of triple-filtered water,
              directional freezing and hand-finishing. The result is ice with
              a gallery-grade clarity and a melt rate built for the serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-white/55"
          >
            <HexagonMark size={28} stroke="#8BD7FF" opacity={0.85} />
            <span>Invisible Luxury · Est. 2024</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
          className="lg:col-span-7 relative"
        >
          {/* Frame with corner ticks */}
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-ice-surface group">
            <img
              src={ABOUT_IMAGE}
              alt="Premium dark bar interior with luxury liquor bottles"
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0E1726]/70 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

            {/* Corner ticks */}
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((c, i) => (
              <span
                key={i}
                className={`absolute w-5 h-5 border-ice-primary/80 ${c}`}
              />
            ))}

            {/* Image label */}
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.32em] text-white/85">
              N° 002 — The Atelier
            </div>
          </div>

          {/* Stats card overlay */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-12 lg:-left-12 lg:max-w-md bg-[#0E1726]/90 backdrop-blur-xl border border-ice-border p-8 lg:p-10 glow-soft">
            <div className="flex items-center gap-3 mb-6">
              <HexagonMark size={20} stroke="#8BD7FF" />
              <p className="overline">By the Numbers</p>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {STATS.map((s) => (
                <div key={s.k}>
                  <div className="font-heading text-3xl md:text-4xl text-white tracking-tight font-light">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[10px] md:text-[11px] text-white/55 uppercase tracking-[0.16em] leading-relaxed">
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
