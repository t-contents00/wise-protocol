const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'docs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 60, autoFirstPage: false });
const stream = fs.createWriteStream(path.join(outDir, 'crown-whitepaper-en.pdf'));
doc.pipe(stream);

const GOLD = '#C49A45';
const DARK = '#0A0A0F';
const WHITE = '#FFFFFF';
const GRAY = '#999999';
const LIGHT = '#CCCCCC';
const W = 595.28;
const H = 841.89;
const M = 60;
const CW = W - M * 2;

let pageNum = 0;

function newPage() {
  doc.addPage();
  pageNum++;
  // Background
  doc.rect(0, 0, W, H).fill(DARK);
  // Gold accent
  doc.rect(0, 0, W, 3).fill(GOLD);
  // Footer (skip cover)
  if (pageNum > 1) {
    doc.fontSize(7).fillColor('#444444')
      .text('Crown Coin (CROWN) | Official Whitepaper v1.0', M, H - 35, { width: CW * 0.6, align: 'left' });
    doc.fontSize(7).fillColor('#444444')
      .text(String(pageNum), M, H - 35, { width: CW, align: 'right' });
    doc.moveTo(M, H - 45).lineTo(W - M, H - 45).strokeColor('#222222').lineWidth(0.5).stroke();
  }
  doc.y = M + 10;
}

function sectionTitle(num, text) {
  doc.fontSize(20).fillColor(GOLD).text(`${num}. ${text}`);
  doc.moveTo(M, doc.y + 3).lineTo(M + 80, doc.y + 3).strokeColor(GOLD).lineWidth(1.5).stroke();
  doc.moveDown(0.8);
}

function sub(text) {
  doc.fontSize(12).fillColor(WHITE).text(text);
  doc.moveDown(0.3);
}

function p(text) {
  doc.fontSize(9.5).fillColor(LIGHT).text(text, { lineGap: 3.5 });
  doc.moveDown(0.4);
}

function b(text) {
  doc.fontSize(9.5).fillColor(LIGHT).text(`    •   ${text}`, { lineGap: 3 });
}

function checkPage(needed) {
  if (doc.y > H - M - needed) newPage();
}

// ==========================================
// COVER PAGE
// ==========================================
newPage();
doc.save();
doc.rect(0, H - 3, W, 3).fill(GOLD);
doc.restore();

doc.fontSize(14).fillColor(GOLD).text('C R O W N', 0, 180, { width: W, align: 'center', characterSpacing: 8 });
doc.moveDown(1.5);
doc.fontSize(40).fillColor(WHITE).text('Crown Coin', 0, 240, { width: W, align: 'center' });
doc.fontSize(16).fillColor(GOLD).text('(CROWN)', 0, 290, { width: W, align: 'center' });
doc.moveDown(2);
doc.fontSize(14).fillColor(LIGHT).text('Official Whitepaper', 0, 360, { width: W, align: 'center' });
doc.moveDown(1);
doc.fontSize(11).fillColor(GOLD).text('0.3% Daily Dividend ERC-20 Token', 0, 400, { width: W, align: 'center' });
doc.moveTo(W / 2 - 60, 435).lineTo(W / 2 + 60, 435).strokeColor(GOLD).lineWidth(0.5).stroke();
doc.fontSize(9).fillColor(GRAY)
  .text('Version 1.0  |  April 2026', 0, 455, { width: W, align: 'center' })
  .text('crown-labs.org', 0, 470, { width: W, align: 'center' });
doc.fontSize(8).fillColor('#444444').text('(c) 2026 ideas. All Rights Reserved.', 0, H - 60, { width: W, align: 'center' });

// ==========================================
// TABLE OF CONTENTS
// ==========================================
newPage();
doc.fontSize(20).fillColor(GOLD).text('Table of Contents');
doc.moveTo(M, doc.y + 3).lineTo(M + 80, doc.y + 3).strokeColor(GOLD).lineWidth(1.5).stroke();
doc.moveDown(1.5);

