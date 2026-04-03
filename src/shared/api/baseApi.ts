import { BASE_URL } from "../config/config";

export async function baseFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 30 },
  });

  if (!res.ok) throw new Error(`error: ${res.status}`);

  return res.json();
}
