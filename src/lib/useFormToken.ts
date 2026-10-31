"use client";

import { useCallback, useEffect, useRef } from "react";

const fetchToken = () =>
  fetch("/api/contact", { cache: "no-store" })
    .then((r) => r.json() as Promise<{ token?: string }>)
    .then((d) => d.token ?? "")
    .catch(() => "");

/**
 * Asks /api/contact for a signed timestamp as soon as the form mounts (see
 * src/lib/formToken.ts). Returns a getter for the submit handler; if the first
 * request failed it tries once more at submit time.
 */
export function useFormToken(): () => Promise<string> {
  const token = useRef<Promise<string> | null>(null);
  useEffect(() => {
    token.current = fetchToken();
  }, []);
  return useCallback(async () => {
    const t = (await token.current) || (await (token.current = fetchToken()));
    return t;
  }, []);
}
