import { motion } from "framer-motion";
import { Box, Circle, Minus, Square, Sparkles, BadgeCheck } from "lucide-react";
import { PRODUCTS, TRUST_BADGES } from "../lib/data";

const ICONS = [Box, Circle, Minus, Square, Sparkles, BadgeCheck];

export const Products = () => {
  return (
    <section
      id="products"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 bg-[#060A12]"
      data-testid="products-section"
    >
      <div className="max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overline mb-8"
        >
          The Collection · 02
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-4xl md:text-6xl lg:text-7xl max-w-4xl"
          data-testid="products-title"
        >
          Six forms.
          <br />
          One <span className="italic font-extralight text-ice-primary">obsession</span>.
        </motion.h2>

        <p className="mt-8 max-w-xl text-white/60 font-light leading-relaxed">
          Each form solves a specific serve. Together, they form a complete
          vocabulary for the modern bar — engineered like glass, finished like
          jewellery.
        </p>
      </div>

      {/* Product list (textual cards, brand-kit aesthetic) */}
      <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ice-border border border-ice-border">
        {PRODUCTS.map((p, i) => {
          const Icon = ICONS[i];
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="bg-[#060A12] hover:bg-[#0B111E] transition-colors duration-300 p-8 lg:p-10 ring-ice"
              data-testid={`product-card-${p.id}`}
            >
              <div className="flex items-start justify-between mb-12">
                <Icon
                  size={28}
                  strokeWidth={1.25}
                  className="text-ice-primary"
                />
                <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">
                  {p.code}
                </span>
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl tracking-tight font-light leading-tight">
                {p.name}
              </h3>
              <p className="mt-2 text-ice-primary text-sm font-light italic">
                {p.tagline}
              </p>
              <p className="mt-5 text-white/55 text-sm leading-relaxed font-light">
                {p.description}
              </p>
              <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-white/45">
                <span>{p.spec}</span>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-ice-primary transition-colors"
                >
                  Enquire →
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Trust badges row */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ice-border border border-ice-border">
        {TRUST_BADGES.map((b) => (
          <div
            key={b}
            className="bg-[#060A12] p-6 text-center text-[10px] uppercase tracking-[0.28em] text-white/65"
          >
            {b}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
