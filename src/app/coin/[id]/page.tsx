"use client";

import {
  CoinHeader,
  MarketData,
  PriceChart,
  StatsGrid,
  useCoinDetails,
} from "@/src/features/coin-details";
import { Loader } from "@/src/shared/ui";
import { useParams } from "next/navigation";

/* 
TODO: Make the timeframe selection a separate component and use historyLoading inside
*/
export default function CoinPage() {
  const { id } = useParams<{ id: string }>();

  const { coin, history, timeframe, setTimeframe, loading, error } =
    useCoinDetails(id);

  if (loading) return <Loader />;

  if (error || !coin) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-20">
          <p className="text-red-600 dark:text-red-400">{error?.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden">
        <div className="p-6 pb-0">
          <CoinHeader coin={coin} />
        </div>

        <div className="relative">
          <div className="absolute top-4 right-6 z-10 flex gap-2">
            {[1, 7, 30, 365].map((days) => (
              <button
                key={days}
                onClick={() => setTimeframe(days as any)}
                className={`cursor-pointer px-5 py-2 text-sm rounded-lg transition-colors ${
                  timeframe === days
                    ? "bg-white text-black"
                    : "bg-[#2A2A2A] text-[#a0a0a0] hover:bg-[#3A3A3A] hover:text-white"
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
          {history && (
            <PriceChart prices={history?.prices} timeframe={timeframe} />
          )}
        </div>

        <div className="px-6 py-6 border-t border-[#2A2A2A]">
          <StatsGrid coin={coin} />
        </div>

        <div className="px-6 py-6 border-t border-[#2A2A2A]">
          <MarketData coin={coin} />
        </div>
      </div>
    </div>
  );
}
