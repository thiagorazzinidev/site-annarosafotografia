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
        canvas: "#FAF8F5",
        surface: "#F2ECE4",
        "primary-dark": "#1C1816",
        muted: "#6B625B",
        accent: "#B86B4B",
        "accent-hover": "#9E5638",
        "accent-light": "#D48C6F",
        "accent-soft": "#F7EFE9",
        night: "#141110",
        "border-soft": "#E5DFD7",
        "footer-bg": "#141110",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
