"use client";

import { useState } from "react";
import MacFrame from "./MacFrame";
import Garland from "./Garland";
import { videoThemes } from "@/data/themes";
import { site } from "@/config/site";

export default function Hero() {
  const [activeId, setActiveId] = useState(videoThemes[0].id);
  const active = videoThemes.find((t) => t.id === activeId) ?? videoThemes[0];

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-fade" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full opacity-40 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(closest-side, ${active.accent}55, transparent)` }}
      />
      <Garland className="pointer-events-none absolute inset-x-0 top-[72px] hidden sm:block" />

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <div className="animate-rise mx-auto inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-white/70 glass">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Native macOS app · {site.minMacOS}
        </div>

        <h1
          className="animate-rise mx-auto mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Your Mac, dressed for <span className="font-serif font-normal italic text-gradient">every season.</span>
        </h1>

        <p
          className="animate-rise mx-auto mt-6 max-w-2xl text-balance text-lg text-white/60"
          style={{ animationDelay: "160ms" }}
        >
          AetherDesk drapes glowing garlands, holiday ornaments and live weather across your Menu Bar and Dock. It
          reacts to your cursor, follows the real seasons where you live, and stays on your Desktop only.
        </p>

        <div
          className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={site.checkout.base}
            className="rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-ink-950 transition hover:scale-[1.02] hover:bg-white/90"
          >
            Buy for $3.49 · Lifetime
          </a>
          <a
            href="#themes"
            className="rounded-xl px-6 py-3.5 text-[15px] font-medium text-white/85 transition glass hover:bg-white/10"
          >
            Explore 16 themes →
          </a>
        </div>

        <div className="animate-rise relative mx-auto mt-16 max-w-5xl" style={{ animationDelay: "320ms" }}>
          <MacFrame
            src={active.video}
            poster={active.screenshot}
            alt={`AetherDesk · ${active.name}`}
            priority
          />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Preview theme">
            {videoThemes.map((t) => {
              const selected = t.id === activeId;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(t.id)}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                    selected ? "bg-white text-ink-950" : "text-white/70 glass hover:text-white"
                  }`}
                >
                  <span className="mr-1.5">{t.icon}</span>
                  {t.name.split(" · ")[0]}
                </button>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-white/35">
            Every clip is rendered frame by frame by the AetherDesk app engine. Nothing is mocked up.
          </p>
        </div>
      </div>
    </section>
  );
}
