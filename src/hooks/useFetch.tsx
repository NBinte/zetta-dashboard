// src/hooks/useFetch.ts
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fetchJSON } from "@/lib/fetcher";

type UseFetchOptions = {
  enabled?: boolean; // allow lazy fetch
  requestInit?: RequestInit; // fetch init
  deps?: unknown[]; // extra deps for re-fetch
};

type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
  status: "idle" | "loading" | "success" | "error";
  refetch: () => void;
  simulateError: () => void; // triggers an intentional error on next fetch
};

export function useFetch<T = unknown>(
  url: string,
  { enabled = true, requestInit, deps = [] }: UseFetchOptions = {},
): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [status, setStatus] = useState<UseFetchReturn<T>["status"]>("idle");
  const [bump, setBump] = useState(0); // manual refetch
  const shouldFail = useRef(false); // error simulator flag

  const fetchOnce = useCallback(
    async (signal: AbortSignal) => {
      setLoading(true);
      setError(null);
      setStatus("loading");
      try {
        // Intentional error path (for the requirement demo)
        const effectiveUrl = shouldFail.current
          ? url.replace("/posts", "/invalid-posts").replace("/users", "/invalid-users")
          : url;

        const json = await fetchJSON<T>(effectiveUrl, { ...requestInit, signal });
        if (!signal.aborted) {
          setData(json);
          setStatus("success");
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err as Error);
          setStatus("error");
        }
      } finally {
        if (!signal.aborted) setLoading(false);
        // reset the simulator so it only fails once unless triggered again
        shouldFail.current = false;
      }
    },
    [url, requestInit],
  );

  // kick off fetch on mount/changes
  useEffect(() => {
    if (!enabled) return;
    const ctrl = new AbortController();
    fetchOnce(ctrl.signal);
    return () => ctrl.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, fetchOnce, bump, ...deps]);

  const refetch = useCallback(() => setBump((n) => n + 1), []);
  const simulateError = useCallback(() => {
    shouldFail.current = true;
    refetch();
  }, [refetch]);

  return { data, loading, error, status, refetch, simulateError };
}
