import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Dark Palette
        background: "#000000",
        foreground: "#ffffff",
        surface: {
          DEFAULT: "#0a0a0a",
          card: "#111111",
          elevated: "#161616",
          hover: "#181818",
          subtle: "#141414",
        },
        border: {
          DEFAULT: "#1e1e1e",
          subtle: "#222222",
          muted: "#1c1c1c",
          highlight: "#333333",
          glow: "rgba(0, 212, 255, 0.3)",
        },
        // Electric Blue to Cyan Gradient Tokens
        electric: {
          DEFAULT: "#00D4FF",
          blue: "#0066FF",
          cyan: "#00D4FF",
          teal: "#00F5D4",
          dark: "#003380",
          glow: "rgba(0, 212, 255, 0.4)",
        },
        // Solar Energy Accent Tokens
        solar: {
          DEFAULT: "#FFB703",
          gold: "#FFB703",
          amber: "#FB8500",
          dark: "#D46B08",
        },
        // Typography & Status Colors
        text: {
          primary: "#ffffff",
          secondary: "#a1a1aa",
          muted: "#71717a",
          accent: "#00D4FF",
        },
        // shadcn/ui Variable Compatibility Tokens
        card: {
          DEFAULT: "#111111",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#0a0a0a",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#0066FF",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#161616",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#141414",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#00D4FF",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        input: "#222222",
        ring: "#00D4FF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "gradient-electric": "linear-gradient(135deg, #0066FF 0%, #00D4FF 100%)",
        "gradient-electric-hover": "linear-gradient(135deg, #0052cc 0%, #00bce6 100%)",
        "gradient-electric-radial": "radial-gradient(circle, #0066FF 0%, #00D4FF 100%)",
        "gradient-solar": "linear-gradient(135deg, #FB8500 0%, #FFB703 100%)",
        "gradient-dark-card": "linear-gradient(180deg, rgba(25, 25, 25, 0.7) 0%, rgba(10, 10, 10, 0.9) 100%)",
        "gradient-cyan-line": "linear-gradient(90deg, transparent 0%, #00D4FF 50%, transparent 100%)",
        "glow-cyan": "radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 212, 255, 0.12), transparent 40%)",
        "radial-hero": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 102, 255, 0.2), rgba(0, 0, 0, 0))",
      },
      boxShadow: {
        "glow-cyan-sm": "0 0 15px rgba(0, 212, 255, 0.25)",
        "glow-cyan-md": "0 0 30px rgba(0, 212, 255, 0.35)",
        "glow-cyan-lg": "0 0 50px rgba(0, 212, 255, 0.50)",
        "glow-electric": "0 0 40px rgba(0, 102, 255, 0.30)",
        "glow-solar": "0 0 30px rgba(255, 183, 3, 0.25)",
        "card-subtle": "0 4px 20px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 0 0 1px #00D4FF, 0 8px 30px rgba(0, 212, 255, 0.15)",
      },
      borderRadius: {
        lg: "var(--radius, 0.75rem)",
        md: "calc(var(--radius, 0.75rem) - 2px)",
        sm: "calc(var(--radius, 0.75rem) - 4px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "aurora": "aurora 20s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10%) scale(1.08)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
