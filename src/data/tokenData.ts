export const TOKEN = {
  name: "Wise Coin",
  symbol: "WISE",
  standard: "ERC-20",
  totalSupply: 8_000_000_000,
  dividendReserve: 3_200_000_000,
  salePrice: 1,
  targetListingPrice: 10,
  exchange: "bitcastle",
  exchangeUrl: "https://bitcastle.io/",
  operator: "webwise",
  operatorUrl: "https://webwise-sg.com/",
  currency: "WISE",
} as const;

export const DIVIDEND_RANKS = [
  { name: "Regular", minTokens: 0, maxTokens: 9_999_999, rate: 0.001 },
  { name: "Silver", minTokens: 10_000_000, maxTokens: 19_999_999, rate: 0.002 },
  { name: "Gold", minTokens: 20_000_000, maxTokens: 29_999_999, rate: 0.003 },
  { name: "Diamond", minTokens: 30_000_000, maxTokens: 39_999_999, rate: 0.004 },
  { name: "VIP", minTokens: 40_000_000, maxTokens: Infinity, rate: 0.005 },
] as const;

export function getRank(quantity: number) {
  return DIVIDEND_RANKS.find(r => quantity >= r.minTokens && quantity <= r.maxTokens) || DIVIDEND_RANKS[0];
}

export const TOKENOMICS_DATA = [
  {
    name: "Dividend Reserve",
    value: 3_200_000_000,
    percentage: 40,
    color: "#4CAF7D",
  },
  {
    name: "Public Sale",
    value: 2_400_000_000,
    percentage: 30,
    color: "#6366F1",
  },
  {
    name: "Development & Ops",
    value: 1_440_000_000,
    percentage: 18,
    color: "#F59E0B",
  },
  {
    name: "Ecosystem",
    value: 960_000_000,
    percentage: 12,
    color: "#06B6D4",
  },
] as const;

export const STATS: readonly { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 0.1, suffix: "~0.5%", label: "Daily Yield (Rank-Based)" },
  { prefix: "¥", value: 1, label: "Sale Price per Token" },
  { prefix: "¥", value: 10, label: "Target Listing Price" },
  { value: 8, suffix: "B", label: "Total Supply" },
];

export function calculateDividend(quantity: number) {
  const rank = getRank(quantity);
  const dailyDividend = quantity * rank.rate;
  return {
    principal: quantity,
    rank: rank.name,
    rate: rank.rate,
    dailyDividend,
    day30: dailyDividend * 30,
    day90: dailyDividend * 90,
    day180: dailyDividend * 180,
    listingValue: quantity * 10,
    total180: dailyDividend * 180 + quantity * 10,
  };
}
