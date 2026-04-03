"use client";

import { CoinDetails } from "@/src/entities/cryptocurrency";
import { useLivePrice } from "@/src/entities/cryptocurrency/model/useLivePrice";

type Props = {
  coin: CoinDetails;
};

export function CoinHeader({ coin }: Props) {
  const { price, change } = useLivePrice(coin.symbol);
  const currentPrice = price ?? coin.market_data.current_price.usd;
  const currentChange = change ?? coin.market_data.price_change_percentage_24h;
  const changeColor =
    currentChange > 0
      ? "text-green-300"
      : currentChange < 0
        ? "text-red-300"
        : "text-gray-600";

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatChange = (change: number) => {
    return `${change > 0 ? "+" : ""}${change.toFixed(2)}%`;
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
      <div className="flex items-center gap-4">
        <div className="grid gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {coin.name}
            </h1>
            <span className="text-lg text-gray-500 dark:text-gray-400 uppercase">
              {coin.symbol}
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl md:text-6xl font-bold text-gray-900 dark:text-white">
              {formatPrice(currentPrice)}
            </span>
            <span className="text-xl md:text-4xl font-bold text-gray-500 dark:text-gray-400">
              USD
            </span>
          </div>
          <span className={`text-lg font-semibold ${changeColor}`}>
            {formatChange(currentChange)}
          </span>
        </div>
      </div>
    </div>
  );
}
