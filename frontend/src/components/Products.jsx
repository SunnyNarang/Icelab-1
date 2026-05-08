import { motion } from "framer-motion";
import HexagonMark from "./HexagonMark";
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
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726] via-[#0E1726]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1726]/60 via-transparent to-transparent lg:to-[#0E1726]/40" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />

        {/* Top label */}
        <div className="absolute top-7 left-7 lg:top-9 lg:left-9 z-10 flex items-center gap-3">
          <HexagonMark size={22} stroke="#8BD7FF" opacity={0.9} />
          <span className="text-[10px] uppercase tracking-[0.32em] text-white/85">
            ICE — {String(i + 1).padStart(3, "0")}
          </span>
        </div>
        <div className="absolute top-7 right-7 lg:top-9 lg:right-9 z-10 text-[10px] uppercase tracking-[0.24em] text-white/55">
          {p.spec}
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-7 lg:p-10 z-10">
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight font-light leading-[0.95]">
            {p.name}
          </h3>
          <p className="mt-3 text-ice-primary text-sm md:text-base font-light italic">
            {p.tagline}
          </p>
          <p className="mt-5 text-white/65 text-sm leading-relaxed max-w-md font-light">
            {p.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 text-[10.5px] uppercase tracking-[0.36em] text-white/70 group-hover:text-ice-primary transition-colors">
            <span>Enquire</span>
            <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
          </div>
        </div>

        {/* Light glint on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "linear-gradient(115deg, transparent 35%, rgba(139,215,255,0.08) 50%, transparent 65%)",
          }}
        />
      </div>
    </motion.article>
  );
};

export const Products = () => {
  return (
    <section
      id="products"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-ice-border overflow-hidden"
      data-testid="products-section"
    >
      <div
        className="ambient-glow"
        style={{
          width: 600,
          height: 600,
          right: "-20%",
          top: "10%",
          background: "#3A8DFF",
          opacity: 0.18,
        }}
      />

      <div className="relative max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-10 h-px bg-ice-primary" />
          <p className="overline">The Collection — 02</p>
        </motion.div>

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
          One <span className="italic font-extralight text-ice-primary">obsession</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 max-w-xl text-white/65 font-light leading-relaxed"
        >
          Each form solves a specific serve. Together, they form a complete
          vocabulary for the modern bar — engineered like glass, finished like
          jewellery.
        </motion.p>
      </div>

      <div className="relative mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 auto-rows-[minmax(380px,_auto)] lg:auto-rows-[480px]">
        {PRODUCTS.map((p, i) => (
          <ProductCard p={p} i={i} key={p.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
