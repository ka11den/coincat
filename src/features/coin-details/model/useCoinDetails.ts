import { useState } from "react";
import { useCoinHistory, useCoin } from "@/src/entities/cryptocurrency";

export function useCoinDetails(id: string) {
  const [timeframe, setTimeframe] = useState<1 | 7 | 30 | 365>(7);
  const { data: coin, isLoading: coinLoading, error } = useCoin(id);
  const { data: history, isLoading: historyLoading } = useCoinHistory(
    id,
    timeframe,
  );

  return {
    coin,
    history,
    timeframe,
    setTimeframe,
    loading: coinLoading,
    historyLoading,
    error,
  };
}
