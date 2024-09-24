/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",],
  theme: {
    colors: {
      beige: '#e7dac7',
      dark: '#222222',
      light: '#fcfaf7',
      accent: '#00b4a2',
    },
    fontFamily: {
      dmSans: ['"DM Sans"', 'sans-serif'],
      roboto: ['"Roboto"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}