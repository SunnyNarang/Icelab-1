import { motion } from "framer-motion";
import { PRODUCTS } from "../lib/data";

const ProductCard = ({ p, i }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: i * 0.06, ease: [0.7, 0, 0.3, 1] }}
      className={`group relative overflow-hidden bg-ice-surface border border-ice-border ${p.span}`}
      data-testid={`product-card-${p.id}`}
    >
      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-[#0E1726]/40 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />

        <div className="relative h-full flex flex-col justify-end p-7 lg:p-10 z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="overline">
              {String(i + 1).padStart(2, "0")} / {PRODUCTS.length.toString().padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-white/50">
              {p.spec}
            </span>
          </div>

          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight font-light leading-none">
            {p.name}
          </h3>
          <p className="mt-3 text-ice-primary text-sm md:text-base font-light italic">
            {p.tagline}
          </p>
          <p className="mt-5 text-white/65 text-sm leading-relaxed max-w-md font-light">
            {p.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/70 group-hover:text-ice-primary transition-colors">
            <span>Enquire</span>
            <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const Products = () => {
  return (
    <section
      id="products"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-ice-border"
      data-testid="products-section"
    >
      <div className="max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overline mb-8"
        >
          <span className="inline-block w-8 h-px bg-ice-primary align-middle mr-3" />
          The Collection — 02
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="heading-section text-4xl md:text-6xl lg:text-7xl max-w-4xl"
          data-testid="products-title"
        >
          Six forms.
          <br />
          One <span className="italic text-ice-primary">obsession</span>.
        </motion.h2>

        <p className="mt-8 max-w-xl text-white/65 font-light leading-relaxed">
          Each form solves a specific serve. Together, they form a complete
          vocabulary for the modern bar.
        </p>
      </div>

      <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 auto-rows-[minmax(380px,_auto)] lg:auto-rows-[460px]">
        {PRODUCTS.map((p, i) => (
          <ProductCard p={p} i={i} key={p.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
