import type { Config } from 'tailwindcss'

export default {
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(18,56,0,1) 45%)',
      },
    },
  },
  plugins: [],
} satisfies Config

