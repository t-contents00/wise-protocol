"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TOKEN } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

export default function Webwise() {
  const { dict } = useDict();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary-green text-xs tracking-[0.2em] uppercase">
            {dict.webwise.label}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-8">
            {dict.webwise.title}
          </h2>

          <Image
            src="/images/webwise-logo.png"
            alt="webwise"
            width={160}
            height={50}
            className="mx-auto mb-8"
          />

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            {dict.webwise.description}
          </p>

          <a
            href={TOKEN.operatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-primary-green text-sm font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(76,175,125,0.15)] transition-all duration-300"
          >
            {dict.webwise.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
