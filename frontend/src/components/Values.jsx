import { motion } from "framer-motion";
import { Droplets, Sparkles, Eye, Hand } from "lucide-react";
import HexagonMark from "./HexagonMark";
import { VALUES } from "../lib/data";

const ICONS = [Droplets, Sparkles, Eye, Hand];

export const Values = () => {
  return (
    <section
      id="values"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 overflow-hidden"
      data-testid="values-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <p className="overline">Principles · 04</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-section text-4xl md:text-5xl lg:text-[64px]"
            data-testid="values-title"
          >
            What we
            <br />
            <span className="italic font-extralight text-ice-primary">refuse to compromise.</span>
          </motion.h2>

          <p className="mt-8 max-w-md text-white/65 font-light leading-relaxed">
            Four operating principles that quietly shape every cube, sphere
            and slab that leaves the atelier.
          </p>

          <div className="mt-12 hidden lg:block">
            <HexagonMark size={120} stroke="#8BD7FF" opacity={0.25} />
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ice-border border border-ice-border">
          {VALUES.map((v, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-[#0E1726] p-8 lg:p-12 group hover:bg-ice-surface transition-colors duration-500 relative"
                data-testid={`value-card-${i}`}
              >
                <div className="mb-12 relative inline-flex items-center justify-center w-16 h-16">
                  <HexagonMark
                    size={64}
                    stroke="#8BD7FF"
                    opacity={0.4}
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <Icon
                    size={20}
                    strokeWidth={1.25}
                    className="text-ice-primary relative z-10"
                  />
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl tracking-tight font-normal">
                    {v.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
