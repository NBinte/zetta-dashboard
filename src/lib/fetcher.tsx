// src/lib/fetcher.ts
export async function fetchJSON<T>(input: RequestInfo | URL, init?: RequestInit) {
  const res = await fetch(input, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`HTTP ${res.status}: ${res.statusText}${text ? ` — ${text}` : ""}`);
    // @ts-expect-error attach status for convenience
    err.status = res.status;
    throw err;
  }
  return (await res.json()) as T;
}
