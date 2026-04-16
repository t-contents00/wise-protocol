"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { calculateDividend, getRank, DIVIDEND_RANKS, TOKEN } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

export default function Simulator() {
  const { dict } = useDict();
  const [quantity, setQuantity] = useState(20_000_000);
  const result = calculateDividend(quantity);
  const rank = getRank(quantity);
  const nextRank = DIVIDEND_RANKS.find(r => r.minTokens > quantity);

  const rows = [
    { label: dict.simulator.principal, value: result.principal },
    { label: dict.simulator.dailyDividend, value: result.dailyDividend },
    { label: dict.simulator.day30, value: result.day30 },
    { label: dict.simulator.day90, value: result.day90 },
    { label: dict.simulator.day180, value: result.day180 },
    { label: dict.simulator.listingValue, value: result.listingValue },
    { label: dict.simulator.total, value: result.total180, highlight: true },
  ];

  return (
    <section id="simulator" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase font-semibold">
            {dict.simulator.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-2">
            {dict.simulator.title}
          </h2>
          <p className="text-gray-500 text-sm">{dict.simulator.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
        >
          <div className="h-0.5 bg-green-gradient" />

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Input section */}
              <div>
                {/* Input */}
                <div className="mb-6">
                  <label className="block text-gray-500 text-sm mb-3">
                    {dict.simulator.inputLabel}
                  </label>
                  <input
                    type="number"
                    min={1000000}
                    max={100000000}
                    step={1000000}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.max(1000000, Math.min(100000000, Number(e.target.value)))
                      )
                    }
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 text-lg font-semibold focus:outline-none focus:border-primary-green/50 transition-colors mb-4"
                  />
                  <input
                    type="range"
                    min={1000000}
                    max={100000000}
                    step={1000000}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-green [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-gray-400 text-xs mt-1">
                    <span>1,000,000</span>
                    <span>100,000,000</span>
                  </div>
                </div>

                {/* Rank Display */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm">Your Rank</span>
                    <span className="text-primary-green text-xl font-bold">
                      {rank.name} ({(rank.rate * 100).toFixed(1)}%/day)
                    </span>
                  </div>
                  {nextRank && (
                    <div className="text-gray-400 text-xs">
                      Next rank: {nextRank.name} ({(nextRank.rate * 100).toFixed(1)}%) — hold {(nextRank.minTokens - quantity).toLocaleString()} more WISE
                    </div>
                  )}
                  {!nextRank && (
                    <div className="text-primary-green text-xs font-medium">
                      Maximum rank achieved!
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Results section */}
              <div>
                <div className="space-y-3">
                  {rows.map((row) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between py-3 ${
                        row.highlight
                          ? "border-t border-primary-green/20 pt-4 mt-2"
                          : "border-b border-gray-100"
                      }`}
                    >
                      <span
                        className={`text-sm ${
                          row.highlight
                            ? "text-gray-900 font-semibold"
                            : "text-gray-500"
                        }`}
                      >
                        {row.label}
                      </span>
                      <span
                        className={`font-bold ${
                          row.highlight
                            ? "green-text text-xl sm:text-2xl"
                            : "text-gray-900 text-lg"
                        }`}
                      >
                        <CountUp
                          end={row.value}
                          separator=","
                          duration={0.5}
                          preserveValue
                        />
                        <span className="text-sm ml-1 text-gray-400">{TOKEN.currency}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="text-gray-400 text-[10px] mt-6 leading-relaxed">
                  {dict.simulator.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
