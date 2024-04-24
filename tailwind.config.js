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
        light: '#FCFCFC',
        mid: '#F3F1EF',
        dark: '#B2927D',
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

