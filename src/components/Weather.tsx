import SectionHeading from "./SectionHeading";
import MacFrame from "./MacFrame";

const conditions = [
  {
    title: "Rain",
    icon: "🌧️",
    body: "Slanted streaks, with splash ripples where the drops land on your Dock.",
    video: "/media/videos/tropical_wet.mp4",
    poster: "/media/screens/tropical_wet.jpg",
  },
  {
    title: "Snow",
    icon: "❄️",
    body: "6-branch snowflakes drift down while a soft drift builds up along your Dock.",
    video: "/media/videos/winter.mp4",
    poster: "/media/screens/winter.jpg",
  },
  {
    title: "Cloudy",
    icon: "☁️",
    body: "Cumulus clouds drift slowly beneath your Menu Bar.",
    video: "/media/videos/autumn.mp4",
    poster: "/media/screens/autumn.jpg",
  },
  {
    title: "Clear sky",
    icon: "☀️",
    body: "Warm sunbeams fan out from the corner of your Menu Bar.",
    video: "/media/videos/spring.mp4",
    poster: "/media/screens/spring.jpg",
  },
];

export default function Weather() {
  return (
    <section id="weather" className="relative scroll-mt-24 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Live weather"
          title={
            <>
              Matches the sky <span className="font-serif italic font-normal text-gradient">outside your window</span>
            </>
          }
          subtitle="AetherDesk finds your city, or lets you search any city worldwide, and checks the live weather every 10 minutes while you're at your Mac."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {conditions.map((c) => (
            <div key={c.title} className="rounded-3xl p-3 glass">
              <MacFrame src={c.video} poster={c.poster} alt={`${c.title} weather layer`} />
              <div className="px-3 pb-3 pt-5">
                <h3 className="text-lg font-semibold text-white">
                  <span className="mr-2">{c.icon}</span>
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/55">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
