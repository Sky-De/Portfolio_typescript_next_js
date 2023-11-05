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
        bg: {
          primary: {
            light: "#FFFFFF", // White for light mode
            dark: "#000000", // Black for dark mode
          },
          secondary: {
            light: "#ededed", // Black for light mode
            dark: "#131313", // White for dark mode
          },
        },
        heading: {
          light: "#000000", // Black for light mode headings
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
