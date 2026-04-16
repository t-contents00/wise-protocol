import type { Dictionary } from "./en";

const ja: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    tokenomics: "Tokenomics",
    faq: "FAQ",
  },
  hero: {
    eyebrow: "RANK-BASED DAILY REWARDS",
    badge: "✦ ERC-20 TOKEN | Listing on bitcastle",
    headline: "Smart Holding.",
    headlineHighlight: "賢く、増やす。",
    description:
      "WiseCoinは保有量に応じて毎日0.1%〜0.5%の配当を受け取れます。\n¥1で購入 — bitcastleでの上場目標価格は¥10。",
    ctaPrimary: "シミュレーターを試す",
  },
  countdown: {
    label: "Wise Listing on bitcastle",
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒",
    expected: "予定：2026年12月下旬",
  },
  stats: {
    dailyYield: "日利（ランク制）",
    salePrice: "トークン販売価格",
    targetPrice: "上場目標価格",
    totalSupply: "総発行量",
  },
  simulator: {
    label: "✦ 計算ツール",
    title: "配当シミュレーター",
    subtitle: "あなたのランクと収益を計算",
    inputLabel: "トークン数量（WISE）",
    principal: "保有量",
    dailyDividend: "日次配当",
    day30: "30日間合計",
    day90: "90日間合計",
    day180: "180日間合計",
    listingValue: "上場時の資産価値",
    total: "合計（180日配当＋上場価値）",
    disclaimer:
      "※ 計算はランク別単利に基づいています。¥10の上場価格は目標値であり、保証されるものではありません。表示値はWISEトークン単位です。すべての投資は自己責任で行ってください。",
  },
  features: {
    label: "✦ 特徴",
    title: "なぜWiseCoinなのか？",
    items: [
      {
        icon: "🏆",
        title: "ランク別配当",
        description:
          "保有量に応じて日利0.1%〜0.5%を獲得。多く持つほどランクと報酬がアップ。",
      },
      {
        icon: "📊",
        title: "bitcastle上場予定",
        description:
          "bitcastle取引所への上場が予定。¥1で購入 — 上場時目標¥10（10倍リターン）。",
      },
      {
        icon: "🔗",
        title: "ERC-20規格",
        description:
          "Ethereum互換のスマートコントラクトで構築。透明性が高く、安全で、オンチェーンで検証可能。",
      },
    ],
  },
  tokenomics: {
    label: "✦ トークン配分",
    title: "Tokenomics",
    dividendReserve: "配当準備金",
    publicSale: "一般販売",
    devOps: "開発・運営",
    ecosystem: "エコシステム",
  },
  roadmap: {
    label: "✦ Roadmap",
    title: "Roadmap",
    current: "現在",
    phases: [
      {
        title: "基盤構築",
        items: ["トークンセール開始", "公式サイト公開"],
      },
      {
        title: "成長",
        items: ["配当システム稼働", "保有者特典", "保有者レポート"],
      },
      {
        title: "拡大",
        items: [
          "bitcastle上場申請",
          "マーケティング強化",
          "流動性準備",
        ],
      },
      {
        title: "上場",
        items: [
          "bitcastle公式上場",
          "目標 ¥10/WISE",
          "次フェーズ発表",
        ],
      },
    ],
  },
  bitcastle: {
    description:
      "bitcastleは2022年設立のグローバル暗号資産取引所で、100カ国以上・累計100万人以上のユーザーにサービスを提供しています。WiseCoinはbitcastleへの上場が予定されており、上場後はWISEを自由に売買できるようになります。",
    benefits: [
      {
        title: "流動性確保",
        description: "上場後いつでも取引可能",
      },
      {
        title: "価格の透明性",
        description: "市場主導の価格形成",
      },
      {
        title: "取引所のセキュリティ",
        description: "取引所インフラによる保護",
      },
    ],
    cta: "bitcastleを見る →",
  },
  webwise: {
    label: "✦ 運営者",
    title: "webwiseについて",
    description:
      "webwiseはWiseCoinの運営者・発行者であり、トークン配布、配当支払い、bitcastleでの上場プロセスを管理しています。",
    cta: "webwise-sg.comを見る →",
  },
  faqSection: {
    label: "✦ よくある質問",
    title: "よくある質問",
    viewAll: "FAQをすべて見る →",
  },
  contact: {
    label: "✦ お問い合わせ",
    title: "お問い合わせ",
    name: "氏名",
    email: "メールアドレス",
    amount: "購入希望数量（WISE）",
    message: "メッセージ",
    submit: "送信する",
    toast: "お問い合わせを受け付けました。",
    error: "送信に失敗しました。時間をおいて再度お試しください。",
  },
  footer: {
    tagline: "ランク別配当 ERC-20トークン",
    copyright: "© 2026 webwise. All Rights Reserved.",
    disclaimerText:
      "本サービスへの参加は元本の返還を保証するものではありません。暗号資産への投資には重大なリスクが伴います。すべての投資判断はご自身の判断と責任で行ってください。上場価格および配当実績は将来の成果を保証するものではありません。WiseCoinはwebwiseが発行するトークンであり、金融商品取引法上の有価証券ではありません。",
  },
  aboutPage: {
    hero: "WiseCoinについて",
    vision: "Vision",
    visionText:
      "WiseCoinは、長期保有者により高いリターンを還元するために誕生しました。ランク別配当モデルとERC-20スマートコントラクトの安全性を組み合わせ、保有量を増やすほど収益が成長する仕組みを実現しています。",
    coreValues: "Core Values",
    values: [
      {
        title: "ランク報酬",
        description: "多く持つほど高配当、最大0.5%/日",
        icon: "🏆",
      },
      {
        title: "取引所上場",
        description: "bitcastleを通じた流動性",
        icon: "📊",
      },
      {
        title: "オンチェーンセキュリティ",
        description: "ERC-20検証済みスマートコントラクト",
        icon: "🔐",
      },
    ],
    team: "Team",
    members: [
      { name: "Kevin Teo", position: "CEO / Project Lead", image: "/images/team-kevin" },
      { name: "Priya Sharma", position: "COO / Operations", image: "/images/team-priya" },
      { name: "Marcus Chen", position: "CTO / Blockchain Engineer", image: "/images/team-marcus" },
    ],
    backToHome: "ホームに戻る",
    contactUs: "お問い合わせ",
  },
  tokenomicsPage: {
    hero: "Tokenomics",
    distribution: "トークン配分",
    dividendMechanism: "配当の仕組み",
    calculation: "計算方法",
    calculationText:
      "日次配当はランク別の単利で計算されます。計算式：保有量 × ランクレート = 日次配当（WISE）。",
    paymentSchedule: "支払いスケジュール",
    paymentScheduleText:
      "配当支払いスケジュールはプロジェクトの進行に合わせて発表されます。日次ベースの単利で計算されます。",
    howToReceive: "受け取り方法",
    howToReceiveText:
      "配当の配布方法はシステム稼働前に確定されます。公式サイトでの発表をお待ちください。",
    scenarioComparison: "Scenario",
    tokens: "トークン数",
    principalLabel: "保有量",
    dayDividend: "日間配当",
    listingValueLabel: "上場時価値",
    tokenInfo: {
      name: "名称",
      symbol: "シンボル",
      standard: "規格",
      totalSupply: "総発行量",
      dividendReserve: "配当準備金",
      salePrice: "販売価格",
      targetListing: "上場目標価格",
      exchange: "取引所",
    },
  },
  faqPage: {
    hero: "よくある質問",
    stillHaveQuestions: "まだ疑問がありますか？",
    contactUs: "お問い合わせ →",
    categories: {
      general: "一般",
      dividends: "配当",
      listing: "上場・売却",
    },
  },
};

export default ja;