const toc = [
  ['1', 'Executive Summary'],
  ['2', 'Introduction'],
  ['3', 'Token Overview'],
  ['4', 'Tokenomics'],
  ['5', 'Dividend Mechanism'],
  ['6', 'Exchange Listing'],
  ['7', 'Roadmap'],
  ['8', 'Team'],
  ['9', 'Risk Factors'],
  ['10', 'Legal Disclaimer'],
  ['11', 'Contact'],
];

toc.forEach(([num, title]) => {
  const y = doc.y;
  doc.fontSize(11).fillColor(GOLD).text(`${num}.`, M, y, { continued: false, width: 25 });
  doc.fontSize(11).fillColor(WHITE).text(title, M + 30, y);
  doc.moveDown(0.6);
});

// ==========================================
// 1. EXECUTIVE SUMMARY
// ==========================================
newPage();
sectionTitle('1', 'Executive Summary');

p('Crown Coin (CROWN) is an ERC-20 utility token designed to deliver consistent passive income to individual investors through a transparent daily dividend model.');
p('By combining the security of Ethereum-based smart contracts with a straightforward dividend structure, Crown Coin makes passive income accessible to both experienced crypto investors and newcomers seeking predictable daily returns.');

doc.moveDown(0.3);
sub('Key Highlights');
b('0.3% daily dividend paid in CROWN tokens (simple interest)');
b('Total supply: 8,000,000,000 CROWN');
b('Sale price: ¥1 per token');
b('Target listing price: ¥10 on bitcastle exchange');
b('Scheduled listing: Late December 2027');
b('Operated by ideas (ideasgrove-sg.com), based in Singapore');

doc.moveDown(0.5);
p('Crown Coin represents a new approach to token utility \u2014 one where holding tokens generates real, measurable daily returns rather than relying solely on speculative price appreciation. The project is built on three core pillars: daily income, exchange liquidity, and on-chain security.');
p('With a clear roadmap from token sale through exchange listing, and a dedicated dividend reserve comprising 37.5% of total supply, Crown Coin is structured for long-term sustainability and holder value creation.');

// ==========================================
// 2. INTRODUCTION
// ==========================================
newPage();
sectionTitle('2', 'Introduction');

sub('2.1 Market Context');
p('The cryptocurrency market has grown exponentially over the past decade, with thousands of tokens available across multiple blockchains. Yet many tokens lack clear utility or tangible returns for holders. Most rely solely on speculative price appreciation, leaving investors exposed to high volatility with no predictable income stream.');
p('Traditional financial instruments like bonds and dividend-paying stocks offer regular income to investors, but these are often inaccessible to global retail investors or come with significant barriers to entry. The crypto market has largely failed to replicate this income-generating model.');

doc.moveDown(0.3);
sub('2.2 The Crown Coin Solution');
p('Crown Coin addresses this gap by offering a dividend-paying ERC-20 token with a clear path to exchange listing. Rather than relying on speculation alone, CROWN holders receive 0.3% of their holdings daily as dividends, calculated using simple interest.');
p('This creates a predictable, transparent income model that bridges the gap between traditional dividend investments and the accessibility of cryptocurrency. Holders benefit from both daily dividend income and potential capital appreciation upon exchange listing.');

doc.moveDown(0.3);
sub('2.3 Project Vision');
p('Crown Coin was created to bring passive income to individual investors. By combining the reliability of ERC-20 smart contracts with a transparent dividend model, CROWN empowers holders to earn daily returns on their investment.');
p('The project is built on three pillars:');
b('Daily Income \u2014 0.3% every day, simple and transparent');
b('Exchange Liquidity \u2014 Scheduled listing on bitcastle for free trading');
b('On-Chain Security \u2014 ERC-20 verified smart contract on Ethereum');

// ==========================================
// 3. TOKEN OVERVIEW
// ==========================================
newPage();
sectionTitle('3', 'Token Overview');

sub('Token Specifications');
doc.moveDown(0.2);

const specs = [
  ['Property', 'Value'],
  ['Name', 'Crown Coin'],
  ['Symbol', 'CROWN'],
  ['Standard', 'ERC-20'],
  ['Blockchain', 'Ethereum'],
  ['Total Supply', '8,000,000,000'],
  ['Sale Price', '¥1 per token'],
  ['Target Listing Price', '¥10 per token'],
  ['Daily Dividend Rate', '0.3% (Simple Interest)'],
  ['Exchange', 'bitcastle'],
  ['Expected Listing', 'Late December 2027'],
  ['Operator', 'ideas (ideasgrove-sg.com)'],
];

