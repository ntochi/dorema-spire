const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        mono: ['Merriweather', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        'alicia': '#EDF6F9',
        'silk': '#FFDDD2',
        'middle-green': '#83C5BE',
        'ming': '#006D77'
      },

      spacing: {
        128: '32rem',
      },

      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
       }

    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('tailwindcss-textshadow')
  ],
}
