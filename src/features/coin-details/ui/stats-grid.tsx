import { CoinDetails } from "@/src/entities/cryptocurrency";
import { formatters } from "@/src/shared/lib/formatters";

type Props = {
  coin: CoinDetails;
};

export function StatsGrid({ coin }: Props) {
  const stats = [
    {
      label: "Market Cap",
      value: formatters.formatMarketCap(coin.market_data.market_cap.usd),
    },
    {
      label: "Volume (24h)",
      value: formatters.formatVolume(coin.market_data.total_volume.usd),
    },
    {
      label: "Circulating Supply",
      value: `${formatters.formatNumber(coin.market_data.circulating_supply)} ${coin.symbol.toUpperCase()}`,
    },
    {
      label: "Total Supply",
      value: coin.market_data.total_supply
        ? `${formatters.formatNumber(coin.market_data.total_supply)} ${coin.symbol.toUpperCase()}`
        : "N/A",
    },
    {
      label: "Max Supply",
      value: coin.market_data.max_supply
        ? `${formatters.formatNumber(coin.market_data.max_supply)} ${coin.symbol.toUpperCase()}`
        : "Unlimited",
    },
    {
      label: "All Time High",
      value: formatters.formatPrice(coin.market_data.ath.usd),
      date: formatters.formatDate(coin.market_data.ath_date.usd),
    },
    {
      label: "All Time Low",
      value: formatters.formatPrice(coin.market_data.atl.usd),
      date: formatters.formatDate(coin.market_data.atl_date.usd),
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-primary mb-4">
        Market Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-surface rounded-lg p-4 border border-border"
          >
            <div className="text-sm text-text-secondary mb-1">{stat.label}</div>
            <div className="text-xl font-semibold text-primary">
              {stat.value}
            </div>
            {stat.date && (
              <div className="text-xs text-text-secondary mt-1">
                {stat.date}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
