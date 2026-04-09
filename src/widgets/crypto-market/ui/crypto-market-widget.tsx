import { CryptoTable } from "@/src/features/crypto-table/ui/crypto-table";

export function CryptoMarketWidget() {
  return (
    <div className="space-y-6">
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-primary">
                Cryptocurrency Prices by Market Cap
              </h1>
              <p className="text-sm text-text-secondary mt-1">
                Live cryptocurrency prices, market cap, and trading volume
              </p>
            </div>
          </div>
        </div>

        <CryptoTable />
      </div>
    </div>
  );
}
