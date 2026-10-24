import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon: full-bleed navy (iOS applies its own corner mask),
 * same roof-chevron + "P" mark scaled from the 32-unit grid.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141414",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15 L16 4 L27 15 L22.76 15 L16 8.24 L9.24 15 Z" fill="#C9A44C" />
          <path
            fillRule="evenodd"
            d="M10.5 16 H17.5 A4 4 0 0 1 17.5 24 H13.5 V29 H10.5 Z M13.5 18.5 V21.5 H17.5 A1.5 1.5 0 0 0 17.5 18.5 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    ),
    size,
  );
}
