import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "917000433911"; // +91-7000433911

export const WhatsAppFab = () => {
  const msg = encodeURIComponent(
    "Hello ICELAB — I'd like to discuss a premium ice supply for my venue."
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ICELAB on WhatsApp"
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[55] inline-flex items-center gap-3 group"
      data-testid="whatsapp-fab"
    >
      <span className="hidden md:inline-flex items-center gap-2 bg-[#0B111E]/90 backdrop-blur-md border border-ice-border text-[10px] uppercase tracking-[0.32em] text-white/80 px-4 py-3 group-hover:border-ice-primary group-hover:text-ice-primary transition-colors">
        Chat on WhatsApp
      </span>
      <span className="relative inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-ice-primary hover:bg-ice-primaryHover text-[#060A12] shadow-[0_8px_30px_rgba(187,215,255,0.25)] transition-colors">
        <MessageCircle size={22} strokeWidth={1.75} fill="currentColor" />
      </span>
    </a>
  );
};

export default WhatsAppFab;
