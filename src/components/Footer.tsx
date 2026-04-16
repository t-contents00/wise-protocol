"use client";

import Image from "next/image";
import { TOKEN } from "@/data/tokenData";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/en";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const t = dict.footer;

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/images/wise-logo.png"
                alt="WiseCoin"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-display text-lg font-semibold text-gray-900">
                WiseCoin
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-2">{t.tagline}</p>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center justify-center gap-8">
            <a href={TOKEN.operatorUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/webwise-logo.png"
                alt="webwise"
                width={80}
                height={30}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <a href={TOKEN.exchangeUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/bitcastle-logo.png"
                alt="bitcastle"
                width={80}
                height={30}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-xs">{t.copyright}</p>
          <p className="text-gray-300 text-[10px] mt-4 max-w-3xl mx-auto leading-relaxed">
            {t.disclaimerText}
          </p>
        </div>
      </div>
    </footer>
  );
}
