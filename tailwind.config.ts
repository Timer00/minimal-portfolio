import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#292929',
        secondary: '#E4E2DD',
      },
    },
  },
  plugins: [],
} satisfies Config;
