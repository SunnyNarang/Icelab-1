// Hexagon mark — abstracted from the ICELAB logo. Used as decorative motif throughout.
import { motion } from "framer-motion";

export const HexagonMark = ({
  size = 80,
  className = "",
  stroke = "#8BD7FF",
  strokeWidth = 1,
  opacity = 1,
  animated = false,
  style = {},
}) => {
  const Wrapper = animated ? motion.svg : "svg";
  const props = animated
    ? {
        initial: { rotate: 0 },
        animate: { rotate: 360 },
        transition: { duration: 80, ease: "linear", repeat: Infinity },
      }
    : {};
  // 7-hex cluster (1 center + 6 surrounding) — matches logo silhouette
  // Hex points centered at radius. We'll draw via path.
  const hexPath = (cx, cy, r) => {
    let d = "";
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      d += `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)} `;
    }
    return d + "Z";
  };
  const r = 18;
  const dx = r * Math.sqrt(3);
  const dy = r * 1.5;
  const cx = 60,
    cy = 60;
  const positions = [
    [cx, cy],
    [cx, cy - 2 * dy / 1.0],
    [cx + dx, cy - dy],
    [cx + dx, cy + dy],
    [cx, cy + 2 * dy / 1.0],
    [cx - dx, cy + dy],
    [cx - dx, cy - dy],
  ];
  return (
    <Wrapper
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      style={{ opacity, ...style }}
      {...props}
    >
      {positions.map(([x, y], i) => (
        <path
          key={i}
          d={hexPath(x, y, r)}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      ))}
    </Wrapper>
  );
};

export default HexagonMark;
