import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ThemeGallery from "@/components/ThemeGallery";
import Weather from "@/components/Weather";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-950 text-white selection:bg-pink-500/30">
      <Navbar />
      <Hero />
      <Features />
      <ThemeGallery />
      <Weather />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
