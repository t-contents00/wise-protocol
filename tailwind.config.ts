import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        "primary-green": "#4CAF7D",
        "light-green": "#5EBD8A",
        "dark-green": "#3D9B6B",
        "muted-green": "#6CC99A",
        "bitcastle-green": "#4CAF7D",
        "text-primary": "#1A1A2E",
        "text-secondary": "#64748B",
        border: "#E2E8F0",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(135deg, #3D9B6B, #4CAF7D, #5EBD8A)",
        "green-line": "linear-gradient(90deg, transparent, #4CAF7D, transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
