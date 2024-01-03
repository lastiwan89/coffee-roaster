import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)"],
        serif: ["var(--font-fraunces)"],
      },
      colors: {
        cyan: {
          dark: "#0E8784",
          light: "#66D2CF",
        },
        grey: {
          dark: "#333D4B",
          light: "#83888F",
        },
        cream: {
          light: "#FEFCF7",
        },
        pale: {
          orange: "#FDD6BA",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
