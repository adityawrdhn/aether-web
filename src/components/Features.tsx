import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: "🎐",
    title: "Menu Bar garlands",
    body: "Catenary cords, botanical garlands or golden chains sway under your Menu Bar, with 3 hand-drawn ornaments on every arch.",
  },
  {
    icon: "🧲",
    title: "Dock ornaments that fit",
    body: "Ornaments line the exact edge of your Dock, bottom, left or right. Width is detected automatically, with a manual slider if you want it.",
  },
  {
    icon: "🖱️",
    title: "Cursor physics",
    body: "Lamps swing like pendulums, petals scatter and fireflies dart away as your cursor passes by.",
  },
  {
    icon: "🌦️",
    title: "Live local weather",
    body: "Rain streaks with splash ripples, snow piling on the Dock, drifting clouds or warm sunbeams, matched to the real weather where you are.",
  },
  {
    icon: "🌏",
    title: "Seasons that make sense",
    body: "Tropical countries get Kemarau and Penghujan, temperate ones get Spring through Winter. AetherDesk works out which from your latitude.",
  },
  {
    icon: "🖥️",
    title: "Desktop only",
    body: "Bound to your Desktop Space, so it never covers fullscreen apps and moves with the Desktop when you swipe between Spaces.",
  },
  {
    icon: "🔋",
    title: "Easy on the battery",
    body: "Native Swift and CoreGraphics. Drops to 30 FPS in Low Power Mode and pauses while your screen is locked or asleep.",
  },
  {
    icon: "🔒",
    title: "Private by design",
    body: "No accounts and no tracking. Your license is sealed to your Mac's hardware and keeps working offline.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <SectionHeading
        eyebrow="Features"
        title={
          <>
            Small details that make your Mac <span className="font-serif italic font-normal text-gradient">feel alive</span>
          </>
        }
        subtitle="48 hand-drawn vector ornaments, rendered natively at 60 FPS. Light enough that you'll forget it's running."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl p-6 transition glass hover:-translate-y-0.5 hover:bg-white/[0.06]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-2xl ring-1 ring-white/10">
              {f.icon}
            </div>
            <h3 className="mt-5 text-[15px] font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
