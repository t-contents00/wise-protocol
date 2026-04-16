"use client";

import { motion } from "framer-motion";
import { useDict } from "@/i18n/DictContext";

export default function Roadmap() {
  const { dict } = useDict();

  const phaseColors = [
    { border: "border-primary-green/30", bg: "bg-primary-green/[0.05]", text: "text-primary-green", dot: "bg-primary-green border-primary-green shadow-[0_0_12px_rgba(76,175,125,0.6)]", badge: "bg-primary-green/20 text-primary-green", bullet: "bg-primary-green" },
    { border: "border-indigo-500/30", bg: "bg-indigo-500/[0.05]", text: "text-indigo-400", dot: "bg-transparent border-indigo-400", badge: "", bullet: "bg-indigo-400/40" },
    { border: "border-amber-500/30", bg: "bg-amber-500/[0.05]", text: "text-amber-400", dot: "bg-transparent border-amber-400", badge: "", bullet: "bg-amber-400/40" },
    { border: "border-cyan-500/30", bg: "bg-cyan-500/[0.05]", text: "text-cyan-400", dot: "bg-transparent border-cyan-400", badge: "", bullet: "bg-cyan-400/40" },
  ];

  const phases = dict.roadmap.phases.map((phase, i) => ({
    phase: i + 1,
    title: phase.title,
    items: [...phase.items],
    active: i === 0,
  }));

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase">
            {dict.roadmap.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {dict.roadmap.title}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-primary-green/20" />

          <div className="space-y-10">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-14 sm:pl-16"
              >
                <div
                  className={`absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${phaseColors[i]?.dot || "bg-transparent border-gray-300"}`}
                />

                <div
                  className={`rounded-xl p-6 border ${
                    phase.active
                      ? `${phaseColors[i]?.border} ${phaseColors[i]?.bg}`
                      : `${phaseColors[i]?.border || "border-gray-200"} bg-white`
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold tracking-wider uppercase ${
                        phase.active ? "text-primary-green" : (phaseColors[i]?.text || "text-gray-400")
                      }`}
                    >
                      Phase {phase.phase}
                    </span>
                    {phase.active && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-green/20 text-primary-green">
                        {dict.roadmap.current}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-display text-lg font-semibold mb-3 ${
                      phase.active ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    {phase.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className={`text-sm flex items-center gap-2 ${
                          phase.active ? "text-gray-900/70" : "text-gray-400"
                        }`}
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${
                            phase.active ? "bg-primary-green" : (phaseColors[i]?.bullet || "bg-white/20")
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
