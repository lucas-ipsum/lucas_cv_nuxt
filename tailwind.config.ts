import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{vue,js,ts}", "./components/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316'
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
