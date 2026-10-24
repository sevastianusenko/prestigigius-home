import { MAP_EMBED_URL } from "./utils";

/** Lazy Google Maps iframe in a rounded card. Give it a height via className (e.g. "h-80"). */
export default function MapEmbed({
  src = MAP_EMBED_URL,
  title = "Map: Prestigious Home Improvements, Port Charlotte, FL",
  className = "h-80 md:h-[420px]",
}: {
  src?: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-sand-200 bg-sand-100 shadow-card ${className}`}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
