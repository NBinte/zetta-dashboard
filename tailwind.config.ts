import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0b1220",
          surface: "#101828",
          card: "#111827",
          mint: "#22d3a6",
          mintSoft: "#83f2d7",
          lilac: "#a78bfa",
          lilacSoft: "#c7b8ff",
          ink: "#e5e7eb",
          dim: "#9ca3af",
          line: "#1f2937",
          warn: "#fca5a5",
          ok: "#34d399",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(34,211,166,.25)",
        glow: "0 0 0 3px rgba(167,139,250,.25)",
      },
      borderRadius: { xl2: "1.25rem" },
      animation: { float: "float 6s ease-in-out infinite" },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
