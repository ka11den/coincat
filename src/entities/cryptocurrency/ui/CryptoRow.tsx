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
    return "text-[#a0a0a0]";
  };

  return (
    <tr className="border-b border-[#2A2A2A] hover:bg-[#252525] transition-colors duration-150">
      <td className="px-4 py-4 text-sm text-[#a0a0a0]">
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
            <div className="font-semibold text-white transition-colors">
              {crypto.name}
            </div>
            <div className="text-xs text-[#a0a0a0] uppercase">
              {crypto.symbol}
            </div>
          </div>
        </Link>
      </td>
      <td className="px-4 py-4 text-sm font-medium text-right text-white">
        {formatPrice(crypto.current_price)}
      </td>
      <td
        className={`px-4 py-4 text-sm font-medium text-right ${getChangeColor(crypto.price_change_percentage_24h)}`}
      >
        {crypto.price_change_percentage_24h > 0 ? "+" : ""}
        {crypto.price_change_percentage_24h?.toFixed(2)}%
      </td>
      <td className="px-4 py-4 text-sm text-right text-[#a0a0a0]">
        {formatMarketCap(crypto.market_cap)}
      </td>
      <td className="px-4 py-4 text-sm text-right text-[#a0a0a0]">
        {formatVolume(crypto.total_volume)}
      </td>
    </tr>
  );
}
