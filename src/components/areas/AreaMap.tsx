import Link from "next/link";
import { mapCities, mapJobs, type MapPoint } from "@/content/area-pages";

/** Projection bounds (lat/lon) and SVG size; 1° lat ≈ 444 px, 1° lon scaled by cos(27°). */
const N = 27.65;
const S = 26.3;
const W = -82.7;
const E = -81.7;
const H = 600;
const PX_PER_LAT = H / (N - S);
const PX_PER_LON = PX_PER_LAT * Math.cos((27 * Math.PI) / 180);
const VW = Math.round((E - W) * PX_PER_LON);

const x = (lon: number) => (lon - W) * PX_PER_LON;
const y = (lat: number) => (N - lat) * PX_PER_LAT;
const pts = (list: [number, number][]) => list.map(([lon, lat]) => `${x(lon).toFixed(1)},${y(lat).toFixed(1)}`).join(" ");

/** Simplified Gulf coastline, north to south, then closed along the west edge. */
const GULF = pts([
  [-82.66, 27.65],
  [-82.6, 27.45],
  [-82.56, 27.33],
  [-82.55, 27.2],
  [-82.46, 27.08],
  [-82.4, 26.98],
  [-82.33, 26.88],
  [-82.27, 26.75],
  [-82.2, 26.62],
  [-82.08, 26.5],
  [-81.95, 26.45],
  [-81.85, 26.35],
  [-81.82, 26.3],
  [-82.7, 26.3],
  [-82.7, 27.65],
]);

const HARBOR = pts([
  [-82.27, 26.75],
  [-82.2, 26.86],
  [-82.12, 26.95],
  [-82.05, 26.96],
  [-81.99, 26.94],
  [-82.04, 26.86],
  [-82.09, 26.73],
  [-82.13, 26.64],
  [-82.2, 26.62],
]);

const RIVER = pts([
  [-82.02, 26.52],
  [-81.93, 26.6],
  [-81.85, 26.65],
  [-81.72, 26.72],
]);

function labelSide(p: MapPoint): "start" | "end" {
  if (p.label) return p.label === "left" ? "end" : "start";
  return x(p.lon) > VW - 110 ? "end" : "start";
}

/**
 * Schematic map of the service area: every city page is a link, the current
 * city is highlighted, and small dots mark places with finished jobs.
 */
export default function AreaMap({ current, className = "" }: { current?: string; className?: string }) {
  return (
    <figure className={className}>
      <svg viewBox={`0 0 ${VW} ${H}`} role="img" aria-labelledby="area-map-title" className="h-auto w-full">
        <title id="area-map-title">Schematic map of our service area from Sarasota to Fort Myers</title>
        <rect width={VW} height={H} fill="#141414" />
        <polygon points={GULF} fill="#262626" />
        <polygon points={HARBOR} fill="#262626" />
        <polyline points={RIVER} fill="none" stroke="#262626" strokeWidth="7" strokeLinecap="round" />
        <text x="18" y={H - 24} fill="#737373" fontSize="13" fontWeight="700" letterSpacing="2.5">
          GULF OF MEXICO
        </text>

        {/* finished jobs outside the city list */}
        {mapJobs.map((j) => (
          <g key={j.name}>
            <circle cx={x(j.lon)} cy={y(j.lat)} r="4" fill="#7A7A7A" />
            <text
              x={x(j.lon) + (labelSide(j) === "end" ? -9 : 9)}
              y={y(j.lat) + 4}
              textAnchor={labelSide(j)}
              fill="#9A9AA0"
              fontSize="12"
            >
              {j.name}
            </text>
          </g>
        ))}

        {mapCities.map((c) => {
          const on = c.slug === current;
          const hq = c.slug === "port-charlotte";
          const side = labelSide(c);
          const dx = side === "end" ? -12 : 12;
          const dot = (
            <g className="group">
              {on ? <circle cx={x(c.lon)} cy={y(c.lat)} r="16" fill="#C9A44C" opacity="0.25" /> : null}
              <circle
                cx={x(c.lon)}
                cy={y(c.lat)}
                r={on ? 8 : 6}
                fill={on ? "#C9A44C" : "#F4F4F4"}
                stroke="#141414"
                strokeWidth="2"
                className="transition-[fill] group-hover:fill-[#C9A44C]"
              />
              <text
                x={x(c.lon) + dx}
                y={y(c.lat) + 5}
                textAnchor={side}
                fill={on ? "#C9A44C" : "#F4F4F4"}
                fontSize={on ? 16 : 14}
                fontWeight="700"
                className="transition-[fill] group-hover:fill-[#C9A44C]"
              >
                {c.name}
                {hq ? " ★" : ""}
              </text>
            </g>
          );
          return c.slug && !on ? (
            <Link key={c.name} href={`/service-areas/${c.slug}`} aria-label={`Remodeling in ${c.name}`}>
              {dot}
            </Link>
          ) : (
            <g key={c.name}>{dot}</g>
          );
        })}
      </svg>
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-navy-100/70">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-navy-50" /> City we serve
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-600" /> Finished job
        </span>
        <span>★ Our base · schematic map</span>
      </figcaption>
    </figure>
  );
}
