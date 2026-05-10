import { motion } from "framer-motion";
import { Droplets, Sparkles, Eye, Hand } from "lucide-react";
import { VALUES } from "../lib/data";

const ICONS = [Droplets, Sparkles, Eye, Hand];

export const Values = () => {
  return (
    <section
      id="values"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 bg-[#060A12]"
      data-testid="values-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
             className="text-[11px] pb-8 tracking-[0.32em] uppercase font-medium text-[#BBD7FF]"
          >
            Principles
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-4xl md:text-5xl lg:text-[64px]"
            data-testid="values-title"
          >
            Clarity you can see.
            <br />
            <span className="italic font-extralight text-ice-primary">
              Quality you can feel.
            </span>
          </motion.h2>

          <p className="mt-8 max-w-md text-white/55 font-light leading-relaxed">
            Four operating principles that quietly shape every cube, sphere
            and slab that leaves the atelier.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ice-border border border-ice-border">
          {VALUES.map((v, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#060A12] p-8 lg:p-12 hover:bg-[#0B111E] transition-colors duration-300"
                data-testid={`value-card-${i}`}
              >
                <Icon
                  size={26}
                  strokeWidth={1.25}
                  className="text-ice-primary mb-12"
                />
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.32em] text-white/35">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl lg:text-2xl tracking-tight font-normal">
                    {v.title}
                  </h3>
                </div>
                <p className="text-white/55 text-sm font-light leading-relaxed">
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
