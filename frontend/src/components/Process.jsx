import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../lib/data";

export const Process = () => {
  return (
    <section
      id="process"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 bg-[#0B111E]"
      data-testid="process-section"
    >
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overline mb-8"
        >
          Craftsmanship · 03
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-section text-4xl md:text-5xl lg:text-[64px]"
          data-testid="process-title"
        >
          A four-stage atelier.
          <br />
          <span className="italic font-extralight text-ice-primary">
            Slow by design.
          </span>
        </motion.h2>

        <p className="mt-8 max-w-xl text-white/55 font-light leading-relaxed">
          Clarity you can see. Quality you can feel. Every step measured,
          every cut deliberate.
        </p>
      </div>

      <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ice-border border border-ice-border">
        {PROCESS_STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-[#0B111E] p-8 lg:p-10 hover:bg-[#0F1726] transition-colors duration-300"
            data-testid={`process-step-${s.n}`}
          >
            <span className="font-heading text-[11px] uppercase tracking-[0.32em] text-white/40">
              Step {s.n}
            </span>
            <h3 className="mt-12 font-heading text-2xl lg:text-3xl tracking-tight font-light mb-4">
              {s.title}
            </h3>
            <p className="text-white/55 text-sm font-light leading-relaxed">
              {s.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
