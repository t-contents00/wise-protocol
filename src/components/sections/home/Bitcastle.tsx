"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TOKEN } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

export default function Bitcastle() {
  const { dict } = useDict();

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Image
            src="/images/bitcastle-logo.png"
            alt="bitcastle"
            width={200}
            height={60}
            className="mx-auto mb-8"
          />
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {dict.bitcastle.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {dict.bitcastle.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-hover rounded-xl border border-bitcastle-green/20 bg-bitcastle-green/[0.03] p-6 text-center"
            >
              <h3 className="text-gray-900 font-semibold text-base mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <a
            href={TOKEN.exchangeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-bitcastle-green/40 text-bitcastle-green text-sm font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(76,175,125,0.15)] transition-all duration-300"
          >
            {dict.bitcastle.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
