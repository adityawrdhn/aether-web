import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-300/80">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-5 max-w-2xl text-balance text-white/55">{subtitle}</p>}
    </div>
  );
}
