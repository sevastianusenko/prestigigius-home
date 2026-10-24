/** Trim text to n chars on a word boundary (used for metadata limits). */
export function clamp(text: string, n: number): string {
  const t = text.trim();
  if (t.length <= n) return t;
  const cut = t.slice(0, n - 1);
  const i = cut.lastIndexOf(" ");
  return `${(i > n * 0.6 ? cut.slice(0, i) : cut).replace(/[\s,.;:–—-]+$/, "")}…`;
}

export function initials(name: string): string {
  return name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Prestigious+Home+Improvements+Inc+Port+Charlotte+FL&output=embed";

export const AREA_MAP_EMBED_URL =
  "https://www.google.com/maps?q=Port+Charlotte,+FL&z=9&output=embed";

export const LICENSE_VERIFY_URL = "https://www.myfloridalicense.com/wl11.asp";
