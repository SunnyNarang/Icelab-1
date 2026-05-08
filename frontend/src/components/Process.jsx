import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../lib/data";

const PROCESS_BG =
  "https://images.unsplash.com/photo-1767022724924-993b00fc04b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmFyJTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3ODIyNzgxOHww&ixlib=rb-4.1.0&q=85";

export const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-ice-border"
      data-testid="process-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${PROCESS_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726] via-[#0E1726]/85 to-[#0E1726]" />

      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overline mb-8"
          >
            <span className="inline-block w-8 h-px bg-ice-primary align-middle mr-3" />
            Craftsmanship — 03
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-section text-4xl md:text-5xl lg:text-6xl"
            data-testid="process-title"
          >
            A four-stage atelier.
            <br />
            <span className="italic text-ice-primary">Slow by design.</span>
          </motion.h2>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ice-border border border-ice-border">
          {PROCESS_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-[#0E1726] p-8 lg:p-10 group hover:bg-ice-surface transition-colors duration-500 relative"
              data-testid={`process-step-${s.n}`}
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-heading text-[11px] uppercase tracking-[0.32em] text-white/50">
                  Step {s.n}
                </span>
                <span className="block w-3 h-3 border border-ice-primary rotate-45 group-hover:bg-ice-primary transition-colors duration-700" />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl tracking-tight font-light mb-4">
                {s.title}
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
