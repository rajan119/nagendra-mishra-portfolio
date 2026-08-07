import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121820",
        ink2: "#1b232d",
        paper: "#eae3d0",
        paper2: "#f2ecdd",
        brass: "#c9a961",
        forest: "#4a6b52",
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        "stamp-spin": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "stamp-spin": "stamp-spin 50s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
