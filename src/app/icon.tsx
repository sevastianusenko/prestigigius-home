import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon: navy rounded square, amber roof chevron, white "P".
 * Shapes are filled SVG paths on a 32-unit grid, so no font is needed.
 */
export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15 L16 4 L27 15 L22.76 15 L16 8.24 L9.24 15 Z" fill="#C2C2C2" />
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
