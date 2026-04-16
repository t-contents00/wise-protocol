export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  name: string;
  items: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    name: "General",
    items: [
      {
        question: "What is WiseCoin?",
        answer:
          "WiseCoin (WISE) is an ERC-20 token that provides holders with rank-based daily dividends from 0.1% to 0.5% depending on holdings. It is operated by webwise and scheduled for listing on bitcastle exchange.",
      },
      {
        question: "Who operates WiseCoin?",
        answer:
          "WiseCoin is issued and operated by webwise (webwise-sg.com), a company that manages the token distribution, dividend payments, and exchange listing process.",
      },
      {
        question: "Is WiseCoin a registered security?",
        answer:
          "WiseCoin is a utility token issued under the ERC-20 standard and is not classified as a security under applicable securities laws. Please consult your local regulations.",
      },
      {
        question: "What blockchain is WISE built on?",
        answer:
          "WISE is built on the Ethereum blockchain as an ERC-20 token, ensuring compatibility with major wallets, exchanges, and decentralized applications.",
      },
      {
        question: "Where can I find the smart contract address?",
        answer:
          "The smart contract address will be published on the official website and verified on Etherscan prior to the bitcastle listing. Stay tuned for announcements.",
      },
    ],
  },
  {
    name: "Dividends",
    items: [
      {
        question: "How does the rank-based dividend system work?",
        answer:
          "WISE uses a 5-tier rank system based on your holdings: Regular (0.1%), Silver (0.2%), Gold (0.3%), Diamond (0.4%), and VIP (0.5%). The more tokens you hold, the higher your daily dividend rate.",
      },
      {
        question: "What are the rank thresholds?",
        answer:
          "Regular: 0-9,999,999 WISE (0.1%/day), Silver: 10,000,000+ (0.2%/day), Gold: 20,000,000+ (0.3%/day), Diamond: 30,000,000+ (0.4%/day), VIP: 40,000,000+ (0.5%/day).",
      },
      {
        question: "When are dividends paid?",
        answer:
          "Dividend payment schedules will be announced. Rates are calculated on a daily simple interest basis according to your rank.",
      },
      {
        question: "How do I receive my dividends?",
        answer:
          "Dividend distribution methods will be confirmed prior to the dividend system launch. Please check the official website for updates.",
      },
      {
        question: "Is the dividend rate guaranteed?",
        answer:
          "The rank-based rates are the current planned rates. All investments carry risk, and rates may be subject to change. Please review the disclaimer for full details.",
      },
    ],
  },
  {
    name: "Listing & Selling",
    items: [
      {
        question: "When will WISE list on bitcastle?",
        answer:
          "WISE is scheduled for listing on bitcastle in late December 2026. The exact date will be announced on the official website.",
      },
      {
        question: "What is the target listing price?",
        answer:
          "The target listing price is ¥10 per WISE token, representing a 10x return from the ¥1 sale price. This is a target value and is not guaranteed.",
      },
      {
        question: "How do I sell WISE after listing?",
        answer:
          "After listing on bitcastle, you can sell WISE tokens through the bitcastle exchange platform. You will need a bitcastle account to trade.",
      },
      {
        question: "What happens to unsold tokens?",
        answer:
          "Token allocation and handling of unsold tokens will be managed according to the project roadmap. Details will be published as they are finalized.",
      },
      {
        question: "What is the relationship between webwise and bitcastle?",
        answer:
          "webwise is the operator and issuer of WiseCoin. bitcastle is the exchange where WISE will be listed for public trading. They are separate entities collaborating on the listing.",
      },
    ],
  },
];

export const FAQ_PREVIEW = FAQ_CATEGORIES.flatMap((cat) => cat.items).slice(0, 5);
