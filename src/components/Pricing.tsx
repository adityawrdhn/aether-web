import SectionHeading from "./SectionHeading";
import { site } from "@/config/site";

const plans = [
  {
    name: "AetherDesk",
    price: "$3.49",
    cadence: "one-time",
    description: "The full app, with every season for every climate.",
    cta: "Buy AetherDesk",
    href: site.checkout.base,
    highlight: false,
    features: [
      "6 base seasons (4 temperate + 2 tropical)",
      "Menu Bar garlands and Dock ornaments",
      "Live weather: rain, snow, clouds, sun",
      "Cursor physics and 4 animation styles",
      "Desktop only, never over fullscreen apps",
      "Free 1.x updates",
    ],
  },
  {
    name: "All-Access Pass",
    price: "$11.11",
    cadence: "one-time",
    description: "Every holiday pack now, plus any holiday packs added in 1.x updates.",
    cta: "Get All-Access",
    href: site.checkout.allAccess,
    highlight: true,
    badge: "Best value · save 44%",
    features: [
      "Everything in AetherDesk",
      "All 10 cultural and holiday packs",
      "Christmas, Ramadan, Eid, Diwali, Lunar New Year and more",
      "Holiday packs added in 1.x updates",
      "Activate on up to 3 Macs",
    ],
  },
  {
    name: "Holiday Pack",
    price: "$1.99",
    cadence: "per pack",
    description: "Pick just the celebrations that matter to you.",
    cta: "Browse packs",
    href: "#themes",
    highlight: false,
    features: [
      "Unlock any single holiday theme",
      "4–5 extra ornaments per pack",
      "Packs stack on one license",
      "Requires the AetherDesk base app",
    ],
  },
];

function Check() {
  return (
    <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Pay once, <span className="font-serif italic font-normal text-gradient">keep it forever</span>
            </>
          }
          subtitle="No subscription. Your license key is delivered instantly by email and opens AetherDesk with one click."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                p.highlight
                  ? "bg-gradient-to-b from-white/[0.12] to-white/[0.03] ring-1 ring-pink-300/40 shadow-glow"
                  : "glass"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-amber-200 via-pink-300 to-indigo-300 px-3 py-1 text-[11px] font-bold text-ink-950">
                  {p.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-white/55">{p.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">{p.price}</span>
                <span className="text-sm text-white/45">{p.cadence}</span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-white/75">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
                  p.highlight ? "bg-white text-ink-950 hover:bg-white/90" : "text-white glass hover:bg-white/10"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          Secure checkout by Lemon Squeezy · Taxes may apply · 14-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
