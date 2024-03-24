import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      colors: {
        "grey1": "#969BA0",
        "grey2": "#F3F2F7",
        "grey3": "#464255",
        "grey4": "#3E4954",
        "pink": "#FF5B5B",
        "grey5": "#A3A3A3",
        "grey6": "#626262",
        "success": "#32A659",
        "pending": "#FF9900",

        "white": "#FFFFFF",
        "primary": "#E81C4E",
        "primary-shade": "#E81C4E26",
        "primary-shade2": "#2D9CDB",

      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '4k': '1800px',
      // => @media (min-width: 640px) { ... }
    }
  },
  plugins: [],
};
export default config;
