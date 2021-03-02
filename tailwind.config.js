const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './views/**/*.ejs'
    ]
  },

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        mono: ['Merriweather', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        'alicia': '#EDF6F9',
        'cream': '#F5E6D1',
        'silk': '#FFDDD2',
        'silk-dark': '#fcc3b1',
        'middle-green': '#83C5BE',
        'middle-green-lite': '#D8EFEF',
        'ming': '#006D77',
        'ming-lite': '#09757A',
        'navy': '#18212F',

      },

      spacing: {
        128: '32rem',
      },

      fontSize: {
        'xxs': '0.5rem',
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
