"use client";

import { motion } from "framer-motion";
import { useDict } from "@/i18n/DictContext";

export default function DividendExplainer() {
  const { dict } = useDict();
  const t = dict.tokenomicsPage;

  const cards = [
    { title: t.calculation, text: t.calculationText },
    { title: t.paymentSchedule, text: t.paymentScheduleText },
    { title: t.howToReceive, text: t.howToReceiveText },
  ];

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
          <h2 className="font-display text-3xl font-bold text-gray-900">
            {t.dividendMechanism}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-hover rounded-xl border border-primary-green/15 bg-white p-6"
            >
              <h3 className="text-gray-900 font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
