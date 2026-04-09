"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchResult } from "../model/types";

type Props = {
  result: SearchResult;
  isSelected?: boolean;
  onClose: () => void;
};

export const CryptoSearchResult = ({ result, onClose, isSelected }: Props) => {
  const priceChange = result.metadata?.change;
  const changeColor =
    priceChange !== undefined
      ? priceChange >= 0
        ? "text-green-500"
        : "text-red-500"
      : "text-gray-500";

  function handleClick() {
    onClose();
  }

  return (
    <Link
      href={result.url}
      onClick={handleClick}
      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-hover"
    >
      {result.image && (
        <div className="relative w-8 h-8">
          <Image
            src={result.image}
            alt={result.title}
            fill
            sizes="32px"
            className="rounded-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text-secondary truncate">
            {result.title}
          </span>
          {result.subtitle && (
            <span className="text-xs text-text-secondary">
              {result.subtitle}
            </span>
          )}
        </div>
        {result.metadata?.price !== undefined && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-primary">
              ${result.metadata.price.toLocaleString()}
            </span>
            {result.metadata.change !== undefined && (
              <span className={`text-xs ${changeColor}`}>
                {result.metadata.change > 0 ? "+" : ""}
                {result.metadata.change.toFixed(2)}%
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
