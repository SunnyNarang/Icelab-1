import { motion } from "framer-motion";
import { productImg } from "../lib/brandkit";
import { PRODUCTS, TRUST_BADGES } from "../lib/data";

const ProductCard = ({ p, i }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55, delay: i * 0.05 }}
    className="group relative bg-[#0B111E] border border-ice-border overflow-hidden"
    data-testid={`product-card-${p.id}`}
  >
    {/* Image */}
    <div className="relative aspect-[3/3] overflow-hidden bg-[#060A12]">
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
        style={productImg(...p.img)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.32em] text-white/85">
        {p.code}
      </div>
      <div className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.24em] text-white/55">
        {p.spec}
      </div>
    </div>

    {/* Content */}
    <div className="p-7 lg:p-9">
      <h3 className="font-heading text-2xl lg:text-3xl tracking-tight font-light leading-tight">
        {p.name}
      </h3>
      <p className="mt-2 text-ice-primary text-sm font-light italic">
        {p.tagline}
      </p>
      <p className="mt-5 text-white/55 text-sm leading-relaxed font-light">
        {p.description}
      </p>
      <div className="mt-7 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-white/45">
        <span>0{i + 1} / 06</span>
        <a
          href="#contact"
          className="text-white/70 hover:text-ice-primary transition-colors"
        >
          Enquire →
        </a>
      </div>
    </div>
  </motion.article>
);

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
           className="text-[11px] pb-8 tracking-[0.32em] uppercase font-medium text-[#BBD7FF]"
        >
          The Collection
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

      {/* Product grid — image-led editorial cards */}
      <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {PRODUCTS.map((p, i) => (
          <ProductCard p={p} i={i} key={p.id} />
        ))}
      </div>

      {/* Trust badges row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ice-border border border-ice-border">
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
