"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useDict } from "@/i18n/DictContext";

export default function FAQTabs() {
  const { dict, locale, faqCategories } = useDict();
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {faqCategories.map((cat, i) => (
            <motion.button
              key={cat.name}
              onClick={() => {
                setActiveTab(i);
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-green-gradient text-white"
                  : "bg-gray-100 text-gray-500 hover:text-gray-900/80"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Questions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {faqCategories[activeTab].items.map((faq, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">
            {dict.faqPage.stillHaveQuestions}
          </p>
          <Link
            href={`/${locale}#contact`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-gradient text-white font-semibold text-sm rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(76,175,125,0.3)] transition-all duration-300"
          >
            {dict.faqPage.contactUs}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
