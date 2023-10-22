/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    fontFamily: {
      inter: ["inter","serif","inherit"],
    },
    extend: {
      colors: {
        midnight: "#121063",
      },
    },
  },
  plugins: [],
}