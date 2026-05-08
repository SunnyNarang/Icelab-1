// Floating particles ambient overlay — pure CSS for perf.
import { useMemo } from "react";

export const Particles = ({ count = 24, className = "" }) => {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: -Math.random() * 12,
        duration: 18 + Math.random() * 22,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    [count]
  );
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-ice-primary"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: "0 0 6px rgba(139, 215, 255, 0.6)",
            animation: `float ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