specs.forEach((row, i) => {
  const y = doc.y;
  const colW = CW / 2;
  const h = 18;
  if (i === 0) {
    doc.save().rect(M, y, CW, h).fill('#1A1A25').restore();
    doc.fontSize(9).fillColor(GOLD).text(row[0], M + 8, y + 4, { width: colW - 16 });
    doc.fontSize(9).fillColor(GOLD).text(row[1], M + colW + 8, y + 4, { width: colW - 16 });
  } else {
    doc.save().rect(M, y, CW, h).fill(i % 2 === 0 ? '#111118' : '#0E0E16').restore();
    doc.fontSize(9).fillColor(GRAY).text(row[0], M + 8, y + 4, { width: colW - 16 });
    doc.fontSize(9).fillColor(WHITE).text(row[1], M + colW + 8, y + 4, { width: colW - 16 });
  }
  doc.y = y + h;
});
doc.moveDown(1);

sub('3.1 ERC-20 Standard');
p('CROWN is built on the Ethereum blockchain as an ERC-20 token, ensuring compatibility with major wallets (MetaMask, Trust Wallet, etc.), exchanges, and decentralized applications. The ERC-20 standard provides a proven, battle-tested framework for token operations.');

doc.moveDown(0.3);
sub('3.2 Smart Contract');
p('The smart contract address will be published on the official website and verified on Etherscan prior to the bitcastle listing, ensuring full transparency and on-chain verifiability. This allows any holder to independently verify the token contract and its operations.');

// ==========================================
// 4. TOKENOMICS
// ==========================================
newPage();
sectionTitle('4', 'Tokenomics');

doc.fontSize(11).fillColor(WHITE).text('Total Supply: 8,000,000,000 CROWN', { align: 'center' });
doc.moveDown(0.8);

const allocs = [
  { name: 'Dividend Reserve', pct: 37.5, tokens: '3,000,000,000', color: '#C49A45' },
  { name: 'Public Sale', pct: 30, tokens: '2,400,000,000', color: '#E8B86D' },
  { name: 'Development & Ops', pct: 20, tokens: '1,600,000,000', color: '#8B5E2A' },
  { name: 'Ecosystem', pct: 12.5, tokens: '1,000,000,000', color: '#A07935' },
];

allocs.forEach(a => {
  const y = doc.y;
  const barW = (a.pct / 100) * CW;
  doc.save().rect(M, y, barW, 22).fill(a.color).restore();
  doc.save().rect(M, y, CW, 22).lineWidth(0.5).strokeColor('#333333').stroke().restore();
  doc.fontSize(8.5).fillColor(WHITE).text(`  ${a.name} \u2014 ${a.pct}% (${a.tokens})`, M + 6, y + 6);
  doc.y = y + 28;
});

doc.moveDown(0.5);

sub('4.1 Dividend Reserve \u2014 37.5% (3B tokens)');
p('The largest allocation is dedicated to funding daily dividend payments. This reserve ensures long-term sustainability of the dividend program and demonstrates the project\'s commitment to returning value to holders.');

sub('4.2 Public Sale \u2014 30% (2.4B tokens)');
p('Tokens available for purchase at the sale price of ¥1 per token. The public sale provides broad access to CROWN for individual investors worldwide.');

sub('4.3 Development & Operations \u2014 20% (1.6B tokens)');
p('Allocated for ongoing development, infrastructure, operational costs, marketing, and team incentives. This fund supports the long-term growth and maintenance of the Crown Coin ecosystem.');

sub('4.4 Ecosystem \u2014 12.5% (1B tokens)');
p('Reserved for partnerships, ecosystem expansion, community initiatives, and strategic reserves. This allocation provides flexibility for future growth opportunities.');

// ==========================================
// 5. DIVIDEND MECHANISM
// ==========================================
newPage();
sectionTitle('5', 'Dividend Mechanism');

