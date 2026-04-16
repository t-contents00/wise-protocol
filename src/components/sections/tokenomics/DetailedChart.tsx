"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import Image from "next/image";
import { TOKENOMICS_DATA } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

export default function DetailedChart() {
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
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-gray-900">
            {dict.tokenomicsPage.distribution}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <ResponsiveContainer width="100%" height={450}>
            <PieChart>
              <Pie
                data={localizedData}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={180}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
                label={({ name, payload }: { name?: string; payload?: { percentage?: number } }) => `${name} (${payload?.percentage ?? 0}%)`}
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
              <Legend
                wrapperStyle={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/wise-logo.png"
              alt="WISE"
              width={60}
              height={60}
              className="rounded-full opacity-60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
