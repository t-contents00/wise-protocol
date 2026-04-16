"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useDict } from "@/i18n/DictContext";

export default function FAQPreview() {
  const { dict, locale, faqCategories } = useDict();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const previewFaqs = faqCategories.flatMap((cat) => cat.items).slice(0, 5);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase">
            {dict.faqSection.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {dict.faqSection.title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {previewFaqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-lg border border-gray-200 bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-gray-900 text-sm font-medium pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className="text-primary-green text-xl shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            href={`/${locale}/faq`}
            className="text-primary-green text-sm font-semibold hover:underline"
          >
            {dict.faqSection.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
