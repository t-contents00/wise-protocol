import type { FAQCategory } from "@/data/faqData";

export const FAQ_JA: FAQCategory[] = [
  {
    name: "一般",
    items: [
      {
        question: "WiseCoinとは何ですか？",
        answer:
          "WiseCoin（WISE）はERC-20トークンで、保有量に応じて毎日0.1%〜0.5%のランク別配当を提供します。webwiseが運営し、bitcastle取引所への上場が予定されています。",
      },
      {
        question: "WiseCoinの運営者は誰ですか？",
        answer:
          "WiseCoinはwebwise（webwise-sg.com）が発行・運営しており、トークン配布、配当支払い、取引所上場プロセスを管理しています。",
      },
      {
        question: "WiseCoinは有価証券ですか？",
        answer:
          "WiseCoinはERC-20規格で発行されたユーティリティトークンであり、金融商品取引法上の有価証券には該当しません。お住まいの地域の規制をご確認ください。",
      },
      {
        question: "WISEはどのブロックチェーン上に構築されていますか？",
        answer:
          "WISEはERC-20トークンとしてEthereumブロックチェーン上に構築されており、主要なウォレット、取引所、分散型アプリケーションとの互換性を確保しています。",
      },
      {
        question: "スマートコントラクトアドレスはどこで確認できますか？",
        answer:
          "スマートコントラクトアドレスはbitcastle上場前に公式サイトで公開し、Etherscanで検証される予定です。発表をお待ちください。",
      },
    ],
  },
  {
    name: "配当",
    items: [
      {
        question: "ランク別配当の仕組みを教えてください。",
        answer:
          "WISEは保有量に基づく5段階のランク制を採用しています。Regular（0.1%）、Silver（0.2%）、Gold（0.3%）、Diamond（0.4%）、VIP（0.5%）の順に日次配当率が上がります。",
      },
      {
        question: "各ランクの必要保有量は？",
        answer:
          "Regular：〜9,999,999 WISE（0.1%/日）、Silver：10,000,000〜（0.2%/日）、Gold：20,000,000〜（0.3%/日）、Diamond：30,000,000〜（0.4%/日）、VIP：40,000,000〜（0.5%/日）。",
      },
      {
        question: "配当はいつ支払われますか？",
        answer:
          "配当支払いスケジュールは今後発表されます。ランクに応じた日次単利ベースで計算されます。",
      },
      {
        question: "配当はどのように受け取れますか？",
        answer:
          "配当の配布方法は配当システム稼働前に確定されます。公式サイトでの発表をお待ちください。",
      },
      {
        question: "配当率は保証されていますか？",
        answer:
          "ランク別レートは現在の計画レートです。すべての投資にはリスクが伴い、レートは変更される可能性があります。詳細は免責事項をご確認ください。",
      },
    ],
  },
  {
    name: "上場・売却",
    items: [
      {
        question: "WISEはいつbitcastleに上場しますか？",
        answer:
          "WISEは2026年12月下旬にbitcastleへの上場が予定されています。正確な日程は公式サイトで発表されます。",
      },
      {
        question: "上場目標価格はいくらですか？",
        answer:
          "上場目標価格は1WISEあたり¥10で、¥1の販売価格から10倍のリターンを想定しています。これは目標値であり、保証されるものではありません。",
      },
      {
        question: "上場後にWISEを売却するには？",
        answer:
          "bitcastleに上場後、bitcastle取引所プラットフォームを通じてWISEトークンを売却できます。取引にはbitcastleアカウントが必要です。",
      },
      {
        question: "売れ残ったトークンはどうなりますか？",
        answer:
          "トークンの割り当ておよび売れ残りトークンの取り扱いはプロジェクトロードマップに基づいて管理されます。詳細は確定次第公表されます。",
      },
      {
        question: "webwiseとbitcastleの関係は？",
        answer:
          "webwiseはWiseCoinの運営者・発行者です。bitcastleはWISEが上場される取引所です。両社は上場に向けて協力する別個の事業体です。",
      },
    ],
  },
];
