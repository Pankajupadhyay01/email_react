/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {

      colors: {
        mustard: "#fdcc0d",
        cyan: "#c6f3ea"
      },
    },
  },
  plugins: [],
}