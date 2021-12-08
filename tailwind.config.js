const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./dist/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'xs': '430px',
      ...defaultTheme.screens,
    },
    extend: {},
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
