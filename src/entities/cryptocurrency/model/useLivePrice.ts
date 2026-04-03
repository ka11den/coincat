import { useEffect, useState } from "react";

export const useLivePrice = (symbol: string) => {
  const [price, setPrice] = useState<number | null>(null);
  const [change, setChange] = useState<number | null>(null);

  useEffect(() => {
    if (!symbol) return;

    const ws = new WebSocket("wss://stream.binance.com:9443/stream");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          params: [`${symbol.toLowerCase()}usdt@ticker`],
          id: 1,
        }),
      );
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data?.data?.c) {
        setPrice(parseFloat(data.data.c));
        setChange(parseFloat(data.data.P));
      }
    };

    return () => ws.close();
  }, [symbol]);

  return { price, change };
};
