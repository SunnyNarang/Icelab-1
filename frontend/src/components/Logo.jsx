// Brand logo — new dark-bg mark for navbar (no text), full lockup for footer.
const LOGO_MARK_URL =
  "https://customer-assets.emergentagent.com/job_glowing-clarity/artifacts/vcfneyhx_with%20Dark%20Bg%20copy.png";
const LOGO_FULL_URL =
  "https://customer-assets.emergentagent.com/job_glowing-clarity/artifacts/qssokskv_With%20white%20BG.png";

const fullImgStyle = {
  filter: "invert(1) brightness(1.6)",
  mixBlendMode: "screen",
};

// Compact horizontal lockup for navbar: mark + typeset wordmark
export const LogoCompact = ({ className = "", onClick, showTagline = true }) => (
  <a
    href="#hero"
    onClick={onClick}
    className={`inline-flex items-center gap-3 group ${className}`}
    data-testid="logo-compact"
    aria-label="ICELAB — Invisible Luxury"
  >
    <img
      src={LOGO_MARK_URL}
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

// Full logo image — used in footer
export const LogoFull = ({ className = "", style = {} }) => (
  <img
    src={LOGO_FULL_URL}
    alt="ICELAB · Invisible Luxury"
    className={className}
    style={{ ...fullImgStyle, ...style }}
    loading="lazy"
  />
);

// Giant decorative watermark (kept for compatibility)
export const LogoWatermark = ({ className = "", opacity = 0.08, style = {} }) => (
  <img
    src={LOGO_FULL_URL}
    alt=""
    aria-hidden
    className={`pointer-events-none select-none ${className}`}
    style={{
      ...fullImgStyle,
      opacity,
      ...style,
    }}
  />
);

export default LogoCompact;

