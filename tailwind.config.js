/** @type {import('tailwindcss').Config} */
const RobotoMono = "Roboto Mono"

import { colors } from './src/styles/colors'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': colors.white,
      'error': colors.error,
      'black': colors.black,
      'accent': {
        light: colors.accent.light,
        mid: colors.accent.mid,
        dark: colors.accent.dark,
        contrast: colors.accent.contrast,
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

