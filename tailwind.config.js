/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#cad2c5",
        goblinGreen: "#84a98c",
        forestGreen: "#52796f",
        darkGreen: "#354f52",
        blackGreen: "#2f3e46",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
