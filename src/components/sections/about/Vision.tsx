"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TOKEN } from "@/data/tokenData";
import { useDict } from "@/i18n/DictContext";

const coreValueColors = [
  "bg-primary-green/10 border-primary-green/20 text-primary-green",
  "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
];

export default function Vision() {
  const { dict, locale } = useDict();
  const t = dict.aboutPage;

  return (
    <>
      {/* Vision */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              {t.vision}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              {t.visionText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-gray-900 text-center mb-12"
          >
            {t.coreValues}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="card-hover rounded-xl border border-gray-200 bg-white p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${coreValueColors[i]} border flex items-center justify-center`}>
                    {i === 0 && (
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                        <path d="M4 22h16" /><path d="M10 22V8" /><path d="M14 22V8" />
                        <path d="M8 2h8l-1 6H9L8 2z" /><path d="M10 14h4" />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-8" />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About webwise */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
              {dict.webwise.title}
            </h2>
            <Image
              src="/images/webwise-logo.png"
              alt="webwise"
              width={140}
              height={44}
              className="mx-auto mb-6"
            />
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-8">
              {dict.webwise.description}
            </p>
            <a
              href={TOKEN.operatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-primary-green text-sm font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {dict.webwise.cta}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold text-gray-900 text-center mb-12"
          >
            {t.team}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="card-hover rounded-xl border border-gray-200 bg-white p-8 text-center"
              >
                <Image
                  src={`${member.image}.jpg`}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.endsWith('.svg')) {
                      target.src = `${member.image}.svg`;
                    }
                  }}
                />
                <h3 className="text-gray-900 font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={`/${locale}`}
              className="px-8 py-3.5 bg-green-gradient text-white font-semibold text-sm rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.backToHome}
            </Link>
            <Link
              href={`/${locale}#contact`}
              className="px-8 py-3.5 border border-gray-300 text-primary-green font-semibold text-sm rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.contactUs}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
