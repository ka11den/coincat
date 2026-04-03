"use client";

import {
  CryptoRow,
  CryptoTableHead,
  useCoins,
} from "@/src/entities/cryptocurrency";
import { Loader } from "@/src/shared/ui";
import { useSort } from "../../sort-cryptocurrencies";

export function CryptoTable() {
  const { data = [], isLoading, error } = useCoins();

  const { sortedData, sortField, sortDirection, handleSort } = useSort(data);

  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <CryptoTableHead
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
        />
        <tbody>
          {sortedData.map((coin) => (
            <CryptoRow key={coin.id} crypto={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
