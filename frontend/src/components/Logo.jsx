// Brand logo — uses the uploaded artwork (dark mark on white BG) and tints to
// glowing white-blue via filter + mix-blend-mode so it sits on the dark theme.
const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_glowing-clarity/artifacts/qssokskv_With%20white%20BG.png";

const baseImgStyle = {
  filter: "invert(1) brightness(1.6)",
  mixBlendMode: "screen",
};

// Compact horizontal lockup for navbar: small mark + typeset wordmark
export const LogoCompact = ({ className = "", onClick, showTagline = true }) => (
  <a
    href="#hero"
    onClick={onClick}
    className={`inline-flex items-center gap-3 group ${className}`}
    data-testid="logo-compact"
    aria-label="ICELAB — Invisible Luxury"
  >
    <span
      className="block w-9 h-9 lg:w-10 lg:h-10 shrink-0"
      style={{
        ...baseImgStyle,
        backgroundImage: `url(${LOGO_URL})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 18%",
        backgroundSize: "115% auto",
      }}
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

// Full logo image — used in footer and as artwork
export const LogoFull = ({ className = "", style = {} }) => (
  <img
    src={LOGO_URL}
    alt="ICELAB · Invisible Luxury"
    className={className}
    style={{ ...baseImgStyle, ...style }}
    loading="lazy"
  />
);

// Giant decorative watermark behind hero / sections
export const LogoWatermark = ({ className = "", opacity = 0.08, style = {} }) => (
  <img
    src={LOGO_URL}
    alt=""
    aria-hidden
    className={`pointer-events-none select-none ${className}`}
    style={{
      ...baseImgStyle,
      opacity,
      ...style,
    }}
  />
);

export default LogoCompact;
