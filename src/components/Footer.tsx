import Image from "next/image";
import { site, navLinks } from "@/config/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 py-16 text-white/60">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2.5">
              <Image src="/icon.jpeg" alt="AetherDesk icon" width={36} height={36} className="rounded-lg shadow-md" />
              <span className="text-lg font-bold tracking-tight text-white">{site.name}</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/50">{site.description}</p>
            <p className="mt-2 text-xs text-white/40">Requires {site.minMacOS}.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:justify-end">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">Navigation</h4>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">Store</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={site.checkout.base} className="transition hover:text-white">
                    Base App ($3.49)
                  </a>
                </li>
                <li>
                  <a href={site.checkout.allAccess} className="transition hover:text-white">
                    All-Access Pass ($11.11)
                  </a>
                </li>
                <li>
                  <a href="#themes" className="transition hover:text-white">
                    Holiday Packs ($1.99)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/80">Support</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={`mailto:${site.supportEmail}`} className="transition hover:text-white">
                    Email Support
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition hover:text-white">
                    FAQ & Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with precision for macOS.</p>
        </div>
      </div>
    </footer>
  );
}
