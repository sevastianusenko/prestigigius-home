import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Home Remodeling & Restoration in Port Charlotte, FL`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#141414";
const NAVY_DEEP = "#111111";
const AMBER = "#C9A44C";
const TINT = "#E6E6E6";

/** Default Open Graph / Twitter card for every route without its own image. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
          color: "#FFFFFF",
        }}
      >
        {/* amber accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 16,
            background: AMBER,
            display: "flex",
          }}
        />

        {/* faint oversized roof mark, bottom-right */}
        <svg
          width="520"
          height="520"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", right: -120, bottom: -140, opacity: 0.08 }}
        >
          <path d="M5 15 L16 4 L27 15 L22.76 15 L16 8.24 L9.24 15 Z" fill={AMBER} />
          <path
            fillRule="evenodd"
            d="M10.5 16 H17.5 A4 4 0 0 1 17.5 24 H13.5 V29 H10.5 Z M13.5 18.5 V21.5 H17.5 A1.5 1.5 0 0 0 17.5 18.5 Z"
            fill="#FFFFFF"
          />
        </svg>

        {/* main copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 80px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                width: 72,
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: NAVY,
                border: `2px solid ${AMBER}`,
                borderRadius: 16,
              }}
            >
              <svg width="56" height="56" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15 L16 4 L27 15 L22.76 15 L16 8.24 L9.24 15 Z" fill={AMBER} />
                <path
                  fillRule="evenodd"
                  d="M10.5 16 H17.5 A4 4 0 0 1 17.5 24 H13.5 V29 H10.5 Z M13.5 18.5 V21.5 H17.5 A1.5 1.5 0 0 0 17.5 18.5 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: AMBER,
              }}
            >
              Licensed Residential General Contractor
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 1.05,
              letterSpacing: -2,
              marginTop: 34,
            }}
          >
            {site.name}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: TINT,
              marginTop: 22,
            }}
          >
            Home Remodeling &amp; Restoration · Port Charlotte, FL
          </div>
        </div>

        {/* footer: phone + license */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 80px 56px",
            fontSize: 28,
            color: TINT,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: AMBER, display: "flex" }} />
            <div style={{ display: "flex" }}>{site.phone}</div>
          </div>
          <div style={{ display: "flex" }}>FL License {site.license}</div>
        </div>
      </div>
    ),
    size,
  );
}