sub('5.1 Overview');
p('Crown Coin\'s core value proposition is its 0.3% daily dividend, calculated using simple interest on each holder\'s token balance. This mechanism rewards long-term holding and provides predictable returns.');

sub('5.2 Calculation Method');
doc.moveDown(0.2);

// Formula box
const fY = doc.y;
doc.save().rect(M, fY, CW, 36).fill('#1A1A25').restore();
doc.save().rect(M, fY, CW, 36).lineWidth(1).strokeColor(GOLD).stroke().restore();
doc.fontSize(13).fillColor(GOLD).text('Holdings  x  0.003  =  Daily Dividend (CROWN)', M, fY + 10, { width: CW, align: 'center' });
doc.y = fY + 45;

p('The dividend is calculated based on the number of CROWN tokens held. Using simple interest means the rate applies to the original holdings, not compounded amounts.');

doc.moveDown(0.3);
sub('5.3 Scenario Simulations');
doc.moveDown(0.2);

const headers = ['', '100K CROWN', '1M CROWN', '10M CROWN'];
const rows = [
  ['Daily Dividend', '300', '3,000', '30,000'],
  ['30-Day Total', '9,000', '90,000', '900,000'],
  ['90-Day Total', '27,000', '270,000', '2,700,000'],
  ['180-Day Total', '54,000', '540,000', '5,400,000'],
  ['Listing Value (x10)', '1,000,000', '10,000,000', '100,000,000'],
  ['Total (180d+Listing)', '1,054,000', '10,540,000', '105,400,000'],
];

// Header row
const colW = CW / 4;
let tY = doc.y;
doc.save().rect(M, tY, CW, 18).fill('#1A1A25').restore();
headers.forEach((h, j) => {
  doc.fontSize(8).fillColor(GOLD).text(h, M + colW * j + 4, tY + 4, { width: colW - 8, align: j === 0 ? 'left' : 'right' });
});
doc.y = tY + 18;

rows.forEach((row, i) => {
  tY = doc.y;
  const isLast = i === rows.length - 1;
  const bg = isLast ? '#1A1510' : (i % 2 === 0 ? '#111118' : '#0E0E16');
  doc.save().rect(M, tY, CW, 16).fill(bg).restore();
  row.forEach((cell, j) => {
    const color = j === 0 ? GRAY : (isLast ? GOLD : WHITE);
    doc.fontSize(8).fillColor(color).text(cell, M + colW * j + 4, tY + 3, { width: colW - 8, align: j === 0 ? 'left' : 'right' });
  });
  doc.y = tY + 16;
});

doc.moveDown(0.5);
p('All values shown in CROWN tokens. The listing value assumes the target price and is not guaranteed.');

checkPage(200);
sub('5.4 Payment Schedule');
p('Dividend payment schedules will be announced as the project progresses. The rate is calculated on a daily basis using simple interest.');

sub('5.5 Distribution Method');
p('Dividend distribution methods will be confirmed prior to the system launch. Updates will be published on the official website at crown-labs.org.');

sub('5.6 Important Notes');
b('The 0.3% daily rate is the current planned rate');
b('All investments carry risk and rates may be subject to change');
b('Values shown are projections and not guaranteed');
b('The ¥10 listing price is a target value and is not guaranteed');

// ==========================================
// 6. EXCHANGE LISTING
// ==========================================
newPage();
sectionTitle('6', 'Exchange Listing');

sub('6.1 bitcastle Overview');
p('bitcastle is a global cryptocurrency exchange founded in 2022, serving over 1,000,000 users across 100+ countries. Crown Coin is scheduled for listing on bitcastle, after which CROWN can be freely traded by anyone.');

sub('6.2 Listing Schedule');
p('CROWN is scheduled for listing on bitcastle in late December 2027. The exact date will be announced on the official website.');

sub('6.3 Benefits of Exchange Listing');
b('Liquidity Assured \u2014 Trade anytime after listing with market-driven pricing');
b('Price Transparency \u2014 Open market determines fair value');
b('Exchange Security \u2014 Protected by bitcastle\'s exchange infrastructure');

doc.moveDown(0.3);
sub('6.4 Post-Listing Trading');
p('After listing on bitcastle, holders can freely buy and sell CROWN tokens through the exchange platform. A bitcastle account will be required to trade.');

