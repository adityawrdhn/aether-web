"use client";

import { useEffect, useRef } from "react";

interface MacFrameProps {
  src?: string;
  poster: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/** macOS-style window chrome wrapping a looping, muted autoplay video (or a still screenshot). */
export default function MacFrame({ src, poster, alt, className = "", priority = false }: MacFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause off-screen videos to keep the page light.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-glow ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs text-white/40">{alt}</span>
      </div>
      <div className="relative aspect-[1470/956] w-full bg-black">
        {src ? (
          <video
            key={src}
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload={priority ? "auto" : "metadata"}
            aria-label={alt}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading={priority ? "eager" : "lazy"}
          />
        )}
      </div>
    </div>
  );
}
