"use client";

type MarketHeroVideoProps = {
  src?: string;
  poster?: string;
  overlayClassName?: string; // e.g., "bg-slate-950/75"
};

export default function MarketHeroVideo({
  src = "/Background.mp4",
  poster = "/poster.jpg",
  overlayClassName = "bg-slate-950/75",
}: MarketHeroVideoProps) {
  return (
    <div className="absolute inset-0" aria-hidden>
      <video
        className="h-full w-full object-cover pointer-events-none"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-slate-950/60" />
    </div>
  );
}
