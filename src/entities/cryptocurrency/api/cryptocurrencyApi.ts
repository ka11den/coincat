import { baseFetch } from "@/src/shared/api/baseApi";
import { CoinDetails, CryptoData } from "../model/types";

/* 
TODO: implement a type for getHistory
*/
export const cryptocurrencyApi = {
  getCoins: () =>
    baseFetch<CryptoData[]>(
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true",
    ),

  getCoin: (id: string) =>
    baseFetch<CoinDetails>(
      `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`,
    ),

  getCoinDetails: (id: string) =>
    baseFetch<CoinDetails>(
      `/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    ),

  getHistory: (id: string, days = 7) =>
    baseFetch<any>(`/coins/${id}/market_chart?vs_currency=usd&days=${days}`),
};
