/** @type {import('tailwindcss').Config} */
const RobotoMono = "Roboto Mono"

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'error': '#FF0000',
      'black': '#000000',
      'accent': {
        light: '#FCFCFC', //'#F3EEE7'
        mid: '#F3F1EF', //'#E0E0E0'
        dark: '#B2927D', //'#1D1D1B'
        contrast: '#9BB5CE',
      },

    },
    extend: {
      fontFamily: {
        robotomono: [RobotoMono]
      },
    },
  },
  plugins: [],
}

