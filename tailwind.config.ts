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
        nav: "linear-gradient(360deg, rgba(254, 252, 247, 0.50) 0%, #FEFCF7 55.94%)",
      },
      borderRadius: {
        sm: "8px",
        md: "10px",
        lg: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
