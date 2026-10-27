/** Decorative CSS-only swaying garland echoing the app's catenary menu-bar cord. */
const bulbs = ["#FDE047", "#F472B6", "#67E8F9", "#A78BFA", "#FB923C", "#34D399"];

export default function Garland({ className = "" }: { className?: string }) {
  const count = 14;
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 1400 60" preserveAspectRatio="none" className="h-14 w-full">
        {Array.from({ length: 4 }).map((_, i) => {
          const x0 = (1400 / 4) * i;
          const x1 = x0 + 1400 / 4;
          return (
            <path
              key={i}
              d={`M${x0},4 Q${(x0 + x1) / 2},40 ${x1},4`}
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1.2"
            />
          );
        })}
      </svg>
      <div className="absolute inset-x-0 top-0 flex justify-around px-6">
        {Array.from({ length: count }).map((_, i) => {
          const t = ((i % 3.5) + 0.5) / 4;
          const drop = 4 + Math.sin(t * Math.PI) * 24;
          const color = bulbs[i % bulbs.length];
          return (
            <span
              key={i}
              className="animate-sway block"
              style={{ marginTop: drop, animationDelay: `${(i % 5) * 0.35}s`, color }}
            >
              <span className="mx-auto block h-2 w-px bg-white/25" />
              <span
                className="animate-twinkle block h-3 w-2.5 rounded-b-full rounded-t-sm"
                style={{ background: color, animationDelay: `${(i % 4) * 0.5}s` }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
