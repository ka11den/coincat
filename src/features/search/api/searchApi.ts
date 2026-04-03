import { useMemo, useState } from "react";
import { useCoins } from "@/src/entities/cryptocurrency";
import { searchCryptos } from "../model/useSearch";

export function useSearch() {
  const [query, setQuery] = useState<string>("");

  const { data = [], isLoading } = useCoins();

  const results = useMemo(() => {
    return searchCryptos(data, query, 10);
  }, [data, query]);

  return {
    query,
    setQuery,
    results,
    isLoading,
  };
}
