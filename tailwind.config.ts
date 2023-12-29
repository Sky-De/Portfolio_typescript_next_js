import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    // darkMode: "class",
    fontSize: {
    xs: ['12px', '16px'],
    sm: ['14px', '20px'],
    base: ['16px', '19.5px'],
    lg: ['18px', '21.94px'],
    xl: ['20px', '24.38px'],
    '2xl': ['24px', '29.26px'],
    '3xl': ['28px', '45px'],
    '4xl': ['34px', '52px'],
    '5xl': ['48px', '58px'],
    '8xl': ['96px', '106px'],
  },
    extend: {
      dropShadow: {
        light: ["0 0 5px rgba(0, 0, 0, 0.2)", "0 0 6px rgba(0, 0, 0, 0.1)"],
        dark: [
          "0 0 3px rgba(255, 255, 255, 0.2)",
          "0 0 4px rgba(255, 255, 255, 0.1)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        stepColor: "#F87C56",
        bg: {
          // primary: {
          //   light: "#ffffff",
          //   dark: "#1f1f1f",
          // },
          // secondary: {
          //   light: "#f3f6fc",
          //   dark: "#2d2f31",
          // },
            primary: {
              light: "#FFFFFF",
              dark: "#000000",
            },
          secondary: {
            light: "#e3e3e3",
            dark: "#131313",
          },
        },
        heading: {
          light: "#1f1f1f", // Black for light mode headings
          dark: "#FFFFFF", // White for dark mode headings
        },
        body: {
          // light: "#858585",
          light: "#636363",
          dark: "#d6d6d6", // Dark grey for dark mode body text
        },
        warning: "#FFB300", // Material Design warning color (amber)
        error: "#F44336", // Material Design error color (red)
        success: "#4CAF50", // Material Design success color (green)
      },
    },
  },
  plugins: [],
};
export default config;
