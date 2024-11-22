/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dot-primary": {
          50: "#eeedff",
          100: "#e2dfff",
          200: "#ccc5ff",
          300: "#b0a2ff",
          400: "#9a7dfc",
          500: "#8d5ff5",
          600: "#8241ea",
          700: "#7233cf",
          800: "#5c2ca7",
          900: "#4c2b84",
          950: "#10091b",
        },
      },
    },
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
};
