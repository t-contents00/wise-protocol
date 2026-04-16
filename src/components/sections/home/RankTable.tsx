"use client";

import { motion } from "framer-motion";
import { DIVIDEND_RANKS } from "@/data/tokenData";

const rankColors: Record<string, { text: string; bg: string; border: string }> = {
  Regular: { text: "text-slate-400", bg: "bg-slate-400/10", border: "border-slate-400/20" },
  Silver: { text: "text-slate-300", bg: "bg-slate-300/10", border: "border-slate-300/20" },
  Gold: { text: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
  Diamond: { text: "text-cyan-300", bg: "bg-cyan-300/10", border: "border-cyan-300/20" },
  VIP: { text: "text-primary-green", bg: "bg-primary-green/10", border: "border-primary-green/20" },
};

const rankLevel: Record<string, number> = {
  Regular: 1,
  Silver: 2,
  Gold: 3,
  Diamond: 4,
  VIP: 5,
};

export default function RankTable() {
  return (
    <section id="ranks" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase">
            ✦ Dividend Ranks
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Hold More. Earn More.
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            5-tier rank system — your dividend rate grows with your holdings
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl border border-primary-green/20 bg-white overflow-hidden"
        >
          <div className="h-0.5 bg-green-gradient" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-gray-400 font-medium">Rank</th>
                  <th className="px-6 py-4 text-right text-gray-400 font-medium">Required Holdings</th>
                  <th className="px-6 py-4 text-right text-gray-400 font-medium">Daily Rate</th>
                  <th className="px-6 py-4 text-right text-gray-400 font-medium">Annual Equivalent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {DIVIDEND_RANKS.map((rank, i) => (
                  <motion.tr
                    key={rank.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="hover:bg-white"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${rankColors[rank.name].bg} ${rankColors[rank.name].border} border flex items-center justify-center`}>
                          <svg className={`w-4 h-4 ${rankColors[rank.name].text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {Array.from({ length: rankLevel[rank.name] }).map((_, j) => (
                              <rect key={j} x={3 + j * 4} y={16 - j * 3} width="3" height={4 + j * 3} rx="0.5" fill="currentColor" />
                            ))}
                          </svg>
                        </div>
                        <span className={`font-semibold ${rankColors[rank.name].text}`}>
                          {rank.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-600">
                      {rank.maxTokens === Infinity
                        ? `${(rank.minTokens).toLocaleString()}+`
                        : `${rank.minTokens === 0 ? '0' : rank.minTokens.toLocaleString()} ~ ${rank.maxTokens.toLocaleString()}`}
                      <span className="text-xs ml-1">WISE</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="green-text font-bold text-lg">
                        {(rank.rate * 100).toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-400">
                      ~{(rank.rate * 100 * 365).toFixed(0)}%
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
