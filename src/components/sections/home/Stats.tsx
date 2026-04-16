"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { STATS } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

const statAccentColors = [
  "bg-primary-green",
  "bg-indigo-400",
  "bg-amber-400",
  "bg-cyan-400",
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { dict } = useDict();

  const labels = [
    dict.stats.dailyYield,
    dict.stats.salePrice,
    dict.stats.targetPrice,
    dict.stats.totalSupply,
  ];

  return (
    <section ref={ref} className="relative py-16">
      <div className="green-line-accent w-full mb-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="green-text text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {stat.prefix || ""}
                {inView ? (
                  <CountUp
                    end={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    duration={2}
                  />
                ) : (
                  "0"
                )}
                {stat.suffix || ""}
              </div>
              <div className={`w-6 h-0.5 ${statAccentColors[i]} rounded-full mx-auto mb-2 opacity-60`} />
              <div className="text-gray-400 text-xs uppercase tracking-wider">
                {labels[i]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
