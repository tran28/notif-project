/** @type {import('tailwindcss').Config} */
const RobotoMono = "Roboto Mono"

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FFFFFF',
      'error': '#FF0000',
      'accent': {
        aman: '#F3EEE7',
        gray:'#E0E0E0',
        dark: '#1D1D1B',
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

