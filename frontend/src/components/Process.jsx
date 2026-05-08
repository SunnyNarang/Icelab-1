import { motion } from "framer-motion";
import HexagonMark from "./HexagonMark";
import { PROCESS_STEPS } from "../lib/data";

const PROCESS_BG =
  "https://images.unsplash.com/photo-1767022724924-993b00fc04b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmFyJTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3ODIyNzgxOHww&ixlib=rb-4.1.0&q=85";

export const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
      data-testid="process-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${PROCESS_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1726] via-[#0E1726]/85 to-[#0E1726]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(58,141,255,0.18),transparent_60%)]" />

      <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-8"
          >
            <p className="overline">Craftsmanship — 03</p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-section text-4xl md:text-5xl lg:text-[64px]"
            data-testid="process-title"
          >
            A four-stage atelier.
            <br />
            <span className="italic font-extralight text-ice-primary">Slow by design.</span>
          </motion.h2>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ice-border border border-ice-border">
          {PROCESS_STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-[#0E1726]/90 backdrop-blur-sm p-8 lg:p-10 group hover:bg-ice-surface transition-colors duration-500 relative"
              data-testid={`process-step-${s.n}`}
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-heading text-[11px] uppercase tracking-[0.32em] text-white/45">
                  Step {s.n}
                </span>
                <HexagonMark
                  size={22}
                  stroke="#8BD7FF"
                  opacity={0.85}
                  className="transition-transform duration-1000 group-hover:rotate-180"
                />
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl tracking-tight font-light mb-4">
                {s.title}
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {s.body}
              </p>
              {/* Bottom line — animated */}
              <div className="mt-10 h-px bg-ice-border relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 bg-ice-primary group-hover:w-full transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
