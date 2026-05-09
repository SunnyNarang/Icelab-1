// Static hex motif (NO animation) — abstracted from logo
export const HexagonMark = ({
  size = 60,
  className = "",
  stroke = "#BBD7FF",
  strokeWidth = 1,
  opacity = 1,
  style = {},
}) => {
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
  const cx = 60, cy = 60;
  const positions = [
    [cx, cy],
    [cx, cy - 2 * dy],
    [cx + dx, cy - dy],
    [cx + dx, cy + dy],
    [cx, cy + 2 * dy],
    [cx - dx, cy + dy],
    [cx - dx, cy - dy],
  ];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      style={{ opacity, ...style }}
      aria-hidden
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
    </svg>
  );
};

export default HexagonMark;
