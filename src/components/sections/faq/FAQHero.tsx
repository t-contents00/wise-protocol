"use client";

import { motion } from "framer-motion";
import { useDict } from "@/i18n/DictContext";

export default function FAQHero() {
  const { dict } = useDict();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,175,125,0.08)_0%,transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl font-bold text-gray-900"
        >
          {dict.faqPage.hero}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="green-line-accent w-24 mx-auto mt-6"
        />
      </div>
    </section>
  );
}
