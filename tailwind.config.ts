import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        ink: {
          950: "#07070d",
          900: "#0d0d17",
          800: "#151522",
          700: "#20202f",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px -20px rgba(168,85,247,0.35), 0 10px 40px -10px rgba(244,114,182,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
