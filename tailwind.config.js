/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        M: ["Merienda", "sans-serif"],
        Fig: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
