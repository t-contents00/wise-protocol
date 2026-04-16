"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language || "";
    const locale = lang.startsWith("ja") ? "ja" : "en";
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
