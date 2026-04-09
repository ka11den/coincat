"use client";

import { LineChart, Loader } from "@/src/shared/ui";

type Props = {
  prices?: number[][];
  timeframe: number;
  isLoading?: boolean;
  onChangeTimeframe: (days: 1 | 7 | 30 | 365) => void;
};

export function PriceChart({
  prices,
  timeframe,
  isLoading,
  onChangeTimeframe,
}: Props) {
  return (
    <div className="relative h-[450px]">
      <div className="absolute top-4 right-6 z-10 flex gap-2">
        {[1, 7, 30, 365].map((days) => (
          <button
            key={days}
            onClick={() => onChangeTimeframe(days as any)}
            className={`cursor-pointer px-5 py-2 text-sm rounded-lg transition-colors ${
              timeframe === days
                ? "bg-white text-accent-foreground"
                : "bg-hover text-text-secondary hover:bg-surface-secondary"
            }`}
          >
            {days === 1
              ? "24H"
              : days === 7
                ? "7D"
                : days === 30
                  ? "30D"
                  : "1Y"}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : prices ? (
        <LineChart key={timeframe} data={prices} timeframe={timeframe} />
      ) : null}
    </div>
  );
}
