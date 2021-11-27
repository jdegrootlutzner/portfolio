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
      height: {
        'paint': '850px',
        'paint-sm': '950px'
      },
      colors: {
        'off-black': '#685A4D',
        'polaroid-dark': '#BFBFBF',
        'generic-blue': '#0000FF',
        'generic-yellow': '#FFFF00',
        'black-2F': '#2F2F2F'

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
