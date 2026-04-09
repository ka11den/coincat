import { CoinDetails } from "@/src/entities/cryptocurrency";

type Props = {
  coin: CoinDetails;
};

export function MarketData({ coin }: Props) {
  const priceChanges = [
    { label: "24h", value: coin.market_data.price_change_percentage_24h },
    { label: "7d", value: coin.market_data.price_change_percentage_7d },
    { label: "30d", value: coin.market_data.price_change_percentage_30d },
    { label: "1y", value: coin.market_data.price_change_percentage_1y },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-primary mb-4">
          Price Change Statistics
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {priceChanges.map((change, index) => {
            const isPositive = change.value > 0;
            return (
              <div
                key={index}
                className="bg-surface rounded-lg p-3 text-center border border-border"
              >
                <div className="text-xs text-text-secondary mb-1">
                  {change.label}
                </div>
                <div
                  className={`text-sm font-semibold ${isPositive ? "text-green-300" : "text-red-300"}`}
                >
                  {isPositive ? "+" : ""}
                  {change.value?.toFixed(2)}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {coin.description.en && (
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            About {coin.name}
          </h3>
          <div
            className="text-sm text-text-secondary leading-relaxed prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: coin.description.en,
            }}
          />
        </div>
      )}
    </div>
  );
}
