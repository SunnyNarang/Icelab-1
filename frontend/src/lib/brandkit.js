// Brand-kit single composite reference
export const BRANDKIT =
  "https://customer-assets.emergentagent.com/job_glowing-clarity/artifacts/tmrsb3m2_ChatGPT%20Image%20May%208%2C%202026%20at%2001_17_02%20PM.png";

// 3x2 product photo sheet (uploaded by user) — 6 product photos
export const PRODUCTS_SHEET =
  "https://customer-assets.emergentagent.com/job_glowing-clarity/artifacts/flsryznu_ChatGPT%20Image%20May%209%2C%202026%20at%2002_17_11%20PM.png";

// 3x3 brand-kit tile crop helper
export const tileBg = (col, row) => ({
  backgroundImage: `url(${BRANDKIT})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "300% 300%",
  backgroundPosition: `${col * 50}% ${row * 50}%`,
});

// 3-col × 2-row product photo sheet crop helper
export const productImg = (col, row) => ({
  backgroundImage: `url(${PRODUCTS_SHEET})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "300% 200%",
  backgroundPosition: `${col * 50}% ${row * 100}%`,
});

// Brand kit tile coordinates (col, row) on the 3x3 grid
// 01 logo | 02 logo system | 03 icons
// 04 brand baseline | 05 product showcase | 06 apparel
// 07 urban campaign | 08 app ui | 09 social
export const TILES = {
  primaryLogo: [0, 0],
  logoSystem: [1, 0],
  iconCollection: [2, 0],
  brandBaseline: [0, 1],
  productShowcase: [1, 1],
  apparel: [2, 1],
  urban: [0, 2],
  appUi: [1, 2],
  social: [2, 2],
};

// Logo asset (no-text crystal mark on dark)
export const LOGO_MARK =
  "https://customer-assets.emergentagent.com/job_glowing-clarity/artifacts/vcfneyhx_with%20Dark%20Bg%20copy.png";
