"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { site } from "@/config/site";

const faqs = [
  {
    q: "Does AetherDesk cover my fullscreen apps or windows?",
    a: "No. AetherDesk is strictly bound to your macOS Desktop Space (Space 1). When you switch to fullscreen apps (like Xcode, Chrome, or Final Cut), the decorations stay on your desktop with zero glitch or flicker.",
  },
  {
    q: "How does the live weather sync work?",
    a: "AetherDesk uses Open-Meteo & METAR to detect weather conditions for your city without tracking your location. It updates quietly every 10 minutes only while your screen is awake and active.",
  },
  {
    q: "Will this drain my MacBook battery or use high CPU?",
    a: "Not at all. Built entirely in native Swift and CoreGraphics, AetherDesk typically uses < 0.5% CPU. When your Mac enters Low Power Mode, it automatically throttles to 30 FPS, and pauses completely when your screen locks or sleeps.",
  },
  {
    q: "What is the difference between Base App, Single Packs, and All-Access Pass?",
    a: "The Base App ($3.49) includes all 6 seasonal themes (2 Tropical: Kemarau & Penghujan + 4 Temperate: Spring, Summer, Autumn, Winter). Individual Holiday Packs ($1.99 each) add specific cultural celebrations like Ramadan, Christmas, or Halloween. The All-Access Pass ($11.11) permanently unlocks all 10 holiday packs plus future holiday packs.",
  },
  {
    q: "Can I use my license key on multiple Macs?",
    a: "Yes! Single pack and base licenses can be activated on up to 2 personal Macs. The All-Access Pass allows activation on up to 3 personal Macs.",
  },
  {
    q: "Does AetherDesk work offline?",
    a: "Yes. Once activated, your entitlement is securely cryptographically sealed with hardware-bound AES-GCM on your Mac and includes an offline grace period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked <span className="font-serif italic font-normal text-gradient">Questions</span>
            </>
          }
          subtitle="Everything you need to know about AetherDesk licensing, performance, and customization."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl glass transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-white">{item.q}</span>
                  <span
                    className={`ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-white/60 border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-white/50">
          Have more questions? Reach out anytime at{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-pink-300 underline underline-offset-4">
            {site.supportEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
