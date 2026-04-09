import { SortField } from "../model/types";

type Props = {
  sortField: SortField;
  sortDirection: "asc" | "desc";
  onSort: (field: SortField) => void;
};

export function CryptoTableHead({ sortField, sortDirection, onSort }: Props) {
  const getIcon = (field: SortField) =>
    sortField === field ? (sortDirection === "asc" ? "↑" : "↓") : "";

  return (
    <thead className={`sticky top-0 z-10 transition-shadow duration-200`}>
      <tr className="border-b border-border bg-background">
        <th
          onClick={() => onSort("rank")}
          className="px-4 py-4 text-left text-xs font-medium text-text-secondary hover:text-active uppercase tracking-wider cursor-pointer transition-colors bg-background"
        >
          <div className="flex items-center gap-1"># {getIcon("rank")}</div>
        </th>
        <th
          onClick={() => onSort("name")}
          className="px-4 py-4 text-left text-xs font-medium text-text-secondary hover:text-active uppercase tracking-wider cursor-pointer transition-colors bg-background"
        >
          <div className="flex items-center gap-1">Name {getIcon("name")}</div>
        </th>
        <th
          onClick={() => onSort("price")}
          className="px-4 py-4 text-right text-xs font-medium text-text-secondary hover:text-active uppercase tracking-wider cursor-pointer transition-colors bg-background"
        >
          <div className="flex items-center justify-end gap-1">
            Price {getIcon("price")}
          </div>
        </th>
        <th
          onClick={() => onSort("change")}
          className="px-4 py-4 text-right text-xs font-medium text-text-secondary hover:text-active uppercase tracking-wider cursor-pointer transition-colors bg-background"
        >
          <div className="flex items-center justify-end gap-1">
            24h Change {getIcon("change")}
          </div>
        </th>
        <th
          onClick={() => onSort("marketCap")}
          className="px-4 py-4 text-right text-xs font-medium text-text-secondary hover:text-active uppercase tracking-wider cursor-pointer transition-colors bg-background"
        >
          <div className="flex items-center justify-end gap-1">
            Market Cap {getIcon("marketCap")}
          </div>
        </th>
        <th
          onClick={() => onSort("volume")}
          className="px-4 py-4 text-right text-xs font-medium text-text-secondary hover:text-active uppercase tracking-wider cursor-pointer transition-colors bg-background"
        >
          <div className="flex items-center justify-end gap-1">
            Volume (24h) {getIcon("volume")}
          </div>
        </th>
      </tr>
    </thead>
  );
}
