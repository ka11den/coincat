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

export default function CoinPage() {
  const { id } = useParams<{ id: string }>();

  const {
    coin,
    history,
    timeframe,
    historyLoading,
    setTimeframe,
    loading,
    error,
  } = useCoinDetails(id);

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
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <div className="p-6 pb-0">
          <CoinHeader coin={coin} />
        </div>

        <div className="relative">
          <PriceChart
            prices={history?.prices}
            timeframe={timeframe}
            isLoading={historyLoading}
            onChangeTimeframe={setTimeframe}
          />
        </div>

        <div className="px-6 py-6 border-t border-border">
          <StatsGrid coin={coin} />
        </div>

        <div className="px-6 py-6 border-t border-border">
          <MarketData coin={coin} />
        </div>
      </div>
    </div>
  );
}
