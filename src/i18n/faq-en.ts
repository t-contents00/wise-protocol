import type { FAQCategory } from "@/data/faqData";

export const FAQ_EN: FAQCategory[] = [
  {
    name: "General",
    items: [
      {
        question: "What is WiseCoin?",
        answer:
          "WiseCoin (WISE) is an ERC-20 token that provides holders with a flat 0.3% daily dividend on their holdings. It is operated by webwise and scheduled for listing on bitcastle exchange.",
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
        question: "How does the dividend system work?",
        answer:
          "WISE pays a flat 0.3% daily dividend on your token holdings, calculated using simple interest. The rate applies equally to all holders regardless of the amount held.",
      },
      {
        question: "How is my daily dividend calculated?",
        answer:
          "Your daily dividend is your holdings multiplied by 0.3% (0.003). For example, 1,000,000 WISE earns 3,000 WISE per day. Calculations use simple interest on your original holdings.",
      },
      {
        question: "When are dividends paid?",
        answer:
          "Dividend payment schedules will be announced. Rates are calculated on a daily simple interest basis.",
      },
      {
        question: "How do I receive my dividends?",
        answer:
          "Dividend distribution methods will be confirmed prior to the dividend system launch. Please check the official website for updates.",
      },
      {
        question: "Is the dividend rate guaranteed?",
        answer:
          "The 0.3% daily rate is the current planned rate. All investments carry risk, and the rate may be subject to change. Please review the disclaimer for full details.",
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
