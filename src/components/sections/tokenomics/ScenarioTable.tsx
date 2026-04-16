"use client";

import { motion } from "framer-motion";
import { calculateDividend, TOKEN } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

const SCENARIOS = [100_000, 1_000_000, 10_000_000];
const PERIODS = [30, 90, 180];

export default function ScenarioTable() {
  const { dict } = useDict();
  const t = dict.tokenomicsPage;

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-gray-900">
            {t.scenarioComparison}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-xl border border-gray-200 overflow-x-auto"
        >
          <div className="h-0.5 bg-green-gradient" />
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-gray-400 font-medium">
                  {t.tokens}
                </th>
                <th className="px-6 py-4 text-right text-gray-400 font-medium">
                  {t.principalLabel}
                </th>
                {PERIODS.map((d) => (
                  <th
                    key={d}
                    className="px-6 py-4 text-right text-gray-400 font-medium"
                  >
                    {d}{t.dayDividend}
                  </th>
                ))}
                <th className="px-6 py-4 text-right text-gray-400 font-medium">
                  {t.listingValueLabel}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {SCENARIOS.map((qty) => {
                const r = calculateDividend(qty);
                return (
                  <tr key={qty} className="hover:bg-white">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      {qty.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {r.principal.toLocaleString()} <span className="text-xs">{TOKEN.currency}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900/80 font-medium">
                      {r.day30.toLocaleString()} <span className="text-xs">{TOKEN.currency}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900/80 font-medium">
                      {r.day90.toLocaleString()} <span className="text-xs">{TOKEN.currency}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900/80 font-medium">
                      {r.day180.toLocaleString()} <span className="text-xs">{TOKEN.currency}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900 font-semibold">
                      {r.listingValue.toLocaleString()} <span className="text-xs">{TOKEN.currency}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
