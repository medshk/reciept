/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#594EF1",
        lightGray: "#9E9E9E",
        lighterGray: "#B4B4B4",
        darkBg: "#212121",
        shadow: "rgba(0, 0, 0, 0.44)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
