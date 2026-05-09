import { LOGO_MARK } from "../lib/brandkit";

// Brand mark — direct image, no filter manipulation needed (already on dark BG)
export const LogoCompact = ({ className = "", showTagline = true }) => (
  <a
    href="#hero"
    className={`inline-flex items-center gap-3 group ${className}`}
    data-testid="logo-compact"
    aria-label="ICELAB — Invisible Luxury"
  >
    <img
      src={LOGO_MARK}
      alt=""
      aria-hidden
      className="block w-10 h-10 lg:w-11 lg:h-11 shrink-0 object-contain"
    />
    <span className="flex flex-col leading-none">
      <span className="font-heading text-[15px] tracking-[0.42em] uppercase text-white">
        ICELAB
      </span>
      {showTagline && (
        <span className="mt-1.5 text-[9px] tracking-[0.42em] uppercase text-ice-primary/80">
          Invisible Luxury
        </span>
      )}
    </span>
  </a>
);

export const LogoMark = ({ size = 80, className = "" }) => (
  <img
    src={LOGO_MARK}
    alt="ICELAB"
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

export default LogoCompact;
