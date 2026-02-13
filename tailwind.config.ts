import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { lg: "1024px", xl: "1200px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
