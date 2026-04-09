"use client";

import Link from "next/link";
import { Cryptocurrency } from "../model/types";
import Image from "next/image";

type Props = {
  crypto: Cryptocurrency;
};

export function CryptoRow({ crypto }: Props) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toFixed(2)}`;
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`;
    return `$${volume.toFixed(2)}`;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-300";
    if (change < 0) return "text-red-300";
    return "text-text-secondary";
  };

  return (
    <tr className="border-b border-border hover:bg-background transition-colors duration-150">
      <td className="px-4 py-4 text-sm text-text-secondary">
        {crypto.market_cap_rank}
      </td>
      <td className="px-4 py-4">
        <Link href={`/coin/${crypto.id}`} className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src={crypto.image}
              alt={crypto.name}
              fill
              sizes="32px"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-primary transition-colors">
              {crypto.name}
            </div>
            <div className="text-xs text-text-secondary uppercase">
              {crypto.symbol}
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-right text-primary">
        {formatPrice(crypto.current_price)}
      </td>
      <td
        className={`px-4 py-4 text-sm font-medium text-right ${getChangeColor(crypto.price_change_percentage_24h)}`}
      >
        {crypto.price_change_percentage_24h > 0 ? "+" : ""}
        {crypto.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td className="px-4 py-4 text-sm text-right text-text-secondary">
        {formatMarketCap(crypto.market_cap)}
      </td>
      <td className="px-4 py-4 text-sm text-right text-text-secondary">
        {formatVolume(crypto.total_volume)}
      </td>
    </tr>
  );
}
