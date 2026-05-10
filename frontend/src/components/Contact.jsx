import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, MapPin, ChevronDown } from "lucide-react";
import { INQUIRY_TYPES } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiry_type: INQUIRY_TYPES[0],
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      await axios.post(`${API}/inquiries`, form);
      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        inquiry_type: INQUIRY_TYPES[0],
        message: "",
      });
    } catch (err) {
      setStatus("error");
      const detail = err?.response?.data?.detail;
      setErrorMsg(
        Array.isArray(detail)
          ? detail.map((d) => d.msg).join(", ")
          : detail || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-40 bg-[#060A12]"
      data-testid="contact-section"
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
            Enquiries
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-4xl md:text-5xl lg:text-6xl"
            data-testid="contact-title"
          >
            Let&rsquo;s craft the
            <br />
            <span className="italic font-extralight text-ice-primary">
              next chapter
            </span>.
          </motion.h2>

          <p className="mt-8 max-w-sm text-white/60 font-light leading-relaxed">
            For trade, hospitality and bespoke commissions. We respond within
            one business day.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <a
              href="mailto:hello@icelab.in"
              className="flex items-start gap-4 group"
              data-testid="contact-email-link"
            >
              <Mail size={18} strokeWidth={1.25} className="text-ice-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-[11px] tracking-[0.32em] uppercase font-medium text-[#BBD7FF !text-white/40">Email</div>
                <div className="text-white/80 group-hover:text-ice-primary transition-colors">
                  hello@icelab.in
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.25} className="text-ice-primary mt-0.5 shrink-0" />
              <div>
                <div className="text-[11px] tracking-[0.32em] uppercase font-medium text-[#BBD7FF !text-white/40">Atelier</div>
                <div className="text-white/80">Gwalior, India · Pan-India delivery</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="lg:col-span-7 space-y-7"
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[11px] tracking-[0.32em] uppercase font-medium block mb-3 !text-white/45">Name</label>
              <input
                required
                disabled={status === "submitting"}
                value={form.name}
                onChange={update("name")}
                placeholder="Your full name"
                className="ice-input"
                data-testid="contact-input-name"
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.32em] uppercase font-medium block mb-3 !text-white/45">Email</label>
              <input
                required
                type="email"
                disabled={status === "submitting"}
                value={form.email}
                onChange={update("email")}
                placeholder="you@brand.com"
                className="ice-input"
                data-testid="contact-input-email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[11px] tracking-[0.32em] uppercase font-medium block mb-3 !text-white/45">
                Company / Venue
              </label>
              <input
                disabled={status === "submitting"}
                value={form.company}
                onChange={update("company")}
                placeholder="Optional"
                className="ice-input"
                data-testid="contact-input-company"
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.32em] uppercase font-medium block mb-3 !text-white/45">
                Inquiry Type
              </label>
              <div className="relative">
                <select
                  disabled={status === "submitting"}
                  value={form.inquiry_type}
                  onChange={update("inquiry_type")}
                  className="ice-input appearance-none pr-10 cursor-pointer"
                  data-testid="contact-select-type"
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-ice-bg text-white">
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ice-primary pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-[11px] tracking-[0.32em] uppercase font-medium block mb-3 !text-white/45">Message</label>
            <textarea
              required
              disabled={status === "submitting"}
              value={form.message}
              onChange={update("message")}
              rows={4}
              placeholder="Tell us about your venue, occasion or vision."
              className="ice-input"
              data-testid="contact-input-message"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 pt-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              We respond within one business day.
            </p>
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="inline-flex items-center justify-center gap-3 bg-ice-primary text-[#060A12] hover:bg-ice-primaryHover px-10 py-4 text-[10.5px] uppercase tracking-[0.36em] font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              data-testid="contact-submit-button"
            >
              {status === "submitting" && (
                <Loader2 size={14} strokeWidth={1.75} className="animate-spin" />
              )}
              {status === "success" && <Check size={14} strokeWidth={2} />}
              {status === "submitting"
                ? "Sending"
                : status === "success"
                ? "Sent"
                : "Send Inquiry"}
            </button>
          </div>

          {status === "success" && (
            <div
              className="border border-ice-primary/40 bg-ice-primary/5 px-6 py-5 text-sm font-light text-ice-primary"
              data-testid="contact-success-message"
            >
              Thank you. Your inquiry has been received — we&rsquo;ll be in
              touch shortly.
            </div>
          )}
          {status === "error" && (
            <div
              className="border border-red-400/40 bg-red-400/5 px-6 py-5 text-sm font-light text-red-300"
              data-testid="contact-error-message"
            >
              {errorMsg || "Something went wrong. Please try again."}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
