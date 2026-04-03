import { useMemo, useState } from "react";
import {
  CryptoData,
  SortDirection,
  SortField,
} from "@/src/entities/cryptocurrency";

export function useSort(data: CryptoData[]) {
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const map = {
        rank: [a.market_cap_rank, b.market_cap_rank],
        name: [a.name, b.name],
        price: [a.current_price, b.current_price],
        change: [a.price_change_percentage_24h, b.price_change_percentage_24h],
        volume: [a.total_volume, b.total_volume],
        marketCap: [a.market_cap, b.market_cap],
      };

      const [aValue, bValue] = map[sortField];

      if (typeof aValue === "number") {
        return sortDirection === "asc"
          ? aValue - (bValue as number)
          : (bValue as number) - aValue;
      }

      return sortDirection === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [data, sortField, sortDirection]);

  return {
    sortedData,
    sortField,
    sortDirection,
    handleSort,
  };
}
