/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      background: "#222222",
      primary: "#FFA500",
      secundary: "#606060",
      letterDark: "#000000",
      letterLight: "#FFFFFF",
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}
