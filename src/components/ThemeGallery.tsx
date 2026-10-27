"use client";

import { useCallback, useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import MacFrame from "./MacFrame";
import { baseThemes, holidayThemes, type Theme } from "@/data/themes";

type Tab = "base" | "holiday";

export default function ThemeGallery() {
  const [tab, setTab] = useState<Tab>("base");
  const [selected, setSelected] = useState<Theme | null>(null);
  const list = tab === "base" ? baseThemes : holidayThemes;

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const all = [...baseThemes, ...holidayThemes];
        const i = all.findIndex((t) => t.id === selected.id);
        const next = e.key === "ArrowRight" ? (i + 1) % all.length : (i - 1 + all.length) % all.length;
        setSelected(all[next]);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <section id="themes" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Themes"
          title={
            <>
              16 themes for the seasons <span className="font-serif italic font-normal text-gradient">and the celebrations</span>
            </>
          }
          subtitle="6 base seasons are included with the app. Add any of the 10 cultural and holiday packs for $1.99 each, or get them all with the All-Access Pass."
        />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-xl p-1 glass" role="tablist">
            {(
              [
                ["base", `Base Seasons · ${baseThemes.length}`],
                ["holiday", `Holiday Packs · ${holidayThemes.length}`],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  tab === id ? "bg-white text-ink-950" : "text-white/65 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t)}
              className="group overflow-hidden rounded-2xl text-left transition glass hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="relative aspect-[1470/956] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.screenshot}
                  alt={`${t.name} theme screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                {t.video && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur">
                    ▶ Video
                  </span>
                )}
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${
                    t.category === "base" ? "bg-emerald-400/20 text-emerald-200" : "bg-amber-400/20 text-amber-100"
                  }`}
                >
                  {t.category === "base" ? "Included" : "$1.99"}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{t.icon}</span>
                  <h3 className="font-semibold text-white">{t.name}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{t.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.ornaments.map((o) => (
                    <span key={o} className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/55 ring-1 ring-white/5">
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} preview`}
        >
          <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <MacFrame src={selected.video} poster={selected.screenshot} alt={`AetherDesk · ${selected.name}`} priority />
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <p className="text-lg font-semibold">
                  {selected.icon} {selected.name}
                </p>
                <p className="text-sm text-white/55">{selected.blurb}</p>
              </div>
              <div className="flex gap-2">
                <span className="hidden text-xs text-white/40 sm:inline">← → to browse · Esc to close</span>
                <button onClick={close} className="rounded-lg px-4 py-2 text-sm glass hover:bg-white/10">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
