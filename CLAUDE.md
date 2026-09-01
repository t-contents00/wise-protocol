# WiseCoin (WISE)

## プロジェクト概要
- WiseCoin (ERC-20トークン) の公式サイト
- wise-protocol.xyz で公開予定
- 運営者: webwise (webwise-sg.com)
- 上場予定: bitcastle / 2026年9月30日 11:00（JST）
- 上場告知: 2026年8月19日 11:00（JST）公開 → https://bitcastle.io/ja/notification/1-1071/new-listing-wise

## 技術スタック
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Framer Motion / Recharts / tsparticles
- react-countup + react-intersection-observer

## 特徴（CROWNとの違い）
- 一律配当制度（日利0.3%・単利、全保有者共通）
- ブルーテーマ（#2E6BE6 メイン / #060610 背景）
- 運営者: webwise（CROWNはideas）

## 配当
- 日利: 0.3%（一律・単利）
- 計算式: 保有量 × 0.003 = 日次配当（WISE）
- 全保有者に同一レートを適用（ランク制は廃止）

## i18n（日英対応）
- URL構成: /en/... と /ja/...
- 翻訳ファイル: src/i18n/en.ts, src/i18n/ja.ts
- FAQ翻訳: src/i18n/faq-en.ts, src/i18n/faq-ja.ts

## ページ構成
- Home — Hero, Countdown, Stats, Simulator, Features, Tokenomics, Roadmap, bitcastle, webwise, FAQ Preview, Contact
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

## ホワイトペーパー（本番公開版）
- 公開URL: wise-protocol.xyz/module/html/wise-whitepaper_jp/ と _en/（PDF.js viewer）
- PDF実体: サーバーの /module/pdfs/wise-whitepaper_{jp,en}.pdf（Git管理外・FileZillaでアップロード）
- 2026-08-17 上場日程を9/30に修正したパッチ版を docs/deploy/ に作成（gitignore済）
- パッチはオーバーレイ方式のため、旧テキスト(12月下旬)はテキストレイヤーに残存（表示上は見えない）

## 注意事項
- サーバーの .htaccess は情シス管理 → 上書き禁止
- .env.local は Git に含まれない → 別PCでは手動作成が必要
- 画像は public/images/ に配置
