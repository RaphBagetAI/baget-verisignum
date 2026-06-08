import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4ECD8',
        'text-primary': '#4A3728',
        'text-accent': '#6B2D3E',
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)"],
        sans: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
export default config;
