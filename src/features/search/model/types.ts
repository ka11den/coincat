export type SearchResult = {
  id: string;
  type: "cryptocurrency" | "article";
  title: string;
  subtitle?: string;
  image?: string;
  url: string;
  metadata?: {
    symbol?: string;
    price?: number;
    change?: number;
    category?: string;
    author?: string;
    date?: string;
  };
};

export type SearchState = {
  query: string;
  results: SearchResult[];
  isLoading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
};
