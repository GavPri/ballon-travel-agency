/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      dark: "#07130d",
      amber: "#ffef62",
      yellow: "#ffd600",
      white: "#f7f2e6",
      grey: "#b1b1b1",
    },
    extend: {
      fontFamily: {
        M: ["Merienda", "sans-serif"],
        Fig: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
