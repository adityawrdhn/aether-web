"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks, site } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 glass">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/icon.jpeg" alt="AetherDesk icon" width={32} height={32} className="rounded-lg" priority />
          <span className="text-[15px] font-semibold tracking-tight text-white">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/65 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#pricing"
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-white/90 sm:inline-block"
          >
            Get AetherDesk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-white/80 hover:bg-white/10 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-3 mt-2 rounded-2xl p-4 glass md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-white/80 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-white px-3 py-2.5 text-center font-semibold text-ink-950"
          >
            Get AetherDesk
          </a>
        </div>
      )}
    </header>
  );
}
