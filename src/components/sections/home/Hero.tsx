"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useDict } from "@/i18n/DictContext";
import { TOKEN } from "@/data/tokenData";
import Countdown from "./Countdown";

export default function Hero() {
  const { dict } = useDict();

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/wise-logo.png"
                alt="WiseCoin"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
                {dict.hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-gray-900">{dict.hero.headline}</span>
              <br />
              <span className="green-text">{dict.hero.headlineHighlight}</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg whitespace-pre-line">
              {dict.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#simulator"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-green text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-green/20 transition-all duration-300"
              >
                {dict.hero.ctaPrimary}
              </Link>
            </div>

            <Countdown compact />
          </motion.div>

          {/* Right: Daily Dividend Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-8">
              <div className="text-center mb-6">
                <span className="text-xs font-semibold text-primary-green uppercase tracking-wider">Daily Dividend</span>
                <h3 className="font-display text-xl font-bold text-gray-900 mt-1">Hold. Earn. Daily.</h3>
              </div>
              <div className="text-center py-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="green-text font-display text-5xl font-extrabold leading-none">
                  {(TOKEN.dailyDividendRate * 100).toFixed(1)}%
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mt-2">per day · simple interest</div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-gray-50">
                  <span className="font-semibold text-sm text-gray-500">Sale Price</span>
                  <span className="font-bold text-gray-900">¥{TOKEN.salePrice}</span>
                </div>
                <div className="flex items-center justify-between py-2.5 px-4 rounded-lg bg-gray-50">
                  <span className="font-semibold text-sm text-gray-500">Target Listing</span>
                  <span className="font-bold text-gray-900">¥{TOKEN.targetListingPrice}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <span className="text-xs text-gray-400">{dict.hero.badge}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
