import { motion } from "framer-motion";
import { Droplets, Sparkles, Eye, Hand } from "lucide-react";
import { VALUES } from "../lib/data";

const ICONS = [Droplets, Sparkles, Eye, Hand];

export const Values = () => {
  return (
    <section
      id="values"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-ice-border"
      data-testid="values-section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overline mb-8"
          >
            <span className="inline-block w-8 h-px bg-ice-primary align-middle mr-3" />
            Principles — 04
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-section text-4xl md:text-5xl lg:text-6xl"
            data-testid="values-title"
          >
            What we
            <br />
            <span className="italic text-ice-primary">refuse to compromise.</span>
          </motion.h2>

          <p className="mt-8 max-w-md text-white/65 font-light leading-relaxed">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="bg-[#0E1726] p-8 lg:p-10 group hover:bg-ice-surface transition-colors duration-500"
                data-testid={`value-card-${i}`}
              >
                <div className="mb-10 inline-flex items-center justify-center w-12 h-12 border border-ice-border group-hover:border-ice-primary transition-colors">
                  <Icon size={20} strokeWidth={1.25} className="text-ice-primary" />
                </div>
                <h3 className="font-heading text-xl lg:text-2xl tracking-tight font-normal mb-3">
                  {v.title}
                </h3>
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
