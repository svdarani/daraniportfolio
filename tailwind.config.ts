import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        debata: ["var(--font-debata)", "Debata", "Space Grotesk", "sans-serif"],
        modernist: ["var(--font-modernist)", "Modernist", "Sk-Modernist", "Inter", "sans-serif"],
        display: ["var(--font-debata)", "Debata", "Space Grotesk", "sans-serif"],
        heading: ["var(--font-debata)", "Debata", "Space Grotesk", "sans-serif"],
        body: ["var(--font-modernist)", "Modernist", "Sk-Modernist", "Inter", "sans-serif"],
        ui: ["var(--font-modernist)", "Modernist", "Sk-Modernist", "Inter", "sans-serif"],
        sans: ["var(--font-modernist)", "Modernist", "Sk-Modernist", "Inter", "sans-serif"],
        mono: ["var(--font-modernist-mono)", "Modernist Mono", "JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          bg: "#090A0F",
          secondary: "#11131A",
          elevated: "#151821",
          card: "#151821",
          text: "#F7F8FC",
          secondaryText: "#A5ADBD",
          mutedText: "#7A8294",
          border: "rgba(255, 255, 255, 0.08)",
          strongBorder: "rgba(255, 255, 255, 0.15)",
          electricBlue: "#326BFF",
          brightBlue: "#258CFF",
          cyan: "#24D9FF",
          aqua: "#22D3EE",
          indigo: "#5564FF",
          violet: "#654CFF",
          purple: "#7847FF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      backgroundImage: {
        "signature-gradient": "linear-gradient(135deg, #24D9FF 0%, #326BFF 50%, #654CFF 100%)",
        "signature-gradient-hover": "linear-gradient(135deg, #326BFF 0%, #5564FF 50%, #7847FF 100%)",
      },
      boxShadow: {
        "blue-glow": "0 0 35px rgba(50, 107, 255, 0.25)",
        "cyan-glow": "0 0 35px rgba(36, 217, 255, 0.25)",
        "violet-glow": "0 0 35px rgba(101, 76, 255, 0.25)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
