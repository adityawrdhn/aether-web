/**
 * Central site configuration.
 * Replace the checkout URLs with your real Lemon Squeezy / Gumroad product links before publishing.
 */
export const site = {
  name: "AetherDesk",
  tagline: "Your Mac, dressed for every season.",
  description:
    "AetherDesk drapes glowing seasonal garlands, holiday ornaments and live weather across your macOS Menu Bar and Dock — natively, beautifully, and only on your Desktop.",
  url: "https://aetherdesk.app",
  supportEmail: "support@aetherdesk.app",
  version: "1.0.0",
  minMacOS: "macOS 13 Ventura or later",
  checkout: {
    base: "https://aetherdesk.lemonsqueezy.com/checkout/buy/base-app",
    pack: "https://aetherdesk.lemonsqueezy.com/checkout/buy/holiday-pack",
    allAccess: "https://aetherdesk.lemonsqueezy.com/checkout/buy/all-access",
  },
  download: "https://aetherdesk.lemonsqueezy.com/checkout/buy/base-app",
} as const;

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#themes", label: "Themes" },
  { href: "#weather", label: "Live Weather" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;
