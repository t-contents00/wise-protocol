export const TOKEN = {
  name: "WiseCoin",
  symbol: "WISE",
  standard: "ERC-20",
  totalSupply: 8_000_000_000,
  dividendReserve: 3_200_000_000,
  dailyDividendRate: 0.003,
  salePrice: 1,
  targetListingPrice: 10,
  exchange: "bitcastle",
  exchangeUrl: "https://bitcastle.io/",
  listingDate: "2026-09-30T11:00:00+09:00",
  announcementUrl: {
    ja: "https://bitcastle.io/ja/notification/1-1071/new-listing-wise",
    en: "https://bitcastle.io/en/notification/1-1071/new-listing-wise",
  },
  operator: "Starlinks Solutions Pte. Ltd.",
  operatorUrl: "https://starlinks-sg.com/wise/",
  currency: "WISE",
} as const;

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
  { value: 0.3, suffix: "%", label: "Daily Yield (Simple Interest)" },
  { prefix: "¥", value: 1, label: "Sale Price per Token" },
  { prefix: "¥", value: 10, label: "Target Listing Price" },
  { value: 8, suffix: "B", label: "Total Supply" },
];

export function calculateDividend(quantity: number) {
  const dailyDividend = quantity * TOKEN.dailyDividendRate;
  return {
    principal: quantity,
    dailyDividend,
    day30: dailyDividend * 30,
    day90: dailyDividend * 90,
    day180: dailyDividend * 180,
    listingValue: quantity * TOKEN.targetListingPrice,
    total180: dailyDividend * 180 + quantity * TOKEN.targetListingPrice,
  };
}
