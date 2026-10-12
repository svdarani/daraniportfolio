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
        sans: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        primary: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        heading: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        body: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        ui: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        debata: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        modernist: ["var(--font-primary)", '"General Sans"', "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-mono)", '"JetBrains Mono"', "monospace"],
      },
      colors: {
        brand: {
          bg: "#000000",
          secondary: "#0a0a0a",
          elevated: "#121212",
          card: "#121212",
          text: "#FFFFFF",
          secondaryText: "#A3A3A3",
          mutedText: "#737373",
          border: "rgba(255, 255, 255, 0.12)",
          strongBorder: "rgba(255, 255, 255, 0.22)",
          electricBlue: "#FFFFFF",
          brightBlue: "#E5E5E5",
          cyan: "#FFFFFF",
          aqua: "#F5F5F5",
          indigo: "#D4D4D4",
          violet: "#A3A3A3",
          purple: "#737373",
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
        "signature-gradient": "linear-gradient(135deg, #FFFFFF 0%, #D4D4D4 50%, #737373 100%)",
        "signature-gradient-hover": "linear-gradient(135deg, #FFFFFF 0%, #E5E5E5 50%, #A3A3A3 100%)",
      },
      boxShadow: {
        "blue-glow": "0 4px 25px rgba(255, 255, 255, 0.12)",
        "cyan-glow": "0 4px 25px rgba(255, 255, 255, 0.18)",
        "violet-glow": "0 4px 25px rgba(255, 255, 255, 0.1)",
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