sub('6.5 Relationship Between ideas and bitcastle');
p('ideas is the operator and issuer of Crown Coin. bitcastle is the exchange where CROWN will be listed for public trading. They are separate entities collaborating on the listing process.');

// ==========================================
// 7. ROADMAP
// ==========================================
newPage();
sectionTitle('7', 'Roadmap');
doc.moveDown(0.5);

const phases = [
  { title: 'Phase 1: Foundation', status: '(Current)', items: ['Token Sale Launch', 'Official Site Live'], active: true },
  { title: 'Phase 2: Growth', status: '', items: ['Dividend System Live', 'Holder Benefits Program', 'Holder Reports'], active: false },
  { title: 'Phase 3: Expansion', status: '', items: ['bitcastle Listing Application', 'Marketing Push', 'Liquidity Preparation'], active: false },
  { title: 'Phase 4: Listing', status: '', items: ['Official bitcastle Listing', 'Target ¥10/CROWN', 'Next Phase Announcement'], active: false },
];

phases.forEach((phase, i) => {
  const y = doc.y;
  const boxH = 24 + phase.items.length * 16;
  const borderColor = phase.active ? GOLD : '#333333';

  doc.save().rect(M, y, CW, boxH).lineWidth(1).strokeColor(borderColor).stroke().restore();
  if (phase.active) {
    doc.rect(M + 1, y + 1, CW - 2, boxH - 2).fill('#15120D');
  }

  doc.fontSize(12).fillColor(phase.active ? GOLD : WHITE)
    .text(`${phase.title}  ${phase.status}`, M + 14, y + 6);

  phase.items.forEach((item, j) => {
    doc.fontSize(9).fillColor(LIGHT).text(`•   ${item}`, M + 28, y + 24 + j * 16);
  });

  doc.y = y + boxH + 12;

  if (i < phases.length - 1) {
    const midX = M + CW / 2;
    doc.save();
    doc.moveTo(midX, doc.y - 8).lineTo(midX, doc.y + 2).strokeColor('#333333').lineWidth(1).stroke();
    doc.restore();
    doc.y += 8;
  }
});

// ==========================================
// 8. TEAM
// ==========================================
newPage();
sectionTitle('8', 'Team');

p('Crown Coin is developed and operated by ideas, a Singapore-based company specializing in digital asset management and token operations.');
doc.moveDown(0.3);

const team = [
  { name: 'Rajesh Nair', role: 'CEO / Project Lead', desc: 'Leads overall project strategy, business development, and stakeholder relations. Responsible for the vision and execution of the Crown Coin ecosystem.' },
  { name: 'Aisha Tan', role: 'COO / Operations', desc: 'Oversees day-to-day operations, token distribution logistics, dividend payment systems, and regulatory compliance.' },
  { name: 'Daniel Lim', role: 'CTO / Blockchain Engineer', desc: 'Leads technical development including smart contract architecture, security auditing, and blockchain infrastructure.' },
];

team.forEach(member => {
  const y = doc.y;
  doc.save().rect(M, y, CW, 55).lineWidth(0.5).strokeColor('#333333').stroke().restore();
  doc.fontSize(12).fillColor(WHITE).text(member.name, M + 12, y + 8);
  doc.fontSize(9).fillColor(GOLD).text(member.role, M + 12, y + 23);
  doc.fontSize(8.5).fillColor(GRAY).text(member.desc, M + 12, y + 36, { width: CW - 24 });
  doc.y = y + 62;
});

doc.moveDown(0.5);
sub('Operator: ideas');
p('Website: ideasgrove-sg.com');
p('ideas is the operator and issuer of Crown Coin, managing token distribution, dividend payments, and the exchange listing process on bitcastle.');

// ==========================================
// 9. RISK FACTORS
// ==========================================
newPage();
sectionTitle('9', 'Risk Factors');

p('Investing in Crown Coin involves risks. Prospective investors should carefully consider the following risk factors before making any investment decisions.');
doc.moveDown(0.3);

