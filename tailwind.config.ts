import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F4ECD8',
        'brand-text': '#4A3728',
        'brand-accent': '#6B2D3E',
        'brand-accent-light': '#B69AA7',
        'brand-primary': '#6B2D3E',
        'brand-secondary': '#4A3728',
      },
      fontFamily: {
        serif: ['var(--font-libre-baskerville)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      backgroundImage: {
        'grain': `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='0.5' fill='%236B2D3E' fill-opacity='0.05' /%3E%3C/svg%3E")`,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
