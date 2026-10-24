/**
 * Parse the human price strings used in service.scopes[].priceRange into numbers.
 *
 *   "$12k–$22k"                    -> lump  12000..22000
 *   "$250k–$500k+"                 -> lump 250000..500000, openEnded
 *   "$800–$6k"                     -> lump    800..6000
 *   "$6–$11 per sq ft installed"   -> rate per "sq ft"
 *   "$1.2k–$3.8k per opening"      -> rate per "opening"
 *   "Varies with scope"            -> null (priced on site)
 */
export type ParsedPrice = {
  low: number;
  high: number;
  /** "+" after the top of the range */
  openEnded: boolean;
  /** null = lump sum for the job; otherwise the unit ("sq ft", "opening", "door") */
  unit: string | null;
  /** trailing words we don't model, e.g. "added", "plus finishes" */
  note?: string;
};

const MONEY = String.raw`\$\s*([\d,]*\.?\d+)\s*([kKmM])?`;
const RANGE = new RegExp(String.raw`${MONEY}(?:\s*(?:–|—|-|to)\s*${MONEY})?\s*(\+)?`);

function toNumber(raw: string, suffix?: string): number {
  const n = parseFloat(raw.replace(/,/g, ""));
  if (!suffix) return n;
  return n * (suffix.toLowerCase() === "m" ? 1_000_000 : 1_000);
}

export function parsePriceRange(input: string | undefined): ParsedPrice | null {
  if (!input) return null;
  const m = RANGE.exec(input);
  if (!m) return null;
  const low = toNumber(m[1], m[2]);
  const high = m[3] ? toNumber(m[3], m[4]) : low;
  if (!Number.isFinite(low) || !Number.isFinite(high)) return null;

  const rest = input.slice((m.index ?? 0) + m[0].length).trim();
  let unit: string | null = null;
  let note: string | undefined;

  const perSqFt = /(?:per|\/)\s*(?:sq\.?\s*ft|square\s+f(?:oo|ee)t|sf)\b/i;
  const perUnit = /(?:per|\/)\s*([a-z][a-z ]*?)(?:\s+installed)?$/i;
  if (perSqFt.test(rest)) {
    unit = "sq ft";
  } else {
    const u = perUnit.exec(rest);
    if (u) unit = u[1].trim().toLowerCase();
    else if (rest) note = rest;
  }

  return { low: Math.min(low, high), high: Math.max(low, high), openEnded: Boolean(m[5]), unit, note };
}

/** 12000 -> "$12k", 1500 -> "$1.5k", 450 -> "$450", 1250000 -> "$1.25M" */
export function formatMoney(n: number): string {
  if (n >= 1_000_000) return `$${trim(n / 1_000_000, 2)}M`;
  if (n >= 1_000) return `$${trim(n / 1_000, n >= 100_000 ? 0 : 1)}k`;
  return `$${Math.round(n)}`;
}

function trim(n: number, digits: number): string {
  return Number(n.toFixed(digits)).toString();
}

/** Round a dollar amount to a sensible ballpark step so totals don't look falsely precise. */
export function roundBallpark(n: number, direction: "down" | "up"): number {
  const step = n >= 100_000 ? 5_000 : n >= 10_000 ? 1_000 : n >= 1_000 ? 100 : 10;
  return (direction === "down" ? Math.floor(n / step) : Math.ceil(n / step)) * step;
}

export function formatRange(low: number, high: number, openEnded = false): string {
  const a = formatMoney(low);
  const b = formatMoney(high);
  return `${a === b ? a : `${a}–${b}`}${openEnded ? "+" : ""}`;
}
