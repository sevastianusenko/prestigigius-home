import { ImageResponse } from "next/og";
import { areas } from "@/content/areas";
import { site } from "@/content/site";

export const alt = `Home remodeling by ${site.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLACK = "#0A0A0A";
const DARK = "#141414";
const GOLD = "#C2C2C2";
const TINT = "#E6E6E6";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

/** Per-city Open Graph card: city name, "Home remodeling in {City}, FL", brand. */
export default async function AreaOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  const city = area?.name ?? "Southwest Florida";
  const county = area?.county ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: `linear-gradient(135deg, ${DARK} 0%, ${BLACK} 100%)`,
          color: "#FFFFFF",
          padding: "0 80px",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 12, background: GOLD, display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <div style={{ display: "flex", fontSize: 24, letterSpacing: 5, textTransform: "uppercase", color: GOLD }}>
            {county ? `${county} · Florida` : "Florida"}
          </div>
          <div style={{ display: "flex", fontSize: 112, fontWeight: 800, lineHeight: 1, letterSpacing: -3, marginTop: 24 }}>
            {city}
          </div>
          <div style={{ display: "flex", fontSize: 40, color: TINT, marginTop: 28 }}>Home remodeling in {city}, FL</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(201,164,76,.45)",
            padding: "28px 0 52px",
            fontSize: 28,
            color: TINT,
          }}
        >
          <div style={{ display: "flex", color: "#FFFFFF", fontWeight: 700 }}>{site.name}</div>
          <div style={{ display: "flex", gap: 28 }}>
            <div style={{ display: "flex" }}>{site.phone}</div>
            <div style={{ display: "flex", color: GOLD }}>FL {site.license}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
