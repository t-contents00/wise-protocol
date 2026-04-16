"use client";

import { motion } from "framer-motion";
import { TOKEN } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

export default function TokenTable() {
  const { dict } = useDict();
  const ti = dict.tokenomicsPage.tokenInfo;

  const rows = [
    { label: ti.name, value: TOKEN.name },
    { label: ti.symbol, value: TOKEN.symbol },
    { label: ti.standard, value: TOKEN.standard },
    {
      label: ti.totalSupply,
      value: `${(TOKEN.totalSupply / 1_000_000_000).toFixed(0)}B ${TOKEN.symbol}`,
    },
    {
      label: ti.dividendReserve,
      value: `${(TOKEN.dividendReserve / 1_000_000_000).toFixed(0)}B ${TOKEN.symbol}`,
    },
    { label: ti.salePrice, value: `¥${TOKEN.salePrice}` },
    { label: ti.targetListing, value: `¥${TOKEN.targetListingPrice}` },
    { label: ti.exchange, value: TOKEN.exchange },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-gray-200 overflow-hidden"
        >
          <div className="h-0.5 bg-green-gradient" />
          <div className="divide-y divide-white/5">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="text-gray-500 text-sm">{row.label}</span>
                <span className="text-gray-900 font-semibold text-sm">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
