import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 border-t border-ice-border"
      data-testid="testimonials-section"
    >
      <div
        className="ambient-glow"
        style={{
          width: 500,
          height: 500,
          top: "20%",
          right: "-15%",
          background: "#3A8DFF",
          opacity: 0.18,
        }}
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overline mb-8"
          >
            <span className="inline-block w-8 h-px bg-ice-primary align-middle mr-3" />
            Stories — 05
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="heading-section text-4xl md:text-5xl"
            data-testid="testimonials-title"
          >
            Trusted by
            <br />
            <span className="italic text-ice-primary">connoisseurs.</span>
          </motion.h2>
          <p className="mt-8 max-w-sm text-white/55 font-light text-sm leading-relaxed">
            From private cocktail bars to hotel groups — the venues that set
            the standard quietly serve our ice.
          </p>
        </div>

        <div className="lg:col-span-8 relative">
          <Quote
            size={64}
            strokeWidth={1}
            className="text-ice-primary/30 mb-8"
            aria-hidden
          />

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
                data-testid={`testimonial-${i}`}
              >
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="flex items-center justify-between gap-6 pt-8 border-t border-ice-border">
                  <div>
                    <div className="font-heading text-base md:text-lg tracking-tight">
                      {t.author}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/55">
                      {t.role} · {t.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="w-12 h-12 border border-ice-border hover:border-ice-primary hover:text-ice-primary inline-flex items-center justify-center transition-colors"
                      data-testid="testimonial-prev"
                    >
                      <ArrowLeft size={16} strokeWidth={1.5} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next testimonial"
                      className="w-12 h-12 border border-ice-border hover:border-ice-primary hover:text-ice-primary inline-flex items-center justify-center transition-colors"
                      data-testid="testimonial-next"
                    >
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-px transition-all duration-500 ${
                  idx === i
                    ? "bg-ice-primary w-12"
                    : "bg-ice-border hover:bg-white/40 w-6"
                }`}
                data-testid={`testimonial-dot-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
