import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    //hero UI
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        darkBrown: "#4E2A1E",
        burgundy: "#962D1F",
        babyPink: "#FFDEEA",
        borderGrey: "#97979",
      },
    },
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1307px",
        "2xl": "1307px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "0rem",
        xl: "0rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [heroui()],
} satisfies Config;
