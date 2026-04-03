import { CryptoData } from "@/src/entities/cryptocurrency";
import { SearchResult } from "./types";

export function mapToSearchResult(crypto: CryptoData): SearchResult {
  return {
    id: crypto.id,
    type: "cryptocurrency",
    title: crypto.name,
    subtitle: crypto.symbol.toUpperCase(),
    image: crypto.image,
    url: `/coin/${crypto.id}`,
    metadata: {
      symbol: crypto.symbol,
      price: crypto.current_price,
      change: crypto.price_change_percentage_24h,
    },
  };
}

export function searchCryptos(
  data: CryptoData[],
  query: string,
  limit = 10,
): SearchResult[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase();

  const exact: CryptoData[] = [];
  const starts: CryptoData[] = [];
  const includes: CryptoData[] = [];

  data.forEach((c) => {
    const name = c.name.toLowerCase();
    const symbol = c.symbol.toLowerCase();

    if (name === q || symbol === q) exact.push(c);
    else if (name.startsWith(q) || symbol.startsWith(q)) starts.push(c);
    else if (name.includes(q) || symbol.includes(q)) includes.push(c);
  });

  const sort = (a: CryptoData, b: CryptoData) =>
    (a.market_cap_rank || 999) - (b.market_cap_rank || 999);

  return [...exact.sort(sort), ...starts.sort(sort), ...includes.sort(sort)]
    .slice(0, limit)
    .map(mapToSearchResult);
}
