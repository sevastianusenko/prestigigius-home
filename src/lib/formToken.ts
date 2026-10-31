import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Spam guard for /api/contact. The page asks for a signed timestamp when a form
 * mounts and sends it back with the submission. A bot posting straight to the API
 * has no token, and one that fetches a token and posts at once fails the time trap.
 * Server-only (node:crypto).
 */

/** A person needs longer than this to fill in a form. */
export const MIN_FILL_MS = 3_000;
/** Tokens older than this are refused (the page sat open too long: refresh). */
export const MAX_AGE_MS = 6 * 60 * 60 * 1000;

const secret = () => process.env.FORM_SECRET || process.env.RESEND_API_KEY || "dev-form-secret";

const sign = (ts: string) => createHmac("sha256", secret()).update(`contact:${ts}`).digest("base64url");

export function issueToken(now = Date.now()): string {
  const ts = String(now);
  return `${ts}.${sign(ts)}`;
}

export type TokenCheck = "ok" | "missing" | "invalid" | "too-fast" | "expired";

export function checkToken(token: string, now = Date.now()): TokenCheck {
  if (!token) return "missing";
  const [ts, mac] = token.split(".");
  if (!ts || !mac || !/^\d{13}$/.test(ts)) return "invalid";
  const expected = Buffer.from(sign(ts));
  const given = Buffer.from(mac);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return "invalid";
  const age = now - Number(ts);
  if (age < MIN_FILL_MS) return "too-fast";
  if (age > MAX_AGE_MS) return "expired";
  return "ok";
}

/** Best-effort per-IP limit. Serverless instances do not share memory, so this only slows a flood. */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function rateLimited(ip: string, now = Date.now()): boolean {
  if (!ip) return false;
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/** Link spam: real homeowners rarely paste more than one URL into a project note. */
export function looksLikeSpam(name: string, message: string): boolean {
  const urls = (message.match(/https?:\/\/|www\./gi) ?? []).length;
  return urls > 1 || /https?:\/\/|www\./i.test(name) || /\[url=|<a\s+href/i.test(message);
}
