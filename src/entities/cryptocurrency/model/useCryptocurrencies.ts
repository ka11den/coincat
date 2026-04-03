import { useQuery } from "@tanstack/react-query";
import { cryptocurrencyApi } from "../api/cryptocurrencyApi";

export const useCoins = () => {
  return useQuery({
    queryKey: ["coins"],
    queryFn: cryptocurrencyApi.getCoins,
  });
};

export const useCoin = (id: string) => {
  return useQuery({
    queryKey: ["coin", id],
    queryFn: () => cryptocurrencyApi.getCoin(id),
    enabled: !!id,
  });
};

export const useCoinHistory = (id: string, days: number) => {
  return useQuery({
    queryKey: ["coin-history", id, days],
    queryFn: () => cryptocurrencyApi.getHistory(id, days),
  });
};

export const useGetCoinDetails = (id: string) => {
  return useQuery({
    queryKey: ["coin-details", id],
    queryFn: () => cryptocurrencyApi.getCoinDetails(id),
  });
};
