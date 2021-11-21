module.exports = {
  mode: 'jit',
  purge: [
    './dist/index.html',
  ],
  darkMode: false,
  theme: {
    extend: {
      height: {
        'tall': '30rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
