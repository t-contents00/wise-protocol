"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Image from "next/image";
import { TOKENOMICS_DATA } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

export default function Tokenomics() {
  const { dict } = useDict();

  const nameMap: Record<string, string> = {
    "Dividend Reserve": dict.tokenomics.dividendReserve,
    "Public Sale": dict.tokenomics.publicSale,
    "Development & Ops": dict.tokenomics.devOps,
    "Ecosystem": dict.tokenomics.ecosystem,
  };

  const localizedData = TOKENOMICS_DATA.map((item) => ({
    ...item,
    name: nameMap[item.name] || item.name,
  }));

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase">
            {dict.tokenomics.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {dict.tokenomics.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={localizedData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {localizedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "#1a1a2e",
                    border: "1px solid rgba(76,175,125,0.2)",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                  formatter={(value) =>
                    `${(Number(value) / 1_000_000_000).toFixed(1)}B WISE`
                  }
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/images/wise-logo.png"
                alt="WISE"
                width={50}
                height={50}
                className="rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Legend Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            {localizedData.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200"
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <p className="text-gray-900 text-sm font-medium">{item.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900 font-bold text-sm">
                    {item.percentage}%
                  </p>
                  <p className="text-gray-400 text-xs">
                    {(item.value / 1_000_000_000).toFixed(1)}B
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
