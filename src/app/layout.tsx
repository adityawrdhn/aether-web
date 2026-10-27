import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  icons: { icon: "/icon.jpeg", apple: "/icon.jpeg" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/media/screens/christmas.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/media/screens/christmas.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07070d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
