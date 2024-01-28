import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-barlow)"],
      serif: ["var(--font-fraunces)"],
    },
    fontSize: {
      150: ["150px", { lineHeight: "72px" }],
      96: ["96px", { lineHeight: "72px" }],
      72: ["72px", { lineHeight: "72px" }],
      48: ["48px", { lineHeight: "48px" }],
      40: ["40px", { lineHeight: "40px" }],
      32: ["32px", { lineHeight: "36px" }],
      28: ["28px", { lineHeight: "28px" }],
      24: ["24px", { lineHeight: "32px" }],
      16: ["16px", { lineHeight: "26px" }],
      15: ["15px", { lineHeight: "25px" }],
      12: ["12px", { lineHeight: "15px", letterSpacing: "0.923px" }],
    },
    extend: {
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
          dark: "##F4F1EB",
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
