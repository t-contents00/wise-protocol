"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "./en";
import type { Locale } from "./config";
import type { FAQCategory } from "@/data/faqData";

interface DictContextValue {
  dict: Dictionary;
  locale: Locale;
  faqCategories: FAQCategory[];
}

const DictContext = createContext<DictContextValue | null>(null);

export function DictProvider({
  dict,
  locale,
  faqCategories,
  children,
}: DictContextValue & { children: React.ReactNode }) {
  return (
    <DictContext.Provider value={{ dict, locale, faqCategories }}>
      {children}
    </DictContext.Provider>
  );
}

export function useDict() {
  const ctx = useContext(DictContext);
  if (!ctx) throw new Error("useDict must be used within DictProvider");
  return ctx;
}
