import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          50: "rgba(88, 139, 139, 0.1)",
          100: "rgba(88, 139, 139, 0.2)",
          200: "rgba(88, 139, 139, 0.3)",
          300: "rgba(88, 139, 139, 0.4)",
          400: "rgba(88, 139, 139, 0.5)",
          500: "rgba(88, 139, 139, 0.6)",
          600: "rgba(88, 139, 139, 0.7)",
          700: "rgba(88, 139, 139, 0.8)",
          800: "rgba(88, 139, 139, 0.9)",
          900: "rgba(88, 139, 139, 1)",
        },
        black: '#2C2B2B'
      },
    },
  },
  plugins: [],
} satisfies Config;
