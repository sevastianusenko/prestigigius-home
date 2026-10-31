"use client";

import { useId, useRef, useState } from "react";

/** One photo ready to send: a downscaled JPEG as base64 (no data: prefix). */
export type LeadPhoto = { filename: string; content: string; preview: string };

export const MAX_PHOTOS = 6;
/** Long side after downscaling. Enough to read a window label or water stain. */
const MAX_SIDE = 1600;
const QUALITY = 0.8;

/**
 * Phone photos are 3–12 MB; Vercel functions accept 4.5 MB per request. Every photo
 * is redrawn on a canvas at <= 1600 px and re-encoded as JPEG (~200–400 KB), which
 * also drops EXIF (GPS location) before it leaves the homeowner's phone.
 */
async function compress(file: File): Promise<LeadPhoto> {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  const dataUrl = canvas.toDataURL("image/jpeg", QUALITY);
  const base = file.name.replace(/\.[^.]+$/, "").replace(/[^\w-]+/g, "-").slice(0, 40) || "photo";
  return { filename: `${base}.jpg`, content: dataUrl.split(",")[1], preview: dataUrl };
}

export default function PhotoPicker({
  photos,
  onChange,
  className = "",
}: {
  photos: LeadPhoto[];
  onChange: (next: LeadPhoto[]) => void;
  className?: string;
}) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");

  async function add(files: FileList | null) {
    if (!files?.length) return;
    setNote("");
    const room = MAX_PHOTOS - photos.length;
    const list = Array.from(files).filter((f) => f.type.startsWith("image/") || /\.(heic|heif)$/i.test(f.name));
    if (list.length > room) setNote(`Up to ${MAX_PHOTOS} photos. We kept the first ${room}.`);
    setBusy(true);
    const out: LeadPhoto[] = [];
    const failed: string[] = [];
    for (const f of list.slice(0, room)) {
      try {
        out.push(await compress(f));
      } catch {
        failed.push(f.name);
      }
    }
    setBusy(false);
    if (failed.length) setNote(`Couldn't read ${failed.join(", ")}. Please use JPG or PNG.`);
    onChange([...photos, ...out]);
    if (input.current) input.current.value = "";
  }

  return (
    <div className={className}>
      <span className="mb-1.5 block text-sm font-medium text-navy-900">
        Photos <span className="font-normal text-ink-500">(optional, up to {MAX_PHOTOS})</span>
      </span>
      <div className="flex flex-wrap gap-3">
        {photos.map((p, i) => (
          <div key={`${p.filename}-${i}`} className="relative h-20 w-20 overflow-hidden rounded-lg border border-sand-200 bg-sand-50">
            {/* eslint-disable-next-line @next/next/no-img-element -- local data URL preview */}
            <img src={p.preview} alt={`Photo ${i + 1}`} className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => onChange(photos.filter((_, j) => j !== i))}
              aria-label={`Remove photo ${i + 1}`}
              className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-navy-950/75 text-white transition hover:bg-navy-950"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                <path d="M5 5l10 10M15 5 5 15" />
              </svg>
            </button>
          </div>
        ))}
        {photos.length < MAX_PHOTOS && (
          <label
            htmlFor={id}
            className={`flex h-20 cursor-pointer items-center gap-2 rounded-lg border border-dashed border-sand-200 bg-sand-50 px-4 text-sm font-semibold text-navy-900 transition hover:border-amber-500 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/30 ${photos.length ? "w-20 justify-center px-0" : ""}`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-ink-500" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
              <path d="M4 8a2 2 0 0 1 2-2h2l1.5-2h5L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
              <circle cx="12" cy="12.5" r="3.5" />
            </svg>
            {busy ? "Adding…" : photos.length ? <span className="sr-only">Add more photos</span> : "Add photos of the area"}
            <input
              ref={input}
              id={id}
              type="file"
              accept="image/*"
              multiple
              disabled={busy}
              onChange={(e) => add(e.target.files)}
              className="sr-only"
            />
          </label>
        )}
      </div>
      <p className="mt-2 text-xs text-ink-500">
        {note || "Windows, the room or the damage. Photos help us come with the right price ideas."}
      </p>
    </div>
  );
}
