# WiseCoin (WISE)

## プロジェクト概要
- WiseCoin (ERC-20トークン) の公式サイト
- wise-protocol.xyz で公開予定
- 運営者: webwise (webwise-sg.com)
- 上場予定: bitcastle / 2026年12月下旬

## 技術スタック
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Framer Motion / Recharts / tsparticles
- react-countup + react-intersection-observer

## 特徴（CROWNとの違い）
- ランク別配当制度（5段階: Regular 0.1% 〜 VIP 0.5%）
- ブルーテーマ（#2E6BE6 メイン / #060610 背景）
- 運営者: webwise（CROWNはideas）

## 配当ランク
| ランク | 必要保有量 | 日利 |
|-------|----------|------|
| Regular | 〜9,999,999 | 0.1% |
| Silver | 10,000,000〜 | 0.2% |
| Gold | 20,000,000〜 | 0.3% |
| Diamond | 30,000,000〜 | 0.4% |
| VIP | 40,000,000〜 | 0.5% |

## i18n（日英対応）
- URL構成: /en/... と /ja/...
- 翻訳ファイル: src/i18n/en.ts, src/i18n/ja.ts
- FAQ翻訳: src/i18n/faq-en.ts, src/i18n/faq-ja.ts

## ページ構成
- Home — Hero, Countdown, Stats, RankTable, Simulator, Features, Tokenomics, Roadmap, bitcastle, webwise, FAQ Preview, Contact
- About — Vision, Core Values, Team
- Tokenomics — 配分チャート, 配当メカニズム, シナリオ比較
- FAQ — 3カテゴリ（General, Dividends, Listing & Selling）

## トークン配分
- 配当準備金: 40% (3.2B)
- Public Sale: 30% (2.4B)
- 開発・運営: 18% (1.44B)
- Ecosystem: 12% (960M)

## チームメンバー
- Kevin Teo — CEO / Project Lead
- Priya Sharma — COO / Operations
- Marcus Chen — CTO / Blockchain Engineer

## デプロイ
- Apache サーバー（18.139.73.202:9150, ec2-user, SFTP）
- 静的エクスポート: npm run build → out/（trailingSlash: true）
- FileZillaで /var/www/html/wise-protocol/ にアップロード
- アップロード後はパーミッション775を再帰的に設定

## 注意事項
- サーバーの .htaccess は情シス管理 → 上書き禁止
- .env.local は Git に含まれない → 別PCでは手動作成が必要
- 画像は public/images/ に配置