const risks = [
  ['9.1 Market Risk', 'Cryptocurrency markets are highly volatile. The value of CROWN tokens may fluctuate significantly, and the target listing price of ¥10 is not guaranteed. Past performance does not indicate future results.'],
  ['9.2 Regulatory Risk', 'Cryptocurrency regulations vary by jurisdiction and are subject to change. Changes in regulatory frameworks could impact the operation, trading, or value of CROWN tokens.'],
  ['9.3 Technology Risk', 'While ERC-20 is a proven standard, smart contracts may contain vulnerabilities. The Ethereum network may experience congestion, high gas fees, or other technical issues.'],
  ['9.4 Liquidity Risk', 'Prior to the bitcastle listing, CROWN tokens may have limited liquidity. Even after listing, trading volume and market depth may vary.'],
  ['9.5 Dividend Risk', 'The 0.3% daily dividend rate is the current planned rate and is not guaranteed. The rate may be adjusted based on market conditions or reserve levels.'],
  ['9.6 Operational Risk', 'The success of Crown Coin depends on the continued operation of ideas as the token operator. Any disruption could impact dividend payments or the listing process.'],
];

risks.forEach(([title, text]) => {
  checkPage(80);
  sub(title);
  p(text);
});

// ==========================================
// 10. LEGAL DISCLAIMER
// ==========================================
newPage();
sectionTitle('10', 'Legal Disclaimer');

const disclaimers = [
  'Crown Coin (CROWN) is a utility token issued under the ERC-20 standard. It is not classified as a security under applicable securities laws, including but not limited to the Financial Instruments and Exchange Act of Japan.',
  'Participation in this service does not guarantee the return of principal. Investing in cryptocurrency involves significant risk. All investment decisions are made at your own discretion and risk.',
  'The information contained in this whitepaper is provided for informational purposes only and does not constitute financial advice, investment advice, trading advice, or any other sort of advice.',
  'You should conduct your own due diligence and consult with a qualified financial advisor before making any investment decisions.',
  'The listing price of ¥10 per CROWN token is a target value and is not guaranteed. Dividend performance does not guarantee future results. The 0.3% daily dividend rate is the current planned rate and may be subject to change.',
  'Crown Coin is issued by ideas. ideas makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained in this document.',
  'This whitepaper may be updated from time to time. The most current version will be available on the official website at crown-labs.org.',
];

disclaimers.forEach(text => {
  checkPage(60);
  p(text);
  doc.moveDown(0.2);
});

// ==========================================
// 11. CONTACT
// ==========================================
newPage();
sectionTitle('11', 'Contact');
doc.moveDown(2);

doc.fontSize(14).fillColor(GOLD).text('C R O W N', 0, doc.y, { width: W, align: 'center', characterSpacing: 6 });
doc.moveDown(2);

doc.fontSize(13).fillColor(WHITE).text('Official Website', 0, doc.y, { width: W, align: 'center' });
doc.moveDown(0.3);
doc.fontSize(11).fillColor(GOLD).text('https://crown-labs.org', 0, doc.y, { width: W, align: 'center' });
doc.moveDown(1.5);

doc.fontSize(13).fillColor(WHITE).text('Operator', 0, doc.y, { width: W, align: 'center' });
doc.moveDown(0.3);
doc.fontSize(11).fillColor(GOLD).text('ideas \u2014 ideasgrove-sg.com', 0, doc.y, { width: W, align: 'center' });
doc.moveDown(2);

doc.fontSize(9).fillColor(GRAY).text('For inquiries, please use the contact form on the official website.', 0, doc.y, { width: W, align: 'center' });

doc.moveDown(3);
doc.moveTo(W / 2 - 60, doc.y).lineTo(W / 2 + 60, doc.y).strokeColor(GOLD).lineWidth(0.5).stroke();
doc.moveDown(0.8);

doc.fontSize(8).fillColor(GRAY).text('(c) 2026 ideas. All Rights Reserved.', 0, doc.y, { width: W, align: 'center' });

doc.end();

stream.on('finish', () => {
  console.log('English whitepaper created successfully.');
  console.log(`Pages: ${pageNum}`);
  console.log(`File: ${path.join(outDir, 'crown-whitepaper-en.pdf')}`);
});
