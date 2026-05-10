import { motion } from "framer-motion";
import { GLASS_CUBE } from "../lib/brandkit";

const STATS = [
  { k: "72h", v: "Directional freeze" },
  { k: "0", v: "Impurities, by design" },
  { k: "120+", v: "Premium venues" },
  { k: "100%", v: "Pan-India cold-chain" },
];

export const About = () => {
  return (
<section className="relative overflow-hidden py-24 lg:py-32">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 opacity-50 lg:opacity-100 lg:bg-fixed"
    style={{
      backgroundImage: `url(${GLASS_CUBE})`,
      backgroundSize: "cover",
      backgroundPosition: "60% center",
    }}
  />
  {/* Dark cinematic overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#060A12]/95 via-[#060A12]/88 via-[65%] to-[#060A12]/10" />


  {/* Optional subtle gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#060A12]/50 to-[#060A12]" />

  <div className="relative z-10 container mx-auto px-6 lg:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      
      {/* Left Content */}
      <div className="lg:col-span-7">
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
          className="heading-section text-4xl md:text-5xl lg:text-[64px] leading-[0.92] mb-10 max-w-5xl"
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

        <div className="space-y-6 text-white/65 font-light leading-relaxed text-[15px] max-w-2xl">
          <p>
            ICELAB began with a quiet conviction — the most overlooked
            ingredient in any great drink is also the most important.
            We treat ice as material, not garnish.
          </p>

          <p>
            Every piece we craft is the product of triple-filtered water,
            directional freezing and hand-finishing. The result is ice
            with gallery-grade clarity and a melt rate built for the serve.
          </p>
        </div>

        <p className="mt-12 text-[11px] uppercase tracking-[0.4em] text-ice-primary/80">
          Local Pride · Global Quality · Trusted Partner
        </p>
      </div>

      {/* Floating Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="lg:col-span-5"
      >
        <div className="bg-[#0B111E]/90 backdrop-blur-md border border-ice-border p-8 lg:p-10">
          <p className="overline mb-6">By the Numbers</p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
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
  </div>
</section>

  );
};

export default About;
