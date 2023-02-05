/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightBlue: "#EBF3F5",
        dullBlue1: "#7A9CA5",
        dullBlue2: "#5C8692",
        dullBlack: "#141414",
        dimWhite: "#555555",
        darkGreen: "#1E2C30",
        darkestGreen: "#111E22",
      },
      fontFamily: {
        playfair_display: ["Playfair Display", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "425px",
      ss: "620px",
      sm: "768px",
      lt: "1024px",
      md: "1060px",
      lg: "1300px",
      xl: "1700px",
    },
  },
  plugins: [],
};