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
        "primary-dark": "#231E1B",
        muted: "#6E655F",
        accent: "#B86B4B",
        "accent-hover": "#9E5638",
        "accent-light": "#D48C6F",
        "accent-soft": "#F7EFE9",
        night: "#1D1917",
        "border-soft": "#E5DED5",
        "footer-bg": "#171312",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
