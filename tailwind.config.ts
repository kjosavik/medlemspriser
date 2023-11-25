import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mp-olive": "#37392eff",
        "mp-blue": "#19647eff",
        "mp-turquoise": "#28afb0ff",
        "mp-gray": "#ddcecdff",
        "mp-white": "#eee5e5ff",
      },
    },
  },
  plugins: [],
} satisfies Config;

