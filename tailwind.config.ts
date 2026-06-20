import type { Config } from "tailwindcss";

/* ============================================================
   WORKERS COMPENSATION EXEMPTION — "Navy & Gold" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to navy blue (primary) / slate gray (secondary)
   / gold (accent).
   clay = navy blue · sage = slate gray · gold = gold
   cream = off-white · sand = light gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        sand: "#F3F2EE",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1B3D6E",
          dark: "#122D55",
          light: "#2A5090",
          50: "#EEF2F8",
          100: "#D4DDEF",
          200: "#A9BBDF",
          300: "#7E99CF",
          400: "#5377BF",
          500: "#2A5090",
          600: "#1B3D6E",
          700: "#122D55",
          800: "#0B1E3C",
          900: "#060F1E",
        },
        sage: {
          DEFAULT: "#4A5568",
          dark: "#374151",
          light: "#6B7280",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
        },
        gold: {
          DEFAULT: "#C9A84C",
          dark: "#A88A35",
          light: "#E0C070",
          50: "#FDF8EC",
          100: "#F9EED0",
          200: "#F3DDA1",
          300: "#EDCC72",
          400: "#E0C070",
          500: "#C9A84C",
          600: "#A88A35",
          700: "#876C28",
        },
        espresso: "#0F1A2E",
        cocoa: "#1E2D44",
        mocha: "#4A5568",
        adobe: "#E0DDD5",
        adobeDark: "#C8C4BA",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAFAF8 0%, #F3F2EE 40%, #EEF2F8 70%, #FAFAF8 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(27,61,110,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(74,85,104,0.07) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1B3D6E 0%, #2A5090 100%)",
        "sage-gradient": "linear-gradient(135deg, #4A5568 0%, #6B7280 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E0C070 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(18, 45, 85, 0.22), 0 4px 12px -6px rgba(15, 26, 46, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(18, 45, 85, 0.28), 0 10px 30px -10px rgba(15, 26, 46, 0.10)",
        card: "0 2px 8px -2px rgba(15, 26, 46, 0.06), 0 1px 3px -1px rgba(15, 26, 46, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(18, 45, 85, 0.24), 0 8px 20px -8px rgba(15, 26, 46, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(18, 45, 85, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
