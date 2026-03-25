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
        accent: "#F59E0B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "PingFang SC", "Microsoft YaHei", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        "accent-soft": "0 0 24px -4px rgba(245, 158, 11, 0.35)",
        "accent-inner": "inset 0 0 0 1px rgba(245, 158, 11, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
