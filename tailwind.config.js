module.exports = {
  purge: {
    content: ["*.html", "*/*.html"],
    safelist: ['btn',]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      trap: ['Trap']

    },
    extend: {
      colors: {
        'off-black': '#685A4D',
        'poloroid-dark': '#BFBFBF',
        'generic-blue': '#0000FF'

      },
      margin: {
        'nav': '38rem',
      },
      maxWidth: {
        'xxs': '14rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
