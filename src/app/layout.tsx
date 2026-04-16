import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Wise Coin (WISE) | Rank-Based Daily Dividend ERC-20 Token | Listing on bitcastle",
  description:
    "Wise Coin offers rank-based daily dividends from 0.1% to 0.5% based on your holdings. Purchase at ¥1, target listing price ¥10 on bitcastle. Operated by webwise.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://wise-protocol.xyz"
  ),
  openGraph: {
    title:
      "Wise Coin (WISE) | Rank-Based Daily Dividend ERC-20 Token | Listing on bitcastle",
    description:
      "Wise Coin offers rank-based daily dividends from 0.1% to 0.5% based on your holdings. Purchase at ¥1, target listing price ¥10 on bitcastle. Operated by webwise.",
    images: ["/images/wise-logo.png"],
    type: "website",
    url: "https://wise-protocol.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wise Coin (WISE) | Rank-Based Daily Dividend ERC-20 Token",
    description:
      "Wise Coin offers rank-based daily dividends from 0.1% to 0.5%. Purchase at ¥1, target ¥10 on bitcastle.",
    images: ["/images/wise-logo.png"],
  },
  alternates: {
    canonical: "https://wise-protocol.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_GA_ID &&
          process.env.NEXT_PUBLIC_GA_ID !== "G-XXXXXXXXXX" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                  `,
                }}
              />
            </>
          )}
      </head>
      <body className="bg-[#FAFAFA] text-[#1A1A2E] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
