"use client";

import { Loader } from "@/src/shared/ui";
import { SearchResult } from "../model/types";
import { CryptoSearchResult } from "./CryptoSearchResult";

type Props = {
  results: SearchResult[];
  isLoading: boolean;
  onClose: () => void;
  query: string;
};

export const SearchResults = ({
  results,
  isLoading,
  onClose,
  query,
}: Props) => {
  if (isLoading) return <Loader />;

  if (!query.trim()) {
    return (
      <div className="p-4 text-center">
        <p className="text-sm text-[#a0a0a0]">Type to start searching...</p>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="p-4 text-center">
        <p className="text-sm text-[#a0a0a0]">No results found for {query}</p>
      </div>
    );
  }

  const cryptocurrencies = results.filter((r) => r.type === "cryptocurrency");

  return (
    <div className="divide-y divide-[#2A2A2A]">
      {cryptocurrencies.length > 0 && (
        <div className="p-2">
          <div className="text-xs font-semibold text-[#a0a0a0] uppercase tracking-wider px-3 py-2">
            Cryptocurrencies
          </div>
          {cryptocurrencies.map((result) => (
            <CryptoSearchResult
              key={`${result.type}-${result.id}`}
              result={result}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};
