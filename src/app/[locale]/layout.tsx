import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { DictProvider } from "@/i18n/DictContext";
import { FAQ_EN } from "@/i18n/faq-en";
import { FAQ_JA } from "@/i18n/faq-ja";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const faqCategories = params.locale === "ja" ? FAQ_JA : FAQ_EN;

  return (
    <DictProvider dict={dict} locale={params.locale} faqCategories={faqCategories}>
      <Navbar locale={params.locale} dict={dict} />
      {children}
      <Footer locale={params.locale} dict={dict} />
    </DictProvider>
  );
}
