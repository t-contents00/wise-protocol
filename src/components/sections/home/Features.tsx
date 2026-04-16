"use client";

import { motion } from "framer-motion";
import { useDict } from "@/i18n/DictContext";

const featureIcons = [
  <svg key="rank" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" /><path d="M10 22V8" /><path d="M14 22V8" />
    <path d="M8 2h8l-1 6H9L8 2z" /><path d="M10 14h4" />
  </svg>,
  <svg key="chart" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-8" />
  </svg>,
  <svg key="shield" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
];

const featureColors = [
  { bg: "bg-green-50", border: "border-green-200", icon: "text-primary-green" },
  { bg: "bg-indigo-50", border: "border-indigo-200", icon: "text-indigo-500" },
  { bg: "bg-cyan-50", border: "border-cyan-200", icon: "text-cyan-500" },
];

export default function Features() {
  const { dict } = useDict();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase font-semibold">
            {dict.features.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {dict.features.title}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {dict.features.items.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${featureColors[i].bg} ${featureColors[i].border} border flex items-center justify-center ${featureColors[i].icon} shrink-0`}>
                {featureIcons[i]}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
