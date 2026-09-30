"use client";

import { useState, useEffect } from "react";
import { TOKEN } from "@/data/tokenData";

// 静的エクスポートのためビルド時刻に依存させず、マウント後にクライアント時刻で判定する
export function useIsListed(): boolean {
  const [listed, setListed] = useState(false);

  useEffect(() => {
    const target = new Date(
      process.env.NEXT_PUBLIC_LISTING_DATE || TOKEN.listingDate
    ).getTime();
    setListed(Date.now() >= target);
  }, []);

  return listed;
}
