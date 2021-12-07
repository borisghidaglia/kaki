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
    extend: {},
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
